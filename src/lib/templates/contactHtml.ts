export const contactHtml = `
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

  <!-- Section 1: Hero & Contact Info -->
  <section class="w-full min-h-screen relative flex items-center bg-surface py-20 z-10 overflow-hidden">
    <div class="w-full h-full px-margin-mobile lg:px-margin-desktop flex flex-col lg:flex-row gap-12 lg:gap-16 items-center z-10 relative">
      <div class="w-full lg:w-1/2 flex flex-col justify-center scroll-anim scroll-fade-left">
        <span class="font-label-caps text-2xl md:text-4xl text-tertiary-fixed-dim uppercase tracking-[0.3em] mb-0">Get in Touch</span>
        <h1 class="font-display-lg text-7xl md:text-[6.5rem] lg:text-[8rem] leading-tight mb-2 text-on-background drop-shadow-sm hero-reveal anim-delay-1">
          Contact <span class="text-tertiary-fixed-dim italic font-['EB_Garamond']">Us</span>
        </h1>
        <p class="font-body-md text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-8 max-w-2xl hero-fade-up anim-delay-2">
          We welcome your inquiries, feedback, and presence. Reach out to the temple administration for any assistance.
        </p>
        
        <div class="flex flex-col gap-6 scroll-anim scroll-fade-left anim-delay-3">
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-3xl text-on-tertiary-container">location_on</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-2xl text-on-background">Location</h3>
              <p class="text-on-surface-variant text-lg">123 Sacred Path, Banjara Hills, Hyderabad 500034</p>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-3xl text-on-tertiary-container">phone</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-2xl text-on-background">Phone</h3>
              <p class="text-on-surface-variant text-lg">+91 98765 43210</p>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 rounded-2xl bg-tertiary-container/50 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-3xl text-on-tertiary-container">mail</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-2xl text-on-background">Email</h3>
              <p class="text-on-surface-variant text-lg">info@templesanctuary.org</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="w-full lg:w-1/2 relative scroll-anim scroll-fade-up anim-delay-2">
        <div class="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 lg:p-12 rounded-[3rem] shadow-2xl border border-surface-variant/30">
          <h3 class="font-headline-lg text-3xl text-on-background mb-6">Send a Message</h3>
          <form class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <label class="font-label-caps uppercase tracking-wider text-sm text-on-surface-variant">Name</label>
                <input type="text" class="w-full bg-surface-container-highest border border-outline/50 rounded-xl px-4 py-3 focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed transition-colors" placeholder="Your Name">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-label-caps uppercase tracking-wider text-sm text-on-surface-variant">Email</label>
                <input type="email" class="w-full bg-surface-container-highest border border-outline/50 rounded-xl px-4 py-3 focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed transition-colors" placeholder="your@email.com">
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-label-caps uppercase tracking-wider text-sm text-on-surface-variant">Message</label>
                <textarea rows="4" class="w-full bg-surface-container-highest border border-outline/50 rounded-xl px-4 py-3 focus:outline-none focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed transition-colors" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" class="mt-2 w-full bg-tertiary-fixed text-on-tertiary-fixed py-4 rounded-xl font-label-caps uppercase tracking-wider text-base shadow-md hover:bg-tertiary-fixed-dim hover:shadow-lg transition-all duration-300">
                Submit
            </button>
          </form>
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
