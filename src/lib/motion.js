/**
 * lib/motion.js
 * Centralized Framer Motion presets — single source of truth for all
 * spring configs, easing curves, and scroll-reveal variants across the site.
 * Matches Framer's default physics engine behaviour as closely as possible.
 */

// ─── Spring configs ────────────────────────────────────────────────────────

/** Fast, punchy spring — buttons, icon hovers, card lift, pill toggles */
export const snappySpring = {
  type: 'spring',
  stiffness: 350,
  damping: 25,
  mass: 0.8,
};

/** Smooth, weighted spring — modals, accordion expands, menu drawers */
export const gentleSpring = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 1,
};

/** Very slow rise — hero portrait entrance, large full-screen reveals */
export const heroSpring = {
  type: 'spring',
  stiffness: 55,
  damping: 20,
  mass: 1.1,
};

// ─── Easing curves ─────────────────────────────────────────────────────────

/** Quint ease-out — non-spring scroll fades, opacity transitions */
export const easeOutQuint = [0.22, 1, 0.36, 1];

/** Expo ease-out — fast start, long tail (used by Framer natively) */
export const easeOutExpo = [0.16, 1, 0.3, 1];

// ─── Scroll-reveal variants ────────────────────────────────────────────────

/**
 * sectionContainer — parent wrapper for any staggered grid section.
 * Apply to the grid wrapper element; children use sectionItem.
 */
export const sectionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/**
 * sectionItem — individual child inside a sectionContainer.
 * Used for: project cards, workflow steps, bento cards, service cards.
 */
export const sectionItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutQuint,
    },
  },
};

/**
 * fadeUp — standalone element fade-up (section headers, labels).
 * Not part of a stagger group.
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutQuint },
  },
};

// ─── Standard viewport config ──────────────────────────────────────────────

/** Default viewport: trigger once, when 20% of element is visible */
export const viewport = { once: true, amount: 0.2 };

// ─── Interactive micro-interaction shorthands ──────────────────────────────

/** Standard button / pill hover + tap */
export const buttonHover = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.97 },
  transition: snappySpring,
};

/** Card lift on hover */
export const cardHover = {
  whileHover: { y: -6 },
  transition: snappySpring,
};

/** FAQ accordion content expand/collapse */
export const accordionContent = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.35, ease: easeOutExpo },
};

/** FAQ icon rotation (+ → × at 45°) */
export const accordionIcon = (isOpen) => ({
  animate: { rotate: isOpen ? 45 : 0 },
  transition: snappySpring,
});
