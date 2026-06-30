import type { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";
import { LeafOrnaments } from "./LeafOrnaments";

type SectionProps = PropsWithChildren<{
  icon: ReactNode;
  title: string;
  eyebrow?: string;
}>;

export const Section = ({ icon, title, eyebrow, children }: SectionProps) => (
  <motion.section
    className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    initial={{ opacity: 0, y: 42 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.28 }}
  >
    <LeafOrnaments position="left" />
    <LeafOrnaments position="right" />
    <div className="section-glow pointer-events-none absolute inset-x-8 top-16 h-px opacity-70" />
    <motion.div
      className="section-icon mb-8 flex size-28 items-center justify-center rounded-full border border-stone-100/20 bg-stone-300/70 text-stone-50 shadow-soft backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {icon}
    </motion.div>
    {eyebrow ? (
      <motion.p
        className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-300"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.18 }}
        viewport={{ once: true }}
      >
        {eyebrow}
      </motion.p>
    ) : null}
    <motion.h2
      className="font-script text-6xl leading-none text-stone-300 sm:text-7xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="mt-12 w-full"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.72, delay: 0.32, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  </motion.section>
);
