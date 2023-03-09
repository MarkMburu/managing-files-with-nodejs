const {readFile} = require('fs');
const {convertCsv} = require("./csv.parse");

readFile("./data/pulitzer-circulation-data.cs","utf8",(err,data)=>{
    if(err){
        console.log(`There was a problem with the file ${err}`);
        return
    }
    const vals = convertCsv(data)
    console.table(vals)
})