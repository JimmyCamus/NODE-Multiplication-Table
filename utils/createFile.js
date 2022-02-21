const fs = require("fs");

const createFile = (path, data) => {
  fs.writeFileSync(path, data);
};

module.exports = {
  createFile,
};
