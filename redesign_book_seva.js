const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

const oldPattern = /<!-- Spiritual Services Section -->[\s\S]*?(?=<!-- Gallery Section -->)/;

const newSection = `<!-- Book a Seva Section -->
<section class="relative min-h-screen w-full flex flex-col justify-center py-24 px-6 md:px-12 bg-black overflow-hidden mt-12">
  <!-- Background Image with Opacity -->
  <div class="absolute inset-0 z-0">
    <img src="/images/card_worship.jpg" alt="Temple Services Background" class="w-full h-full object-cover">
    <!-- Dark overlay to ensure text legibility while showing image in background -->
    <div class="absolute inset-0 bg-black/75"></div>
  </div>

  <div class="relative z-10 max-w-[1600px] mx-auto w-full">
    <!-- Section Header -->
    <div class="text-center mb-20 fade-in-up visible">
      <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-orange-400 mb-4 block">Divine Offerings</span>
      <h2 class="font-display-lg text-4xl md:text-5xl lg:text-6xl text-white mb-6">Book a Seva</h2>
      <div class="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto rounded-full"></div>
      <p class="font-body-lg text-lg text-white/70 max-w-2xl mx-auto mt-6">
        Participate in our sacred rituals and seek divine blessings for you and your family.
      </p>
    </div>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      
      <!-- Seva Card 1 -->
      <div class="service-card group bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-center fade-in-up stagger-1 rounded-[2rem] visible shadow-2xl premium-card transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div class="flex justify-center mb-6">
          <span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform duration-500" style="font-size: 40px;">restaurant</span>
        </div>
        <h4 class="font-headline-sm text-white text-2xl mb-3">Annadanam</h4>
        <p class="font-body-md text-white/70 text-sm leading-relaxed mb-8">Sacred food distribution to devotees and the needy daily.</p>
        <button class="font-label-caps text-xs tracking-widest uppercase text-orange-400 group-hover:text-white border border-orange-400/30 group-hover:border-white px-6 py-3 rounded-full transition-colors duration-300 w-full">Book Now</button>
      </div>

      <!-- Seva Card 2 -->
      <div class="service-card group bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-center fade-in-up stagger-2 rounded-[2rem] visible shadow-2xl premium-card transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div class="flex justify-center mb-6">
          <span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform duration-500" style="font-size: 40px;">local_fire_department</span>
        </div>
        <h4 class="font-headline-sm text-white text-2xl mb-3">Archana</h4>
        <p class="font-body-md text-white/70 text-sm leading-relaxed mb-8">Personalized ritual offerings made by priests on your behalf.</p>
        <button class="font-label-caps text-xs tracking-widest uppercase text-orange-400 group-hover:text-white border border-orange-400/30 group-hover:border-white px-6 py-3 rounded-full transition-colors duration-300 w-full">Book Now</button>
      </div>

      <!-- Seva Card 3 -->
      <div class="service-card group bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-center fade-in-up stagger-3 rounded-[2rem] visible shadow-2xl premium-card transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div class="flex justify-center mb-6">
          <span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform duration-500" style="font-size: 40px;">directions_car</span>
        </div>
        <h4 class="font-headline-sm text-white text-2xl mb-3">Vahan Pooja</h4>
        <p class="font-body-md text-white/70 text-sm leading-relaxed mb-8">Auspicious blessing ceremonies for your new vehicles.</p>
        <button class="font-label-caps text-xs tracking-widest uppercase text-orange-400 group-hover:text-white border border-orange-400/30 group-hover:border-white px-6 py-3 rounded-full transition-colors duration-300 w-full">Book Now</button>
      </div>

      <!-- Seva Card 4 -->
      <div class="service-card group bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-center fade-in-up stagger-4 rounded-[2rem] visible shadow-2xl premium-card transition-all duration-500 hover:-translate-y-2 cursor-pointer">
        <div class="flex justify-center mb-6">
          <span class="material-symbols-outlined text-orange-400 group-hover:scale-110 transition-transform duration-500" style="font-size: 40px;">menu_book</span>
        </div>
        <h4 class="font-headline-sm text-white text-2xl mb-3">Vidyarambham</h4>
        <p class="font-body-md text-white/70 text-sm leading-relaxed mb-8">Initiation of children into the world of learning and arts.</p>
        <button class="font-label-caps text-xs tracking-widest uppercase text-orange-400 group-hover:text-white border border-orange-400/30 group-hover:border-white px-6 py-3 rounded-full transition-colors duration-300 w-full">Book Now</button>
      </div>

    </div>
  </div>
</section>

`;

c = c.replace(oldPattern, newSection);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
