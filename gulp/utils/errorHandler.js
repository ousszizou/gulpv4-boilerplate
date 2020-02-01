const gutil = require("gulp-util")
const notifier = require("node-notifier")

function errorHandler(err) {
  gutil.log(gutil.colors.red(err.message))
  notifier.notify({
    title: "⚠️ Gulp error in " + err.plugin,
    message: err.message
  })
  gutil.beep()
}

module.exports = {
  errorHandler
}