const REM = 16; // px per rem, matches browser default

// Shared interpolation range for ALL fluid sizes.
// Change these two numbers and every size below recalculates in sync.
const MIN_VIEWPORT = 320;  // px, smallest phone width to target
const MAX_VIEWPORT = 1280; // px, viewport width at which scaling stops

/**
 * Generates a `clamp(min, preferred, max)` string.
 * minSizePx / maxSizePx are the font sizes (in px) at MIN_VIEWPORT / MAX_VIEWPORT.
 */
function fluidClamp(minSizePx, maxSizePx, minVw = MIN_VIEWPORT, maxVw = MAX_VIEWPORT) {
    const slope = (maxSizePx - minSizePx) / (maxVw - minVw); // px per px of viewport
    const slopeVw = +(slope * 100).toFixed(4);               // convert to vw units
    const interceptRem = +((minSizePx - slope * minVw) / REM).toFixed(4);
    const minRem = +(minSizePx / REM).toFixed(4);
    const maxRem = +(maxSizePx / REM).toFixed(4);
    return `clamp(${minRem}rem, ${interceptRem}rem + ${slopeVw}vw, ${maxRem}rem)`;
}

/**
 * Alternative for strict resize-text accessibility compliance:
 * interpolates using only rem units (no vw), so it fully respects
 * the user's browser font-size setting at every point, not just the
 * clamp's min/max caps. Trade-off: it no longer tracks true viewport
 * width, only the user's root font size.
 */
function fluidClampRemOnly(minSizePx, maxSizePx) {
    const minRem = +(minSizePx / REM).toFixed(4);
    const maxRem = +(maxSizePx / REM).toFixed(4);
    return `clamp(${minRem}rem, ${((minRem + maxRem) / 2).toFixed(4)}rem, ${maxRem}rem)`;
}

export const typography = {
    // Static scale definitions (fallbacks, discrete breakpoint logic, etc.)
    staticScale: {
        mobile: {
            h1: "1.5rem",    // 24px
            h2: "1.25rem",   // 20px
            h3: "1.125rem",  // 18px
            body: "1rem",    // 16px
            small: "0.75rem" // 12px
        },
        tablet: {
            h1: "2rem",       // 32px
            h2: "1.5rem",     // 24px
            h3: "1.25rem",    // 20px
            body: "1rem",     // 16px
            small: "0.875rem" // 14px
        },
        desktop: {
            h1: "2.5rem",     // 40px
            h2: "1.875rem",   // 30px
            h3: "1.375rem",   // 22px
            body: "1rem",     // 16px
            small: "0.875rem" // 14px
        }
    },

    // Fluid scale — every value generated from the same MIN/MAX_VIEWPORT range
    fluid: {
        h1: fluidClamp(24, 40),     // 24px -> 40px across 320px-1280px
        h2: fluidClamp(20, 30),     // 20px -> 30px
        h3: fluidClamp(18, 22),     // 18px -> 22px
        body: "1rem",               // intentionally static — see note above
        small: fluidClamp(12, 14)   // 12px -> 14px
    },

    // Line height scaling coefficients
    lineHeights: {
        headingTight: 1.2,   // For large structural text (h1, h2)
        headingLoose: 1.375, // For midsize structural text (h3)
        body: 1.5,           // For clean, effortless standard reading text (body)
        article: 1.6         // For long-form text blocks/essays
    }
};

export default typography;