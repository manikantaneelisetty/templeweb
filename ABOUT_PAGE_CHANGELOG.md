# About Page Re-engineering Changelog

This document serves as a comprehensive log of the UI/UX enhancements, bug fixes, root cause analyses, and solutions implemented on the `/about` page of the Temple Sanctuary application.

---

## 1. Initial Implementation & Content Structuring
- **Goal**: Build a new massive About page using existing `nano banana` style image aesthetics and a 4-section layout.
- **Action**: Created `aboutHtml.ts` with 4 dedicated semantic sections: *The Sanctum*, *The Origins*, *Pilgrim Guidelines*, and *Selfless Service*. Cloned the navigation and footer style directly from the Home page logic.

## 2. 100% Viewport Adaptation (Full-screen immersion)
- **Problem**: The user wanted sections to truly fill the screen 100% in height and width.
- **Solution**: Refactored the container heights to enforce `min-h-screen` across the board. Changed the composition from standard document flow into aggressive 50/50 split-screen flex layouts to ensure typography and images forcefully occupied the full `vh` (Viewport Height). Background opacity watermark images were temporarily introduced.

## 3. Visual Cleanup & De-cluttering
- **Bug/Issue**: The user noticed harsh lines dissecting the screen and disliked the watermark background images and tilted photo animations.
- **Root Cause**: Thick `border-4` utility classes were creating a rigid separation between the flex columns. `opacity-20` absolute divs were muddying the background colors.
- **Solution**: Completely stripped out background opacity layers, `border-4` on all image cards, and the `rotate-2` hover states. Exchanged them for seamless `gap-16` spacing, ultra-smooth `rounded-[3rem]` borders, clean shadows, and stable `hover:scale-[1.02]` interactions. 

## 4. The 3-Image Masonry Hero Redesign
- **Goal**: Re-align the Hero section to feature uniquely aligned multiple images (3) and completely different text placement.
- **Solution**: Transitioned text to a massive, perfectly centered header. Converted the bottom half of the Hero section into a 3-image staggered masonry layout (Left shifted down, Center massive, Right shifted up) for a premium, museum-like visual.

## 5. The Advanced "Traveling Image" Scroll Mechanism
- **Goal**: Animate one of the 3 Hero images so it physically detaches and travels down the page into Section 2 while scrolling, shrinking and growing dynamically.
- **Root Cause/Complexity**: Standard CSS cannot easily animate width/height dynamically linked exactly to scroll positions across different DOM parents.
- **Solution**: Engineered a robust Vanilla JavaScript FLIP-style (First, Last, Invert, Play) scroll interpolator. 
  - Created a transparent `startSlot` in the Hero and an `endSlot` in Section 2.
  - Injected a `fixed` clone of the image that uses `getBoundingClientRect()` to calculate exactly where it should be.
  - Used `requestAnimationFrame` to map the `transform`, `width`, and `height` exactly to the user's scroll position, allowing the image to detach, travel, and dock into Section 2.

## 6. Fixing "Racing" Scroll Math & Docking Size
- **Bug/Issue**: The traveling image moved faster than the actual scroll, and the user requested the image to *grow* instead of shrink when docking in Section 2.
- **Root Cause**: The interpolation math calculated `progress` based on raw distance without accounting for the fact that the start slot naturally moves up while scrolling.
- **Solution**: Rewrote the progress interpolator so that `travelStart` strictly begins *only* when the Hero slot hits the top of the viewport. Before that threshold, `progress = 0`, forcing the fixed image to stay flawlessly glued (1:1 tracking) inside the Hero section. We also modified the Section 2 slot to be `w-1/2` and `h-[80vh]` ensuring the image physically grows when docking.

## 7. Fixing the "Blank Screen on Reload" (Hydration Bug)
- **Bug/Issue**: Text animations were taking too long. Crucially, upon reloading the page, the screen was blank until the user interacted/scrolled. 
- **Root Cause**: The React Next.js router injects `aboutHtml.ts` via `dangerouslySetInnerHTML`. Because the Hero section elements were hidden (`opacity: 0` via `.scroll-anim`), they required the injected JavaScript `IntersectionObserver` to unhide them. However, React DOM hydration and script execution timing meant the observer sometimes failed to attach immediately on first paint, leaving everything invisible.
- **Solution**: 
  - **Above-the-fold safety**: Stripped the JS `IntersectionObserver` entirely from the Hero section. Replaced it with pure CSS `@keyframes` that execute immediately on DOM parse, guaranteeing the Hero text appears instantly upon reload.
  - **Performance**: Retained the `IntersectionObserver` for below-the-fold elements but aggressively sped up the CSS transitions from `1.2s` down to `0.6s` to make them feel highly responsive and snappy.
  - **Memory Leak Fix**: Added `observer.unobserve(entry.target)` so animations trigger beautifully once and then stop consuming browser memory.

## 8. Root Cause: Hidden Text & React Script Execution
- **Problem**: Elements below the fold (like "Walking the Sacred Path") remained completely hidden and never faded in.
- **Root Cause**: The HTML template used classes (scroll-reveal-text, scroll-fade-left) that set opacity: 0 by default. They relied on an inline <script> tag at the bottom of the template to attach an IntersectionObserver and add an is-visible class. However, because React's dangerouslySetInnerHTML does not execute <script> tags by default for security reasons, the JavaScript never ran. Thus, the text remained permanently trapped in its hidden CSS state.
- **Solution**: Updated ScreenRenderer.tsx with a useEffect hook that explicitly targets any <script> tags injected via dangerouslySetInnerHTML, clones them, and re-appends them to the DOM. This forces the browser to evaluate the script, initializing the IntersectionObserver and properly triggering all reveal animations across the entire page.
