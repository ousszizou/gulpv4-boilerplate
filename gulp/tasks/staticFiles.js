const notifier = require("node-notifier")
const notify = require("gulp-notify")
const gutil = require("gulp-util")
const plumber = require("gulp-plumber")
const { dest, src } = require("gulp")
const { images } = require("../config/paths")
const { plumberConfig } = require("../config/pluginsConfig")
const imagemin = require("gulp-imagemin")
const gulpif = require("gulp-if")
const { isDev } = require("../utils/env")
const { imageminConfig } = require("../config/pluginsConfig")

const staticFiles = done => {
  src(images.srcImgs)
    .pipe(plumber(plumberConfig))
    .pipe(gulpif(!isDev, imagemin(imageminConfig.images, { verbose: true })))
    .pipe(gulpif(isDev, dest(images.tmpImgs), dest(images.distImgs)))
  done()
}

module.exports = {
  staticFiles
}
