const {readFileSync} = require('fs');
const {convertCsv} = require("./csv.parse");

try {
        const data =readFileSync("./data/pulitzer-circulation-data.cs","utf8")
        const vals = convertCsv(data)
        console.table(vals)

} catch (error) {
    console.log(`There was a problem with the file ${error}`);
}