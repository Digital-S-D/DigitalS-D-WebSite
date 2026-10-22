import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

// ─── NOSSO PROCESSO (TIMELINE) ──────────────────────────────────────────
// Os dados ficam em lib/constants.ts (PROCESS_STEPS).
// Layout: timeline vertical no mobile, horizontal no desktop.

const iconMap: Record<string, LucideIcon> = {
  Search,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
};

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-black">
      <div className="container-custom">

        {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="badge mb-4">Como Trabalhamos</span>
          {/* SUBSTITUA: Título da seção */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Do diagnóstico ao{" "}
            <span className="text-gradient">site no ar</span>
          </h2>
          {/* SUBSTITUA: Subtítulo */}
          <p className="font-outfit text-gray-400 text-base md:text-lg">
            Um processo claro, sem surpresas, para você saber exatamente
            o que esperar em cada etapa.
          </p>
        </div>

        {/* ─── TIMELINE ─────────────────────────────────────────────── */}
        <div className="relative max-w-6xl mx-auto">
          {/* Linha conectora — vertical no mobile, horizontal no desktop */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 via-brand-blue/20 to-transparent
                          md:left-0 md:right-0 md:top-8 md:bottom-auto md:h-px md:w-auto
                          md:bg-gradient-to-r" />

          <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = iconMap[step.icon] ?? Search;
              return (
                <div key={step.number} className="relative flex md:flex-col md:items-center md:text-center gap-4 md:gap-0 md:flex-1">

                  {/* Círculo numerado com ícone */}
                  <div className="relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full
                                  bg-brand-navy border-2 border-brand-blue/40
                                  flex items-center justify-center md:mb-5">
                    <Icon size={20} className="text-brand-blue md:w-6 md:h-6" />
                  </div>

                  <div className="md:px-2">
                    {/* Número da etapa */}
                    <span className="font-sora font-bold text-brand-blue/50 text-xs tracking-widest">
                      {step.number}
                    </span>

                    {/* SUBSTITUA: Nome da etapa */}
                    <h3 className="font-sora font-semibold text-white text-base md:text-lg mt-1 mb-1.5">
                      {step.title}
                    </h3>

                    {/* SUBSTITUA: Descrição da etapa */}
                    <p className="font-outfit text-gray-400 text-sm leading-relaxed md:max-w-[180px] md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
