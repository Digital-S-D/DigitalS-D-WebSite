"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

// ─── CONTEÚDO DO HERO ─────────────────────────────────────────────────
// SUBSTITUA: Ajuste todos os textos, números e links de CTA

// Benefícios rápidos listados no hero
const quickBenefits = [
  "Prazo de entrega ágil",
  "Focado em conversão",
  "Suporte incluso",
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Efeito parallax suave no mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy"
    >

      {/* ─── BACKGROUND: Grid + Orbs ────────────────────────────────── */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Orb azul gradiente — efeito de glow de fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0
                      w-[400px] h-[400px] rounded-full
                      bg-brand-blue/5 blur-[100px] pointer-events-none" />

      {/* ─── CONTEÚDO PRINCIPAL ─────────────────────────────────────── */}
      <div ref={containerRef} className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo —S & D— acima do título principal */}
          <div className="flex justify-center mb-3
                          animate-fadeInUp opacity-0" style={{ animationFillMode: "both" }}>
            <Image
              src={`${BASE_PATH}/images/logo-sd.png`}
              alt="S & D"
              width={2000}
              height={2000}
              priority
              className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] max-w-[85%] h-auto object-contain"
            />
          </div>

          {/* ─── TÍTULO PRINCIPAL ──────────────────────────────────────
              SUBSTITUA: Este é o elemento mais importante para conversão.
              Foque na DOR do seu cliente ideal (PME sem site ou com site ruim).
              Máximo 2 linhas. Use a fonte Sora (aplicada via classe font-sora).
          ─────────────────────────────────────────────────────────── */}
          <h1
            className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       text-white leading-[1.1] tracking-tight mb-6
                       animate-fadeInUp opacity-0 animation-delay-100"
            style={{ animationFillMode: "both" }}
          >
            Seu negócio merece um site que{" "}
            <span className="text-brand-blue text-glow">
              realmente vende
            </span>
          </h1>

          {/* ─── SUBTÍTULO ────────────────────────────────────────────
              SUBSTITUA: Foque na SOLUÇÃO e no RESULTADO.
              Seja específico: "em X dias", "sem mensalidades", etc.
          ─────────────────────────────────────────────────────────── */}
          <p
            className="font-outfit text-lg md:text-xl text-gray-300 leading-relaxed
                       max-w-2xl mx-auto mb-8
                       animate-fadeInUp opacity-0 animation-delay-200"
            style={{ animationFillMode: "both" }}
          >
            Desenvolvemos sites modernos, ultrarrápidos e focados em conversão
            para pequenas e médias empresas e profissionais autônomos que querem
            atrair mais clientes e faturar mais com sua presença digital.
          </p>

          {/* ─── LISTA DE BENEFÍCIOS RÁPIDOS ─────────────────────────── */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mb-10
                       animate-fadeInUp opacity-0 animation-delay-300"
            style={{ animationFillMode: "both" }}
          >
            {quickBenefits.map((benefit) => (
              <span key={benefit} className="flex items-center gap-2 text-sm font-outfit text-gray-300">
                <CheckCircle size={16} className="text-brand-blue shrink-0" />
                {benefit}
              </span>
            ))}
          </div>

          {/* ─── BOTÕES CTA ──────────────────────────────────────────────
              SUBSTITUA:
              CTA 1: Link para WhatsApp com mensagem pré-formatada
                href="https://wa.me/5531999999999?text=Olá!+Quero+um+orçamento+para+meu+site"
              CTA 2: Link para seção de portfólio ou formulário de contato
          ─────────────────────────────────────────────────────────── */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4
                       animate-fadeInUp opacity-0 animation-delay-400"
            style={{ animationFillMode: "both" }}
          >
            <a
              href="#contato"
              className="btn-primary text-base px-8 py-4 animate-glow"
            >
              Quero meu site agora
              <ArrowRight size={18} />
            </a>
            <a
              href="#portfolio"
              className="btn-outline text-base px-8 py-4"
            >
              Ver nossos projetos
            </a>
          </div>

          {/* ─── PROVA SOCIAL RÁPIDA ──────────────────────────────────── */}
          <div
            className="mt-12 flex justify-center
                       animate-fadeInUp opacity-0 animation-delay-500"
            style={{ animationFillMode: "both" }}
          >
            {/* SUBSTITUA: Ajuste as cidades/regiões conforme sua atuação real */}
            <p className="text-xs text-gray-500 font-outfit text-center">
              Projetos entregues em{" "}
              <span className="text-white font-semibold">BH, SP, RJ e todo Brasil</span>
            </p>
          </div>
        </div>

        {/* ─── ELEMENTO GRÁFICO DECORATIVO ──────────────────────────────
            SUBSTITUA: Idealmente, coloque aqui um mockup do seu trabalho,
            screenshot de um projeto, ou ilustração representativa.
            Tamanho sugerido: 1200x800px
            Posição: abaixo dos CTAs, com sombra e border azul
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-16 md:mt-20 relative max-w-5xl mx-auto
                        animate-fadeInUp opacity-0 animation-delay-600"
             style={{ animationFillMode: "both" }}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10
                          shadow-2xl shadow-black/50">
            {/* Brilho superior */}
            <div className="absolute top-0 left-0 right-0 h-px
                            bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

            {/* SUBSTITUA: Troque este div por um <Image> com screenshot do seu projeto
                <Image
                  src="/images/hero-mockup.jpg"
                  alt="Exemplo de projeto Digital S&D"
                  width={1200}
                  height={680}
                  className="w-full h-auto"
                  priority
                />
            */}
            <div className="w-full bg-brand-black relative" style={{ paddingBottom: "56.25%" }}>
              {/* Barra do browser simulada */}
              <div className="absolute top-0 left-0 right-0 h-9 bg-gray-900 border-b border-white/5
                              flex items-center gap-2 px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/5 rounded px-3 py-1 text-xs text-gray-600 font-outfit w-48">
                    seu-negocio.com.br
                  </div>
                </div>
              </div>

              {/* Área de conteúdo placeholder */}
              <div className="absolute top-9 inset-x-0 bottom-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 border border-brand-blue/20
                                  rounded-xl flex items-center justify-center">
                    <span className="font-sora font-bold text-brand-blue text-xl">SD</span>
                  </div>
                  <p className="font-outfit text-gray-600 text-sm">
                    {/* Mensagem do placeholder */}
                    Adicione aqui um screenshot de um projeto real
                  </p>
                  <p className="font-outfit text-gray-700 text-xs mt-1">
                    Substitua por: /images/hero-mockup.jpg
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags flutuantes decorativas */}
          <div className="absolute -left-4 top-1/3 hidden lg:block">
            <div className="bg-brand-navy border border-brand-blue/30 rounded-xl px-3 py-2
                            shadow-lg animate-float">
              <p className="font-outfit text-xs text-gray-400">Performance</p>
              <p className="font-sora font-bold text-white text-lg">98 / 100</p>
              <p className="font-outfit text-xs text-brand-blue">Google PageSpeed</p>
            </div>
          </div>
          <div className="absolute -right-4 top-1/4 hidden lg:block animation-delay-200">
            <div className="bg-brand-navy border border-brand-blue/30 rounded-xl px-3 py-2
                            shadow-lg animate-float" style={{ animationDelay: "1s" }}>
              <p className="font-outfit text-xs text-gray-400">Taxa de conversão</p>
              <p className="font-sora font-bold text-white text-lg">+147%</p>
              <p className="font-outfit text-xs text-brand-blue">após redesign</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
