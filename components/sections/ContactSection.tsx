"use client";

import { useState } from "react";
import { Send, CheckCircle, MessageCircle, Mail, Phone, Clock } from "lucide-react";
import { BUDGET_OPTIONS } from "@/lib/constants";

// ─── INFORMAÇÕES DE CONTATO ──────────────────────────────────────────
// SUBSTITUA: Todas as informações de contato abaixo com dados reais
// NOTA: estes valores estão intencionalmente separados de lib/constants.ts
// pois o e-mail e a opção "Manutenção/Suporte" aqui divergem dos valores
// centrais — ver relatório de auditoria para detalhes antes de unificar.

const contactInfo = [
  {
    icon:    MessageCircle,
    title:   "WhatsApp",
    // SUBSTITUA: Número de WhatsApp
    value:   "(31) 9 9299-8761",
    // SUBSTITUA: Link do WhatsApp com mensagem
    href:    "https://wa.me/5531992998761?text=Olá!+Quero+um+orçamento+para+meu+site",
    label:   "Resposta em minutos",
  },
  {
    icon:    Mail,
    title:   "E-mail",
    // SUBSTITUA: Email real da agência
    value:   "digitalsd.contato@gmail.com",
    href:    "mailto:digitalsd.contato@gmail.com",
    label:   "Resposta em até 24h",
  },
  {
    icon:    Clock,
    title:   "Horário de atendimento",
    // SUBSTITUA: Seu horário real de atendimento
    value:   "Seg–Sex: 9h às 18h",
    href:    null,
    label:   "BH, Brasília (GMT-3)",
  },
];

// Opções de serviço para o select
// SUBSTITUA: Adicione/remova opções conforme seus serviços
const serviceOptions = [
  "Selecione o serviço...",
  "Site Institucional",
  "Site para Autônomo",
  "Landing Page",
  "E-commerce",
  "SEO & Performance",
  "Aplicativo Web",
  "Manutenção/Suporte",
  "Outro",
];

// Opções de orçamento — idênticas a lib/constants.ts, lidas de lá
const budgetOptions = BUDGET_OPTIONS;

type FormData = {
  name:    string;
  email:   string;
  phone:   string;
  company: string;
  service: string;
  budget:  string;
  message: string;
};

const initialForm: FormData = {
  name:    "",
  email:   "",
  phone:   "",
  company: "",
  service: serviceOptions[0],
  budget:  budgetOptions[0],
  message: "",
};

// ─── Máscara de telefone: (00) 0 0000-0000 ─────────────────────────────
// Remove tudo que não é número e formata progressivamente enquanto digita
function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11); // máx 11 dígitos (DDD + 9 dígitos)

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

