const { dest, src } = require("gulp")
const pug = require("gulp-pug")
const { templates, tmp, dist, scripts, styles } = require("../config/paths")
const { pugConfig } = require("../config/pluginsConfig")
const notify = require("gulp-notify")
const gutil = require("gulp-util")
const plumber = require("gulp-plumber")
const { plumberConfig } = require("../config/pluginsConfig")
const browserSync = require('browser-sync').create()
const gulpif = require("gulp-if")
const { isDev } = require("../utils/env")
const inject = require("gulp-inject")

const html = async (done) => {
  await new Promise((res,rej) => {

    src(templates.srcHTML)
      .pipe(plumber(plumberConfig))
      .pipe(pug(pugConfig))
      .pipe(
        inject(
          gulpif(
            isDev,
            src([scripts.injectTmpJs, styles.injectTmpCss], { read: false }),
            src([scripts.injectDistJs, styles.injectDistCss], { read: false })
          ),
          {
            ignorePath: isDev ? tmp : dist,
            addRootSlash: false
          }
        )
      )
      .pipe(
        notify({
          message: gutil.colors.green(
            "✔️  Template files were successfully compiled @ <%= options.date %>"
          ),
          templateOptions: {
            date: new Date().toLocaleString()
          }
        })
      )
      .pipe(gulpif(isDev, dest(tmp), dest(dist)))
      .pipe(browserSync.stream())
      .on("end", res)
    done()
  })
}

module.exports = {
  html
}
