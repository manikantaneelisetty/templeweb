const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

const oldVideoPattern = /<div class="relative w-full aspect-video bg-inverse-surface border border-surface-variant\/20 overflow-hidden group[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

const newVideoHtml = `<div class="relative w-full aspect-video bg-black border border-surface-variant/20 overflow-hidden rounded-2xl shadow-2xl">
  <iframe class="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/7w7LUaLpM4E?si=d_eTM-615SBtHNCO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>`;

c = c.replace(oldVideoPattern, newVideoHtml);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
