const fs = require('fs');
let c = fs.readFileSync('src/components/ui/ScreenRenderer.tsx', 'utf8');

// Change the easing to 'none' for a constant, continuous speed and increase the duration to make it circulate slowly.
c = c.replace(
  /\{ strokeDashoffset: 0, duration: 2\.8, ease: "power2\.inOut" \}/g,
  '{ strokeDashoffset: 0, duration: 6, ease: "none" }'
);

fs.writeFileSync('src/components/ui/ScreenRenderer.tsx', c);
