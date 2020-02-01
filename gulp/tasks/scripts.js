const { plumberConfig } = require("../config/pluginsConfig")
const browserSync = require("browser-sync").create()
const uglify = require("gulp-uglify-es").default
const { scripts } = require("../config/paths")
const { isDev } = require("../utils/env")
const plumber = require("gulp-plumber")
const { dest, src } = require("gulp")
const notify = require("gulp-notify")
const babel = require("gulp-babel")
const gutil = require("gulp-util")
const gulpif = require("gulp-if")
const concat = require("gulp-concat")

const js = async (done) => {
  await new Promise((res,rej) => {

    src(scripts.srcJS)
      .pipe(plumber(plumberConfig))
      .pipe(
        babel({
          presets: ["@babel/preset-env"]
        })
      )
      .pipe(
        notify({
          message: gutil.colors.green(
            "✔️  script files were successfully compiled @ <%= options.date %>"
          ),
          templateOptions: {
            date: new Date().toLocaleString()
          }
        }),
        gutil.colors.green(
          "✔️  script files were successfully compiled @ <%= options.date %>"
        )
      )
      .pipe(gulpif(!isDev, uglify()))
      .pipe(gulpif(!isDev, concat("main.min.js"), concat("main.js")))
      .pipe(gulpif(isDev, dest(scripts.tmpJS), dest(scripts.distJS)))
      .pipe(browserSync.stream())
      .on("end", res)
    done()
  })
}

module.exports = {
  js
}
