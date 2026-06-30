import type { PropsWithChildren, ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = PropsWithChildren<{
  icon: ReactNode;
  title: string;
  eyebrow?: string;
}>;

export const Section = ({ icon, title, eyebrow, children }: SectionProps) => (
  <motion.section
    className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    viewport={{ once: true, margin: "-80px" }}
  >
    <div className="mb-8 flex size-28 items-center justify-center rounded-full bg-stone-300 text-stone-50 shadow-soft">
      {icon}
    </div>
    {eyebrow ? (
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-300">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-script text-6xl leading-none text-stone-300 sm:text-7xl">
      {title}
    </h2>
    <div className="mt-12 w-full">{children}</div>
  </motion.section>
);
