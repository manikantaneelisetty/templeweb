const fs = require("fs");

function updateFile(filename, replacements) {
    let content = fs.readFileSync(filename, "utf-8");
    let original = content;
    for (const [oldImg, newImg] of Object.entries(replacements)) {
        content = content.split(oldImg).join(newImg);
    }
    if (content !== original) {
        fs.writeFileSync(filename, content);
        console.log(`Updated ${filename}`);
    }
}

// 1. homeHtml.ts
updateFile("d:/templeweb/src/lib/templates/homeHtml.ts", {
    "/images/hero.jpg": "/images/gen_home_hero.jpg",
    "/images/card_darshan.jpg": "/images/gen_deity.jpg",
    "/images/card_worship.jpg": "/images/gen_vidyalaya.jpg",
    "/images/journey.jpg": "/images/gen_history.jpg",
    "/images/gallery1.jpg": "/images/gen_festival.jpg",
    "/images/gallery2.jpg": "/images/gen_unique.jpg",
    "/images/gallery3.jpg": "/images/gen_annadanam.jpg"
});

// 2. aboutHtml.ts
updateFile("d:/templeweb/src/lib/templates/aboutHtml.ts", {
    "/images/about_pujaris.jpg": "/images/gen_deity.jpg",
    "/images/about_history.jpg": "/images/gen_history.jpg",
    "/images/about_rules.jpg": "/images/gen_home_hero.jpg",
    "/images/about_services.jpg": "/images/gen_vidyalaya.jpg"
});

// 3. darshanHtml.ts
updateFile("d:/templeweb/src/lib/templates/darshanHtml.ts", {
    "/images/darshan_hero.jpg": "/images/gen_deity.jpg",
    "/images/generated_god.jpg": "/images/gen_deity.jpg", // in case it was used
    "/images/granite.jpg": "/images/gen_home_hero.jpg",
    "/images/lotus.jpg": "/images/gen_festival.jpg"
});

// 4. servicesHtml.ts
updateFile("d:/templeweb/src/lib/templates/servicesHtml.ts", {
    "/images/services.jpg": "/images/gen_home_hero.jpg",
    "/images/gallery3.jpg": "/images/gen_annadanam.jpg",
    "/images/sanctum.jpg": "/images/gen_medical.jpg",
    "/images/granite.jpg": "/images/gen_vidyalaya.jpg",
    "/images/journey.jpg": "/images/gen_festival.jpg"
});

// 5. galleryHtml.ts
updateFile("d:/templeweb/src/lib/templates/galleryHtml.ts", {
    "/images/gallery1.jpg": "/images/gen_festival.jpg",
    "/images/gallery2.jpg": "/images/gen_unique.jpg",
    "/images/gallery3.jpg": "/images/gen_annadanam.jpg",
    "/images/gallery4.jpg": "/images/gen_home_hero.jpg"
});

// 6. contactHtml.ts & donateHtml.ts
updateFile("d:/templeweb/src/lib/templates/contactHtml.ts", {
    "/images/hero.jpg": "/images/gen_home_hero.jpg"
});
updateFile("d:/templeweb/src/lib/templates/donateHtml.ts", {
    "/images/hero.jpg": "/images/gen_annadanam.jpg"
});

