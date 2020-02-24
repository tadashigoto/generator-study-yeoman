// ejs1.ejsにデータを流し込む
const fs = require("fs");
const ejs = require("ejs");
var json = {
  "name": "予約マスタ",
  "tableName": "reserve",
  "tableTapple": [
      { "exName" : "氏名",
       "inName" : "name"
      },
      { "exName" : "氏名2",
       "inName" : "name2"
      },
  ]
}
ejs.renderFile('./ejs1.ejs', json, function(err,html){
    console.log(html);
    const file = './out.html';
    fs.writeFile(file, html, 'utf8', (err) => {});
});