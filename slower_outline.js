const fs = require('fs');
let c = fs.readFileSync('src/components/ui/ScreenRenderer.tsx', 'utf8');

// Increase duration from 6 to 15 seconds to make the circulation much slower
c = c.replace(
  /\{ strokeDashoffset: 0, duration: 6, ease: "none" \}/g,
  '{ strokeDashoffset: 0, duration: 15, ease: "none" }'
);

fs.writeFileSync('src/components/ui/ScreenRenderer.tsx', c);
