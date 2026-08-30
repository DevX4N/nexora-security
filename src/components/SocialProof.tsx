"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const logos = [
  { name: "Axiom", width: 80 },
  { name: "Vertex", width: 85 },
  { name: "Northstar", width: 100 },
  { name: "Momentum", width: 110 },
  { name: "Atlas", width: 70 },
  { name: "Orbit", width: 65 },
];

function LogoIcon({ name }: { name: string }) {
  const icons: Record<string, React.JSX.Element> = {
    Axiom: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12,2 22,20 2,20" />
      </svg>
    ),
    Vertex: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
    Northstar: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
    Momentum: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h16M14 6l6 6-6 6" />
      </svg>
    ),
    Atlas: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
      </svg>
    ),
    Orbit: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function SocialProof() {
  const { ref, isInView } = useInView(0.2);
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-16 md:py-20 border-t border-white/[0.04]">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="text-center text-sm text-[#98A2B3] mb-10"
        >
          Confiado por equipes de segurança que protegem milhões de usuários
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.4,
                delay: reduced ? 0 : i * 0.08,
              }}
              className="flex items-center gap-2 text-[#98A2B3]/40 hover:text-[#98A2B3]/70 transition-colors duration-300"
            >
              <LogoIcon name={logo.name} />
              <span className="text-base font-semibold tracking-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
