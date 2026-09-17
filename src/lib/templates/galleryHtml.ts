export const galleryHtml = `


<style>
  @keyframes instantFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes instantReveal { from { opacity: 0; clip-path: inset(0 100% 0 0); } to { opacity: 1; clip-path: inset(0 0 0 0); } }
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

  <!-- Section 1: Hero & Main Gallery -->
  <section class="w-full min-h-screen relative flex items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">Sacred Imagery</span>
        <h1 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[8rem] leading-tight mb-2 text-on-background drop-shadow-sm hero-reveal anim-delay-1">
          Temple <span class="text-tertiary-fixed-dim italic font-['EB_Garamond']">Gallery</span>
        </h1>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-8 max-w-2xl hero-fade-up anim-delay-2">
          Explore the divine presence through our collection of sacred images, featuring the grand temple architecture and the serene forms of the deities.
        </p>
        <div class="flex flex-wrap gap-4 scroll-anim scroll-fade-left anim-delay-3">
          <a href="#unique-photos" class="inline-flex items-center justify-center bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-sm md:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-500 border-2 border-tertiary-fixed-dim/50">
             Unique Photos
          </a>
          <a href="#past-present" class="inline-flex items-center justify-center bg-transparent text-on-background font-label-caps text-sm md:text-base uppercase tracking-wider px-8 py-4 rounded-full border-2 border-outline hover:border-tertiary-fixed hover:text-tertiary-fixed transition-all duration-300">
             Past to Present
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="grid grid-cols-2 gap-4 h-full">
            <div class="rounded-3xl overflow-hidden shadow-xl transform translate-y-8 hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/gen_home_hero.jpg" alt="Temple" class="w-full h-full object-cover">
            </div>
            <div class="rounded-3xl overflow-hidden shadow-xl transform -translate-y-8 hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/gen_deity.jpg" alt="Gods" class="w-full h-full object-cover">
            </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Unique Photos -->
  <section id="unique-photos" class="w-full min-h-screen relative flex items-center bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] py-20 z-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-[#ffdfba]/80 uppercase tracking-[0.3em] mb-0">Rare Perspectives</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-white mb-4 drop-shadow-md scroll-anim scroll-reveal-text anim-delay-1">
          Unique <span class="italic font-['EB_Garamond'] text-[#ffdfba]">Photos</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-white/90 leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          Discover unseen angles and intimate architectural details captured by master photographers, revealing the hidden geometric perfection of the temple.
        </p>
        <div class="flex flex-col gap-4 scroll-anim scroll-fade-left anim-delay-3">
          <div class="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] shadow-xl group hover:-translate-x-2 transition-transform duration-500 border border-white/20">
            <h3 class="font-headline-lg text-3xl text-[#ffdfba] mb-3">Architectural Marvels</h3>
            <p class="text-white/90 font-body-md text-lg leading-relaxed">
              Intricate carvings and ceiling mandalas that are often missed, brought to life through macro photography.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/gen_unique.jpg" alt="Unique Photo" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Festival Times (Differences) -->
  <section id="festivals" class="w-full min-h-screen relative flex items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">Celebration</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-2 scroll-anim scroll-reveal-text anim-delay-1">
          Festival <span class="italic font-['EB_Garamond'] text-green-600">Vibrance</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          Experience the unparalleled energy during major festivals. Unlike other temples, our celebrations emphasize collective participation and ancient acoustic chanting that reverberates through the valley.
        </p>
        <div class="flex flex-col gap-4 scroll-anim scroll-fade-left anim-delay-3">
          <div class="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-3xl lg:text-4xl text-on-tertiary-container">celebration</span>
            </div>
            <div class="flex flex-col">
              <h3 class="font-headline-lg text-3xl text-on-background mb-2">Grand Processions</h3>
              <p class="text-on-surface-variant font-body-md text-lg leading-relaxed">
                The deity is carried on a golden chariot, surrounded by thousands of lamps and traditional dancers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="grid grid-rows-2 gap-4 h-full">
            <div class="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/gen_festival.jpg" alt="Festival Day" class="w-full h-full object-cover">
            </div>
            <div class="rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500">
                <img src="/images/gen_annadanam.jpg" alt="Festival Night" class="w-full h-full object-cover">
            </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Extra Information / Past to Present -->
  <section id="past-present" class="w-full min-h-screen relative flex items-center bg-[#faf8f5] py-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">Heritage</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-4 scroll-anim scroll-reveal-text anim-delay-1">
          Past to <span class="italic font-['EB_Garamond'] text-[#954a3e]">Present</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          Dive deep into the historical evolution of the sanctuary. These archival images and modern comparisons showcase the enduring legacy and ongoing restoration efforts of our sacred grounds.
        </p>
        <div class="bg-white p-8 rounded-[2rem] shadow-xl border border-surface-variant/20 scroll-anim scroll-fade-left anim-delay-3">
          <ul class="space-y-4 font-body-md text-lg text-on-surface-variant">
            <li class="flex gap-4 items-center"><span class="material-symbols-outlined text-tertiary-fixed">history</span> Founded in the 12th Century</li>
            <li class="flex gap-4 items-center"><span class="material-symbols-outlined text-tertiary-fixed">architecture</span> Built using interlocking granite blocks</li>
            <li class="flex gap-4 items-center"><span class="material-symbols-outlined text-tertiary-fixed">eco</span> Certified Eco-Spiritual Campus</li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/gen_history.jpg" alt="Past to Present" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

</main>

<script>
  (function() {
    function initObserver() {
      if (!('IntersectionObserver' in window)) return;
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if(entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.scroll-anim:not([data-observed])').forEach(function(el) {
        el.dataset.observed = 'true';
        observer.observe(el);
      });
    }
    setInterval(initObserver, 100);
  })();
</script>
`;
