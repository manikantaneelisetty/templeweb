const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Lighten the hero image gradient overlay significantly so it doesn't suffocate the image
c = c.replace(
  /<div class="absolute inset-0 bg-gradient-to-b from-black\/60 via-black\/50 to-\[#4a2522\]"><\/div>/g,
  '<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#4a2522]"></div>'
);

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
