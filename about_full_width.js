const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Make the section full height (min-h-screen) and center contents vertically
c = c.replace(
  /<section class="py-24 px-6 md:px-12 bg-surface overflow-hidden relative">/,
  '<section class="min-h-screen w-full flex flex-col justify-center py-24 px-6 md:px-12 bg-surface overflow-hidden relative">'
);

// Remove the max-width constraint to make it 100% width
c = c.replace(
  /<div class="max-w-\[1400px\] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">/,
  '<div class="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">'
);

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
