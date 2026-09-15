const fs = require("fs");
let content = fs.readFileSync("d:/templeweb/src/lib/templates/homeHtml.ts", "utf-8");

content = content.replace(
    `<button class="bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300 stagger-2 border border-tertiary-fixed-dim/20">
                Visit Us
            </button>`,
    `<a href="/darshan" class="inline-block bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300 stagger-2 border border-tertiary-fixed-dim/20">
                Visit Us
            </a>`
);

content = content.replace(
    `<div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">`,
    `<div onclick="window.location.href='/darshan'" class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">`
);

content = content.replace(
    `<div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/card_worship.jpg"`,
    `<div onclick="window.location.href='/services#seva'" class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/card_worship.jpg"`
);

content = content.replace(
    `<div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/gallery4.jpg"`,
    `<div onclick="window.location.href='/donate'" class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/gallery4.jpg"`
);

content = content.replace(
    `<div class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/journey.jpg"`,
    `<div onclick="window.location.href='/contact'" class="overlap-card group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl cursor-pointer border border-white/10">
        <img src="/images/journey.jpg"`
);

content = content.replace(
    `<button class="bg-white/10 backdrop-blur-md text-white font-label-caps text-sm tracking-[0.1em] uppercase px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#954a3e] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 border border-white/30">
          Discover Our History
        </button>`,
    `<a href="/about#history" class="inline-block bg-white/10 backdrop-blur-md text-white font-label-caps text-sm tracking-[0.1em] uppercase px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#954a3e] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 border border-white/30">
          Discover Our History
        </a>`
);

content = content.replace(
    `<button class="bg-white text-[#412726] font-label-caps text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 font-bold">
          Explore All Services
        </button>`,
    `<a href="/services" class="inline-block bg-white text-[#412726] font-label-caps text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 font-bold">
          Explore All Services
        </a>`
);

content = content.replace(
    `<img alt="Book a Seva Deity" class="w-full h-full object-cover object-center transform scale-105" src="/images/book-seva-god.jpg">`,
    `<img alt="Book a Seva Deity" class="w-full h-full object-cover object-center transform scale-105" src="/images/generated_god.jpg">`
);

content = content.replace(
    `<button class="bg-white text-purple-700 font-label-caps text-label-caps uppercase tracking-wider px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(168,85,247,0.6)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.8)] hover:-translate-y-1 hover:bg-purple-50 transition-all duration-300 font-bold border-2 border-transparent hover:border-purple-200">
            Initiate Booking
        </button>`,
    `<a href="/contact" class="inline-block bg-white text-purple-700 font-label-caps text-label-caps uppercase tracking-wider px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(168,85,247,0.6)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.8)] hover:-translate-y-1 hover:bg-purple-50 transition-all duration-300 font-bold border-2 border-transparent hover:border-purple-200">
            Initiate Booking
        </a>`
);

content = content.replace(
    `<button class="border-2 border-tertiary-fixed-dim text-on-background hover:text-orange-500 transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors duration-300">
                    View Full Gallery
                </button>`,
    `<a href="/gallery" class="inline-block border-2 border-tertiary-fixed-dim text-on-background hover:text-orange-500 transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors duration-300">
                    View Full Gallery
                </a>`
);

const supportHTML = `
        <div class="flex flex-wrap justify-center gap-4 mb-8" id="donation-buttons">
            <button onclick="window.location.href='/donate?amount=500'" class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-1">&#8377; 500</button>
            <button onclick="window.location.href='/donate?amount=1000'" class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-2">&#8377; 1000</button>
            <button onclick="window.location.href='/donate?amount=2500'" class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-3">&#8377; 2500</button>
            <button onclick="window.location.href='/donate?amount=5000'" class="border-2 border-[#2d2d2d] text-[#2d2d2d] font-label-caps text-label-caps uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#2d2d2d] hover:text-white transition-colors duration-300 stagger-4">&#8377; 5000</button>
        </div>
        <div class="pt-8 border-t border-[#2d2d2d]/20 max-w-sm mx-auto">
            <a href="/donate" class="inline-block w-full bg-[#111111] text-white font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:bg-black hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300 text-center">
                Custom Amount
            </a>
        </div>
`;
content = content.replace(
    /<div class="flex flex-wrap justify-center gap-4 mb-8">[\s\S]*?Custom Amount[\s\S]*?<\/button>\s*<\/div>/,
    supportHTML
);

fs.writeFileSync("d:/templeweb/src/lib/templates/homeHtml.ts", content);
console.log("Updated homeHtml.ts");
