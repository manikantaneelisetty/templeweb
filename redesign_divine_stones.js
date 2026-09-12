const fs = require('fs');
let c = fs.readFileSync('src/lib/templates/homeHtml.ts', 'utf8');

const oldSectionPattern = /<!-- Divine Stones Section -->[\s\S]*?(?=<!-- Services & Seva Section -->)/;

const newSection = `<!-- Divine Stones Section -->
<section class="relative min-h-[80vh] flex flex-col lg:flex-row overflow-hidden border-y border-surface-variant/30">
  <!-- Split Backgrounds -->
  <div class="absolute inset-0 w-full h-full flex flex-col lg:flex-row z-0 pointer-events-none">
    <div class="w-full lg:w-1/2 h-full bg-surface-variant/30"></div>
    <div class="w-full lg:w-1/2 h-full bg-surface-container-lowest"></div>
  </div>

  <!-- Content Container -->
  <div class="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row">
    
    <!-- Left Side: Interactive Images -->
    <div class="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center">
      <div class="w-full shadow-2xl rounded-3xl overflow-hidden border border-surface-variant relative h-[50vh] lg:h-[70vh] group">
          <img class="divine-bg absolute inset-0 w-full h-full object-cover opacity-100 transition-none" data-index="0" alt="Granite Pillars" src="/images/granite.jpg">
          <img class="divine-bg absolute inset-0 w-full h-full object-cover opacity-0 transition-none" data-index="1" alt="Sanctum Sandstone" src="/images/sanctum.jpg">
          <img class="divine-bg absolute inset-0 w-full h-full object-cover opacity-0 transition-none" data-index="2" alt="Lotus Marble" src="/images/lotus.jpg">
      </div>
    </div>

    <!-- Right Side: Text & Cards (Col Wise) -->
    <div class="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center">
      <div class="text-left mb-10 fade-in-up visible">
        <h2 class="font-display-lg text-4xl lg:text-6xl leading-tight text-on-background hover:text-orange-500 transition-colors duration-300 mb-4">The Divine Stones</h2>
        <div class="h-1 w-24 bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim rounded-full mb-6"></div>
        <p class="font-body-lg text-lg lg:text-xl text-on-surface-variant hover:text-orange-500 transition-colors duration-300 max-w-xl">
            Discover the architectural marvels and sacred geology that form the foundation of our spiritual home.
        </p>
      </div>

      <div class="flex flex-col gap-6">
        <!-- Card 1 -->
        <div class="divine-stone-card bg-surface-bright border border-surface-variant p-6 lg:p-8 rounded-2xl shadow-md fade-in-up stagger-1 visible premium-card cursor-pointer group" data-index="0">
          <h3 class="font-headline-sm text-2xl text-on-background group-hover:text-orange-500 transition-colors duration-300 mb-2 flex items-center gap-3"><span class="material-symbols-outlined text-tertiary-fixed-dim float-icon">account_balance</span>Granite Pillars</h3>
          <p class="font-body-md text-base text-on-surface-variant group-hover:text-orange-500 transition-colors duration-300 pl-10">Carved with celestial motifs, these pillars symbolize the unyielding strength of faith and stand as silent witnesses to time.</p>
        </div>
        <!-- Card 2 -->
        <div class="divine-stone-card bg-surface-bright border border-surface-variant p-6 lg:p-8 rounded-2xl shadow-md fade-in-up stagger-2 visible premium-card cursor-pointer group" data-index="1">
          <h3 class="font-headline-sm text-2xl text-on-background group-hover:text-orange-500 transition-colors duration-300 mb-2 flex items-center gap-3"><span class="material-symbols-outlined text-tertiary-fixed-dim float-icon">castle</span>The Sanctum Sandstone</h3>
          <p class="font-body-md text-base text-on-surface-variant group-hover:text-orange-500 transition-colors duration-300 pl-10">Sourced from the sacred quarries, the warm, golden-hued blocks reflect the divine light of the inner shrine.</p>
        </div>
        <!-- Card 3 -->
        <div class="divine-stone-card bg-surface-bright border border-surface-variant p-6 lg:p-8 rounded-2xl shadow-md fade-in-up stagger-3 visible premium-card cursor-pointer group" data-index="2">
          <h3 class="font-headline-sm text-2xl text-on-background group-hover:text-orange-500 transition-colors duration-300 mb-2 flex items-center gap-3"><span class="material-symbols-outlined text-tertiary-fixed-dim float-icon">spa</span>Lotus Marble Floor</h3>
          <p class="font-body-md text-base text-on-surface-variant group-hover:text-orange-500 transition-colors duration-300 pl-10">Cool to the touch, the pristine flooring guides devotees towards the ultimate path of purity and enlightenment.</p>
        </div>
      </div>
    </div>
  </div>
</section>
`;

c = c.replace(oldSectionPattern, newSection);
fs.writeFileSync('src/lib/templates/homeHtml.ts', c);
