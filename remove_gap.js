const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Remove the fade-to-white at the bottom of the hero, just use a standard darkening overlay
c = c.replace(
  /<div class="absolute inset-0 bg-gradient-to-b from-black\/50 via-transparent to-surface"><\/div>/g,
  '<div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>'
);

// Reconnect the sections: remove the gap, make it full width again, and remove top rounding
c = c.replace(
  /<section class="w-full relative z-20 bg-gradient-to-br from-\[#4a2522\] via-\[#7d3c2b\] to-\[#a45437\] pt-20 pb-32 px-6 md:px-12 rounded-\[2rem\] md:rounded-\[4rem\] shadow-\[0_30px_50px_rgba\(0,0,0,0\.4\)\] overflow-hidden my-12 md:my-24 max-w-\[95%\] mx-auto">/g,
  '<section class="w-full relative z-20 bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] pt-20 pb-32 px-6 md:px-12 rounded-b-[2rem] md:rounded-b-[4rem] shadow-[0_30px_50px_rgba(0,0,0,0.4)] overflow-hidden mb-24 -mt-1">'
);

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
