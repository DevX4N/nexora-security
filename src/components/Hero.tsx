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
  { label: "Vulnerabilidades críticas", value: "7", unit: "", color: "#FF4F4F" },
];

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="80" cy="200" r="2" fill="#4F7CFF" opacity="0.08" />
          <circle cx="140" cy="320" r="1.5" fill="#4F7CFF" opacity="0.06" />
          <circle cx="60" cy="450" r="2" fill="#5DE4F4" opacity="0.07" />
          <line x1="80" y1="200" x2="140" y2="320" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.06" />
          <line x1="140" y1="320" x2="60" y2="450" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.05" />
          <circle cx="1360" cy="180" r="2" fill="#4F7CFF" opacity="0.08" />
          <circle cx="1300" cy="300" r="1.5" fill="#5DE4F4" opacity="0.06" />
          <circle cx="1380" cy="440" r="2" fill="#4F7CFF" opacity="0.07" />
          <line x1="1360" y1="180" x2="1300" y2="300" stroke="#4F7CFF" strokeWidth="0.5" opacity="0.06" />
          <line x1="1300" y1="300" x2="1380" y2="440" stroke="#5DE4F4" strokeWidth="0.5" opacity="0.05" />
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
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 48%, transparent 40%, rgba(5,7,10,0.5) 100%)",
          }}
        />
      </div>

      {/* Copy block — NOT centered, starts after header area */}
      <div className="hero-copy">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="hero-eyebrow"
          >
            Plataforma Enterprise de Cibersegurança
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="hero-title"
          >
            Segurança que evolui{" "}
            <span className="bg-gradient-to-r from-[#4F7CFF] to-[#5DE4F4] bg-clip-text text-transparent">
              na velocidade do seu negócio
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="hero-description"
          >
            Proteja infraestrutura, aplicações e dados com uma plataforma de
            segurança inteligente criada para equipes modernas.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="hero-actions"
          >
            <a
              href="#demo"
              className="hero-btn hero-btn-primary"
            >
              Agendar demonstração
            </a>
            <a
              href="#product"
              className="hero-btn hero-btn-secondary"
            >
              Explorar plataforma
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Dashboard — fills remaining space */}
      <div className="hero-product">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduced ? 0.01 : 0.8,
            delay: reduced ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="dashboard"
        >
          <div className="relative bg-[#0D1218] border border-white/[0.06] rounded-2xl md:rounded-3xl overflow-hidden h-full" style={{ boxShadow: "0 30px 100px rgba(0,0,0,0.45), 0 0 80px rgba(59,130,246,0.06)" }}>
            {/* Dashboard header */}
            <div className="dashboard-header">
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
            <div className="dashboard-content">
              {/* Risk cards */}
              <div className="dashboard-cards">
                {riskCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0.01 : 0.5,
                      delay: reduced ? 0 : 0.7 + i * 0.1,
                    }}
                    className="bg-[#090D12] border border-white/[0.06] rounded-xl p-3 md:p-4"
                  >
                    <p className="text-[10px] md:text-xs text-[#98A2B3] mb-1 md:mb-2">{card.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight"
                        style={{ color: card.color }}
                      >
                        {card.value}
                      </span>
                      {card.unit && (
                        <span className="text-[11px] md:text-sm text-[#98A2B3]">
                          {card.unit}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="dashboard-grid">
                {/* Risk trend chart */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduced ? 0.01 : 0.5,
                    delay: reduced ? 0 : 1.1,
                  }}
                  className="bg-[#090D12] border border-white/[0.06] rounded-xl p-3 md:p-4"
                >
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-xs md:text-sm font-medium">Tendência de Risco</span>
                    <span className="text-xs md:text-sm text-[#34D399] font-medium">
                      -32%
                    </span>
                  </div>
                  <div className="chart-bars">
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
                  className="bg-[#090D12] border border-white/[0.06] rounded-xl p-3 md:p-4"
                >
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-xs md:text-sm font-medium">Eventos Recentes</span>
                    <span className="text-[10px] md:text-xs text-[#98A2B3]">Últimos 5 min</span>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    {dashboardEvents.map((event, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: reduced ? 0.01 : 0.4,
                          delay: reduced ? 0 : 1.4 + i * 0.15,
                        }}
                        className="flex items-center gap-2 md:gap-3"
                      >
                        <span className="text-[10px] md:text-xs text-[#98A2B3] font-mono w-9 md:w-10 shrink-0">
                          {event.time}
                        </span>
                        <div
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            event.status === "blocked"
                              ? "bg-[#FF4F4F]"
                              : "bg-[#5DE4F4]"
                          }`}
                        />
                        <span className="text-[11px] md:text-sm text-[#98A2B3] truncate">
                          {event.text}
                        </span>
                      </motion.div>
                    ))}
                    <div className="flex items-center gap-2 md:gap-3 pt-2 border-t border-white/[0.04]">
                      <span className="text-[10px] md:text-xs text-[#34D399] font-medium">
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

      <style jsx>{`
        .hero-section {
          position: relative;
          height: 100dvh;
          min-height: 100svh;
          display: grid;
          grid-template-rows: clamp(46px, 8vh, 100px) minmax(0, auto) minmax(0, 1fr);
          overflow: clip;
        }

        /* Copy block — starts early, NOT centered vertically */
        .hero-copy {
          position: relative;
          z-index: 10;
          width: min(100% - 32px, 1000px);
          margin-inline: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: clamp(4px, 1vh, 10px);
        }

        .hero-eyebrow {
          font-size: clamp(0.7rem, 1.2vw, 0.875rem);
          font-weight: 500;
          color: #4F7CFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: clamp(8px, 1.5vh, 16px);
        }

        .hero-title {
          font-size: clamp(48px, 4.4vw, 76px);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 700;
          max-width: 900px;
          margin-bottom: clamp(10px, 1.5vh, 18px);
        }

        .hero-description {
          font-size: clamp(16px, 1.2vw, 20px);
          line-height: 1.5;
          color: #98A2B3;
          max-width: 720px;
          margin-bottom: clamp(4px, 1vh, 10px);
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: clamp(4px, 1vh, 10px);
        }

        .hero-btn {
          min-height: clamp(44px, 5vh, 52px);
          padding-inline: clamp(20px, 2vw, 30px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          font-size: clamp(14px, 1vw, 16px);
          font-weight: 500;
          transition: all 0.2s;
          text-decoration: none;
        }

        .hero-btn-primary {
          color: white;
          background: #4F7CFF;
        }
        .hero-btn-primary:hover {
          background: #6B93FF;
          box-shadow: 0 0 30px rgba(79,124,255,0.3);
        }

        .hero-btn-secondary {
          color: #98A2B3;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .hero-btn-secondary:hover {
          color: #F7F9FC;
          border-color: rgba(255,255,255,0.15);
        }

        /* Dashboard — fills remaining space */
        .hero-product {
          position: relative;
          z-index: 10;
          min-height: 0;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 0 clamp(16px, 2vw, 32px);
          padding-bottom: clamp(16px, 3vh, 32px);
        }

        .dashboard {
          width: min(1100px, calc(100vw - 48px));
          max-height: 100%;
          aspect-ratio: 16 / 5.5;
          overflow: hidden;
        }

        .dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(10px, 1.5vh, 16px) clamp(16px, 2vw, 24px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .dashboard-content {
          padding: clamp(10px, 1.5vh, 16px) clamp(12px, 1.5vw, 20px);
        }

        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(6px, 1vw, 12px);
          margin-bottom: clamp(6px, 1vw, 12px);
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(6px, 1vw, 12px);
        }

        .chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: clamp(48px, 8vh, 80px);
        }

        /* Height-based breakpoints */
        @media (max-height: 900px) {
          .hero-section {
            grid-template-rows: clamp(42px, 7vh, 56px) minmax(0, auto) minmax(0, 1fr);
          }
        }

        @media (max-height: 800px) {
          .hero-section {
            grid-template-rows: 40px minmax(0, auto) minmax(0, 1fr);
          }
          .hero-title {
            font-size: clamp(42px, 3.8vw, 62px);
          }
          .hero-eyebrow {
            font-size: 0.7rem;
            margin-bottom: 8px;
          }
          .hero-description {
            font-size: clamp(14px, 1.1vw, 18px);
            margin-bottom: 6px;
          }
          .hero-btn {
            min-height: 42px;
            padding-inline: 18px;
            font-size: 13px;
          }
          .dashboard {
            aspect-ratio: 16 / 5;
          }
        }

        @media (max-height: 720px) {
          .hero-section {
            grid-template-rows: 36px minmax(0, auto) minmax(0, 1fr);
          }
          .hero-title {
            font-size: clamp(38px, 3.4vw, 56px);
          }
          .hero-description {
            font-size: clamp(13px, 1vw, 16px);
          }
          .hero-btn {
            min-height: 40px;
            padding-inline: 16px;
            font-size: 12px;
          }
          .dashboard {
            aspect-ratio: 16 / 4.5;
          }
          .chart-bars {
            height: 40px;
          }
        }

        @media (max-height: 650px) {
          .hero-section {
            grid-template-rows: 32px minmax(0, auto) minmax(0, 1fr);
          }
          .hero-title {
            font-size: clamp(36px, 3.2vw, 52px);
          }
          .hero-description {
            display: none;
          }
          .hero-actions {
            margin-top: 4px;
          }
          .hero-btn {
            min-height: 38px;
            padding-inline: 14px;
            font-size: 12px;
          }
          .dashboard {
            aspect-ratio: 16 / 4;
          }
          .chart-bars {
            height: 32px;
          }
        }

        /* Responsive width fallbacks */
        @media (max-width: 1024px) {
          .dashboard-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: clamp(28px, 7vw, 40px);
          }
          .dashboard {
            aspect-ratio: 16 / 6;
          }
          .chart-bars {
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
