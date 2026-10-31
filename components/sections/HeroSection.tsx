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
      {/* Esmaece o grid na base do Hero: suaviza a transição para a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand-navy pointer-events-none" />

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
      </div>

    </section>
  );
}
