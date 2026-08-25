"use client";

import { MotionConfig } from "framer-motion";

/**
 * Applies site-wide Framer Motion defaults. `reducedMotion="user"` makes every
 * animation in the tree honour the OS "Reduce motion" setting, which also
 * removes their per-frame cost for users who have it enabled.
 *
 * framer-motion ships no "use client" directive, so this wrapper provides the
 * client boundary — `children` passed in from a server component stay
 * server-rendered.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
