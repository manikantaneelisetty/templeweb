export const darshanHtml = `


<style>
  @keyframes instantFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes instantReveal { from { opacity: 0; clip-path: inset(0 100% 0 0); } to { opacity: 1; clip-path: inset(0 0 0 0); } }
  .hero-fade-up { animation: instantFadeUp 0.6s ease-out forwards; opacity: 0; }
  .hero-reveal { animation: instantReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
  .scroll-anim { will-change: transform, opacity, clip-path; }
  .scroll-fade-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
  .scroll-fade-left.is-visible { opacity: 1; transform: translateX(0); }
  .scroll-fade-right { opacity: 0; transform: translateX(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
  .scroll-fade-right.is-visible { opacity: 1; transform: translateX(0); }
  .scroll-fade-up { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
  .scroll-fade-up.is-visible { opacity: 1; transform: translateY(0); }
  .scroll-reveal-text { opacity: 0; clip-path: inset(0 100% 0 0); transition: opacity 0.7s ease-out, clip-path 0.7s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .scroll-reveal-text.is-visible { opacity: 1; clip-path: inset(0 0 0 0); }
  .anim-delay-1 { animation-delay: 0.1s; transition-delay: 0.1s; }
  .anim-delay-2 { animation-delay: 0.2s; transition-delay: 0.2s; }
  .anim-delay-3 { animation-delay: 0.3s; transition-delay: 0.3s; }
</style>

<main class="bg-surface overflow-hidden pt-24 relative">

  <!-- Section 1: Hero (Meaning of Darshan) -->
  <section class="w-full min-h-screen relative flex items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">The Divine Sight</span>
        <h1 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[8rem] leading-tight mb-2 text-on-background drop-shadow-sm hero-reveal anim-delay-1">
          Holy <span class="text-tertiary-fixed-dim italic font-['EB_Garamond']">Darshan</span>
        </h1>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          Darshan is the auspicious beholding of the deity. It is a moment of profound spiritual connection where the seeker and the divine exchange a glance of grace.
        </p>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/gen_deity.jpg" alt="Divine Darshan" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Timings -->
  <section id="timings" class="w-full min-h-screen relative flex items-center bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] py-20 z-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-[#ffdfba]/80 uppercase tracking-[0.3em] mb-0">Schedule</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-white mb-4 drop-shadow-md scroll-anim scroll-reveal-text anim-delay-1">
          Temple <span class="italic font-['EB_Garamond'] text-[#ffdfba]">Timings</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-white/90 leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          The sanctuary is open daily to welcome devotees. Plan your visit according to the sacred schedule below.
        </p>
        <div class="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-white/20 scroll-anim scroll-fade-left anim-delay-3 flex flex-col gap-6">
          <div class="flex justify-between items-center border-b border-white/20 pb-4">
             <h3 class="font-headline-lg text-2xl text-white">Morning Darshan</h3>
             <span class="font-body-md text-lg text-[#ffdfba]">6:00 AM - 12:00 PM</span>
          </div>
          <div class="flex justify-between items-center border-b border-white/20 pb-4">
             <h3 class="font-headline-lg text-2xl text-white">Maha Aarti</h3>
             <span class="font-body-md text-lg text-[#ffdfba]">12:00 PM - 12:30 PM</span>
          </div>
          <div class="flex justify-between items-center border-b border-white/20 pb-4">
             <h3 class="font-headline-lg text-2xl text-white">Evening Darshan</h3>
             <span class="font-body-md text-lg text-[#ffdfba]">4:00 PM - 8:30 PM</span>
          </div>
          <div class="flex justify-between items-center">
             <h3 class="font-headline-lg text-2xl text-white">Shayan Aarti</h3>
             <span class="font-body-md text-lg text-[#ffdfba]">8:30 PM - 9:00 PM</span>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/gen_festival.jpg" alt="Aarti Timings" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Special Guidelines -->
  <section id="special" class="w-full min-h-screen relative flex items-center bg-[#faf8f5] py-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">Preparation</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-4 scroll-anim scroll-reveal-text anim-delay-1">
          Special <span class="italic font-['EB_Garamond'] text-[#954a3e]">Access</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          For special Pujas and priority Darshan, please book in advance. Ensure you follow the strict traditional dress code for inner sanctum entry.
        </p>
        <div class="bg-white/40 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start scroll-anim scroll-fade-left anim-delay-3">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-3xl lg:text-4xl text-on-tertiary-container">confirmation_number</span>
            </div>
            <div class="flex flex-col">
                <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background mb-2">Advance Booking</h3>
                <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">Book special Darshan tickets online to reduce waiting times.</p>
                <button class="mt-4 self-start bg-tertiary-fixed text-on-tertiary-fixed px-6 py-2 rounded-full font-label-caps uppercase tracking-wider text-sm shadow-md hover:bg-tertiary-fixed-dim transition-colors">Book Now</button>
            </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/gen_unique.jpg" alt="Special Darshan" class="w-full h-full object-cover">
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
