const { series, parallel, task } = require("gulp")
const { starterMsg } = require("./messages")
const { cleanup } = require("./cleanup")
const { server } = require("./server")
const { watcher } = require("./watch")
const { build } = require("./build")

task("serving", parallel(server, watcher))

const develop = task("develop", series(starterMsg, cleanup, build, "serving"))

module.exports = {
  develop
}
