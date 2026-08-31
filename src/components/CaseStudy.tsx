"use client";

import { motion } from "framer-motion";
import { useInView, useCountUp, useReducedMotion } from "@/lib/hooks";

function StatNumber({
  value,
  suffix,
  isInView,
  reduced,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
  reduced: boolean;
}) {
  const count = useCountUp(value, 2000, isInView && !reduced);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function CaseStudy() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();

  return (
    <section id="customers" ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="bg-[#0D1218] border border-white/[0.06] rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#5DE4F4] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">Northstar</p>
              <p className="text-xs text-[#98A2B3]">Fintech Global</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] mb-8 max-w-2xl">
            Northstar reduziu incidentes críticos de segurança em 73%.
          </h2>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
            {[
              { value: 73, suffix: "%", label: "menos incidentes críticos" },
              { value: 61, suffix: "%", label: "investigações mais rápidas" },
              { value: 42, suffix: "h", label: "economizadas por mês" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: reduced ? 0.01 : 0.5,
                  delay: reduced ? 0 : 0.2 + i * 0.1,
                }}
              >
                <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                  <StatNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                    reduced={reduced}
                  />
                </div>
                <p className="text-sm text-[#98A2B3]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: reduced ? 0.01 : 0.5,
              delay: reduced ? 0 : 0.5,
            }}
            className="border-l-2 border-[#4F7CFF]/30 pl-6 mb-8"
          >
            <p className="text-lg md:text-xl text-[#98A2B3] italic leading-relaxed mb-4">
              &ldquo;A Nexora deu à nossa equipe de segurança uma visibilidade
              que simplesmente não tínhamos antes. O que costumava levar horas
              agora leva minutos.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#090D12] border border-white/[0.06] flex items-center justify-center text-sm font-medium text-[#4F7CFF]">
                MC
              </div>
              <div>
                <p className="text-sm font-medium">Marcus Chen</p>
                <p className="text-xs text-[#98A2B3]">
                  VP de Segurança, Northstar
                </p>
              </div>
            </div>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
