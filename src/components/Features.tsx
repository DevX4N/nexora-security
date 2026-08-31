"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const features = [
  {
    title: "Detecção de ameaças em tempo real",
    description:
      "Identifique comportamentos suspeitos e ameaças antes que se transformem em incidentes.",
    visual: "threat",
  },
  {
    title: "Conheça sua superfície de ataque",
    description:
      "Descubra automaticamente serviços, aplicações, APIs e ativos expostos.",
    visual: "surface",
  },
  {
    title: "Corrija o que realmente importa",
    description:
      "Priorize vulnerabilidades considerando contexto, exposição e impacto real no negócio.",
    visual: "risk",
  },
];

function ThreatVisual({ reduced }: { reduced: boolean }) {
  const steps = [
    { time: "14:32", text: "Autenticação suspeita", color: "#FBBF24" },
    { time: "14:32", text: "Comportamento analisado", color: "#5DE4F4" },
    { time: "14:33", text: "Sessão bloqueada", color: "#FF4F4F" },
  ];

  return (
    <div className="space-y-3">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduced ? 0.01 : 0.4,
            delay: reduced ? 0 : i * 0.2,
          }}
          className="flex items-center gap-3"
        >
          <span className="text-xs text-[#98A2B3] font-mono w-10 shrink-0">
            {step.time}
          </span>
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: step.color }}
          />
          <span className="text-sm text-[#98A2B3]">{step.text}</span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reduced ? 0.01 : 0.4,
          delay: reduced ? 0 : 0.6,
        }}
        className="pt-3 border-t border-white/[0.04]"
      >
        <span className="text-xs font-medium text-[#34D399]">
          Ameaça neutralizada
        </span>
      </motion.div>
    </div>
  );
}

function SurfaceVisual({ reduced }: { reduced: boolean }) {
  const nodes = [
    { label: "Cloud", x: 50, y: 18 },
    { label: "API", x: 82, y: 45 },
    { label: "Banco de Dados", x: 50, y: 78 },
    { label: "Endpoint", x: 18, y: 45 },
    { label: "Identidade", x: 50, y: 45 },
  ];

  return (
    <div className="relative h-52">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <filter id="textGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" floodColor="#05070A" floodOpacity="1" />
          </filter>
        </defs>
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((other, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={other.x}
              y2={other.y}
              stroke="rgba(79, 124, 255, 0.2)"
              strokeWidth="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: reduced ? 0.01 : 0.8,
                delay: reduced ? 0 : 0.3 + i * 0.1,
              }}
            />
          ))
        )}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduced ? 0.01 : 0.4,
              delay: reduced ? 0 : 0.2 + i * 0.1,
            }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#4F7CFF"
              opacity="0.2"
            />
            <circle cx={node.x} cy={node.y} r="2" fill="#4F7CFF" />
            <text
              x={node.x}
              y={node.y + 8}
              textAnchor="middle"
              fill="#F7F9FC"
              fontSize="4"
              fontWeight="600"
              fontFamily="Inter, sans-serif"
              filter="url(#textGlow)"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function RiskVisual({ reduced }: { reduced: boolean }) {
  const vulns = [
    {
      severity: "Crítica",
      cve: "CVE-2026-4821",
      exposure: "API Pública",
      score: 98,
      action: "Patch recomendado",
    },
    {
      severity: "Alta",
      cve: "CVE-2026-3291",
      exposure: "Serviço interno",
      score: 82,
      action: "Agendar patch",
    },
    {
      severity: "Média",
      cve: "CVE-2026-2156",
      exposure: "Ambiente de dev",
      score: 61,
      action: "Monitorar",
    },
  ];

  return (
    <div className="space-y-3">
      {vulns.map((vuln, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduced ? 0.01 : 0.4,
            delay: reduced ? 0 : i * 0.15,
          }}
          className="bg-[#05070A] rounded-lg p-3 border border-white/[0.04]"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded ${
                  vuln.severity === "Crítica"
                    ? "bg-[#FF4F4F]/10 text-[#FF4F4F]"
                    : vuln.severity === "Alta"
                    ? "bg-[#FBBF24]/10 text-[#FBBF24]"
                    : "bg-[#5DE4F4]/10 text-[#5DE4F4]"
                }`}
              >
                {vuln.severity}
              </span>
              <span className="text-xs text-[#98A2B3] font-mono">
                {vuln.cve}
              </span>
            </div>
            <span className="text-xs font-bold text-[#F7F9FC]">
              {vuln.score}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#98A2B3]">
              Exposição: {vuln.exposure}
            </span>
            <span className="text-xs text-[#4F7CFF]">{vuln.action}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Features() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();

  return (
    <section id="product" ref={ref} className="py-14 sm:py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduced ? 0.01 : 0.5,
          }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-4">
            Uma plataforma. Visibilidade completa.
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Centralize vulnerabilidades, identidades, infraestrutura, aplicações
            e riscos em uma única plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : i * 0.12,
              }}
              className="group bg-[#0D1218] border border-white/[0.06] rounded-2xl p-6 md:p-7 hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#98A2B3] mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="bg-[#090D12] rounded-xl p-4 border border-white/[0.04]">
                {feature.visual === "threat" && <ThreatVisual reduced={reduced} />}
                {feature.visual === "surface" && <SurfaceVisual reduced={reduced} />}
                {feature.visual === "risk" && <RiskVisual reduced={reduced} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
