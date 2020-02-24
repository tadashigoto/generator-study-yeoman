const fs = require('fs');
function copytpl(src,dst,opt){
    console.log("src:"+src+",dst:"+dst+",opt:"+opt.title)
}
const json = JSON.parse(fs.readFileSync('sample.json', 'utf8'));
console.log(json);

copytpl("a","b",json)
