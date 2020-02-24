// ejs1.ejsにデータを流し込む
if (process.argv.length<5){
    console.log("usage:node test4-ejs.js ejsfile jsondata outfile");
    return(-1);
}

ejs_file = process.argv[2];
json_file = process.argv[3];
out_file = process.argv[4];

const fs = require("fs");
const ejs = require("ejs");
json_data = JSON.parse(fs.readFileSync(json_file, 'utf8'));

ejs.renderFile(ejs_file, json_data , (err,html) =>
    fs.writeFile(out_file, html, 'utf8', err => {})
);