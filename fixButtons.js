const fs = require("fs");
let content = fs.readFileSync("d:/templeweb/src/lib/templates/homeHtml.ts", "utf-8");

// Visit Us
content = content.replace(/<button[^>]*>\s*Visit Us\s*<\/button>/g, `<a href="/darshan" class="inline-block bg-gradient-to-r from-tertiary-fixed to-tertiary-fixed-dim text-on-tertiary-fixed font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-[2px] transition-all duration-300 stagger-2 border border-tertiary-fixed-dim/20">Visit Us</a>`);

// Discover Our History
content = content.replace(/<button[^>]*>\s*Discover Our History\s*<\/button>/g, `<a href="/about#history" class="inline-block bg-white/10 backdrop-blur-md text-white font-label-caps text-sm tracking-[0.1em] uppercase px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#954a3e] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 border border-white/30">Discover Our History</a>`);

// Explore All Services
content = content.replace(/<button[^>]*>\s*Explore All Services\s*<\/button>/g, `<a href="/services" class="inline-block bg-white text-[#412726] font-label-caps text-sm tracking-[0.1em] uppercase px-8 py-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 font-bold">Explore All Services</a>`);

// Initiate Booking
content = content.replace(/<button[^>]*>\s*Initiate Booking\s*<\/button>/g, `<a href="/contact" class="inline-block bg-white text-purple-700 font-label-caps text-label-caps uppercase tracking-wider px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(168,85,247,0.6)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.8)] hover:-translate-y-1 hover:bg-purple-50 transition-all duration-300 font-bold border-2 border-transparent hover:border-purple-200">Initiate Booking</a>`);

// View Full Gallery
content = content.replace(/<button[^>]*>\s*View Full Gallery\s*<\/button>/g, `<a href="/gallery" class="inline-block border-2 border-tertiary-fixed-dim text-on-background hover:text-orange-500 transition-colors duration-300 font-label-caps text-label-caps uppercase tracking-wider px-8 py-4 rounded-full hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-colors duration-300">View Full Gallery</a>`);

fs.writeFileSync("d:/templeweb/src/lib/templates/homeHtml.ts", content);

