"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const companySizes = [
  "1-50",
  "51-200",
  "201-1000",
  "1001-5000",
  "5000+",
];

const roles = [
  "CISO / VP de Segurança",
  "Engenheiro de Segurança",
  "DevOps / Plataforma",
  "Gerente de Engenharia",
  "CTO",
  "Outro",
];

export default function DemoForm() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">
              Veja a Nexora em ação.
            </h2>
            <p className="text-lg text-[#98A2B3]">
              Agende uma demonstração personalizada com nossa equipe de segurança.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0D1218] border border-[#34D399]/20 rounded-2xl p-8 md:p-10 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#34D399]/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Solicitação de demo recebida
              </h3>
              <p className="text-[#98A2B3]">
                Nossa equipe entrará em contato dentro de 24 horas para agendar
                sua demonstração personalizada.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : 0.2,
              }}
              className="bg-[#0D1218] border border-white/[0.06] rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full h-12 px-4 bg-[#090D12] border border-white/[0.08] rounded-xl text-[#F7F9FC] placeholder-[#98A2B3]/50 focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200"
                    placeholder="João Silva"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full h-12 px-4 bg-[#090D12] border border-white/[0.08] rounded-xl text-[#F7F9FC] placeholder-[#98A2B3]/50 focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200"
                    placeholder="joao@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full h-12 px-4 bg-[#090D12] border border-white/[0.08] rounded-xl text-[#F7F9FC] placeholder-[#98A2B3]/50 focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200"
                  placeholder="Empresa Corp"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium mb-2"
                  >
                    Tamanho da empresa
                  </label>
                  <select
                    id="size"
                    name="size"
                    required
                    className="w-full h-12 px-4 bg-[#090D12] border border-white/[0.08] rounded-xl text-[#F7F9FC] focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o tamanho
                    </option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium mb-2"
                  >
                    Cargo
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full h-12 px-4 bg-[#090D12] border border-white/[0.08] rounded-xl text-[#F7F9FC] focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione o cargo
                    </option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-13 px-8 py-3.5 text-base font-medium text-white bg-[#4F7CFF] hover:bg-[#6B93FF] rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,124,255,0.3)]"
              >
                Agendar minha demo
              </button>

              <p className="text-xs text-[#98A2B3] text-center">
                Sem spam. Nossa equipe entrará em contato sobre sua solicitação.
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
