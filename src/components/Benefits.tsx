"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const benefits = [
  {
    number: "01",
    title: "Monitoramento contínuo",
    description:
      "Monitoramento 24/7 de infraestrutura, aplicações e identidades. Nunca perca uma ameaça.",
  },
  {
    number: "02",
    title: "Alertas baseados em contexto",
    description:
      "Reduza ruído utilizando contexto para priorizar riscos reais sobre falsos positivos.",
  },
  {
    number: "03",
    title: "Resposta automatizada",
    description:
      "Automatize ações de contenção e resposta para neutralizar ameaças em segundos.",
  },
  {
    number: "04",
    title: "Visibilidade unificada",
    description:
      "Veja toda sua postura de segurança em uma única plataforma completa.",
  },
];

export default function Benefits() {
  const { ref, isInView } = useInView(0.1);
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : i * 0.1,
              }}
              className="group bg-[#0D1218] border border-white/[0.06] rounded-2xl p-7 md:p-8 hover:border-white/[0.12] transition-all duration-300"
            >
              <span className="text-sm font-mono text-[#4F7CFF] mb-4 block">
                {benefit.number}
              </span>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-[#98A2B3] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
