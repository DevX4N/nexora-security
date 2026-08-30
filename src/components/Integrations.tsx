"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const integrations = [
  { name: "AWS", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Google Cloud", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Azure", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Kubernetes", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "GitHub", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Docker", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Cloudflare", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Slack", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
  { name: "Okta", icon: "M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" },
];

const integrationIcons: Record<string, React.JSX.Element> = {
  AWS: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  ),
  "Google Cloud": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Azure: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" />
    </svg>
  ),
  Kubernetes: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="2" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="22" y2="12" />
    </svg>
  ),
  GitHub: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Docker: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="10" x2="10" y2="14" />
      <line x1="14" y1="10" x2="14" y2="14" />
    </svg>
  ),
  Cloudflare: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  ),
  Slack: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="13" y="2" width="3" height="8" rx="1.5" />
      <rect x="8" y="14" width="3" height="8" rx="1.5" />
      <rect x="2" y="8" width="8" height="3" rx="1.5" />
      <rect x="14" y="13" width="8" height="3" rx="1.5" />
    </svg>
  ),
  Okta: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function Integrations() {
  const { ref, isInView } = useInView(0.1);
  const reduced = useReducedMotion();

  return (
    <section id="integrations" ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-4">
            Criado para infraestrutura moderna
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Integra-se perfeitamente com as ferramentas e plataformas que sua
            equipe já utiliza.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.4,
                delay: reduced ? 0 : i * 0.05,
              }}
              className="group bg-[#0D1218] border border-white/[0.06] rounded-xl p-5 flex flex-col items-center gap-3 hover:border-[#4F7CFF]/30 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(79,124,255,0.08)] transition-all duration-300"
            >
              <div className="text-[#98A2B3] group-hover:text-[#4F7CFF] transition-colors duration-300">
                {integrationIcons[integration.name]}
              </div>
              <span className="text-sm font-medium text-[#98A2B3] group-hover:text-[#F7F9FC] transition-colors duration-300">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
