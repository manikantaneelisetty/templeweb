export const aboutHtml = `


<!-- Custom Styles for Animations -->
<style>
  @keyframes instantFadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes instantReveal {
    from { opacity: 0; clip-path: inset(0 100% 0 0); }
    to { opacity: 1; clip-path: inset(0 0 0 0); }
  }
  
  .hero-fade-up { animation: instantFadeUp 0.6s ease-out forwards; opacity: 0; }
  .hero-reveal { animation: instantReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }

  .scroll-anim { will-change: transform, opacity, clip-path; }
  
  .scroll-fade-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
  .scroll-fade-left.is-visible { opacity: 1; transform: translateX(0); }
  
  .scroll-fade-up { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
  .scroll-fade-up.is-visible { opacity: 1; transform: translateY(0); }

  .scroll-reveal-text { opacity: 0; clip-path: inset(0 100% 0 0); transition: opacity 0.7s ease-out, clip-path 0.7s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .scroll-reveal-text.is-visible { opacity: 1; clip-path: inset(0 0 0 0); }
  
  .anim-delay-1 { animation-delay: 0.1s; transition-delay: 0.1s; }
  .anim-delay-2 { animation-delay: 0.2s; transition-delay: 0.2s; }
  .anim-delay-3 { animation-delay: 0.3s; transition-delay: 0.3s; }
</style>

<main class="bg-surface overflow-hidden pt-24 relative">

  <!-- Section 1: The Divine Presence & The Keepers (Pujaris) -->
  <section id="divine-presence" class="w-full relative flex flex-col items-center bg-surface pt-4 pb-12 z-10">
    
    <!-- Centered Text Content -->
    <div class="w-full max-w-4xl mx-auto px-margin-mobile lg:px-margin-desktop text-center z-10 relative flex flex-col items-center">
      <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-2 hero-fade-up">The Sanctum</span>
      <h1 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[8rem] leading-tight mb-4 text-on-background drop-shadow-sm hero-reveal anim-delay-1">
        Awaken the <span class="text-tertiary-fixed-dim italic font-['EB_Garamond']">Divine</span> Within
      </h1>
      <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 max-w-2xl mx-auto hero-fade-up anim-delay-2">
        At the very heart of the Temple Sanctuary lies the Garbhagriha. Our dedicated Pujaris preserve ancient Vedic traditions, ensuring that divine energy continuously flows, blessing all who step onto these sacred grounds.
      </p>
    </div>

    <!-- Unique 3-Image Collage Alignment -->
    <div class="w-full max-w-[1200px] mx-auto px-margin-mobile lg:px-margin-desktop relative z-10 mt-4 hero-fade-up anim-delay-3">
      <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 h-auto md:h-[500px]">
        
        <!-- Image 1: Left (stays in Hero) -->
        <div class="w-full md:w-1/3 h-[300px] md:h-[450px] rounded-[3rem] transform md:translate-y-12 overflow-hidden shadow-xl transition-transform duration-700 hover:scale-[1.03] relative z-10">
          <img src="/images/gen_history.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#4a2522]/80 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 text-white">
            <h3 class="font-['EB_Garamond'] italic text-4xl mb-1 text-[#ffdfba]">Ancient Roots</h3>
            <p class="font-label-caps text-sm tracking-widest uppercase opacity-90">Timeless Devotion</p>
          </div>
        </div>

        <!-- Image 2: Center (THE START SLOT FOR THE TRAVELING IMAGE) -->
        <!-- Contains a visually identical SSR fallback image in case JS is delayed/fails -->
        <div id="card-start-slot" class="w-full md:w-1/3 h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl z-10 transition-opacity duration-300 relative">
          <img src="/images/gen_deity.jpg" alt="Pujaris" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute bottom-10 text-center w-full text-white">
            <h3 class="font-['EB_Garamond'] italic text-4xl">Devotion</h3>
          </div>
        </div>

        <!-- Image 3: Right (Smaller, shifted up, stays in Hero) -->
        <div class="w-full md:w-1/3 h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden shadow-xl transform md:-translate-y-8 transition-transform duration-700 hover:scale-[1.03] hover:z-20 relative">
          <img src="/images/lotus.jpg" alt="Offerings" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8 text-white">
            <p class="font-label-caps text-sm tracking-widest uppercase opacity-90">Sacred Offerings</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Section 2: Founders & History -->
  <section id="origins-section" class="w-full min-h-screen relative flex items-center bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] py-20 z-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      
      <!-- Text Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-[#ffdfba]/80 uppercase tracking-[0.3em] mb-2">The Origins</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-white mb-4 drop-shadow-md scroll-anim scroll-reveal-text anim-delay-1">
          A Legacy of <span class="italic font-['EB_Garamond'] text-[#ffdfba]">Light</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-white/90 leading-relaxed mb-2 scroll-anim scroll-fade-left anim-delay-2">
          Founded by enlightened sages and royal patrons centuries ago, this temple was envisioned as a beacon of universal love and spiritual awakening.
        </p>
        
        <div class="flex flex-col gap-4 scroll-anim scroll-fade-left anim-delay-3">
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] hover:-translate-x-2 transition-transform duration-500 shadow-xl">
            <h3 class="font-headline-lg text-3xl text-[#ffdfba] mb-3">The Visionaries</h3>
            <p class="text-white/90 font-body-md text-lg leading-relaxed">
              Guided by divine inspiration, the founding saints laid the first stones precisely aligned with cosmic leylines, ensuring a permanent conduit of high-vibrational energy.
            </p>
          </div>

          <div class="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] hover:-translate-x-2 transition-transform duration-500 shadow-xl">
            <h3 class="font-headline-lg text-3xl text-[#ffdfba] mb-3">The Royal Patronage</h3>
            <p class="text-white/90 font-body-md text-lg leading-relaxed">
              Great kings and merchants of the era contributed vast wealth and resources, bringing the finest artisans from across the continent to carve the intricate granite pillars that stand today.
            </p>
          </div>
        </div>
      </div>

      <!-- Left Side Image for Origins Section -->
      <div class="w-full lg:w-1/2 flex justify-start">
        <div class="w-full h-[50vh] lg:h-[70vh] max-w-[550px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative">
          <img src="/images/about_history.jpg" alt="Temple History" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div class="absolute bottom-10 left-10 text-white">
            <h3 class="font-['EB_Garamond'] italic text-3xl text-[#ffdfba] mb-1">Sacred Foundations</h3>
            <p class="font-label-caps text-xs tracking-widest uppercase opacity-80">Preserved Across Ages</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Section 3: Rules to Participate -->
  <section id="guidelines" class="w-full min-h-screen relative flex items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      
      <!-- Text Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">Sacred Path</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-2 scroll-anim scroll-reveal-text anim-delay-1">
          Pilgrim <span class="italic font-['EB_Garamond'] text-green-600">Guidelines</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          To maintain the purity and tranquility of the temple environment, we kindly request all devotees to observe these harmonious practices.
        </p>

        <div class="flex flex-col gap-4 scroll-anim scroll-fade-left anim-delay-3">
          <div class="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] hover:-translate-x-2 transition-transform duration-500 shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0 group-hover:bg-tertiary-fixed transition-colors duration-500 shadow-sm">
              <span class="material-symbols-outlined text-3xl lg:text-4xl text-on-tertiary-container group-hover:text-white transition-colors duration-500">checkroom</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background group-hover:text-tertiary-fixed transition-colors duration-300 mb-2">Modest Attire</h3>
              <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">
                Traditional or modest clothing is required. Shoulders and knees should be covered as a mark of respect for the divine space.
              </p>
            </div>
          </div>

          <div class="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] hover:-translate-x-2 transition-transform duration-500 shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0 group-hover:bg-tertiary-fixed transition-colors duration-500 shadow-sm">
              <span class="material-symbols-outlined text-3xl lg:text-4xl text-on-tertiary-container group-hover:text-white transition-colors duration-500">volume_off</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background group-hover:text-tertiary-fixed transition-colors duration-300 mb-2">Sacred Silence</h3>
              <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">
                Maintain silence or speak softly to preserve the meditative atmosphere for all seekers and saints in prayer.
              </p>
            </div>
          </div>

          <div class="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] hover:-translate-x-2 transition-transform duration-500 shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0 group-hover:bg-tertiary-fixed transition-colors duration-500 shadow-sm">
              <span class="material-symbols-outlined text-3xl lg:text-4xl text-on-tertiary-container group-hover:text-white transition-colors duration-500">no_photography</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background group-hover:text-tertiary-fixed transition-colors duration-300 mb-2">Digital Fasting</h3>
              <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">
                Photography is prohibited inside the inner sanctum. We encourage you to be fully present in the moment and absorb the energy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Elevated Image Layout -->
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02] bg-surface">
          <img src="/images/gen_home_hero.jpg" alt="Devotees sitting peacefully" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        <div class="absolute -bottom-6 -left-6 md:-left-12 bg-surface p-6 md:p-8 rounded-3xl shadow-2xl border border-surface-variant animate-[bounce_5s_infinite]">
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-green-500 text-5xl">self_improvement</span>
            <div>
              <p class="font-headline-sm text-2xl font-bold text-on-background">Inner Peace</p>
              <p class="text-base text-on-surface-variant uppercase tracking-wider">Awaits You</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Section 4: Services Provided -->
  <section id="about-services" class="w-full min-h-screen relative flex items-center bg-[#faf8f5] py-20 overflow-hidden">
    <div class="absolute -top-[20%] -right-[10%] w-[1000px] h-[1000px] rounded-full bg-[#f6eddf] blur-3xl opacity-60 pointer-events-none"></div>

    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      
      <!-- Text Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-2">Selfless Service</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-4 scroll-anim scroll-reveal-text anim-delay-1">
          Grace in <span class="italic font-['EB_Garamond'] text-[#954a3e]">Action</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-2 scroll-anim scroll-fade-left anim-delay-2">
          The temple extends its blessings beyond the sanctum through various community outreach programs, driven by the pure spirit of Seva (selfless service).
        </p>

        <div class="flex flex-col gap-4 scroll-anim scroll-fade-left anim-delay-3">
          <div class="flex gap-6 group cursor-pointer bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-x-2 transition-all duration-500">
            <div class="w-24 h-24 rounded-2xl bg-[#fff0e6] flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[#d35400] text-5xl group-hover:scale-110 transition-transform duration-500">restaurant</span>
            </div>
            <div class="flex flex-col justify-center">
              <h3 class="font-headline-lg text-3xl text-on-background mb-2 group-hover:text-[#d35400] transition-colors duration-300">Annadanam (Meals)</h3>
              <p class="text-on-surface-variant font-body-sm text-lg leading-relaxed">Serving over 5,000 sanctified, nutritious meals daily to devotees and the underprivileged.</p>
            </div>
          </div>

          <div class="flex gap-6 group cursor-pointer bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-x-2 transition-all duration-500">
            <div class="w-24 h-24 rounded-2xl bg-[#e8f6f3] flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[#1abc9c] text-5xl group-hover:scale-110 transition-transform duration-500">medical_services</span>
            </div>
            <div class="flex flex-col justify-center">
              <h3 class="font-headline-lg text-3xl text-on-background mb-2 group-hover:text-[#1abc9c] transition-colors duration-300">Medical Dispensary</h3>
              <p class="text-on-surface-variant font-body-sm text-lg leading-relaxed">Free basic healthcare, consultations, and medicines provided by volunteer doctors.</p>
            </div>
          </div>

          <div class="flex gap-6 group cursor-pointer bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-x-2 transition-all duration-500">
            <div class="w-24 h-24 rounded-2xl bg-[#f4ecf7] flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-[#8e44ad] text-5xl group-hover:scale-110 transition-transform duration-500">school</span>
            </div>
            <div class="flex flex-col justify-center">
              <h3 class="font-headline-lg text-3xl text-on-background mb-2 group-hover:text-[#8e44ad] transition-colors duration-300">Vedic Vidyalaya</h3>
              <p class="text-on-surface-variant font-body-sm text-lg leading-relaxed">A traditional school imparting knowledge of ancient scriptures and yoga.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Elevated Image Layout -->
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/gen_vidyalaya.jpg" alt="Temple Services Annadanam" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div class="absolute bottom-12 right-12 text-white text-right">
            <h3 class="font-['EB_Garamond'] italic text-4xl mb-2">Seva</h3>
            <p class="font-label-caps text-sm tracking-wider uppercase opacity-90">Selfless Devotion</p>
          </div>
        </div>
      </div>

    </div>
  </section>

</main>

<!-- Footer -->
<footer class="w-full px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-lowest text-on-background hover:text-orange-500 transition-colors duration-300 border-t border-surface-variant">
    <div class="flex flex-col gap-4">
        <div class="font-headline-sm text-sm md:text-base text-on-background transition-colors duration-300">
            Temple Sanctuary
        </div>
        <p class="font-body-md text-sm text-on-surface-variant transition-colors duration-300 max-w-sm">
            123 Sacred Path, Banjara Hills<br>
            Hyderabad, Telangana 500034<br>
            info@templesanctuary.org
        </p>
    </div>
    <div class="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 md:mt-0">
        <div class="flex flex-col gap-3 font-label-caps text-label-caps uppercase tracking-wider">
            <a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300" href="#">Privacy Policy</a>
            <a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300" href="#">Terms of Service</a>
        </div>
        <div class="flex flex-col gap-3 font-label-caps text-label-caps uppercase tracking-wider">
            <a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300" href="#">Volunteer</a>
            <a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300" href="#">Support</a>
        </div>
    </div>
    <div class="w-full md:w-auto mt-8 md:mt-0 pt-8 md:pt-0 border-t border-surface-variant md:border-none font-body-md text-sm text-on-surface-variant transition-colors duration-300">
        © 2026 Temple Sanctuary. All Rights Reserved.
    </div>
</footer>
`;
