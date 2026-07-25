import { User } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/constants";

// ─── QUEM FAZ ACONTECER ─────────────────────────────────────────────────
// Dados em lib/constants.ts (TEAM_MEMBERS) — funciona bem com 1, 2 ou mais membros.
// Para foto real: coloque o arquivo em /public/images/team/ e preencha photoSrc.

export function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy">
      <div className="container-custom">

        {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge mb-4">Quem Faz Acontecer</span>
          {/* SUBSTITUA: Título da seção */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Por trás de cada{" "}
            <span className="text-gradient">projeto</span>
          </h2>
          {/* SUBSTITUA: Subtítulo */}
          <p className="font-outfit text-gray-400 text-base md:text-lg">
            Sem call center, sem terceirização. Você fala direto com quem
            constrói o seu site.
          </p>
        </div>

        {/* ─── CARDS DE EQUIPE ──────────────────────────────────────────
            flex-wrap + justify-center: funciona bem com 1, 2, 3 ou mais membros,
            sem deixar buracos estranhos no grid como um grid rígido deixaria.
        ──────────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="card-base w-full max-w-[280px] text-center p-8"
            >
              {/* ─── FOTO (placeholder) ────────────────────────────────
                  SUBSTITUA: Quando tiver a foto real, troque por:
                  <Image src={`/images/team/${member.photoSrc}`} alt={member.name}
                         width={112} height={112} className="rounded-full object-cover" />
              ──────────────────────────────────────────────────────── */}
              <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-brand-navy border border-brand-blue/20
                              flex items-center justify-center overflow-hidden">
                {member.photoSrc ? (
                  <div />
                ) : (
                  <User size={40} className="text-brand-blue/30" />
                )}
              </div>
              {!member.photoSrc && (
                <p className="font-outfit text-gray-700 text-[11px] mb-4 -mt-2">
                  Adicione: /images/team/{/* SUBSTITUA */}foto.jpg
                </p>
              )}

              {/* SUBSTITUA: Nome real */}
              <h3 className="font-sora font-semibold text-white text-lg mb-1">
                {member.name}
              </h3>

              {/* SUBSTITUA: Cargo/função */}
              <p className="font-outfit text-brand-blue text-sm font-medium mb-4">
                {member.role}
              </p>

              {/* SUBSTITUA: Mini-bio */}
              <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
