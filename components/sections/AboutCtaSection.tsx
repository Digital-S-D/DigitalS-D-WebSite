import { ArrowRight } from "lucide-react";

// ─── CALL TO ACTION FINAL ───────────────────────────────────────────────
// Aponta para "/#contato" (o formulário real, que vive na Home) em vez de
// duplicar o formulário aqui — mantém uma única fonte de verdade para leads.

export function AboutCtaSection() {
  return (
    <section className="pb-20 md:pb-28 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl p-8 md:p-12
                        border border-brand-blue/20 bg-brand-blue/5 text-center">
          {/* Glow de fundo, no padrão usado no restante do site */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent" />

          <div className="relative z-10">
            {/* SUBSTITUA: Título de encerramento, retomando a metáfora do Hero */}
            <h2 className="font-sora font-bold text-2xl md:text-4xl text-white mb-4">
              Vamos construir essa ponte juntos?
            </h2>
            {/* SUBSTITUA: Parágrafo de convite */}
            <p className="font-outfit text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Conte um pouco sobre o seu negócio e vamos conversar sobre como
              transformar sua presença digital em resultado real.
            </p>
            {/* Link para o formulário de contato, que vive na Home */}
            <a href="/#contato" className="btn-primary text-base px-8 py-4">
              Iniciar meu projeto
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
