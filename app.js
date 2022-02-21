require("colors");
const { multiplyTable } = require("./utils/multiply");
const argv = require("./config/yargs");

console.clear();

multiplyTable(argv.number, argv.to, argv.list)
  .then((fileName) => console.log(`${fileName} was created succesfully`.green))
  .catch((error) => console.log(error));
