const { createFile } = require("./createFile");

const multiplyTable = async (number = 1, limit = 10, list) => {
  try {
    let table = "";
    const fileName = `table-${number}.txt`;

    for (let i = 1; i <= limit; i++) {
      table += `${number} x ${i} = ${number * i}\n`;
    }

    createFile(`./out/${fileName}`, table);
    list ? console.log(table) : null;
    return fileName;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  multiplyTable,
};
