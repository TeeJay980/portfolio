import type { Transition, Variants } from "framer-motion";

/**
 * Standard Motion Configs replicating Luzia Framer site
 */

// Spring transition preset
export const springPreset: Transition = {
  type: "spring",
  stiffness: 350,
  damping: 25,
  mass: 0.8,
};

// Smooth cubic bezier easing preset
export const easePreset = [0.25, 1, 0.5, 1] as const;

// Transition presets
export const smoothTransition: Transition = {
  duration: 0.5,
  ease: easePreset,
};

export const slowTransition: Transition = {
  duration: 0.7,
  ease: easePreset,
};

// Card nested image zoom variants
export const cardImageVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easePreset,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: easePreset,
    },
  },
};

// Card icon / button translate variants
export const cardArrowVariants: Variants = {
  rest: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easePreset,
    },
  },
  hover: {
    x: 2,
    y: -2,
    transition: {
      duration: 0.3,
      ease: easePreset,
    },
  },
};

// Staggered container animations
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Fade up item animations
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easePreset,
    },
  },
};
