const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

const oldCardsPattern = /<!-- Overlap Cards Section -->[\s\S]*?(?=<!-- Divine Stones Section -->)/;

const newCardsSection = `<!-- Feature Cards Section -->
<section class="w-full relative z-20 bg-gradient-to-r from-[#4a2522] via-[#7d3c2b] to-[#a45437] pt-20 pb-32 px-6 md:px-12 rounded-b-[2rem] md:rounded-b-[4rem] shadow-[0_30px_50px_rgba(0,0,0,0.4)] overflow-hidden mb-24 border-t border-white/10">
  
  <!-- Background Script Overlay -->
  <div class="absolute bottom-8 right-6 md:bottom-12 md:right-16 opacity-25 pointer-events-none select-none">
    <span class="font-['EB_Garamond'] italic text-4xl md:text-[5rem] text-[#ffdfba] whitespace-nowrap tracking-wider drop-shadow-lg">you are always welcome here!</span>
  </div>

  <div class="max-w-[1600px] w-full mx-auto relative z-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      
      <!-- Card 1 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/card_darshan.jpg" alt="Daily Darshan" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Darshan</span>
          <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Daily Darshan</h3>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/card_worship.jpg" alt="Book Seva" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Worship</span>
          <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Book Seva</h3>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/gallery4.jpg" alt="Donate" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Give</span>
          <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Donate</h3>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/journey.jpg" alt="Volunteer" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Get Involved</span>
          <h3 class="font-headline-lg text-3xl md:text-4xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Volunteer</h3>
        </div>
      </div>

    </div>
  </div>
</section>
`;

c = c.replace(oldCardsPattern, newCardsSection);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
