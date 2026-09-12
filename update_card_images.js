const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

c = c.replace(/src="\/images\/gallery3.jpg" alt="Daily Darshan"/g, 'src="/images/card_darshan.jpg" alt="Daily Darshan"');
c = c.replace(/src="\/images\/services.jpg" alt="Book Seva"/g, 'src="/images/card_worship.jpg" alt="Book Seva"');

fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
