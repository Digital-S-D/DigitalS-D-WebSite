"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Send, CheckCircle, MessageCircle, Mail, Clock } from "lucide-react";
import { BUDGET_OPTIONS, COMPANY, LINKS, SERVICE_OPTIONS } from "@/lib/constants";
import { formatPhone, isFormEndpointConfigured, validateContact, type ContactData, type ContactErrors } from "@/lib/contact";
import { ContactServiceIntent } from "./ContactServiceIntent";

const contactInfo = [
  { icon: MessageCircle, title: "WhatsApp", value: COMPANY.phone, href: LINKS.whatsappOrcamento, label: "Converse sobre seu projeto" },
  { icon: Mail, title: "E-mail", value: COMPANY.email, href: `mailto:${COMPANY.email}`, label: "Envie suas dúvidas e ideias" },
  { icon: Clock, title: "Horário de atendimento", value: "Seg–Sex: 9h às 18h", href: null, label: "Horário de Brasília" },
];

const initialForm: ContactData = { name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" };
const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
const formAvailable = isFormEndpointConfigured(endpoint);
const labelClass = "block font-outfit text-sm text-gray-300 mb-1.5";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactData>(initialForm);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const selectService = useCallback((service: string) => {
    setFormData((current) => ({ ...current, service }));
  }, []);

  const wasSubmitted = useRef(false);
  useEffect(() => {
    if (isSubmitted) successRef.current?.focus();
    else if (wasSubmitted.current) (formRef.current?.elements.namedItem("name") as HTMLInputElement | null)?.focus();
    wasSubmitted.current = isSubmitted;
  }, [isSubmitted]);
  useEffect(() => { if (submitError) errorRef.current?.focus(); }, [submitError]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = event.target.name as keyof ContactData;
    const value = field === "phone" ? formatPhone(event.target.value) : event.target.value;
    const next = { ...formData, [field]: value };
    setFormData(next);
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: validateContact(next)[field] }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const field = event.target.name as keyof ContactData;
    setErrors((previous) => ({ ...previous, [field]: validateContact(formData)[field] }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitError(null);
    const nextErrors = validateContact(formData);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      (formRef.current?.elements.namedItem(firstInvalid) as HTMLInputElement | null)?.focus();
      return;
    }
    if (!isFormEndpointConfigured(endpoint)) {
      setSubmitError("O envio pelo formulário está indisponível no momento. Fale conosco pelo WhatsApp ou e-mail abaixo.");
      return;
    }
    setIsSubmitting(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()]))),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Envio não confirmado");
      setIsSubmitted(true);
      setFormData(initialForm);
      setErrors({});
    } catch {
      setSubmitError("Não foi possível confirmar o envio. Seus dados foram mantidos para tentar novamente. Você também pode falar conosco pelo WhatsApp ou e-mail abaixo.");
    } finally {
      window.clearTimeout(timeout);
      setIsSubmitting(false);
    }
  };

  const fieldError = (field: keyof ContactData) => errors[field] ? (
    <p id={`contact-${field}-error`} className="text-red-300 text-sm mt-1.5" role="alert">{errors[field]}</p>
  ) : null;

  return (
    <section id="contato" className="py-20 md:py-28 bg-brand-black">
      <Suspense fallback={null}><ContactServiceIntent onSelect={selectService} /></Suspense>
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="badge mb-4"><Send size={12} aria-hidden="true" />Fale conosco</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">Pronto para <span className="text-gradient">começar seu projeto?</span></h2>
          <p className="text-gray-300 text-base md:text-lg">Conte o que você precisa para conversarmos sobre um orçamento sem compromisso. Se preferir, fale pelo WhatsApp ou e-mail.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-5 min-w-0">
            {contactInfo.map((info) => (
              <div key={info.title} className="card-base">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0"><info.icon size={18} className="text-blue-400" aria-hidden="true" /></div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 mb-0.5">{info.title}</p>
                    {info.href ? <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="inline-block py-2 font-semibold text-white text-sm break-words hover:underline">{info.value}</a> : <p className="font-semibold text-white text-sm">{info.value}</p>}
                    <p className="text-xs text-gray-400 mt-0.5">{info.label}</p>
                  </div>
                </div>
              </div>
            ))}
            <a href={LINKS.whatsappOrcamento} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm"><MessageCircle size={16} aria-hidden="true" />Chamar no WhatsApp</a>
            <p className="text-xs text-gray-400 text-center leading-relaxed">Seus dados são usados para responder ao seu contato.</p>
          </div>
          <div className="lg:col-span-3 min-w-0">
            <div className="rounded-2xl border border-white/10 bg-brand-navy p-5 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={40} className="text-green-400" aria-hidden="true" />
                  <h3 ref={successRef} tabIndex={-1} className="font-sora font-bold text-white text-xl">Mensagem enviada!</h3>
                  <p className="text-gray-300 text-sm">Obrigado pelo contato! Nossa equipe vai analisar sua mensagem e retornar pelo contato informado.</p>
                  <button type="button" onClick={() => setIsSubmitted(false)} className="btn-outline text-sm mt-2">Enviar outra mensagem</button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Solicitar orçamento" aria-busy={isSubmitting} className="space-y-4">
                  <p className="text-sm text-gray-300">Campos com * são obrigatórios.</p>
                  {!formAvailable && <p className="text-sm text-amber-200" role="status">O formulário está temporariamente indisponível. Entre em contato pelo WhatsApp ou e-mail.</p>}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>Nome *</label>
                      <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={120} value={formData.name} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} className="input-field" placeholder="Seu nome completo" />
                      {fieldError("name")}
                    </div>
                    <div>
                      <label htmlFor="contact-company" className={labelClass}>Empresa (opcional)</label>
                      <input id="contact-company" name="company" type="text" autoComplete="organization" maxLength={160} value={formData.company} onChange={handleChange} className="input-field" placeholder="Nome da empresa" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>E-mail *</label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={254} value={formData.email} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} className="input-field" placeholder="seu@email.com.br" />
                      {fieldError("email")}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className={labelClass}>WhatsApp / Telefone *</label>
                      <input id="contact-phone" name="phone" type="tel" autoComplete="tel-national" inputMode="tel" required maxLength={24} value={formData.phone} onChange={handleChange} onBlur={handleBlur} aria-invalid={Boolean(errors.phone)} aria-describedby={`contact-phone-hint${errors.phone ? " contact-phone-error" : ""}`} className="input-field" placeholder="(31) 99999-9999" />
                      <p id="contact-phone-hint" className="text-xs text-gray-400 mt-1.5">Inclua o DDD. Aceitamos fixo ou celular.</p>
                      {fieldError("phone")}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-service" className={labelClass}>Serviço desejado (opcional)</label>
                      <select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="input-field">
                        {SERVICE_OPTIONS.map((option, index) => <option key={option} value={index === 0 ? "" : option} className="bg-gray-900">{option}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className={labelClass}>Orçamento disponível (opcional)</label>
                      <select id="contact-budget" name="budget" value={formData.budget} onChange={handleChange} className="input-field">
                        {BUDGET_OPTIONS.map((option, index) => <option key={option} value={index === 0 ? "" : option} className="bg-gray-900">{option}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Descreva seu projeto (opcional)</label>
                    <textarea id="contact-message" name="message" maxLength={5000} value={formData.message} onChange={handleChange} rows={4} placeholder="Conte sobre o seu negócio e o que precisa..." className="input-field resize-y" />
                  </div>
                  {submitError && <p ref={errorRef} tabIndex={-1} role="alert" className="text-red-300 text-sm">{submitError}</p>}
                  {(!formAvailable || submitError) && <div className="flex flex-wrap gap-4 text-sm"><a className="text-blue-300 underline py-2" href={LINKS.whatsappOrcamento} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a><a className="text-blue-300 underline py-2" href={`mailto:${COMPANY.email}`}>Enviar e-mail</a></div>}
                  <button type="submit" disabled={isSubmitting || !formAvailable} className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"><Send size={16} aria-hidden="true" />{isSubmitting ? "Enviando..." : "Solicitar orçamento grátis"}</button>
                </form>
              )}
              <p role="status" aria-live="polite" className="sr-only">{isSubmitting ? "Enviando sua mensagem. Aguarde a confirmação." : isSubmitted ? "Mensagem enviada com sucesso." : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
