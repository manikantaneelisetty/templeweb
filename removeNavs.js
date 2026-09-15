const fs = require("fs");
const path = require("path");

const dir = "d:/templeweb/src/lib/templates";
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith(".ts")) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, "utf-8");
        
        // Remove from <!-- Navigation --> or <!-- TopNavBar --> up to </nav> or </header>
        const regex = /<!-- (Navigation|TopNavBar) -->[\s\S]*?(<\/nav>|<\/header>)/;
        if (regex.test(content)) {
            content = content.replace(regex, "");
            fs.writeFileSync(filePath, content);
            console.log("Removed nav block from", file);
        }
    }
});

