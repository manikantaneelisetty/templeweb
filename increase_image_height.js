const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Change the aspect ratio from landscape (4/3) to portrait (4/5) to significantly increase the image height
c = c.replace(
  /aspect-\[4\/3\] w-full max-w-\[650px\]/g,
  'aspect-[4/5] w-full max-w-[600px]'
);

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
