"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const testimonials = [
  {
    name: "Sarah Bennett",
    role: "CISO",
    company: "Vertex",
    initials: "SB",
    quote:
      "A Nexora transformou a forma como nossa equipe de segurança opera. Passamos de reativo para proativo em semanas.",
  },
  {
    name: "Daniel Kim",
    role: "Líder de Segurança",
    company: "Axiom",
    initials: "DK",
    quote:
      "A visibilidade que a Nexora oferece é incomparável. Finalmente temos uma visão completa da nossa superfície de ataque.",
  },
  {
    name: "Laura Martins",
    role: "VP de Engenharia",
    company: "Atlas",
    initials: "LM",
    quote:
      "Nossos desenvolvedores amam. Segurança não é mais um gargalo — é uma vantagem competitiva.",
  },
];

export default function Testimonials() {
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
            Confiado por líderes de segurança
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Ouça as equipes que protegem a infraestrutura mais importante do
            mundo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : i * 0.12,
              }}
              className="bg-[#0D1218] border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-300"
            >
              <p className="text-[#98A2B3] leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#090D12] border border-white/[0.06] flex items-center justify-center text-sm font-medium text-[#4F7CFF]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-[#98A2B3]">
                    {testimonial.role} — {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
