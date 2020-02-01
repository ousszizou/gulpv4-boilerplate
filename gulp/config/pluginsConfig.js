const { dist, tmp } = require("../config/paths")
const errorHandler = require("../utils/errorHandler")
const imagemin = require("gulp-imagemin")
const gulpif = require("gulp-if")
const { isDev } = require("../utils/env")

const delConfig = [gulpif(isDev, tmp, dist)]
const pugConfig = { pretty: true }
const plumberConfig = errorHandler
const browserSyncConfig = {
  server: {
    baseDir: tmp
  }
}
const imageminConfig = {
  images: [
    imagemin.mozjpeg({
      quality: 75,
      progressive: true
    }),
    imagemin.optipng({
      optimizationLevel: 5
    }),
    imagemin.svgo({
      plugins: [
        {
          removeViewBox: false
        }
      ]
    })
  ]
}

module.exports = {
  delConfig,
  pugConfig,
  plumberConfig,
  browserSyncConfig,
  imageminConfig
}
