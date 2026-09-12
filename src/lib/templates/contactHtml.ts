export const contactHtml = `
<!-- Navigation (TopNavBar) -->
<nav class="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ease-in-out">
<div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
<a class="font-headline-md text-headline-md tracking-widest text-primary" href="/">SANCTUARY</a>
<div class="hidden md:flex gap-8 items-center">
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="/home">Home</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">About</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="/darshan">Darshan</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="/events">Events</a>
<a class="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300" href="/donate">Donate</a>
<a class="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="/contact">Contact</a>
</div>
<a class="hidden md:inline-block px-6 py-3 bg-primary text-on-primary font-label-md text-label-md hover:bg-[#3A3A3A] transition-all duration-300 transform hover:-translate-y-0.5" href="/visit">Visit</a>
<!-- Mobile Menu Toggle -->
<button class="md:hidden text-primary">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</nav>
<main class="pt-[120px]">
<!-- Hero Section -->
<section class="relative w-full min-h-[614px] flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap">
<div class="max-w-container-max mx-auto text-center z-10 w-full">
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary slide-up mb-6">Connect with the Sanctuary</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto slide-up delay-100">
                    Reach out to our guides for spiritual guidance, visit inquiries, or simply to share your thoughts. We welcome all seekers with open hearts.
                </p>
</div>
<div class="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
<img class="w-full h-full object-cover" data-alt="A serene, minimalist spiritual sanctuary background with soft, diffused sunlight filtering through large architectural arches. The scene is bathed in high-key, ethereal white and cream tones, evoking a profound sense of peace and divine clarity. Subtle dust motes float in the gentle light rays. The overall aesthetic is clean, modern, and deeply calming." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnwNhC18QabZgthVDkBHWVMOtHq3g1VGqspuP_EgIOe74jweKaVmOWLC-oT1MvaMaBUt91XckZEgDBzbDSk5ZqYpnABiCeudaMBARFAdxAYq87GtnK6jfoKt7Hyprryzea08yyXXf72SMjVm1S9Kx1h2Vz-iQjTDnbxno5hYXoHemt_2N2yrTTwX2ggrrdOz8RcVcPZZvo1QSFJ8akear9rHpxQ84LFVby_ljCll9lXAXidJLW0ISf"/>
</div>
</section>
<!-- Contact Bento Grid -->
<section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap slide-up delay-200">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Form Area (Left) -->
<div class="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 relative">
<h2 class="font-headline-md text-headline-md text-primary mb-8">Send a Message</h2>
<form class="space-y-8">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="flex flex-col">
<label class="font-label-md text-label-md text-on-surface-variant mb-2" for="name">NAME</label>
<input class="input-minimal w-full font-body-md text-body-md py-2" id="name" name="name" placeholder="Your full name" type="text"/>
</div>
<div class="flex flex-col">
<label class="font-label-md text-label-md text-on-surface-variant mb-2" for="email">EMAIL</label>
<input class="input-minimal w-full font-body-md text-body-md py-2" id="email" name="email" placeholder="your@email.com" type="email"/>
</div>
</div>
<div class="flex flex-col">
<label class="font-label-md text-label-md text-on-surface-variant mb-2" for="subject">SUBJECT</label>
<input class="input-minimal w-full font-body-md text-body-md py-2" id="subject" name="subject" placeholder="How can we help?" type="text"/>
</div>
<div class="flex flex-col">
<label class="font-label-md text-label-md text-on-surface-variant mb-2" for="message">MESSAGE</label>
<textarea class="input-minimal w-full font-body-md text-body-md py-2 resize-none" id="message" name="message" placeholder="Write your message here..." rows="4"></textarea>
</div>
<button class="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md hover:bg-[#3A3A3A] transition-all duration-300 transform hover:-translate-y-0.5 mt-8 inline-flex items-center gap-2" type="submit">
                            SEND MESSAGE
                            <span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</form>
</div>
<!-- Info & Map Area (Right) -->
<div class="lg:col-span-5 flex flex-col gap-gutter">
<!-- Contact Details Card -->
<div class="bg-surface-container p-8 md:p-12 h-full flex flex-col justify-center border-l-4 border-secondary-fixed">
<div class="space-y-8">
<div>
<h3 class="font-label-md text-label-md text-on-surface-variant mb-3">OFFICE HOURS</h3>
<p class="font-body-lg text-body-lg text-primary">Mon-Sun, 6:00 AM – 8:00 PM</p>
</div>
<div>
<h3 class="font-label-md text-label-md text-on-surface-variant mb-3">DIRECT INQUIRIES</h3>
<p class="font-body-lg text-body-lg text-primary mb-1">hello@sanctuary.org</p>
<p class="font-body-lg text-body-lg text-primary">+91 40 2345 6789</p>
</div>
<div>
<h3 class="font-label-md text-label-md text-on-surface-variant mb-3">LOCATION</h3>
<p class="font-body-lg text-body-lg text-primary leading-relaxed">
                                    Spiritual Sanctuary<br/>
                                    Jubilee Hills, Phase III<br/>
                                    Hyderabad, Telangana 500033
                                </p>
</div>
</div>
</div>
</div>
<!-- Map Span Full -->
<div class="lg:col-span-12 h-[400px] bg-surface-container-low border border-outline-variant/30 mt-gutter relative overflow-hidden group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity" data-location="Hyderabad" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEJE-CbXU0ikrqcs4eRBhw62zKF9I2bRjA2rfMKaMt898zVQXZEf0hvdKimDWCA5yQWY3r2wlyxIwT27nsZbnTSVP_tQV95Rj7cFa4qEI9yOhJib9jf5v9EunIqLV1yhgqQZUKIH_uRx9kOoBa02Z72Og7Ku5-ZJ5f2O0Am46iHwUpWbly3tpajbfF8z6cIkxTMbDA6eLHnAlDNMnBcE8AYLha7pw_hot55Y5-JvF0AGQnqVRK5VuG"/>
<div class="absolute inset-0 bg-primary/5 pointer-events-none"></div>
<!-- Map Pin -->
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary flex flex-col items-center drop-shadow-md">
<span class="material-symbols-outlined text-[40px] drop-shadow-lg" data-icon="location_on" data-weight="fill">location_on</span>
<div class="bg-surface px-3 py-1 font-label-md text-label-md text-primary mt-2 shadow-sm whitespace-nowrap">SANCTUARY</div>
</div>
</div>
</div>
</section>
<!-- FAQ Section -->
<section class="max-w-[800px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap slide-up delay-300">
<div class="text-center mb-16">
<h2 class="font-headline-lg md:font-headline-lg text-headline-lg text-primary">Visitor Guidelines</h2>
<div class="w-16 h-px bg-secondary-fixed mx-auto mt-6"></div>
</div>
<div class="space-y-6">
<!-- FAQ Item 1 -->
<div class="border-b border-secondary-fixed pb-6">
<h3 class="font-headline-sm text-headline-sm text-primary mb-3">What is the dress code?</h3>
<p class="font-body-md text-body-md text-on-surface-variant">We ask visitors to wear modest, comfortable clothing. Shoulders and knees should be covered as a sign of respect for the sacred space.</p>
</div>
<!-- FAQ Item 2 -->
<div class="border-b border-secondary-fixed pb-6">
<h3 class="font-headline-sm text-headline-sm text-primary mb-3">Do I need to book in advance?</h3>
<p class="font-body-md text-body-md text-on-surface-variant">General visits do not require booking. However, if you wish to participate in guided meditation sessions or special darshan, prior registration is highly recommended.</p>
</div>
<!-- FAQ Item 3 -->
<div class="border-b border-secondary-fixed pb-6">
<h3 class="font-headline-sm text-headline-sm text-primary mb-3">Is photography allowed?</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Photography is permitted in the outer gardens. To maintain the sanctity and focus of the inner meditation halls, all electronic devices must be turned off before entering.</p>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-section-gap bg-tertiary-container text-tertiary-fixed-dim py-section-gap fade-in">
<div class="flex flex-col md:flex-row justify-between items-start w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
<div class="flex flex-col gap-4">
<span class="font-headline-sm text-headline-sm text-tertiary-fixed">SANCTUARY</span>
<p class="font-body-md text-body-md max-w-sm text-on-tertiary-container">A space for divine clarity and quiet contemplation in the modern world.</p>
</div>
<div class="flex flex-col md:flex-row gap-8 md:gap-16">
<div class="flex flex-col gap-4">
<a class="font-body-md text-body-md text-tertiary-fixed-dim hover:text-surface-bright transition-opacity duration-300" href="/privacy">Privacy Policy</a>
<a class="font-body-md text-body-md text-tertiary-fixed-dim hover:text-surface-bright transition-opacity duration-300" href="/terms">Terms of Service</a>
<a class="font-body-md text-body-md text-tertiary-fixed-dim hover:text-surface-bright transition-opacity duration-300" href="/volunteer">Volunteer</a>
</div>
</div>
</div>
<div class="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-16 pt-8 border-t border-outline-variant/10">
<p class="font-body-md text-body-md text-on-tertiary-container">© 2024 Spiritual Sanctuary. All Rights Reserved.</p>
</div>
</footer>
`;
