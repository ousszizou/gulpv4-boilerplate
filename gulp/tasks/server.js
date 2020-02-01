const browserSync = require("browser-sync").create()
const { browserSyncConfig } = require("../config/pluginsConfig")
// const { dest, src, watch, series, parallel } = require("gulp")
// const { styles, scripts, templates } = require("../config/paths")
// const { html } = require("./templates")
// const { css } = require("./styles")
// const { js } = require("./scripts")

const server = done => {

  browserSync.init(browserSyncConfig)
  done()
}

const reload = done => {

  browserSync.reload()
  done()
}

module.exports = {
  server,
  reload
}
