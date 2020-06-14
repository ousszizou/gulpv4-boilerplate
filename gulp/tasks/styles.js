const { dest, src } = require("gulp")
const sass = require("gulp-sass")
const plumber = require("gulp-plumber")
sass.compiler = require("node-sass")
const { styles } = require("../config/paths")
const { plumberConfig } = require("../config/pluginsConfig")
const gutil = require("gulp-util")
const notify = require("gulp-notify")
const browserSync = require('browser-sync').create()
const gulpif = require("gulp-if")
const { isDev } = require("../utils/env")
const cleanCSS = require("gulp-clean-css")
const concat = require('gulp-concat')

const css = async (done) => {
  await new Promise((res, rej) => {
    src([styles.srcCSS, "node_modules/bootstrap/dist/css/bootstrap.min.css"])
      .pipe(plumber(plumberConfig))
      .pipe(sass())
      .pipe(
        notify({
          message: gutil.colors.green(
            "✔️  style files were successfully compiled @ <%= options.date %>"
          ),
          templateOptions: {
            date: new Date().toLocaleString()
          }
        }),
        gutil.colors.green(
          "✔️  style files were successfully compiled @ <%= options.date %>"
        )
      )
      .pipe(gulpif(!isDev, cleanCSS()))
      .pipe(gulpif(!isDev, concat("main.min.css"), concat("main.css")))
      .pipe(gulpif(isDev, dest(styles.tmpCSS), dest(styles.distCSS)))
      .pipe(browserSync.stream())
      .on("end", res)
    done()
  })
}

module.exports = {
  css
}
