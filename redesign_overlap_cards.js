const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

// 1. Change Hero height to 90vh
c = c.replace(/min-h-\[95vh\]/g, 'min-h-[90vh]');

// 2. Replace the Overlap Cards Section
const oldCardsPattern = /<!-- Overlap Cards Section -->[\s\S]*?(?=<!-- Divine Stones Section -->)/;

const newCardsHtml = `<!-- Overlap Cards Section -->
<div class="max-w-[1600px] w-full mx-auto px-6 md:px-12 -mt-[25vh] relative z-20 mb-32">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    
    <!-- Card 1 -->
    <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer">
      <img src="/images/gallery3.jpg" alt="Daily Darshan" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
      
      <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Darshan</span>
        <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-orange-400 transition-colors duration-300">Daily Darshan</h3>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer">
      <img src="/images/services.jpg" alt="Book Seva" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
      
      <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Worship</span>
        <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-orange-400 transition-colors duration-300">Book Seva</h3>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer">
      <img src="/images/gallery4.jpg" alt="Donate" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
      
      <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Give</span>
        <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-orange-400 transition-colors duration-300">Donate</h3>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer">
      <img src="/images/journey.jpg" alt="Volunteer" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
      <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
      
      <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Get Involved</span>
        <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-orange-400 transition-colors duration-300">Volunteer</h3>
      </div>
    </div>

  </div>
</div>
`;

c = c.replace(oldCardsPattern, newCardsHtml);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
