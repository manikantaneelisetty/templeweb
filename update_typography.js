const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Colors
c = c.replace(/text-on-background/g, 'text-orange-500');
c = c.replace(/text-on-surface-variant/g, 'text-orange-400');
c = c.replace(/text-on-surface/g, 'text-orange-500');

// Typography sizes
c = c.replace(/text-display-lg/g, 'text-[3.5rem] md:text-[5rem] leading-tight');
c = c.replace(/text-display-md/g, 'text-[3rem] md:text-[4rem] leading-tight');
c = c.replace(/text-headline-lg/g, 'text-[2.5rem] md:text-[3.5rem]');
c = c.replace(/text-headline-md/g, 'text-4xl md:text-5xl');
c = c.replace(/text-headline-sm/g, 'text-3xl md:text-4xl');
c = c.replace(/text-body-lg/g, 'text-2xl');
c = c.replace(/text-body-md/g, 'text-xl');

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
