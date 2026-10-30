import { Zap, Target, Sparkles, ShieldCheck, type LucideIcon } from "lucide-react";
import { PILLARS } from "@/lib/constants";

// ─── O DIFERENCIAL (PILARES DE CONFIANÇA) ──────────────────────────────
// Os dados (título/descrição) ficam em lib/constants.ts (PILLARS).
// Os ícones são mapeados aqui porque constants.ts não deve depender de React.

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Target,
  Sparkles,
  ShieldCheck,
};

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy">
      <div className="container-custom">

        {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge mb-4">Nossos Pilares</span>
          {/* SUBSTITUA: Título da seção */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            O que nos torna{" "}
            <span className="text-gradient">diferentes</span>
          </h2>
          {/* SUBSTITUA: Subtítulo */}
          <p className="font-outfit text-gray-400 text-base md:text-lg">
            Quatro princípios que guiam cada projeto que colocamos no ar.
          </p>
        </div>

        {/* ─── GRID DE PILARES ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.icon] ?? Zap;
            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-2xl p-6 border border-white/5
                           bg-brand-black transition-all duration-300
                           hover:border-brand-blue/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10"
              >
                <div className="w-12 h-12 rounded-xl border bg-white/5 border-white/10 text-gray-400
                                flex items-center justify-center mb-5 transition-all duration-300
                                group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 group-hover:text-brand-blue
                                group-hover:scale-110">
                  <Icon size={22} />
                </div>

                {/* SUBSTITUA: Título do pilar */}
                <h3 className="font-sora font-semibold text-white text-lg mb-2">
                  {pillar.title}
                </h3>

                {/* SUBSTITUA: Descrição do pilar */}
                <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                {/* Gradiente de borda inferior decorativo, no padrão da Home */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100
                                transition-transform duration-300 origin-left
                                bg-gradient-to-r from-brand-blue to-blue-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
