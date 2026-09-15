const fs = require("fs");
const path = require("path");

const newNav = `<!-- Navigation -->
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
</nav>`;

const dir = "d:/templeweb/src/lib/templates";
const files = fs.readdirSync(dir);

files.forEach(file => {
    if (file.endsWith(".ts")) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, "utf-8");
        
        // Match from <!-- Navigation --> or <!-- TopNavBar --> up to </nav> or </header>
        const regex = /<!-- (Navigation|TopNavBar) -->[\s\S]*?(<\/nav>|<\/header>)/;
        if (regex.test(content)) {
            content = content.replace(regex, newNav);
            fs.writeFileSync(filePath, content);
            console.log("Updated", file);
        } else {
            console.log("Could not find nav block in", file);
        }
    }
});

