import { ArrowDown } from "lucide-react";

// ─── HERO DE PROPÓSITO ─────────────────────────────────────────────────
// SUBSTITUA: Este título deve responder "por que a agência existe",
// não "o que ela vende" (isso já está na Home). Máximo 2-3 linhas.

export function AboutHeroSection() {
  return (
    <section
      id="sobre-hero"
      className="relative min-h-[80vh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-navy"
    >
      {/* ─── BACKGROUND: Grid + Orbs (mesmo padrão da Home) ────────────── */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-brand-blue/10 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fadeInUp opacity-0" style={{ animationFillMode: "both" }}>
            {/* SUBSTITUA: Texto da badge */}
            <span className="badge">Sobre a Digital S&D</span>
          </div>

          {/* ─── TÍTULO DE PROPÓSITO ────────────────────────────────────
              SUBSTITUA: Foque no "porquê" existimos, não no "o quê" fazemos.
          ─────────────────────────────────────────────────────────── */}
          <h1
            className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl
                       text-white leading-[1.15] tracking-tight mb-6
                       animate-fadeInUp opacity-0 animation-delay-100"
            style={{ animationFillMode: "both" }}
          >
            Não construímos apenas sites,{" "}
            <span className="text-brand-blue text-glow">
              construímos pontes entre empresas e clientes
            </span>
          </h1>

          {/* ─── SUBTÍTULO ──────────────────────────────────────────────
              SUBSTITUA: Complemente o propósito com uma frase sobre
              o problema que isso resolve para o cliente.
          ─────────────────────────────────────────────────────────── */}
          <p
            className="font-outfit text-lg md:text-xl text-gray-300 leading-relaxed
                       max-w-2xl mx-auto
                       animate-fadeInUp opacity-0 animation-delay-200"
            style={{ animationFillMode: "both" }}
          >
            Acreditamos que pequenas empresas e profissionais autônomos merecem
            uma presença digital tão boa quanto a de qualquer grande marca — sem
            precisar de um orçamento de grande marca para isso.
          </p>
        </div>
      </div>

      {/* Indicador de scroll — mesmo padrão da Home */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-gray-600" />
      </div>
    </section>
  );
}
