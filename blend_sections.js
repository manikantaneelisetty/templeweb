const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Update Hero gradient to fade into the specific dark reddish-brown (#4a2522)
c = c.replace(
  /<div class="absolute inset-0 bg-gradient-to-b from-black\/60 via-black\/40 to-surface"><\/div>/g,
  '<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#4a2522]"></div>'
);

// Update Cards Section to remove top border, use bottom-right gradient for smooth top edge, and negative margin for pixel perfection
c = c.replace(
  /<section class="w-full relative z-20 bg-gradient-to-r from-\[#4a2522\] via-\[#7d3c2b\] to-\[#a45437\] pt-20 pb-32 px-6 md:px-12 rounded-b-\[2rem\] md:rounded-b-\[4rem\] shadow-\[0_30px_50px_rgba\(0,0,0,0\.4\)\] overflow-hidden mb-24 border-t border-white\/10">/g,
  '<section class="w-full relative z-20 bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] pt-20 pb-32 px-6 md:px-12 rounded-b-[2rem] md:rounded-b-[4rem] shadow-[0_30px_50px_rgba(0,0,0,0.4)] overflow-hidden mb-24 -mt-1">'
);

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
