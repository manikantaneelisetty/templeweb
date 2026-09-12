export const homeHtml = `
<!-- TopNavBar -->
<nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-6 bg-surface/90 border-b border-surface-variant/50 backdrop-blur-md">
<a class="font-headline-md text-base md:text-2xl text-on-background hover:text-orange-500 transition-colors duration-300 uppercase tracking-widest hover:opacity-80 transition-opacity duration-300" href="#">
        Temple Sanctuary
    </a>
<div class="hidden md:flex items-center gap-gutter font-label-caps text-label-caps uppercase tracking-wider">
<a aria-current="page" class="text-on-background hover:text-orange-500 transition-colors duration-300 border-b-2 border-tertiary-fixed-dim pb-1 translate-y-[-2px] transition-transform duration-300" href="#">Home</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-on-background hover:text-orange-500 transition-colors duration-300 transition-colors duration-300 hover:opacity-80" href="#">About</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-on-background hover:text-orange-500 transition-colors duration-300 transition-colors duration-300 hover:opacity-80" href="#">Darshan</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-on-background hover:text-orange-500 transition-colors duration-300 transition-colors duration-300 hover:opacity-80" href="#">Events</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-on-background hover:text-orange-500 transition-colors duration-300 transition-colors duration-300 hover:opacity-80" href="#">Donate</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-on-background hover:text-orange-500 transition-colors duration-300 transition-colors duration-300 hover:opacity-80" href="#">Contact</a>
</div>
<button class="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-[2px] transition-all duration-500 border-2 border-tertiary-fixed-dim/50 ring-2 ring-tertiary-fixed/20">
        Visit
    </button>
<button aria-label="Menu" class="md:hidden text-on-background hover:text-orange-500 transition-colors duration-300">
<span class="material-symbols-outlined" style="font-size: 28px;">menu</span>
</button>
</nav>
<main>
<!-- Hero Section -->
<section class="min-h-[90vh] pt-40 pb-56 px-margin-mobile md:px-margin-desktop text-center bg-surface relative flex flex-col justify-center items-center bg-cover bg-center" style="background-image: url('/images/hero.jpg');">
<div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
<div class="max-w-4xl fade-in-up relative z-10 text-on-primary visible">
<h1 class="font-display-lg-mobile md:font-display-lg text-4xl md:text-6xl leading-tight-mobile md:text-4xl md:text-6xl leading-tight mb-6 text-tertiary-fixed drop-shadow-md">
                A Sanctuary for the Soul
            </h1>
<p class="font-body-lg text-base mb-10 max-w-2xl mx-auto stagger-1 text-on-primary/90">
                Where Tradition Meets Tranquility
            </p>
<button class="bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300 stagger-2 border border-tertiary-fixed-dim/20">
                Visit Us
            </button>
</div>
</section>
<!-- Feature Cards Section -->
<section class="w-full relative z-20 bg-gradient-to-br from-[#4a2522] via-[#7d3c2b] to-[#a45437] pt-20 pb-32 px-6 md:px-16 rounded-b-[2rem] md:rounded-b-[4rem] shadow-[0_30px_50px_rgba(0,0,0,0.4)] overflow-hidden mb-24 -mt-1">
  
  <!-- Background Script Overlay -->
  <div class="absolute bottom-8 right-6 md:bottom-12 md:right-16 opacity-25 pointer-events-none select-none">
    <span class="font-['EB_Garamond'] italic text-3xl md:text-[5rem] text-[#ffdfba] whitespace-nowrap tracking-wider drop-shadow-lg">you are always welcome here!</span>
  </div>

  <div class="w-full relative z-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      
      <!-- Card 1 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/card_darshan.jpg" alt="Daily Darshan" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Darshan</span>
          <h3 class="font-headline-lg text-2xl md:text-3xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Daily Darshan</h3>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/card_worship.jpg" alt="Book Seva" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Worship</span>
          <h3 class="font-headline-lg text-2xl md:text-3xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Book Seva</h3>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/gallery4.jpg" alt="Donate" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Give</span>
          <h3 class="font-headline-lg text-2xl md:text-3xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Donate</h3>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/journey.jpg" alt="Volunteer" class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90"></div>
        
        <div class="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
          <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors duration-300">Get Involved</span>
          <h3 class="font-headline-lg text-2xl md:text-3xl leading-tight text-white group-hover:text-[#ffdfba] transition-colors duration-300">Volunteer</h3>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- About the Temple Section -->
<section class="min-h-screen w-full flex flex-col justify-center py-24 px-6 md:px-16 bg-gradient-to-br from-[#954a3e] via-[#954a3e]/90 to-[#954a3e]/70 overflow-hidden relative">
  <div class="w-full mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
    
    <!-- Left: Image with Decorative Elements -->
    <div class="w-full lg:w-[40%] relative group fade-in-up visible flex justify-center">
      <div class="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div class="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 aspect-[4/5] w-full max-w-[600px]">
        <img src="/images/gallery1.jpg" alt="Temple Architecture" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000">
      </div>
      <!-- Decorative floating badge -->
      <div class="absolute -bottom-8 -right-4 lg:-right-8 bg-[#7a3c32] p-6 lg:p-8 rounded-[2rem] shadow-2xl border border-white/20 hidden md:block z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <p class="font-['EB_Garamond'] text-2xl lg:text-3xl text-white mb-1">100+ Years</p>
        <p class="font-label-caps text-xs tracking-widest text-white/80 uppercase">Of Spiritual Heritage</p>
      </div>
    </div>

    <!-- Right: Content -->
    <div class="w-full lg:w-[50%] flex flex-col justify-center fade-in-up stagger-1 visible">
      <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 mb-4 block">About Our Sanctuary</span>
      <h2 class="font-display-lg text-3xl lg:text-5xl leading-tight text-white mb-6">A Timeless Haven of Peace and Devotion</h2>
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

<!-- Divine Stones Section -->
<section class="relative min-h-[80vh] flex flex-col lg:flex-row overflow-hidden border-y border-surface-variant/30 bg-red-50">

  <!-- Content Container -->
  <div class="relative z-10 w-full w-full flex flex-col lg:flex-row">
    
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
        <h2 class="font-display-lg text-3xl lg:text-5xl leading-tight text-on-background hover:text-orange-500 transition-colors duration-300 mb-4">The Divine Stones</h2>
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
<!-- Shiva Quote Section -->
<section class="w-full relative z-20 py-0 overflow-hidden bg-[#0a0a0a]">
    <img src="/images/shiva_quote.jpg" alt="Where stillness meets strength, transformation begins" class="w-full h-auto object-cover">
</section>
<!-- Services & Seva Section -->
<section class="w-full relative z-20 pt-24 pb-32 px-6 md:px-16 overflow-hidden" style="background-color: #412726;">
  <div class="w-full flex flex-col lg:flex-row items-center gap-16">
    
    <!-- Left: Text and Services Content -->
    <div class="w-full lg:w-1/2 flex flex-col items-start fade-in-up visible">
      <span class="font-label-caps text-sm tracking-[0.2em] uppercase text-white/80 mb-6 font-bold">SACRED OFFERINGS</span>
      <h2 class="font-display-lg text-4xl lg:text-6xl leading-tight text-white mb-8" >
        Spiritual Services
      </h2>
      
      <!-- Block for paragraph, features, and button -->
      <div class="w-full">
        <p class="font-body-lg text-lg text-white/90 leading-relaxed mb-8">
          Experience divine grace through our sacred services. Engage in ancient rituals, compassionate acts, and community offerings designed to uplift the soul and foster universal harmony.
        </p>
        
        <!-- The 4 Services as small list -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-white text-2xl opacity-80">restaurant</span>
            <div>
              <h4 class="font-headline-sm text-white text-lg mb-1">Annadanam</h4>
              <p class="font-body-md text-white/70 text-sm">Sacred food distribution daily.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-white text-2xl opacity-80">local_fire_department</span>
            <div>
              <h4 class="font-headline-sm text-white text-lg mb-1">Archana</h4>
              <p class="font-body-md text-white/70 text-sm">Personalized ritual offerings.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-white text-2xl opacity-80">menu_book</span>
            <div>
              <h4 class="font-headline-sm text-white text-lg mb-1">Vidyadaanam</h4>
              <p class="font-body-md text-white/70 text-sm">Supporting spiritual education.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-white text-2xl opacity-80">pets</span>
            <div>
              <h4 class="font-headline-sm text-white text-lg mb-1">Gau Seva</h4>
              <p class="font-body-md text-white/70 text-sm">Caring for the sacred cows.</p>
            </div>
          </div>
        </div>

        <button class="bg-white text-[#412726] font-label-caps text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 font-bold">
          Explore All Services
        </button>
      </div>
    </div>

    <!-- Right: Large Rounded Image -->
    <div class="w-full lg:w-1/2 fade-in-up stagger-2 visible flex justify-center lg:justify-end">
      <div class="w-full max-w-[600px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        <img src="/images/services.jpg" alt="Spiritual Services" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000">
      </div>
    </div>

  </div>
</section>
<!-- Book a Seva Info Section -->
<section class="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden py-20 px-margin-mobile md:px-margin-desktop mt-12">
    <!-- God Background Image with Vibrant Overlay -->
    <div class="absolute inset-0 z-0">
        <img alt="Book a Seva Deity" class="w-full h-full object-cover object-center transform scale-105" src="/images/book-seva-god.jpg">
        <!-- Overlay to match #412726 -->
        <div class="absolute inset-0 bg-[#412726]/60 mix-blend-multiply"></div>
        <div class="absolute inset-0 bg-[#412726]/70"></div>
    </div>

    <!-- Centered Content -->
    <div class="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center fade-in-up visible">
        <div class="inline-flex items-center gap-3 mb-4">
            <span class="w-12 h-[2px] bg-white/80 rounded-full"></span>
            <span class="font-label-caps text-white tracking-widest uppercase font-semibold drop-shadow-md">Divine Offering</span>
            <span class="w-12 h-[2px] bg-white/80 rounded-full"></span>
        </div>
        
        <h2 class="font-display-lg text-4xl md:text-6xl text-white mb-6 drop-shadow-xl font-bold">Book a Seva</h2>
        
        <p class="font-body-lg text-white mb-10 text-xl md:text-2xl leading-relaxed max-w-2xl drop-shadow-lg font-medium">
            Participating in Seva is a profound way to connect with the divine. Offer your prayers remotely or in person, and receive divine blessings and prasadam at your doorstep.
        </p>
        
        <button class="bg-white text-purple-700 font-label-caps text-label-caps uppercase tracking-wider px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(168,85,247,0.6)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.8)] hover:-translate-y-1 hover:bg-purple-50 transition-all duration-300 font-bold border-2 border-transparent hover:border-purple-200">
            Initiate Booking
        </button>
    </div>
</section>
<!-- Gallery Preview Section -->
<section class="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
<div class="w-full">
<div class="text-center mb-16 fade-in-up visible">
<h2 class="font-display-lg text-4xl md:text-6xl leading-tight text-on-background hover:text-orange-500 transition-colors duration-300 mb-4">Glimpses of the Sanctuary</h2>
<div class="h-1 w-24 bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim mx-auto rounded-full"></div>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div class="aspect-square bg-surface border border-surface-variant overflow-hidden rounded-2xl shadow-sm fade-in-up stagger-1 visible">
<img alt="Temple view 1" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="/images/gallery1.jpg">
</div>
<div class="aspect-square bg-surface border border-surface-variant overflow-hidden rounded-2xl shadow-sm fade-in-up stagger-2 visible">
<img alt="Temple view 2" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="/images/gallery2.jpg">
</div>
<div class="aspect-square bg-surface border border-surface-variant overflow-hidden rounded-2xl shadow-sm fade-in-up stagger-3 visible">
<img alt="Temple view 3" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="/images/gallery3.jpg">
</div>
<div class="aspect-square bg-surface border border-surface-variant overflow-hidden rounded-2xl shadow-sm fade-in-up stagger-4 visible">
<img alt="Temple view 4" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="/images/gallery4.jpg">
</div>
</div>
<div class="text-center fade-in-up visible">
<button class="border-2 border-tertiary-fixed-dim text-on-background hover:text-orange-500 transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors duration-300">
                    View Full Gallery
                </button>
</div>
</div>
</section>
<!-- Festivals & Events Timeline Section -->
<section class="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-bright">
<div class="w-full">
<div class="text-center mb-16 fade-in-up visible">
<h2 class="font-display-lg text-4xl md:text-6xl leading-tight text-on-background hover:text-orange-500 transition-colors duration-300 mb-4">Festivals &amp; Events</h2>
<div class="h-1 w-24 bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim mx-auto rounded-full"></div>
</div>
<div class="max-w-3xl mx-auto">
<!-- Timeline Item 1 -->
<div class="flex flex-col md:flex-row gap-8 mb-12 fade-in-up stagger-1 visible">
<div class="md:w-1/4 text-left md:text-right pt-1">
<span class="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-wider">Sept 5, 2024</span>
</div>
<div class="hidden md:flex flex-col items-center">
<div class="w-4 h-4 rounded-full bg-gradient-to-br from-tertiary-fixed to-tertiary-fixed-dim mt-1 shadow-sm"></div>
<div class="w-px h-full bg-surface-variant mt-2"></div>
</div>
<div class="md:w-3/4 pb-8 border-b border-surface-variant md:border-none bg-surface p-6 rounded-2xl shadow-md premium-card">
<h3 class="font-headline-sm text-sm md:text-base text-on-background hover:text-orange-500 transition-colors duration-300 mb-3 flex items-center gap-2"><span class="material-symbols-outlined text-tertiary-fixed-dim float-icon">celebration</span>Ganesh Chaturthi Celebration</h3>
<p class="font-body-md text-sm text-on-surface-variant hover:text-orange-500 transition-colors duration-300">Special puja and modak offering ceremony. Join us as we invoke the blessings of the remover of obstacles with a grand community gathering and traditional music.</p>
</div>
</div>
<!-- Timeline Item 2 -->
<div class="flex flex-col md:flex-row gap-8 mb-12 fade-in-up stagger-2 visible">
<div class="md:w-1/4 text-left md:text-right pt-1">
<span class="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-wider">Oct 2, 2024</span>
</div>
<div class="hidden md:flex flex-col items-center">
<div class="w-4 h-4 rounded-full bg-gradient-to-br from-tertiary-fixed to-tertiary-fixed-dim mt-1 shadow-sm"></div>
<div class="w-px h-full bg-surface-variant mt-2"></div>
</div>
<div class="md:w-3/4 pb-8 border-b border-surface-variant md:border-none bg-surface p-6 rounded-2xl shadow-md premium-card">
<h3 class="font-headline-sm text-sm md:text-base text-on-background hover:text-orange-500 transition-colors duration-300 mb-3 flex items-center gap-2"><span class="material-symbols-outlined text-tertiary-fixed-dim float-icon">self_improvement</span>Gandhi Jayanti Peace Meditation</h3>
<p class="font-body-md text-sm text-on-surface-variant hover:text-orange-500 transition-colors duration-300">A full day of silent meditation and spiritual discourses focusing on non-violence, inner peace, and communal harmony.</p>
</div>
</div>
<!-- Timeline Item 3 -->
<div class="flex flex-col md:flex-row gap-8 fade-in-up stagger-3 visible">
<div class="md:w-1/4 text-left md:text-right pt-1">
<span class="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-wider">Oct 31, 2024</span>
</div>
<div class="hidden md:flex flex-col items-center">
<div class="w-4 h-4 rounded-full bg-gradient-to-br from-tertiary-fixed to-tertiary-fixed-dim mt-1 shadow-sm"></div>
<div class="w-px h-full bg-transparent mt-2"></div>
</div>
<div class="md:w-3/4 pb-8 bg-surface p-6 rounded-2xl shadow-md premium-card">
<h3 class="font-headline-sm text-sm md:text-base text-on-background hover:text-orange-500 transition-colors duration-300 mb-3 flex items-center gap-2"><span class="material-symbols-outlined text-tertiary-fixed-dim float-icon">light</span>Diwali Deepotsav</h3>
<p class="font-body-md text-sm text-on-surface-variant hover:text-orange-500 transition-colors duration-300">The festival of lights celebrated with the lighting of 10,000 diyas across the sanctuary grounds, followed by special Maha Aarti.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Support Our Mission Section -->
<section class="w-full relative z-20 py-0 px-0 overflow-hidden bg-surface">
  <div class="w-full flex flex-col md:flex-row overflow-hidden">
    
    <!-- Left side: Image -->
    <div class="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px]">
      <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=1200&q=80" alt="Temple Offerings" class="absolute inset-0 w-full h-full object-cover">
    </div>

    <!-- Right side: Content -->
    <div class="w-full md:w-1/2 bg-gradient-to-r from-[#fedc74] to-[#f6f2e4] p-10 md:p-16 flex flex-col justify-center items-center text-center">
      <div class="fade-in-up relative z-10 visible w-full">
        <h2 class="font-display-lg text-4xl md:text-6xl leading-tight text-[#2d2d2d] mb-6">Support Our Mission</h2>
        <p class="font-body-lg text-base text-[#3d3d3d] mb-12 max-w-md mx-auto">
            Your generous contributions help maintain our sacred spaces and support our community outreach programs.
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-8">
            <button class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-1">&#8377; 500</button>
            <button class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-2">&#8377; 1000</button>
            <button class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-3">&#8377; 2500</button>
            <button class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-4">&#8377; 5000</button>
        </div>
        <div class="pt-8 border-t border-[#2d2d2d]/20 max-w-sm mx-auto">
            <button class="w-full bg-[#111111] text-white font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300">
                Custom Amount
            </button>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
<!-- Footer -->
<footer class="w-full px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between items-start gap-gutter bg-surface-container-lowest text-on-background hover:text-orange-500 transition-colors duration-300 border-t border-surface-variant">
<div class="flex flex-col gap-4">
<div class="font-headline-sm text-sm md:text-base text-on-background hover:text-orange-500 transition-colors duration-300">
            Temple Sanctuary
        </div>
<p class="font-body-md text-sm text-on-surface-variant hover:text-orange-500 transition-colors duration-300 max-w-sm">
            123 Sacred Path, Banjara Hills<br>
            Hyderabad, Telangana 500034<br>
            info@templesanctuary.org
        </p>
</div>
<div class="flex flex-col md:flex-row gap-8 md:gap-16">
<div class="flex flex-col gap-3 font-label-caps text-label-caps uppercase tracking-wider">
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Privacy Policy</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Terms of Service</a>
</div>
<div class="flex flex-col gap-3 font-label-caps text-label-caps uppercase tracking-wider">
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Volunteer</a>
<a class="text-on-surface-variant hover:text-orange-500 transition-colors duration-300 hover:text-tertiary-fixed-dim transition-colors duration-300" href="#">Support</a>
</div>
</div>
<div class="w-full md:w-auto mt-8 md:mt-0 pt-8 md:pt-0 border-t border-surface-variant md:border-none font-body-md text-sm text-on-surface-variant hover:text-orange-500 transition-colors duration-300">
        Â© 2024 Divine Sanctuary Temple. All Rights Reserved.
    </div>
</footer>







`;
