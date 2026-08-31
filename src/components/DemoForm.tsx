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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = (form: HTMLFormElement): boolean => {
    const newErrors: Record<string, string> = {};
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const company = form.elements.namedItem("company") as HTMLInputElement;
    const size = form.elements.namedItem("size") as HTMLSelectElement;
    const role = form.elements.namedItem("role") as HTMLSelectElement;

    if (!name.value.trim()) newErrors.name = "Nome é obrigatório";
    if (!email.value.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      newErrors.email = "E-mail inválido";
    }
    if (!company.value.trim()) newErrors.company = "Empresa é obrigatória";
    if (!size.value) newErrors.size = "Selecione o tamanho";
    if (!role.value) newErrors.role = "Selecione o cargo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate(e.currentTarget)) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const fieldError = (name: string) =>
    errors[name] ? (
      <p className="text-xs text-[#FF4F4F] mt-1.5" role="alert">{errors[name]}</p>
    ) : null;

  return (
    <section id="demo" ref={ref} className="py-14 sm:py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-3 sm:mb-4">
              Veja a Nexora em ação.
            </h2>
            <p className="text-base sm:text-lg text-[#98A2B3]">
              Agende uma demonstração personalizada com nossa equipe de segurança.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0D1218] border border-[#34D399]/20 rounded-2xl p-6 sm:p-8 md:p-10 text-center"
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
              noValidate
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : 0.2,
              }}
              className="bg-[#0D1218] border border-white/[0.06] rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    className={`w-full h-12 px-4 bg-[#090D12] border rounded-xl text-[#F7F9FC] placeholder-[#98A2B3]/50 focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 text-base ${errors.name ? "border-[#FF4F4F]" : "border-white/[0.08]"}`}
                    placeholder="João Silva"
                  />
                  {fieldError("name")}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1.5"
                  >
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className={`w-full h-12 px-4 bg-[#090D12] border rounded-xl text-[#F7F9FC] placeholder-[#98A2B3]/50 focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 text-base ${errors.email ? "border-[#FF4F4F]" : "border-white/[0.08]"}`}
                    placeholder="joao@empresa.com"
                  />
                  {fieldError("email")}
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-1.5"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  required
                  className={`w-full h-12 px-4 bg-[#090D12] border rounded-xl text-[#F7F9FC] placeholder-[#98A2B3]/50 focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 text-base ${errors.company ? "border-[#FF4F4F]" : "border-white/[0.08]"}`}
                  placeholder="Empresa Corp"
                />
                {fieldError("company")}
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Tamanho da empresa
                  </label>
                  <select
                    id="size"
                    name="size"
                    required
                    className={`w-full h-12 px-4 bg-[#090D12] border rounded-xl text-[#F7F9FC] focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 appearance-none text-base ${errors.size ? "border-[#FF4F4F]" : "border-white/[0.08]"}`}
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
                  {fieldError("size")}
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium mb-1.5"
                  >
                    Cargo
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className={`w-full h-12 px-4 bg-[#090D12] border rounded-xl text-[#F7F9FC] focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] outline-none transition-all duration-200 appearance-none text-base ${errors.role ? "border-[#FF4F4F]" : "border-white/[0.08]"}`}
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
                  {fieldError("role")}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 sm:h-13 px-8 py-3.5 text-base font-medium text-white bg-[#4F7CFF] hover:bg-[#6B93FF] rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,124,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  "Agendar minha demo"
                )}
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
