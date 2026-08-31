"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const beforeItems = [
  "Ferramentas desconectadas e dados isolados",
  "Milhares de alertas sem filtro",
  "Processos de investigação manuais",
  "Pouca visibilidade dos ativos",
  "Resposta lenta a incidentes",
];

const afterItems = [
  "Visão centralizada de segurança",
  "Riscos priorizados com contexto",
  "Workflows de investigação automatizados",
  "Visibilidade completa dos ativos",
  "Resposta em minutos, não horas",
];

export default function BeforeAfter() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-4">
            A transformação da segurança
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Veja como equipes evoluem suas operações de segurança com a Nexora.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: reduced ? 0.01 : 0.5,
              delay: reduced ? 0 : 0.2,
            }}
            className="bg-[#0D1218] border border-white/[0.06] rounded-2xl p-7 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#FF4F4F]/60" />
              <span className="text-sm font-medium text-[#98A2B3]">
                Antes da Nexora
              </span>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: reduced ? 0.01 : 0.3,
                    delay: reduced ? 0 : 0.3 + i * 0.08,
                  }}
                  className="flex items-start gap-3"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF4F4F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="shrink-0 mt-0.5 opacity-60"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span className="text-[#98A2B3]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: reduced ? 0.01 : 0.5,
              delay: reduced ? 0 : 0.3,
            }}
            className="bg-[#0D1218] border border-[#4F7CFF]/20 rounded-2xl p-7 md:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#34D399]" />
              <span className="text-sm font-medium text-[#34D399]">
                Depois da Nexora
              </span>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: reduced ? 0.01 : 0.3,
                    delay: reduced ? 0 : 0.4 + i * 0.08,
                  }}
                  className="flex items-start gap-3"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="shrink-0 mt-0.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[#F7F9FC]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
