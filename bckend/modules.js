const fs = require("fs");
let text = fs.readFileSync("sample.txt","utf-8");
console.log("content of file is: ");
console.log(text);

text = text.replace("morning", "evening");
console.log("content of new file is in result file ");
fs.writeFileSync("result.txt",text);
