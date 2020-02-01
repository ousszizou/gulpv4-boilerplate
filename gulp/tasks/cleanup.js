const del = require("del")
const { delConfig } = require("../config/pluginsConfig")
const notifier = require("node-notifier")
const gutil = require("gulp-util")

const cleanup = async done => {
  const deletedPaths = await del(delConfig, {dryRun: true})
  notifier.notify("Folders were successfully deleted ✔️")
  
  gutil.log(
    gutil.colors.bgRed("⚠️  directories that would be deleted:\n"),
    "✔️ ",
    gutil.colors.red(deletedPaths.join("\n"))
  )
  done()
}

module.exports = {
  cleanup
}
