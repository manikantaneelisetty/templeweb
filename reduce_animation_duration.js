const fs = require('fs');
let c = fs.readFileSync('src/components/ui/ScreenRenderer.tsx', 'utf8');

// The GSAP query already selects all .premium-card and .overlap-card elements across the homepage.
// This script reduces the duration from 15 seconds to 8 seconds.
c = c.replace(
  /\{ strokeDashoffset: 0, duration: 15, ease: "none" \}/g,
  '{ strokeDashoffset: 0, duration: 8, ease: "none" }'
);

fs.writeFileSync('src/components/ui/ScreenRenderer.tsx', c);