// ─── Validação de e-mail ────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactSection() {
  const [formData, setFormData]   = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [error, setError]               = useState<string | null>(null);
  const [emailTouched, setEmailTouched] = useState(false);

  // E-mail é válido se vazio (campo ainda não preenchido) ou se bate com o regex
  const isEmailValid = formData.email === "" || EMAIL_REGEX.test(formData.email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Telefone: aplica máscara (00) 0 0000-0000 e bloqueia letras/símbolos
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const masked = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: masked }));
  };

  // ─── SUBMIT DO FORMULÁRIO ────────────────────────────────────────────
  // Envio real via Formspree. O endpoint vem de uma variável de ambiente
  // (NEXT_PUBLIC_FORMSPREE_ENDPOINT) em vez de ficar hardcoded no código —
  // assim você troca de formulário sem precisar editar/re-buildar o código.
  //
  // Como configurar (veja também o arquivo .env.local.example):
  //   1. Crie uma conta grátis em https://formspree.io
  //   2. Crie um novo formulário e configure o e-mail de destino como
  //      digitalsd.contato@gmail.com
  //   3. Copie a URL do endpoint (algo como https://formspree.io/f/xxxxxxx)
  //   4. Local: crie um arquivo .env.local na raiz do projeto com:
  //        NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxx
  //   5. No GitHub: Settings → Secrets and variables → Actions → New repository
  //      secret, nome FORMSPREE_ENDPOINT, valor = a mesma URL. O workflow
  //      (.github/workflows/deploy.yml) já está configurado para injetá-la
  //      no build automaticamente.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação extra de e-mail antes de enviar
    if (!EMAIL_REGEX.test(formData.email)) {
      setEmailTouched(true);
      setError("Digite um e-mail válido para continuar.");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    // Se o endpoint ainda não foi configurado, avisa claramente em vez de
    // fingir que enviou (evita o formulário "funcionar" silenciosamente errado).
    if (!endpoint) {
      setError(
        "Formulário ainda não configurado. Defina NEXT_PUBLIC_FORMSPREE_ENDPOINT (veja .env.local.example)."
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Falha no envio");

      setIsSubmitted(true);
      setFormData(initialForm);
      setEmailTouched(false);
    } catch {
      setError("Erro ao enviar. Tente pelo WhatsApp ou email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-brand-black">
      <div className="container-custom">

        {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge mb-4">
            <Send size={12} />
            Fale conosco
          </span>
          {/* SUBSTITUA: Título da seção de contato */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Pronto para{" "}
            <span className="text-gradient">começar seu projeto?</span>
          </h2>
          {/* SUBSTITUA: Subtítulo / promessa */}
          <p className="font-outfit text-gray-400 text-base md:text-lg">
            Preencha o formulário e receba um orçamento sem compromisso em até 24h.
            Ou fale direto pelo WhatsApp para resposta imediata.
          </p>
        </div>

        {/* ─── LAYOUT PRINCIPAL ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 max-w-5xl mx-auto">

          {/* ── SIDEBAR: INFORMAÇÕES ──────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-5">

            {/* Cards de contato */}
            {contactInfo.map((info) => (
              <div key={info.title} className="card-base group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20
                                  flex items-center justify-center shrink-0 mt-0.5
                                  group-hover:bg-brand-blue/20 transition-colors">
                    <info.icon size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-outfit text-xs text-gray-500 mb-0.5">{info.title}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-outfit font-semibold text-white text-sm
                                   hover:text-brand-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-outfit font-semibold text-white text-sm">{info.value}</p>
                    )}
                    <p className="font-outfit text-xs text-gray-600 mt-0.5">{info.label}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA WhatsApp destaque */}
            {/* SUBSTITUA: href com seu WhatsApp real */}
            <a
              href="https://wa.me/5531992998761?text=Olá!+Quero+um+orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm"
            >
              <MessageCircle size={16} />
              Chamar no WhatsApp
            </a>

            {/* Aviso de privacidade */}
            <p className="text-xs font-outfit text-gray-600 text-center leading-relaxed">
              Não enviamos spam. Seus dados são usados apenas para responder ao seu contato.
            </p>
          </div>

          {/* ── FORMULÁRIO ───────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-white/5
                            bg-brand-navy p-6 md:p-8">
              {/* Brilho decorativo */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/5 rounded-full
                              blur-3xl pointer-events-none" />

              {/* Estado de sucesso */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20
                                  flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-white text-xl mb-2">
                      Mensagem enviada!
                    </h3>
                    {/* SUBSTITUA: Mensagem de confirmação personalizada */}
                    <p className="font-outfit text-gray-400 text-sm">
                      Obrigado! Entraremos em contato em até 24h úteis.
                      Se preferir resposta imediata, chame no WhatsApp.
                    </p>
                  </div>
                  <button
                    onClick={() => { setIsSubmitted(false); setEmailTouched(false); }}
                    className="btn-outline text-sm mt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">

                  {/* Linha 1: Nome + Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        // SUBSTITUA: placeholder com exemplo real
                        placeholder="Seu nome completo"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Linha 2: Email + Telefone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => setEmailTouched(true)}
                        placeholder="seu@email.com.br"
                        className={`input-field ${
                          emailTouched && !isEmailValid
                            ? "border-red-500/60 focus:border-red-500 focus:ring-red-500"
                            : ""
                        }`}
                      />
                      {emailTouched && !isEmailValid && (
                        <p className="text-red-400 text-xs font-outfit mt-1.5">
                          Digite um e-mail válido (ex: nome@empresa.com).
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                        WhatsApp / Telefone *
                      </label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(00) 0 0000-0000"
                        maxLength={16}
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Linha 3: Serviço + Orçamento */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                        Serviço desejado
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-field"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-gray-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                        Orçamento disponível
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-gray-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Linha 4: Mensagem */}
                  <div>
                    <label className="block font-outfit text-xs text-gray-400 mb-1.5">
                      Descreva seu projeto
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte sobre o seu negócio, o que precisa e qual o objetivo do projeto..."
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Erro de envio */}
                  {error && (
                    <p className="font-outfit text-red-400 text-xs text-center">{error}</p>
                  )}

                  {/* Botão submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-base py-4
                               disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Solicitar orçamento grátis
                      </>
                    )}
                  </button>

                  <p className="font-outfit text-gray-600 text-xs text-center">
                    Sem compromisso · Resposta em até 24h úteis
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
