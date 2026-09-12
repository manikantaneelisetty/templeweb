const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

const oldVideoPattern = /<div class="relative w-full aspect-video bg-black border border-surface-variant\/20 overflow-hidden rounded-2xl shadow-2xl">[\s\S]*?<\/div>/;

const newVideoHtml = `<div class="w-[90%] max-w-[1400px] mx-auto p-2 lg:p-4 rounded-[2rem] bg-gradient-to-b from-surface-variant/40 to-surface-variant/10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-surface-variant/50 relative group transition-transform duration-700 hover:scale-[1.01]">
    <!-- Majestic glowing aura on hover -->
    <div class="absolute -inset-1 bg-gradient-to-r from-orange-500/30 via-tertiary-fixed/20 to-orange-500/30 rounded-[2.2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    <!-- Inner video container -->
    <div class="relative w-full aspect-video bg-black overflow-hidden rounded-[1.5rem] lg:rounded-[1.8rem] shadow-inner border border-black/50 z-10">
      <iframe class="w-full h-full absolute inset-0" src="https://www.youtube.com/embed/7w7LUaLpM4E?si=d_eTM-615SBtHNCO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>`;

c = c.replace(oldVideoPattern, newVideoHtml);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
