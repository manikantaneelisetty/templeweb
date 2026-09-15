export const donateHtml = `

<main class="pt-[120px]">
<!-- Hero Section -->
<section class="relative w-full min-h-[614px] flex items-center justify-center overflow-hidden mb-section-gap px-margin-mobile md:px-margin-desktop">
<div class="absolute inset-0 z-0">
<div class="bg-cover bg-center w-full h-full opacity-30" data-alt="A serene, soft-focus view of a sunlit temple courtyard. The light is warm and ethereal, casting long, gentle shadows across ancient stone paving. A minimalist composition focusing on texture, light, and a sense of profound peace and spiritual clarity." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5u1iquNfnCSlyH9gsh98FFN8nVORLThTHkqBMYu9jzlzZ4oYnhJKl_XE8ySkUA_O1sU1H3bdclVK86HEykN6e3o98PcKdYI9Q0j99gx7LthT3EoIP-o9SML8_5mTGICraNTwTFmDfz2RsLuoiHlm4iMHIPeTiCOko6F6TG3vSCtdEcOcMSoNz0B4Hsxgsnd64OjSlvP9UP7EuYCFDCbwd9KT4sNqdjGclIa7T7Coa1sMclt1spIw2')"></div>
<div class="absolute inset-0 bg-gradient-to-b from-surface/50 to-surface"></div>
</div>
<div class="relative z-10 max-w-3xl mx-auto text-center fade-in-up">
<span class="block font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">Support Our Sacred Mission</span>
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">Nurturing the Spirit,<br/>Sustaining the Sanctuary.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
                    Your contribution ensures the continuity of our traditions, the maintenance of our sacred spaces, and the reach of our community outreach programs.
                </p>
</div>
</section>
<!-- Donation Interface Section -->
<section class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Donation Form -->
<div class="lg:col-span-7 fade-in-up" style="transition-delay: 100ms;">
<div class="bg-surface-container-lowest p-8 md:p-12 border border-outline-variant/30 relative overflow-hidden">
<div class="mb-10">
<h2 class="font-headline-md text-headline-md mb-2">Make a Contribution</h2>
<p class="text-on-surface-variant font-body-md text-body-md">Select a cause and an amount to support the sanctuary.</p>
</div>
<!-- Cause Selection -->
<div class="mb-8">
<label class="block font-label-md text-label-md uppercase mb-4 text-on-surface">Select Cause</label>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<label class="cursor-pointer">
<input checked="" class="peer sr-only" name="cause" type="radio"/>
<div class="p-4 border border-outline-variant/50 text-center peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors hover:bg-surface-container">
<span class="font-label-md text-label-md">General</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="cause" type="radio"/>
<div class="p-4 border border-outline-variant/50 text-center peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors hover:bg-surface-container">
<span class="font-label-md text-label-md">Education</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="cause" type="radio"/>
<div class="p-4 border border-outline-variant/50 text-center peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors hover:bg-surface-container">
<span class="font-label-md text-label-md">Food</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="cause" type="radio"/>
<div class="p-4 border border-outline-variant/50 text-center peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors hover:bg-surface-container">
<span class="font-label-md text-label-md">Restoration</span>
</div>
</label>
</div>
</div>
<!-- Amount Selection -->
<div class="mb-8">
<label class="block font-label-md text-label-md uppercase mb-4 text-on-surface">Select Amount</label>
<div class="grid grid-cols-3 md:grid-cols-5 gap-4">
<label class="cursor-pointer">
<input class="peer sr-only" name="amount" type="radio"/>
<div class="py-3 px-2 border border-outline-variant/50 text-center peer-checked:bg-secondary-container peer-checked:border-secondary transition-colors hover:bg-surface-container">
<span class="font-body-md text-body-md">₹500</span>
</div>
</label>
<label class="cursor-pointer">
<input checked="" class="peer sr-only" name="amount" type="radio"/>
<div class="py-3 px-2 border border-outline-variant/50 text-center peer-checked:bg-secondary-container peer-checked:border-secondary transition-colors hover:bg-surface-container">
<span class="font-body-md text-body-md">₹1000</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="amount" type="radio"/>
<div class="py-3 px-2 border border-outline-variant/50 text-center peer-checked:bg-secondary-container peer-checked:border-secondary transition-colors hover:bg-surface-container">
<span class="font-body-md text-body-md">₹2500</span>
</div>
</label>
<label class="cursor-pointer">
<input class="peer sr-only" name="amount" type="radio"/>
<div class="py-3 px-2 border border-outline-variant/50 text-center peer-checked:bg-secondary-container peer-checked:border-secondary transition-colors hover:bg-surface-container">
<span class="font-body-md text-body-md">₹5000</span>
</div>
</label>
<div class="col-span-3 md:col-span-1">
<input class="w-full py-3 px-4 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-primary font-body-md text-body-md transition-colors placeholder:text-on-surface-variant/50" placeholder="Custom" type="text"/>
</div>
</div>
</div>
<!-- Personal Details -->
<div class="mb-10 space-y-6">
<div>
<label class="block font-label-md text-label-md uppercase mb-2 text-on-surface-variant">Full Name</label>
<input class="w-full py-2 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-primary font-body-md text-body-md transition-colors" type="text"/>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label class="block font-label-md text-label-md uppercase mb-2 text-on-surface-variant">Email Address</label>
<input class="w-full py-2 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-primary font-body-md text-body-md transition-colors" type="email"/>
</div>
<div>
<label class="block font-label-md text-label-md uppercase mb-2 text-on-surface-variant">Phone (Optional)</label>
<input class="w-full py-2 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-primary font-body-md text-body-md transition-colors" type="tel"/>
</div>
</div>
</div>
<button class="w-full bg-primary text-on-primary py-4 font-label-md text-label-md uppercase tracking-widest hover:bg-[#3A3A3A] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
<span>Proceed to Donate</span>
<span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span>
</button>
</div>
</div>
<!-- Impact & Transparency Sidebar -->
<div class="lg:col-span-5 space-y-12 mt-12 lg:mt-0 fade-in-up" style="transition-delay: 200ms;">
<!-- Impact Info -->
<div>
<h3 class="font-headline-sm text-headline-sm mb-6 border-b border-secondary-fixed pb-4">The Impact of Giving</h3>
<div class="space-y-6">
<div class="flex items-start gap-4">
<div class="bg-secondary-container p-3 flex-shrink-0">
<span class="material-symbols-outlined text-on-secondary-container">school</span>
</div>
<div>
<h4 class="font-label-md text-label-md uppercase mb-1">Education Fund</h4>
<p class="text-on-surface-variant font-body-md text-body-md">Supports the Gurukul program, providing free education and spiritual training to young scholars.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="bg-secondary-container p-3 flex-shrink-0">
<span class="material-symbols-outlined text-on-secondary-container">restaurant</span>
</div>
<div>
<h4 class="font-label-md text-label-md uppercase mb-1">Food Distribution (Annadanam)</h4>
<p class="text-on-surface-variant font-body-md text-body-md">Funds our daily kitchen which serves thousands of free, nutritious meals to pilgrims and those in need.</p>
</div>
</div>
<div class="flex items-start gap-4">
<div class="bg-secondary-container p-3 flex-shrink-0">
<span class="material-symbols-outlined text-on-secondary-container">architecture</span>
</div>
<div>
<h4 class="font-label-md text-label-md uppercase mb-1">Heritage Restoration</h4>
<p class="text-on-surface-variant font-body-md text-body-md">Contributes to the meticulous preservation of our ancient architecture and sacred art.</p>
</div>
</div>
</div>
</div>
<!-- Transparency Note -->
<div class="bg-surface-container-low p-8 border border-outline-variant/10">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-primary">verified_user</span>
<h4 class="font-headline-sm text-headline-sm">Our Commitment to Transparency</h4>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">
                            We believe that every contribution is a sacred trust. Financial reports are audited annually and are available for public review upon request.
                        </p>
<a class="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase hover:opacity-70 transition-opacity" href="#">
                            View Annual Report
                            <span class="material-symbols-outlined" style="font-size: 16px;">arrow_outward</span>
</a>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full mt-section-gap bg-tertiary-container dark:bg-tertiary-container border-t border-outline-variant/10 fade-in transition-all duration-300">
<div class="flex flex-col md:flex-row justify-between items-start w-full px-margin-mobile md:px-margin-desktop py-12 md:py-section-gap max-w-container-max mx-auto">
<div class="mb-8 md:mb-0">
<div class="font-headline-sm text-headline-sm text-tertiary-fixed mb-4">
                    SANCTUARY
                </div>
<p class="font-body-md text-body-md text-tertiary-fixed-dim">
                    © 2024 Spiritual Sanctuary. All Rights Reserved.
                </p>
</div>
<nav class="flex flex-col md:flex-row gap-6 md:gap-12">
<a class="font-body-md text-body-md text-tertiary-fixed-dim hover:text-surface-bright transition-opacity duration-300" href="#">Privacy Policy</a>
<a class="font-body-md text-body-md text-tertiary-fixed-dim hover:text-surface-bright transition-opacity duration-300" href="#">Terms of Service</a>
<a class="font-body-md text-body-md text-tertiary-fixed-dim hover:text-surface-bright transition-opacity duration-300" href="#">Volunteer</a>
</nav>
</div>
</footer>
<script>
        // Simple Intersection Observer for scroll animations
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in-up').forEach((element) => {
                observer.observe(element);
            });
        });
    </script>
`;
