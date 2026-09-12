const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// 1. Change the Hero section to fade into a light white/surface color
c = c.replace(
  /<div class="absolute inset-0 bg-gradient-to-b from-black\/40 via-transparent to-\[#4a2522\]"><\/div>/g,
  '<div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-surface"></div>'
);

// 2. Separate the Cards Section by adding top margin and rounding the top corners
c = c.replace(
  /<section class="w-full relative z-20 bg-gradient-to-br from-\[#4a2522\] via-\[#7d3c2b\] to-\[#a45437\] pt-20 pb-32 px-6 md:px-12 rounded-b-\[2rem\] md:rounded-b-\[4rem\] shadow-\[0_30px_50px_rgba\(0,0,0,0\.4\)\] overflow-hidden mb-24 -mt-1">/g,
  '<section class="w-full relative z-20 bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] pt-20 pb-32 px-6 md:px-12 rounded-[2rem] md:rounded-[4rem] shadow-[0_30px_50px_rgba(0,0,0,0.4)] overflow-hidden my-12 md:my-24 max-w-[95%] mx-auto">'
);

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
