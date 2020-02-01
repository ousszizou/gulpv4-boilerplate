const { watch, series } = require("gulp")
const { styles, scripts, templates } = require("../config/paths")
const { html } = require("./templates")
const { css } = require("./styles")
const { js } = require("./scripts")
const { reload } = require("./server")

const watcher = done => {

  watch(templates.srcHTML, series(html, reload))
  watch(styles.srcCSS, series(css, reload))
  watch(scripts.srcJS, series(js, reload))
  done()
}

module.exports = {
  watcher
}
