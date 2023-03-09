const fs = require('fs');
const {promisify} = require('util');
const {convertCsv} = require("./csv.parse");

const readFile = promisify(fs.readFile);
// readFile("./data/pulitzer-circulation-data.csv","utf8")
//   .then((data) => console.table(convertCsv(data)))
//   .catch((error)=> console.log(`There was a problem with the file ${error}`))

  const read = async()=>{
    const data = await readFile("./data/pulitzer-circulation-data.csv","utf8")
    console.table(convertCsv(data))
  }
  read()