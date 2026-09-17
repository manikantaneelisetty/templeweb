const fs = require("fs");
let content = fs.readFileSync("d:/templeweb/src/lib/templates/donateHtml.ts", "utf-8");
content = content.replace(/\x27500/g, "&#8377; 500");
content = content.replace(/\x271000/g, "&#8377; 1000");
content = content.replace(/\x272500/g, "&#8377; 2500");
content = content.replace(/\x275000/g, "&#8377; 5000");
fs.writeFileSync("d:/templeweb/src/lib/templates/donateHtml.ts", content);

