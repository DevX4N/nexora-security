"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const sidebarItems = [
  { id: "overview", label: "Visão Geral" },
  { id: "threats", label: "Ameaças" },
  { id: "assets", label: "Ativos" },
  { id: "vulnerabilities", label: "Vulnerabilidades" },
  { id: "identity", label: "Identidade" },
  { id: "integrations", label: "Integrações" },
];

function OverviewPanel({ reduced }: { reduced: boolean }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total de Ativos", value: "2.384", change: "+12" },
          { label: "Ameaças Ativas", value: "3", change: "-2" },
          { label: "Pontuação de Risco", value: "Baixo", change: "" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduced ? 0.01 : 0.4,
              delay: reduced ? 0 : i * 0.1,
            }}
            className="bg-[#05070A] rounded-lg p-3 border border-white/[0.04]"
          >
            <p className="text-xs text-[#98A2B3] mb-1">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold">{stat.value}</span>
              {stat.change && (
                <span className="text-xs text-[#34D399]">{stat.change}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-[#05070A] rounded-lg p-4 border border-white/[0.04]">
        <p className="text-sm font-medium mb-3">Postura de Segurança</p>
        <div className="h-24 flex items-end gap-1">
          {[40, 55, 45, 60, 50, 65, 55, 70, 60, 75, 65, 80].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : i * 0.04,
              }}
              className="flex-1 rounded-sm bg-[#4F7CFF]/60"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ThreatsPanel({ reduced }: { reduced: boolean }) {
  const threats = [
    {
      severity: "Crítica",
      name: "Tentativa de força bruta",
      source: "203.0.113.42",
      time: "2m atrás",
    },
    {
      severity: "Alta",
      name: "Padrão de exfiltração de dados",
      source: "Rede interna",
      time: "15m atrás",
    },
    {
      severity: "Média",
      name: "Acesso incomum à API",
      source: "Service mesh",
      time: "1h atrás",
    },
    {
      severity: "Baixa",
      name: "Tentativas de login falhadas",
      source: "Provedor SSO",
      time: "3h atrás",
    },
  ];

  return (
    <div className="space-y-2">
      {threats.map((threat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: reduced ? 0.01 : 0.3,
            delay: reduced ? 0 : i * 0.1,
          }}
          className="flex items-center justify-between bg-[#05070A] rounded-lg p-3 border border-white/[0.04]"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${
                threat.severity === "Crítica"
                  ? "bg-[#FF4F4F]"
                  : threat.severity === "Alta"
                  ? "bg-[#FBBF24]"
                  : threat.severity === "Média"
                  ? "bg-[#5DE4F4]"
                  : "bg-[#98A2B3]"
              }`}
            />
            <div>
              <p className="text-sm font-medium">{threat.name}</p>
              <p className="text-xs text-[#98A2B3]">{threat.source}</p>
            </div>
          </div>
          <span className="text-xs text-[#98A2B3]">{threat.time}</span>
        </motion.div>
      ))}
    </div>
  );
}

function VulnerabilitiesPanel({ reduced }: { reduced: boolean }) {
  const vulns = [
    {
      severity: "Crítica",
      cve: "CVE-2026-4821",
      score: 98,
      status: "Aberto",
    },
    {
      severity: "Alta",
      cve: "CVE-2026-3291",
      score: 82,
      status: "Em andamento",
    },
    {
      severity: "Média",
      cve: "CVE-2026-2156",
      score: 61,
      status: "Aberto",
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-semibold mb-1">Vulnerabilidades</h3>
        <p className="text-xs text-[#98A2B3]">Riscos detectados e priorizados por impacto.</p>
      </div>
      <div className="space-y-2">
        {vulns.map((vuln, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: reduced ? 0.01 : 0.3,
              delay: reduced ? 0 : i * 0.1,
            }}
            className="flex items-center justify-between bg-[#05070A] rounded-lg p-3 border border-white/[0.04]"
          >
            <div className="flex items-center gap-3">
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
              <span className="text-sm font-mono text-[#98A2B3]">{vuln.cve}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold">{vuln.score}</span>
              <span className="text-xs text-[#98A2B3]">{vuln.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderPanel({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-48 text-[#98A2B3] text-sm">
      {title}
    </div>
  );
}

export default function InteractiveProduct() {
  const [activeTab, setActiveTab] = useState("overview");
  const { ref, isInView } = useInView(0.1);
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
            Do sinal para ação em segundos.
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Cada ambiente é diferente. Fale com nossa equipe de segurança e
            descubra como a Nexora pode proteger o seu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduced ? 0.01 : 0.5,
            delay: reduced ? 0 : 0.2,
          }}
          className="bg-[#0D1218] border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Mobile: horizontal tabs */}
          <div className="md:hidden border-b border-white/[0.06] p-3">
            <div className="flex gap-1 overflow-x-auto scrollbar-none">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 text-sm rounded-lg whitespace-nowrap transition-all duration-200 ${
                    activeTab === item.id
                      ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
                      : "text-[#98A2B3] hover:text-[#F7F9FC] hover:bg-white/[0.04]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Desktop: sidebar */}
            <div className="hidden md:block w-56 shrink-0 border-r border-white/[0.06] p-4">
              <nav className="flex flex-col gap-1" aria-label="Navegação do dashboard">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`relative px-3 py-2 text-sm rounded-lg text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? "bg-[#4F7CFF]/10 text-[#4F7CFF]"
                        : "text-[#98A2B3] hover:text-[#F7F9FC] hover:bg-white/[0.04]"
                    }`}
                  >
                    {activeTab === item.id && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#4F7CFF] rounded-full" />
                    )}
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 md:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: reduced ? 0.01 : 0.25 }}
                >
                  {activeTab === "overview" && <OverviewPanel reduced={reduced} />}
                  {activeTab === "threats" && <ThreatsPanel reduced={reduced} />}
                  {activeTab === "vulnerabilities" && (
                    <VulnerabilitiesPanel reduced={reduced} />
                  )}
                  {activeTab === "assets" && <PlaceholderPanel title="Ativos" />}
                  {activeTab === "identity" && <PlaceholderPanel title="Identidade" />}
                  {activeTab === "integrations" && <PlaceholderPanel title="Integrações" />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
