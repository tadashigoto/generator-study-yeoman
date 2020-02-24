const { src, dest } = require('gulp');
var ejs = require("gulp-ejs")
 
exports.default = function() {
    console.log("Hello!")
    return src("./templates/*.ejs")
        .pipe(ejs({
            msg: "Hello Gulp!",
            ary:[["1","2"],["3","A"]]
        }))
        .pipe(dest("./dist"))
    }
