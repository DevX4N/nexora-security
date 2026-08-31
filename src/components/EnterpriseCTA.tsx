"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

export default function EnterpriseCTA() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="bg-[#0D1218] border border-white/[0.06] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] mb-4">
            Segurança construída ao redor da sua infraestrutura.
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto mb-8">
            Cada ambiente é diferente. Fale com nossa equipe de segurança e
            descubra como a Nexora pode proteger o seu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-[#4F7CFF] hover:bg-[#6B93FF] rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,124,255,0.3)] text-center"
            >
              Falar com segurança
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-[#98A2B3] hover:text-[#F7F9FC] border border-white/[0.08] hover:border-white/[0.15] rounded-xl transition-all duration-200 text-center"
            >
              Ver documentação
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
