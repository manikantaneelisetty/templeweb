export const servicesHtml = `
<!-- Navigation -->
<nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-gradient-to-r from-[#4a2522] via-[#7d3c2b] to-[#4a2522] border-b border-white/20 shadow-xl backdrop-blur-md">
    <a class="font-headline-md text-xl md:text-2xl text-[#ffdfba] hover:text-white transition-colors duration-300 uppercase tracking-widest flex items-center gap-2" href="/">
        <span class="material-symbols-outlined text-3xl">temple_hindu</span>
        Temple Sanctuary
    </a>
    <div class="hidden md:flex items-center gap-8 font-label-caps text-sm uppercase tracking-wider">
        <a class="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 relative group py-2" href="/">
            Home
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        
        <div class="relative group py-2">
            <a class="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer" href="/about">
                About
                <span class="material-symbols-outlined text-lg">arrow_drop_down</span>
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 z-50">
                <a href="/about#history" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Our History</a>
                <a href="/about#vision" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Vision & Mission</a>
                <a href="/about#guidelines" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Guidelines</a>
            </div>
        </div>

        <div class="relative group py-2">
            <a class="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer" href="/darshan">
                Darshan
                <span class="material-symbols-outlined text-lg">arrow_drop_down</span>
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div class="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 z-50">
                <a href="/darshan#timings" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Temple Timings</a>
                <a href="/darshan#special" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Special Darshan</a>
            </div>
        </div>

        <div class="relative group py-2">
            <a class="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer" href="/gallery">
                Gallery
                <span class="material-symbols-outlined text-lg">arrow_drop_down</span>
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 z-50">
                <a href="/gallery#unique-photos" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Unique Perspectives</a>
                <a href="/gallery#past-present" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Past to Present</a>
            </div>
        </div>

        <div class="relative group py-2">
            <a class="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 flex items-center gap-1 cursor-pointer" href="/services">
                Services
                <span class="material-symbols-outlined text-lg">arrow_drop_down</span>
                <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <div class="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex flex-col py-2 z-50">
                <a href="/services#annadanam" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Annadanam</a>
                <a href="/services#medical" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Medical Care</a>
                <a href="/services#vidyalaya" class="px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors">Vedic Vidyalaya</a>
            </div>
        </div>

        <a class="text-white/80 hover:text-[#ffdfba] transition-colors duration-300 relative group py-2" href="/contact">
            Contact
            <span class="absolute bottom-0 left-0 w-full h-[2px] bg-[#ffdfba] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
    </div>
    
    <div class="flex items-center gap-4">
        <a href="/donate" class="hidden md:inline-flex items-center justify-center bg-[#ffdfba] text-[#4a2522] font-label-caps text-sm uppercase tracking-wider px-6 py-2.5 rounded-full shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-bold">
            Donate
        </a>
        <button aria-label="Menu" class="md:hidden text-[#ffdfba] hover:text-white transition-colors duration-300">
            <span class="material-symbols-outlined" style="font-size: 28px;">menu</span>
        </button>
    </div>
</nav>

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

  <!-- Section 1: Hero (Services Intro) -->
  <section class="w-full min-h-screen relative flex flex-col justify-center items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full max-w-5xl mx-auto px-margin-mobile lg:px-margin-desktop text-center z-10 relative">
      <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-4 block hero-fade-up">Divine Offerings</span>
      <h1 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[8rem] leading-tight mb-6 text-on-background drop-shadow-sm hero-reveal anim-delay-1">
        Temple <span class="text-tertiary-fixed-dim italic font-['EB_Garamond']">Services</span>
      </h1>
      <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto hero-fade-up anim-delay-2">
        Experience spiritual upliftment and community connection through our diverse range of services, designed to nourish both body and soul.
      </p>
    </div>
  </section>

  <!-- Section 2: Annadanam -->
  <section class="w-full min-h-screen relative flex items-center bg-[#faf8f5] py-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-[#d35400] uppercase tracking-[0.3em] mb-0">Nourishment</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-4 scroll-anim scroll-reveal-text anim-delay-1">
          Annadanam
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          Food is a gift from the divine. We provide free, sanctified, and nutritious meals every day to all pilgrims, regardless of background or belief.
        </p>
        <div class="bg-white/40 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start scroll-anim scroll-fade-left anim-delay-3">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#fff0e6] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-3xl lg:text-4xl text-[#d35400]">restaurant</span>
            </div>
            <div class="flex flex-col">
                <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background mb-2">Daily Meals</h3>
                <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">Served daily from 12:00 PM to 2:00 PM in the grand dining hall.</p>
            </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/about_services.jpg" alt="Annadanam" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Medical Dispensary -->
  <section class="w-full min-h-screen relative flex items-center bg-gradient-to-br from-[#1abc9c]/10 to-surface py-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-right">
        <span class="font-label-caps text-2xl md:text-4xl text-[#1abc9c] uppercase tracking-[0.3em] mb-0">Healing</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-4 scroll-anim scroll-reveal-text anim-delay-1">
          Medical <span class="italic font-['EB_Garamond']">Care</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-right anim-delay-2">
          Healing the body is as important as healing the soul. Our community-run medical dispensary offers free check-ups and medications to the underprivileged.
        </p>
        <div class="bg-white/40 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start scroll-anim scroll-fade-right anim-delay-3">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#e8f6f3] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-3xl lg:text-4xl text-[#1abc9c]">medical_services</span>
            </div>
            <div class="flex flex-col">
                <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background mb-2">Volunteer Doctors</h3>
                <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">Specialists donate their time every weekend to provide expert consultations.</p>
            </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/medical.jpg" alt="Medical Camp" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Vedic Vidyalaya -->
  <section class="w-full min-h-screen relative flex items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-[#8e44ad] uppercase tracking-[0.3em] mb-0">Education</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-on-background mb-4 scroll-anim scroll-reveal-text anim-delay-1">
          Vedic <span class="italic font-['EB_Garamond']">Vidyalaya</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-6 scroll-anim scroll-fade-left anim-delay-2">
          Preserving ancient wisdom for future generations. The Vidyalaya provides traditional education in scriptures, Sanskrit, and moral values.
        </p>
        <div class="bg-white/40 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] shadow-xl border border-surface-variant/30 group flex gap-5 lg:gap-6 items-start scroll-anim scroll-fade-left anim-delay-3">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#f4ecf7] flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-3xl lg:text-4xl text-[#8e44ad]">school</span>
            </div>
            <div class="flex flex-col">
                <h3 class="font-headline-lg text-2xl lg:text-3xl text-on-background mb-2">Ancient Wisdom</h3>
                <p class="text-on-surface-variant font-body-md text-base lg:text-lg leading-relaxed">A curriculum blending rigorous Vedic study with modern ethical frameworks.</p>
            </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/education.jpg" alt="Vedic Vidyalaya" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Volunteering / Seva -->
  <section class="w-full min-h-screen relative flex items-center bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] py-20 z-20 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-right">
        <span class="font-label-caps text-2xl md:text-4xl text-[#ffdfba]/80 uppercase tracking-[0.3em] mb-0">Community</span>
        <h2 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[7rem] leading-tight text-white mb-4 drop-shadow-md scroll-anim scroll-reveal-text anim-delay-1">
          Volunteer <span class="italic font-['EB_Garamond'] text-[#ffdfba]">Seva</span>
        </h2>
        <p class="font-body-md text-xl md:text-2xl text-white/90 leading-relaxed mb-6 scroll-anim scroll-fade-right anim-delay-2">
          Selfless service is the highest form of worship. Join our community of dedicated volunteers to help manage events, prepare meals, and maintain the sanctuary.
        </p>
        <button class="self-start inline-flex items-center justify-center bg-white text-[#7d3c2b] font-label-caps text-sm md:text-base uppercase tracking-wider px-8 py-4 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-500 border-2 border-white/50 scroll-anim scroll-fade-right anim-delay-3">
            Join as Volunteer
        </button>
      </div>
      <div class="w-full lg:w-1/2 relative h-[50vh] lg:h-[80vh] scroll-anim scroll-fade-up anim-delay-2">
        <div class="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
          <img src="/images/volunteer.jpg" alt="Volunteering" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
