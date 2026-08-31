"use client";

import { motion } from "framer-motion";
import { useInView, useReducedMotion } from "@/lib/hooks";

const nodes = [
  { id: "internet", label: "Internet", x: 50, y: 8, status: "protected" },
  { id: "cloudflare", label: "Cloudflare", x: 50, y: 25, status: "protected" },
  { id: "gateway", label: "API Gateway", x: 50, y: 42, status: "monitored" },
  { id: "app", label: "Aplicação", x: 50, y: 59, status: "protected" },
  { id: "db", label: "Banco de Dados", x: 50, y: 76, status: "encrypted" },
  { id: "cache", label: "Cache", x: 20, y: 59, status: "protected" },
  { id: "queue", label: "Fila", x: 80, y: 59, status: "monitored" },
  { id: "storage", label: "Armazenamento", x: 20, y: 76, status: "encrypted" },
  { id: "logs", label: "Serviço de Logs", x: 80, y: 76, status: "monitored" },
];

const connections: [string, string][] = [
  ["internet", "cloudflare"],
  ["cloudflare", "gateway"],
  ["gateway", "app"],
  ["app", "db"],
  ["app", "cache"],
  ["app", "queue"],
  ["db", "storage"],
  ["db", "logs"],
];

const statusColors: Record<string, string> = {
  protected: "#34D399",
  monitored: "#4F7CFF",
  encrypted: "#5DE4F4",
};

export default function NetworkVisualization() {
  const { ref, isInView } = useInView();
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: reduced ? 0.01 : 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-4">
            Veja cada conexão. Entenda cada risco.
          </h2>
          <p className="text-lg text-[#98A2B3] max-w-2xl mx-auto">
            Visibilidade completa em toda sua infraestrutura, do edge ao
            banco de dados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduced ? 0.01 : 0.5,
            delay: reduced ? 0 : 0.2,
          }}
          className="relative max-w-4xl mx-auto bg-[#0D1218] border border-white/[0.06] rounded-2xl p-6 md:p-10"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 90"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connections */}
              {connections.map(([from, to], i) => {
                const fromNode = nodes.find((n) => n.id === from)!;
                const toNode = nodes.find((n) => n.id === to)!;
                return (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke="rgba(79, 124, 255, 0.2)"
                    strokeWidth="0.4"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{
                      duration: reduced ? 0.01 : 1,
                      delay: reduced ? 0 : 0.5 + i * 0.1,
                    }}
                  />
                );
              })}

              {/* Animated particles */}
              {!reduced &&
                connections.slice(0, 4).map(([from, to], i) => {
                  const fromNode = nodes.find((n) => n.id === from)!;
                  const toNode = nodes.find((n) => n.id === to)!;
                  return (
                    <motion.circle
                      key={`particle-${from}-${to}`}
                      r="0.8"
                      fill="#4F7CFF"
                      opacity="0.6"
                      initial={{ cx: fromNode.x, cy: fromNode.y }}
                      animate={{
                        cx: [fromNode.x, toNode.x],
                        cy: [fromNode.y, toNode.y],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })}

              {/* Nodes */}
              {nodes.map((node, i) => (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: reduced ? 0.01 : 0.5,
                    delay: reduced ? 0 : 0.3 + i * 0.08,
                  }}
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill={statusColors[node.status]}
                    opacity="0.15"
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="2.5"
                    fill={statusColors[node.status]}
                  />
                  <text
                    x={node.x}
                    y={node.y + 6}
                    textAnchor="middle"
                    fill="#F7F9FC"
                    fontSize="3"
                    fontWeight="500"
                    fontFamily="Inter, sans-serif"
                  >
                    {node.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 pt-6 border-t border-white/[0.06]">
            {Object.entries(statusColors).map(([status, color]) => (
              <div key={status} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-[#98A2B3] capitalize">
                  {status === "protected" ? "Protegido" : status === "monitored" ? "Monitorado" : "Criptografado"}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
