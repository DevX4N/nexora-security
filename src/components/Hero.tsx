"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const dashboardEvents = [
  { time: "14:32", text: "Autenticação suspeita", status: "blocked" },
  { time: "14:32", text: "Comportamento analisado", status: "analyzed" },
  { time: "14:33", text: "Sessão bloqueada", status: "blocked" },
];

const riskCards = [
  { label: "Pontuação de Segurança", value: "94", unit: "/ 100", color: "#34D399" },
  { label: "Ameaças Bloqueadas", value: "12.847", unit: "", color: "#4F7CFF" },
  { label: "Ativos Monitorados", value: "2.384", unit: "", color: "#5DE4F4" },
  { label: "Vulns Críticas", value: "7", unit: "", color: "#FF4F4F" },
];

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background — technical, deep, precise */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base depth — radial gradients, no blur */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 55%, rgba(37,99,235,0.10) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 72% 48%, rgba(93,228,244,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 50% 100%, rgba(37,99,235,0.04) 0%, transparent 50%)
            `,
          }}
        />

        {/* Technical grid — 1px lines, masked from center */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 75%)",
          }}
        />

        {/* Network nodes and connections — sides only */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Left cluster */}
          <circle cx="80" cy="200" r="2" fill="#4F7CFF" opacity="0.08" />
          <circle cx="140" cy="320" r="1.5" fill="#4F7CFF" opacity="0.06" />
          <circle cx="60" cy="450" r="2" fill="#5DE4F4" opacity="0.07" />
          <circle cx="160" cy="550" r="1.5" fill="#4F7CFF" opacity="0.05" />
          <circle cx="100" cy="680" r="2" fill="#4F7CFF" opacity="0.06" />
          <line x1="80" y1="200" x2="140" y2="320" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.06" />
          <line x1="140" y1="320" x2="60" y2="450" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.05" />
          <line x1="60" y1="450" x2="160" y2="550" stroke="#5DE4F4" strokeWidth="0.5" opacity="0.05" />
          <line x1="160" y1="550" x2="100" y2="680" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.04" />

          {/* Right cluster */}
          <circle cx="1360" cy="180" r="2" fill="#4F7CFF" opacity="0.08" />
          <circle cx="1300" cy="300" r="1.5" fill="#5DE4F4" opacity="0.06" />
          <circle cx="1380" cy="440" r="2" fill="#4F7CFF" opacity="0.07" />
          <circle cx="1280" cy="560" r="1.5" fill="#4F7CFF" opacity="0.05" />
          <circle cx="1340" cy="700" r="2" fill="#5DE4F4" opacity="0.06" />
          <line x1="1360" y1="180" x2="1300" y2="300" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.06" />
          <line x1="1300" y1="300" x2="1380" y2="440" stroke="#5DE4F4" strokeWidth="0.5" opacity="0.05" />
          <line x1="1380" y1="440" x2="1280" y2="560" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.05" />
          <line x1="1280" y1="560" x2="1340" y2="700" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.04" />

          {/* Animated particle — left */}
          {!reduced && (
            <motion.circle
              r="1.5"
              fill="#4F7CFF"
              opacity="0.12"
              initial={{ cx: 80, cy: 200 }}
              animate={{ cx: [80, 140, 60, 160, 100], cy: [200, 320, 450, 550, 680] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* Animated particle — right */}
          {!reduced && (
            <motion.circle
              r="1.5"
              fill="#5DE4F4"
              opacity="0.10"
              initial={{ cx: 1360, cy: 180 }}
              animate={{ cx: [1360, 1300, 1380, 1280, 1340], cy: [180, 300, 440, 560, 700] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
          )}
        </svg>

        {/* Noise texture — ~2% opacity */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Vignette — center bright, edges dark */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 48%, transparent 40%, rgba(5,7,10,0.5) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 md:px-8 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-[#4F7CFF] mb-4 tracking-wide uppercase"
          >
            Plataforma Enterprise de Cibersegurança
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.08] mb-6"
          >
            Segurança que evolui{" "}
            <span className="bg-gradient-to-r from-[#4F7CFF] to-[#5DE4F4] bg-clip-text text-transparent">
              na velocidade do seu negócio
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#98A2B3] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Proteja infraestrutura, aplicações e dados com uma plataforma de
            segurança inteligente criada para equipes modernas.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#demo"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-[#4F7CFF] hover:bg-[#6B93FF] rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(79,124,255,0.3)] text-center"
            >
              Agendar demonstração
            </a>
            <a
              href="#product"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-[#98A2B3] hover:text-[#F7F9FC] border border-white/[0.08] hover:border-white/[0.15] rounded-xl transition-all duration-200 text-center"
            >
              Explorar plataforma
            </a>
          </motion.div>
        </motion.div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduced ? 0.01 : 0.8,
            delay: reduced ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-[#0D1218] border border-white/[0.06] rounded-2xl md:rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 100px rgba(0,0,0,0.45), 0 0 80px rgba(59,130,246,0.06)" }}>
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF4F4F]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#FBBF24]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#34D399]/80" />
                </div>
                <span className="text-xs text-[#98A2B3] font-medium ml-2">
                  Nexora Dashboard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                <span className="text-xs text-[#98A2B3]">Ao vivo</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 md:p-6">
              {/* Risk cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-5">
                {riskCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0.01 : 0.5,
                      delay: reduced ? 0 : 0.7 + i * 0.1,
                    }}
                    className="bg-[#090D12] border border-white/[0.06] rounded-xl p-4"
                  >
                    <p className="text-xs text-[#98A2B3] mb-2">{card.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ color: card.color }}
                      >
                        {card.value}
                      </span>
                      {card.unit && (
                        <span className="text-sm text-[#98A2B3]">
                          {card.unit}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Risk trend chart */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0.01 : 0.5,
                    delay: reduced ? 0 : 1.1,
                  }}
                  className="bg-[#090D12] border border-white/[0.06] rounded-xl p-4 md:p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Tendência de Risco</span>
                    <span className="text-sm text-[#34D399] font-medium">
                      -32%
                    </span>
                  </div>
                  <div className="h-32 md:h-40 flex items-end gap-1.5">
                    {[65, 58, 62, 45, 50, 38, 42, 30, 35, 28, 22, 18].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{
                            duration: reduced ? 0.01 : 0.6,
                            delay: reduced ? 0 : 1.3 + i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-[#4F7CFF]/40 to-[#4F7CFF]/80"
                        />
                      )
                    )}
                  </div>
                </motion.div>

                {/* Event log */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0.01 : 0.5,
                    delay: reduced ? 0 : 1.2,
                  }}
                  className="bg-[#090D12] border border-white/[0.06] rounded-xl p-4 md:p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Eventos Recentes</span>
                    <span className="text-xs text-[#98A2B3]">Últimos 5 min</span>
                  </div>
                  <div className="space-y-3">
                    {dashboardEvents.map((event, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: reduced ? 0.01 : 0.4,
                          delay: reduced ? 0 : 1.4 + i * 0.15,
                        }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-xs text-[#98A2B3] font-mono w-10 shrink-0">
                          {event.time}
                        </span>
                        <div
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            event.status === "blocked"
                              ? "bg-[#FF4F4F]"
                              : "bg-[#5DE4F4]"
                          }`}
                        />
                        <span className="text-sm text-[#98A2B3] truncate">
                          {event.text}
                        </span>
                      </motion.div>
                    ))}
                    <div className="flex items-center gap-3 pt-2 border-t border-white/[0.04]">
                      <span className="text-xs text-[#34D399] font-medium">
                        Ameaça neutralizada
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
