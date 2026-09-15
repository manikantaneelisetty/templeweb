const fs = require("fs");

let about = fs.readFileSync("d:/templeweb/src/lib/templates/aboutHtml.ts", "utf-8");
about = about.replace("<!-- Section 1: The Divine Presence & The Keepers (Pujaris) -->\n  <section class=\"w-full", "<!-- Section 1: The Divine Presence & The Keepers (Pujaris) -->\n  <section id=\"divine-presence\" class=\"w-full");
about = about.replace("<!-- Section 3: Rules to Participate -->\n  <section class=\"w-full", "<!-- Section 3: Rules to Participate -->\n  <section id=\"guidelines\" class=\"w-full");
about = about.replace("<!-- Section 4: Services Provided -->\n  <section class=\"w-full", "<!-- Section 4: Services Provided -->\n  <section id=\"about-services\" class=\"w-full");
fs.writeFileSync("d:/templeweb/src/lib/templates/aboutHtml.ts", about);

let darshan = fs.readFileSync("d:/templeweb/src/lib/templates/darshanHtml.ts", "utf-8");
darshan = darshan.replace("<!-- Section 2: Timings -->\n  <section class=\"w-full", "<!-- Section 2: Timings -->\n  <section id=\"timings\" class=\"w-full");
darshan = darshan.replace("<!-- Section 3: Special Guidelines -->\n  <section class=\"w-full", "<!-- Section 3: Special Guidelines -->\n  <section id=\"special\" class=\"w-full");
fs.writeFileSync("d:/templeweb/src/lib/templates/darshanHtml.ts", darshan);

let gallery = fs.readFileSync("d:/templeweb/src/lib/templates/galleryHtml.ts", "utf-8");
gallery = gallery.replace("<!-- Section 2: Unique Photos -->\n  <section class=\"w-full", "<!-- Section 2: Unique Photos -->\n  <section id=\"unique-photos\" class=\"w-full");
gallery = gallery.replace("<!-- Section 3: Festival Times (Differences) -->\n  <section class=\"w-full", "<!-- Section 3: Festival Times (Differences) -->\n  <section id=\"festivals\" class=\"w-full");
gallery = gallery.replace("<!-- Section 4: Extra Information / Past to Present -->\n  <section class=\"w-full", "<!-- Section 4: Extra Information / Past to Present -->\n  <section id=\"past-present\" class=\"w-full");
fs.writeFileSync("d:/templeweb/src/lib/templates/galleryHtml.ts", gallery);

let services = fs.readFileSync("d:/templeweb/src/lib/templates/servicesHtml.ts", "utf-8");
services = services.replace("<!-- Section 2: Annadanam -->\n  <section class=\"w-full", "<!-- Section 2: Annadanam -->\n  <section id=\"annadanam\" class=\"w-full");
services = services.replace("<!-- Section 3: Medical Dispensary -->\n  <section class=\"w-full", "<!-- Section 3: Medical Dispensary -->\n  <section id=\"medical\" class=\"w-full");
services = services.replace("<!-- Section 4: Vedic Vidyalaya -->\n  <section class=\"w-full", "<!-- Section 4: Vedic Vidyalaya -->\n  <section id=\"vidyalaya\" class=\"w-full");
services = services.replace("<!-- Section 5: Volunteering / Seva -->\n  <section class=\"w-full", "<!-- Section 5: Volunteering / Seva -->\n  <section id=\"volunteer\" class=\"w-full");
fs.writeFileSync("d:/templeweb/src/lib/templates/servicesHtml.ts", services);

