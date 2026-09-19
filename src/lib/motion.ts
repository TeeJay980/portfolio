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

// Smooth cubic bezier easing presets
export const easePreset = [0.25, 1, 0.5, 1] as const;
export const smoothEntranceEase = [0.16, 1, 0.3, 1] as const;

// Transition presets
export const smoothTransition: Transition = {
  duration: 0.5,
  ease: easePreset,
};

export const slowTransition: Transition = {
  duration: 0.7,
  ease: easePreset,
};

// Scroll reveal variants with subtle blur & spring entrance
export const scrollRevealVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: smoothEntranceEase,
    },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.2,
};
