const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// Restore base elegant typography and add hover effect
// We'll replace text-orange-500/400 globally with a base color that transitions to orange on hover.
// To avoid replacing things inside Nav that we want orange, we'll replace broadly and let the design be subtle.
c = c.replace(/text-orange-500/g, 'text-on-background hover:text-orange-500 transition-colors duration-300');
c = c.replace(/text-orange-400/g, 'text-on-surface-variant hover:text-orange-500 transition-colors duration-300');

// Fix sizing inside cards specifically
// We know cards have classes like 'premium-card', 'overlap-card'.
// Since it's raw HTML, let's fix the headline-md and headline-sm that were made too large.
// We'll do a simple replace on the bloated sizes:
c = c.replace(/text-\[3\.5rem\] md:text-\[5rem\]/g, 'text-5xl md:text-7xl'); // Drop hero slightly
c = c.replace(/text-4xl md:text-5xl/g, 'text-2xl md:text-3xl'); // Restore card titles
c = c.replace(/text-3xl md:text-4xl/g, 'text-xl md:text-2xl'); // Restore smaller card titles
c = c.replace(/text-2xl/g, 'text-base'); // Restore body text in cards
c = c.replace(/text-xl/g, 'text-sm'); // Restore smaller body text

// Fix any duplicated classes we might have caused
c = c.replace(/text-on-background hover:text-orange-500 transition-colors duration-300 hover:opacity-80/g, 'text-on-background hover:text-orange-500 transition-colors duration-300');

// Make the cards use 'group' so we can do group-hover if we want, but GSAP SVG is handling the border.

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
