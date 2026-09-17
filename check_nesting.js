const fs = require("fs");
const html = fs.readFileSync("d:/templeweb/src/lib/templates/donateHtml.ts", "utf8");

function findNesting(parent, child) {
    let parentCount = 0;
    let pos = 0;
    const parentOpen = new RegExp(`<${parent}(?:>|\\s[^>]*>)`, "gi");
    const parentClose = new RegExp(`</${parent}>`, "gi");
    const childOpen = new RegExp(`<${child}(?:>|\\s[^>]*>)`, "gi");
    
    // Simplistic check without full parser
    // Let us just use a real parser
}

