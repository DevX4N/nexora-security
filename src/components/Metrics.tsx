"use client";

import { motion } from "framer-motion";
import { useInView, useCountUp, useReducedMotion } from "@/lib/hooks";

const metrics = [
  {
    value: 99.99,
    suffix: "%",
    label: "Uptime da plataforma",
    decimals: 2,
  },
  {
    value: 40,
    prefix: "<",
    suffix: "ms",
    label: "Latência de detecção",
    decimals: 0,
  },
  {
    value: 12,
    suffix: "M+",
    label: "Ameaças bloqueadas",
    decimals: 0,
  },
  {
    value: 150,
    suffix: "+",
    label: "Integrações",
    decimals: 0,
  },
];

function MetricCard({
  metric,
  isInView,
  reduced,
}: {
  metric: (typeof metrics)[0];
  isInView: boolean;
  reduced: boolean;
}) {
  const count = useCountUp(
    metric.decimals > 0 ? metric.value * 100 : metric.value,
    2000,
    isInView && !reduced
  );

  const displayValue =
    metric.decimals > 0
      ? (count / 100).toFixed(metric.decimals)
      : count.toString();

  return (
    <div className="text-center px-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-2">
        {metric.prefix || ""}
        {displayValue}
        <span className="text-[#4F7CFF]">{metric.suffix}</span>
      </div>
      <p className="text-sm md:text-base text-[#98A2B3]">{metric.label}</p>
    </div>
  );
}

export default function Metrics() {
  const { ref, isInView } = useInView(0.2);
  const reduced = useReducedMotion();

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-16 md:mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduced ? 0.01 : 0.5,
                delay: reduced ? 0 : i * 0.1,
              }}
            >
              <MetricCard metric={metric} isInView={isInView} reduced={reduced} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: reduced ? 0.01 : 0.5,
            delay: reduced ? 0 : 0.4,
          }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-[#98A2B3] leading-relaxed">
            Equipes de segurança precisam de visibilidade sem ruído. A Nexora
            monitora continuamente sua infraestrutura e prioriza o que realmente importa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
