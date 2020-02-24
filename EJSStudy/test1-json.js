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
json.tableTapple.push({
    "exName" : "氏名3",
    "inName" : "name3"
    });
console.log(json.tableTapple.length);
console.log(JSON.stringify(json));
