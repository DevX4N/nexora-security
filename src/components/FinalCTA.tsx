"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/hooks";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FinalCTA() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background — subtle depth */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient — centered, low opacity */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%),
              radial-gradient(ellipse 30% 35% at 65% 55%, rgba(93,228,244,0.04) 0%, transparent 60%)
            `,
          }}
        />

        {/* Technical grid — masked */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, black 20%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 55% 50% at 50% 50%, black 20%, transparent 70%)",
          }}
        />

        {/* Network lines — sides only, very subtle */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="100" cy="150" r="1.5" fill="#4F7CFF" opacity="0.06" />
          <circle cx="180" cy="280" r="1" fill="#4F7CFF" opacity="0.04" />
          <circle cx="80" cy="420" r="1.5" fill="#5DE4F4" opacity="0.05" />
          <line x1="100" y1="150" x2="180" y2="280" stroke="#4F7CFF" strokeWidth="0.4" opacity="0.04" />
          <line x1="180" y1="280" x2="80" y2="420" stroke="#5DE4F4" strokeWidth="0.4" opacity="0.03" />

          <circle cx="1340" cy="130" r="1.5" fill="#4F7CFF" opacity="0.06" />
          <circle cx="1260" cy="260" r="1" fill="#5DE4F4" opacity="0.04" />
          <circle cx="1360" cy="400" r="1.5" fill="#4F7CFF" opacity="0.05" />
          <line x1="1340" y1="130" x2="1260" y2="260" stroke="#4F7CFF" strokeWidth="0.4" opacity="0.04" />
          <line x1="1260" y1="260" x2="1360" y2="400" stroke="#5DE4F4" strokeWidth="0.4" opacity="0.03" />
        </svg>

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 35%, rgba(5,7,10,0.4) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="tracking-[-0.03em] mb-6"
          >
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-[#98A2B3] leading-tight">
              Pare de reagir.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#4F7CFF] to-[#5DE4F4] bg-clip-text text-transparent leading-tight mt-1">
              Comece a antecipar.
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-[#98A2B3] max-w-xl mx-auto leading-relaxed mb-10"
          >
            Descubra vulnerabilidades, priorize riscos e neutralize ameaças
            antes que impactem seu negócio.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mb-6">
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-14 px-10 text-base font-medium text-white bg-[#4F7CFF] hover:bg-[#6B93FF] rounded-xl transition-all duration-250 hover:shadow-[0_8px_30px_rgba(79,124,255,0.25)] hover:-translate-y-0.5"
            >
              Agendar demonstração
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-250 group-hover:translate-x-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Microcopy */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#98A2B3]"
          >
            <span className="flex items-center gap-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#34D399"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Sem cartão de crédito
            </span>
            <span className="flex items-center gap-2">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#34D399"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Demo personalizada de 30 minutos
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
