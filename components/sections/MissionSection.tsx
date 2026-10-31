// ─── NOSSA HISTÓRIA / MISSÃO ────────────────────────────────────────────
// SUBSTITUA: Conte a origem real da agência e a visão por trás dela.

export function MissionSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-black">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">

          <span className="badge mb-4">Nossa Missão</span>

          {/* SUBSTITUA: Título da missão */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
            Democratizar tecnologia de ponta{" "}
            <span className="text-gradient">para PMEs e autônomos</span>
          </h2>

          {/* SUBSTITUA: Parágrafo sobre a origem/história da agência */}
          <p className="font-outfit text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            A Digital S&D nasceu de uma constatação simples: pequenas e
            médias empresas e profissionais autônomos raramente têm acesso ao
            mesmo nível de qualidade digital que as grandes marcas — não por
            falta de talento disponível, mas por preço, prazo e complexidade.
          </p>

          {/* SUBSTITUA: Parágrafo sobre a visão de futuro */}
          <p className="font-outfit text-gray-400 text-base md:text-lg leading-relaxed">
            Por isso existimos: para entregar sites rápidos, bonitos e
            focados em resultado, no mesmo padrão técnico das grandes
            agências, mas com a agilidade e o preço que uma PME ou um
            profissional autônomo real consegue pagar.
          </p>
        </div>
      </div>
    </section>
  );
}
