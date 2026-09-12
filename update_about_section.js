const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

const oldSectionPattern = /<!-- About the Temple Section -->[\s\S]*?(?=<!-- Divine Stones Section -->)/;

const newSection = `<!-- About the Temple Section -->
<section class="min-h-screen w-full flex flex-col justify-center py-24 px-6 md:px-12 bg-gradient-to-br from-[#954a3e] via-[#954a3e]/90 to-[#954a3e]/70 overflow-hidden relative">
  <div class="w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
    
    <!-- Left: Image with Decorative Elements -->
    <div class="w-full lg:w-[40%] relative group fade-in-up visible flex justify-center">
      <div class="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div class="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 aspect-[4/3] w-full max-w-[650px]">
        <img src="/images/gallery1.jpg" alt="Temple Architecture" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000">
      </div>
      <!-- Decorative floating badge -->
      <div class="absolute -bottom-8 -right-4 lg:-right-8 bg-[#7a3c32] p-6 lg:p-8 rounded-[2rem] shadow-2xl border border-white/20 hidden md:block z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <p class="font-['EB_Garamond'] text-3xl lg:text-4xl text-white mb-1">100+ Years</p>
        <p class="font-label-caps text-xs tracking-widest text-white/80 uppercase">Of Spiritual Heritage</p>
      </div>
    </div>

    <!-- Right: Content -->
    <div class="w-full lg:w-[50%] flex flex-col justify-center fade-in-up stagger-1 visible">
      <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 mb-4 block">About Our Sanctuary</span>
      <h2 class="font-display-lg text-4xl lg:text-6xl leading-tight text-white mb-6">A Timeless Haven of Peace and Devotion</h2>
      <div class="h-1 w-24 bg-gradient-to-r from-white to-white/30 rounded-full mb-8"></div>
      
      <p class="font-body-lg text-lg text-white/90 leading-relaxed mb-6">
        Nestled in the heart of the community, our temple stands as a beacon of hope, spirituality, and ancient wisdom. For generations, devotees have walked these sacred halls seeking tranquility, divine blessings, and a deeper connection to the infinite.
      </p>
      <p class="font-body-md text-base text-white/80 leading-relaxed mb-10">
        From the intricately carved stone pillars to the daily rhythm of Vedic chants, every corner of this sanctuary is designed to elevate the soul. We invite you to experience the rich heritage, partake in our daily sevas, and find your own inner silence within our walls.
      </p>
      
      <div>
        <button class="bg-white/10 backdrop-blur-md text-white font-label-caps text-sm tracking-[0.1em] uppercase px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#954a3e] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 border border-white/30">
          Discover Our History
        </button>
      </div>
    </div>

  </div>
</section>

`;

c = c.replace(oldSectionPattern, newSection);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
