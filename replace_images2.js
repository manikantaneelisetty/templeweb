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

// 4. servicesHtml.ts
updateFile("d:/templeweb/src/lib/templates/servicesHtml.ts", {
    "/images/about_services.jpg": "/images/gen_annadanam.jpg",
    "/images/medical.jpg": "/images/gen_medical.jpg",
    "/images/education.jpg": "/images/gen_vidyalaya.jpg",
    "/images/volunteer.jpg": "/images/gen_festival.jpg"
});

// 5. galleryHtml.ts
updateFile("d:/templeweb/src/lib/templates/galleryHtml.ts", {
    "/images/temple1.jpg": "/images/gen_home_hero.jpg",
    "/images/gods1.jpg": "/images/gen_deity.jpg",
    "/images/unique_angle.jpg": "/images/gen_unique.jpg",
    "/images/festival_day.jpg": "/images/gen_festival.jpg",
    "/images/festival_night.jpg": "/images/gen_annadanam.jpg", // reuse annadanam or history
    "/images/past_present.jpg": "/images/gen_history.jpg"
});

