const { series, task } = require("gulp")
const { starterMsg } = require("./messages")
const { cleanup } = require("./cleanup")
const { build } = require("./build")

const prod = task("prod", series(starterMsg, cleanup, build))

module.exports = {
  prod
}
