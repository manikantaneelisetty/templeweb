export const servicesHtml = `
<div class="fixed inset-0 texture-overlay z-50"></div>
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface/80 backdrop-blur-md border-b border-secondary/10 shadow-sm transition-all duration-300 ease-in-out">
<div class="max-w-container_max_width mx-auto flex justify-between items-center px-gutter py-4">
<a class="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed tracking-tight" href="#">Sanctuary</a>
<div class="hidden md:flex space-x-8 items-center">
<a class="text-secondary dark:text-secondary-fixed border-b-2 border-secondary pb-1 font-body-md text-body-md" href="#">Home</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md text-body-md hover:opacity-80 transition-opacity" href="#">About</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md text-body-md hover:opacity-80 transition-opacity" href="#">Darshan</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md text-body-md hover:opacity-80 transition-opacity" href="#">Events</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md text-body-md hover:opacity-80 transition-opacity" href="#">Donate</a>
<a class="text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-body-md text-body-md hover:opacity-80 transition-opacity" href="#">Contact</a>
</div>
<button class="hidden md:flex bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-caps text-label-caps hover:opacity-90 transition-opacity">
                Plan Your Visit
            </button>
<button class="md:hidden text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">menu</span>
</button>
</div>
</nav>
<main>
<!-- 1. Hero Section -->
<section class="relative h-[819px] min-h-[600px] flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover" data-alt="A cinematic, wide-angle shot of a serene ancient temple at golden hour. The sky is painted in warm hues of terracotta and bronze. Soft, glowing light washes over intricately carved stone pillars. The atmosphere is peaceful, spiritual, and inviting, reflecting a tactile, editorial aesthetic with deep shadows and warm highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMlO7j24h0f4Id1yI_cGF77LVK4oGL3M1h4bQX-pmfUNuKuGp5Yu6uDkkSVUJNt5v31jVSXD2sipO2iZji3puCsuVBo4ZJd934Ewn04eGC8Byfn7OvJuM0-xu0QdVvi5zHftOvUa0Op3onOPBpLqNeXUDOE-1zZJpthTrB-qYcK48Go96yIh6i3nGdjl2-K0nYPOXuMsFp5bSIMtg8LHUpji6z9-eyRb-1KyTBzvK1KHTu7FOgHxP9"/>
<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-surface"></div>
</div>
<div class="relative z-10 text-center px-gutter max-w-4xl mx-auto mt-20">
<span class="font-label-caps text-label-caps text-secondary-fixed-dim uppercase tracking-[0.2em] block mb-4">Welcome to the Divine</span>
<h1 class="font-display-lg text-display-lg md:text-display-lg text-white mb-6 drop-shadow-lg">Awaken Your Spirit</h1>
<p class="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-10 text-shadow">Find peace, purpose, and community in the heart of our sacred sanctuary.</p>
<button class="bg-primary text-white px-8 py-4 rounded-full font-label-caps text-label-caps hover:bg-primary/90 transition-colors shadow-lg">
                    Discover More
                </button>
</div>
</section>
<!-- 2. Icon Row (Overlapping Hero) -->
<section class="relative z-20 max-w-container_max_width mx-auto px-gutter -mt-24 mb-32">
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<!-- Card 1 -->
<div class="bg-surface-container-lowest p-6 rounded-xl border border-secondary/10 glow-shadow hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center group cursor-pointer">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-3xl text-secondary group-hover:text-on-primary-container" style="font-variation-settings: 'FILL' 0;">visibility</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 text-[20px]">Daily Darshan</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Join our morning prayers</p>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest p-6 rounded-xl border border-secondary/10 glow-shadow hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center group cursor-pointer">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-3xl text-secondary group-hover:text-on-primary-container" style="font-variation-settings: 'FILL' 0;">volunteer_activism</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 text-[20px]">Book Seva</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Offer your dedicated service</p>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest p-6 rounded-xl border border-secondary/10 glow-shadow hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center group cursor-pointer">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-3xl text-secondary group-hover:text-on-primary-container" style="font-variation-settings: 'FILL' 0;">monetization_on</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 text-[20px]">Donate</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Support the sanctuary</p>
</div>
<!-- Card 4 -->
<div class="bg-surface-container-lowest p-6 rounded-xl border border-secondary/10 glow-shadow hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center group cursor-pointer">
<div class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-3xl text-secondary group-hover:text-on-primary-container" style="font-variation-settings: 'FILL' 0;">map</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-2 text-[20px]">How to Reach</h3>
<p class="font-body-md text-body-md text-on-surface-variant text-sm">Plan your holy journey</p>
</div>
</div>
</section>
<!-- 3. The Sacred Journey -->
<section class="max-w-container_max_width mx-auto px-gutter py-16 md:py-24 mb-12">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
<div class="order-2 md:order-1 flex flex-col justify-center">
<span class="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">Our Heritage</span>
<h2 class="font-headline-md text-headline-md md:text-[40px] text-on-surface mb-6 leading-tight">The Sacred Journey of the Soul</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                        For centuries, Temple Sanctuary has stood as a beacon of hope and spiritual awakening. Nestled amidst tranquil landscapes, it offers a refuge from the chaos of modern life. Here, every stone tells a story, and every chant resonates with the eternal truths.
                    </p>
<blockquote class="border-l-4 border-secondary pl-6 py-2 my-6">
<p class="font-headline-sm text-headline-sm text-secondary-fixed-variant italic">"In the silence of the sanctuary, the deepest truths are spoken."</p>
</blockquote>
<div class="mt-4">
<button class="border border-secondary text-secondary px-6 py-3 rounded-full font-label-caps text-label-caps hover:bg-surface-container transition-colors">
                            Read Our Story
                        </button>
</div>
</div>
<div class="order-1 md:order-2 relative">
<div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
<img class="w-full h-full object-cover" data-alt="A close-up, highly detailed editorial photograph of a monk in terracotta robes walking meditatively along a sunlit stone corridor. The lighting is warm and dramatic, casting long shadows. The scene evokes a sense of deep peace, timelessness, and tactile warmth, characteristic of a high-end spiritual retreat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK1SBkPoaKw7z1lPGFrKj4wSnaMZdW9C6HmVlzo2mco6paC_p1qUrfxSpxUw91jb720nwrYpivKpFjBoj4mLTRPTtOwZmtDjfcoNqwpG3sOhcVCNzbJpPKVEW0tZ_qqxDJj2bfybWTCrgmWTQt9p90qJ8TNQZ_1XJz-5y4LcIYDu-TFVMEWSXF0zbRRwBOZfGuiUMw--_jlp7F4CItOlaMUgJfPCVIn2u6sprcskYlDdqMs7l-wXkl"/>
</div>
<!-- Decorative background element -->
<div class="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-secondary-fixed/30 rounded-2xl z-0 blur-2xl"></div>
</div>
</div>
</section>
<!-- 4. Experience the Silence (Full width image/video placeholder) -->
<section class="w-full py-16 bg-surface-container-low relative">
<div class="max-w-container_max_width mx-auto px-gutter relative z-10">
<div class="aspect-video w-full rounded-2xl overflow-hidden shadow-xl relative group">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A wide, sweeping landscape view of the temple grounds at dawn, shrouded in a soft, ethereal mist. The colors are muted tones of bronze, soft peach, and terracotta. The aesthetic is serene, minimalistic, and profoundly peaceful, conveying a high-end, meditative atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvTELC6BkzQSqO9o97wH86FSh8i51bkaHhzH1Nlyl8P4iiqGV46qcaAgWmoFuwo-6igKR4GICcNqnQf3nicNEcuTydyF_tChOLK7OZiiOd74kdKNR1alv2EHFSPGGTZihUrygKi-spweZXo8ubpWhS5A5ITFhCXklgudHVXQ_s84h7-jEJHk861N689xaGTE_VvUX0vLOOoWhcjh9RWVlumz1J85O27C_Vz_cREuyDnTo8REZ-U2Aj"/>
<div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<button class="w-20 h-20 bg-surface/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</button>
</div>
</div>
<div class="text-center mt-12">
<h2 class="font-headline-md text-headline-md text-on-surface mb-4">Experience the Silence</h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">A visual journey through the daily rhythms and sacred rituals that bring the sanctuary to life.</p>
</div>
</div>
</section>
<!-- 5. Sacred Stones Deep-Dive -->
<section class="max-w-container_max_width mx-auto px-gutter py-16 md:py-24 bg-red-50">
<div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
<div class="relative">
<div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
<img alt="Ancient carvings on sacred stones" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1W3GMs9vbYWig3uopGe_6YT0waOMX-a214PDAGpV4-rtJ-8Fgn6IrRyEcQrbWPh9bvxOCkhlgG3ES6_PkDMITveRXTsnOBMRYy68uDcXOnf_KMhnZJhbut7e4SNf3NAkOz1Qie4U5chfXiTGKBsOyXbptTlRRmVy-uSGk-3DovGa33rU6s0GLQxPTpBLorixUBQ5QB6Ks9YGQjF1KZDVw1F0l5bH47BcIJCn7SHwVuze8xSUqp9H2axl3g"/>
</div>
<div class="absolute -top-8 -right-8 w-2/3 h-2/3 bg-secondary-container/20 rounded-2xl z-0 blur-2xl"></div>
</div>
<div class="flex flex-col justify-center">
<span class="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-4 block">The Divine Stones</span>
<h2 class="font-headline-md text-headline-md md:text-[40px] text-on-surface mb-8 leading-tight">Architecture of the Divine</h2>
<div class="space-y-6">
<div>
<h3 class="font-headline-sm text-headline-sm text-secondary mb-2">Granite Pillars</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Carved by master artisans, these towering pillars stand as testaments to enduring faith, grounding the sanctuary in strength.</p>
</div>
<div>
<h3 class="font-headline-sm text-headline-sm text-secondary mb-2">Sanctum Sandstone</h3>
<p class="font-body-md text-body-md text-on-surface-variant">The warm, porous stone of the inner sanctum absorbs centuries of chanted mantras, radiating a profound spiritual energy.</p>
</div>
<div>
<h3 class="font-headline-sm text-headline-sm text-secondary mb-2">Lotus Marble Floors</h3>
<p class="font-body-md text-body-md text-on-surface-variant">Cool to the touch, the pristine white marble path guides pilgrims towards the deity, symbolizing purity and spiritual awakening.</p>
</div>
</div>
</div>
</div>
</section>
<!-- 6. Expanded Spiritual Services -->
<section class="w-full py-20 md:py-32 bg-secondary-fixed/10 relative overflow-hidden">
<div class="max-w-container_max_width mx-auto px-gutter relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
<!-- Left Column: Immersive Visual -->
<div class="lg:col-span-7 relative">
<div class="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50">
<img alt="Spiritual Seva Activities" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp0whB6FG5givX-1S7ETEpuEg8zSAvctedQ1Vn-RIvlfPZ2dI8GhhVaq2iIfz35FF2XThCgFvutkfUZdarERrxxoEcRllk0ApXJjLsqspb20VRG5PwckB4OEvZxt_KSHtqe_HoMT6SgSHcBfaLWgQFHF34G72nB3-3QkExiGRWDyRdGhsVmM2ld7J4_QizPMVotqzCR5AYsWM9EtrykBXeEqLgL3Exb-bJRNqnRFtjTpzd_wJLzYDi"/>
</div>
<!-- Decorative Floating Element -->
<div class="absolute -bottom-8 -right-8 bg-surface p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-secondary/10">
<p class="font-headline-sm text-secondary italic mb-2">"Service to humanity is service to the Divine."</p>
<span class="font-label-caps text-primary uppercase tracking-widest">- Sacred Wisdom</span>
</div>
</div>
<!-- Right Column: Service Descriptions -->
<div class="lg:col-span-5">
<div class="mb-12">
<span class="font-label-caps text-secondary tracking-widest uppercase mb-4 block">Our Offerings</span>
<h2 class="font-headline-md text-headline-md md:text-[40px] text-on-surface mb-6 leading-tight">Spiritual Services</h2>
<p class="font-body-lg text-on-surface-variant">Participate in sacred rituals and noble causes that uplift the community and nourish the soul.</p>
</div>
<div class="space-y-8">
<!-- Service 1 -->
<div class="flex gap-6 group">
<div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
<img alt="Annadanam Icon" class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1U83yt5G2r38PgE9NjqM3IWIlR0Y4qHlXRw-khCED4p4iIajYhA2dzsqn_b5qvi0qV_JxPAUdL9QA2qtxiOKecOFh2psLIGityZLJIzm3y4RhMaT6Z8JvdqzdI4ykwAkEEQYkcRPt7Rnxg2_Q1ZVheLKDQRjepM-h_Pbo8-ZArGuDWBDMT0979kNllNqXTnBL69Ow04QihwViCXtlYbf2679w6F2XB0HvxsRalLyroZ8oaSkrxJy9Xf3tQ"/>
</div>
<div>
<h3 class="font-headline-sm text-on-surface mb-2">Annadanam</h3>
<p class="font-body-md text-on-surface-variant mb-2">The sacred offering of food to devotees and those in need, sustaining the body and spirit.</p>
<a class="text-primary font-label-caps uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
</div>
<!-- Service 2 -->
<div class="flex gap-6 group">
<div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
<img alt="Archana Icon" class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WsdjrgTx9DV-K6AJEaIjetrqpUdHXDBhbel51jGM6-2KwDwl5oy_DJ-FnO-ynphJEigsaBMxphrrF1It9oU1g8yaTVljqr8GWHizvmiHEMMiVwNNcbbTIOWY8-JS6pw5FOcHgme2VCIS4xvl1Ac57ps0LYI5fJK-RRsJR7KtfhBn7Ucby2hf31UdKdmFbZK7XpJujh7ylbDGLxOr8cIeQ5mXk-VEAwVkfyVilUSSxjP06pnjNCa79c1Mo"/>
</div>
<div>
<h3 class="font-headline-sm text-on-surface mb-2">Archana</h3>
<p class="font-body-md text-on-surface-variant mb-2">Personalized prayers and offerings made to the deities for health, prosperity, and peace.</p>
<a class="text-primary font-label-caps uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
</div>
<!-- Service 3 -->
<div class="flex gap-6 group">
<div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
<img alt="Gau Seva Icon" class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VXoS31p9WXvS06PCiTADCP0T0A7KUNWX5vvycWpV4yxzfHClcrlEtR8wD0kUtBlfTHU3ycRGNBM8cNR9I8zU4Yi312LHCbsFKERZVJRbt-dOTaPKj4Jeh513xiacyzi2Z-Q9TSWRRBejJHgmGEvD3eKbkE9E5UyiIZtUPLwhUF0NnU8AH2BYEEr7t_ERq6NgaFbMlZiW8m96CxxUfP49_k1DfCNyCUVnE5fUlcE5rdHDhiLZZ_uYWj0g"/>
</div>
<div>
<h3 class="font-headline-sm text-on-surface mb-2">Gau Seva</h3>
<p class="font-body-md text-on-surface-variant mb-2">Dedicated care and protection for sacred cows, a practice deeply rooted in our tradition.</p>
<a class="text-primary font-label-caps uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Subtle Gold Background Glow -->
<div class="absolute top-1/2 left-0 w-[600px] h-[600px] bg-secondary-fixed/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 z-0"></div>
</section>
<!-- 7. Support Our Mission -->
<section class="max-w-container_max_width mx-auto px-gutter py-20 md:py-28">
<div class="bg-surface-container rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
<!-- Background decorative element -->
<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div class="w-full md:w-1/2 relative z-10">
<span class="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">Community Support</span>
<h2 class="font-headline-md text-headline-md md:text-[40px] text-on-surface mb-6">Support Our Mission</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Why Your Contribution Matters: Every donation helps us maintain the sanctity of the temple, continue our charitable services, and keep our doors open to all seekers of peace.
            </p>
<p class="font-body-md text-body-md text-on-surface-variant italic">
                Your generosity is the foundation of our sanctuary's future.
            </p>
</div>
<div class="w-full md:w-1/2 relative z-10">
<div class="bg-surface-container-lowest p-8 rounded-2xl shadow-xl border border-secondary/10">
<h3 class="font-headline-sm text-headline-sm text-on-surface mb-6 text-center">Make a Contribution</h3>
<div class="grid grid-cols-2 gap-4 mb-6">
<button class="py-3 px-4 rounded-xl border border-secondary/30 hover:border-primary hover:bg-primary/5 transition-colors font-headline-sm text-headline-sm text-on-surface-variant focus:border-primary focus:bg-primary/10">\$50</button>
<button class="py-3 px-4 rounded-xl border-2 border-primary bg-primary/5 font-headline-sm text-headline-sm text-primary">\$100</button>
<button class="py-3 px-4 rounded-xl border border-secondary/30 hover:border-primary hover:bg-primary/5 transition-colors font-headline-sm text-headline-sm text-on-surface-variant focus:border-primary focus:bg-primary/10">\$250</button>
<button class="py-3 px-4 rounded-xl border border-secondary/30 hover:border-primary hover:bg-primary/5 transition-colors font-headline-sm text-headline-sm text-on-surface-variant focus:border-primary focus:bg-primary/10">\$500</button>
</div>
<div class="mb-6 relative">
<span class="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-headline-sm">\$</span>
<input class="w-full pl-8 pr-4 py-3 rounded-xl border border-secondary/30 bg-transparent focus:ring-2 focus:ring-primary focus:border-primary font-body-md text-on-surface" placeholder="Custom Amount" type="number"/>
</div>
<button class="w-full bg-[#E2725B] text-white py-4 rounded-xl font-label-caps text-label-caps tracking-widest hover:bg-[#c9624e] transition-colors shadow-lg">
                    DONATE NOW
                </button>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-surface-container-low dark:bg-surface-container-lowest border-t border-secondary/20 w-full mt-24">
<div class="max-w-container_max_width mx-auto px-gutter py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="col-span-1 md:col-span-1">
<a class="font-headline-md text-headline-md text-primary dark:text-primary-fixed block mb-6" href="#">Sanctuary</a>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/70 mb-6">
                    A serene retreat for spiritual awakening and inner peace, grounded in timeless traditions.
                </p>
<p class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant/70 text-sm">
                    © 2024 Temple Sanctuary. All Rights Reserved.
                </p>
</div>
<div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-4 text-[18px]">Explore</h4>
<ul class="space-y-3 font-body-md text-body-md">
<li><a class="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-secondary transition-colors duration-200" href="#">Social Mission</a></li>
<li><a class="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-secondary transition-colors duration-200" href="#">Volunteer</a></li>
<li><a class="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-secondary transition-colors duration-200" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-4 text-[18px]">Legal</h4>
<ul class="space-y-3 font-body-md text-body-md">
<li><a class="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-secondary transition-colors duration-200" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant dark:text-on-surface-variant/70 hover:text-secondary transition-colors duration-200" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 class="font-headline-sm text-headline-sm text-on-surface mb-4 text-[18px]">Connect</h4>
<div class="flex space-x-4">
<a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">mail</span>
</a>
<a class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">share</span>
</a>
</div>
</div>
</div>
</footer>
`;
