"use client";

const footerColumns = [
  {
    title: "Produto",
    links: ["Plataforma", "Integrações", "Preços", "Changelog"],
  },
  {
    title: "Empresa",
    links: ["Sobre", "Carreiras", "Clientes", "Contato"],
  },
  {
    title: "Recursos",
    links: ["Blog", "Documentação", "Segurança", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacidade", "Termos", "Cookies"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#4F7CFF] to-[#5DE4F4] flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L3 7v6c0 5.25 3.75 10.08 9 11 5.25-.92 9-5.75 9-11V7l-9-5z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-base font-semibold tracking-tight">
                Nexora
              </span>
            </a>
            <p className="text-sm text-[#98A2B3] leading-relaxed max-w-[240px]">
              Infraestrutura de segurança para empresas modernas.
            </p>
          </div>

          {/* Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#98A2B3] hover:text-[#F7F9FC] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-[#98A2B3]">
            &copy; 2026 Nexora Security
          </p>

          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-[#98A2B3] hover:text-[#F7F9FC] transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="text-[#98A2B3] hover:text-[#F7F9FC] transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            {/* X */}
            <a
              href="#"
              aria-label="X"
              className="text-[#98A2B3] hover:text-[#F7F9FC] transition-colors duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
