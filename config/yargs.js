const argv = require("yargs")
  .options("n", {
    alias: "number",
    type: "number",
    demandOption: true,
  })
  .options("l", {
    alias: "list",
    type: "boolean",
    default: false
  })
  .options("t", {
    alias: "to",
    type: "number",
    default: 10
  })
  .check((argv, options) => {
    if (isNaN(argv.n)) {
      throw "the number have to be a number";
    }
    if (isNaN(argv.t)) {
      throw "To have to be a number";
    }
    return true;
  }).argv;

  module.exports = argv;