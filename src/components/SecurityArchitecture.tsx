"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const certifications = [
  { name: "SOC 2 Type II", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { name: "ISO 27001", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { name: "GDPR", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { name: "AES-256", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { name: "SAML SSO", icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" },
  { name: "Zero Trust", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
];

const archLayers = [
  { label: "Usuário", sublabel: "Autenticação" },
  { label: "Camada de Identidade", sublabel: "SSO & MFA" },
  { label: "Motor de Segurança", sublabel: "Análise & Resposta" },
  { label: "Camada de Dados Criptografados", sublabel: "AES-256 em repouso" },
];

export default function SecurityArchitecture() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-4">
            Segurança enterprise por design.
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Construído com os mais altos padrões de segurança, conformidade e
            proteção de dados.
          </p>
        </motion.div>

        {/* Certification badges */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-12 md:mb-16 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.4,
                delay: reduced ? 0 : i * 0.08,
              }}
              className="bg-[#0D1218] border border-white/[0.06] rounded-xl p-4 flex flex-col items-center gap-2 text-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4F7CFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              >
                <path d={cert.icon} />
              </svg>
              <span className="text-xs font-medium text-[#98A2B3]">
                {cert.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduced ? 0.01 : 0.5,
            delay: reduced ? 0 : 0.3,
          }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-3">
            {archLayers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: reduced ? 0.01 : 0.4,
                  delay: reduced ? 0 : 0.4 + i * 0.12,
                }}
                className="relative"
              >
                <div className="bg-[#0D1218] border border-white/[0.06] rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{layer.label}</p>
                    <p className="text-xs text-[#98A2B3]">{layer.sublabel}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#4F7CFF]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#4F7CFF]" />
                  </div>
                </div>
                {i < archLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg
                      width="2"
                      height="12"
                      viewBox="0 0 2 12"
                      className="text-[#4F7CFF]/30"
                    >
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
