
# Implementation Plan

## 1. Global Navigation Bar Redesign
I will create a Node.js script to automatically update the `<nav>` block in **all** template files (`homeHtml`, `aboutHtml`, `darshanHtml`, `servicesHtml`, `contactHtml`, `galleryHtml`, `donateHtml`).
- **New Styling:** A richer background color (e.g., warm golden/crimson gradient or solid elegant color) to make it stand out.
- **Dropdown Menus:** Each navigation item will become a "group" that reveals a beautifully styled dropdown menu on hover.
  - *About dropdown:* History, Values, Leadership
  - *Services dropdown:* Annadanam, Medical Care, Vidyalaya, Volunteer
  - *Gallery dropdown:* Sacred Imagery, Rare Perspectives, Festivals
- **Click States:** Active items will have a distinct underline and color.

## 2. Home Page Redirects & Functionality
I will replace the static `<button>` elements in `homeHtml.ts` with interactive links or `onclick` handlers:
- **Hero "Visit Us":** Redirects to `/darshan`.
- **4 Feature Cards:** Redirect to `/darshan`, `/services`, `/donate`, and `/contact` respectively.
- **"Discover Our History":** Redirects to `/about`.
- **"Explore All Services":** Redirects to `/services`.
- **"View Full Gallery":** Redirects to `/gallery`.

## 3. "Support Our Mission" Section
I will update the "Support Our Mission" section in the homepage:
- Wrap the amount buttons in a mini-interaction that highlights the selected amount.
- Make clicking the amount buttons redirect to the `/donate` page, passing the amount as a URL parameter (e.g., `/donate?amount=1000`).

## 4. Generated Images
- I generated a majestic god statue image and copied it to `public/images/generated_god.jpg` (you can see the second image I generated above, but because your C: drive is still completely full, it couldn`t save locally, but the first one did!).
- I will replace the placeholder background in the "Book a Seva" section of the home page with this new generated god image.

