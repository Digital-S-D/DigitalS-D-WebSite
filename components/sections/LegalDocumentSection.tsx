import type { ReactNode } from "react";
import Link from "next/link";
import { LEGAL, type LegalDocumentData } from "@/lib/legal";

// ─── DOCUMENTO LEGAL (Política de Privacidade / Termos de Uso) ──────────
// Componente reutilizável: recebe os dados de lib/legal.ts e monta a página
// com título, índice clicável e seções numeradas. Para editar os TEXTOS,
// mexa em lib/legal.ts, não aqui.

const linkClass =
  "text-brand-blue underline underline-offset-2 hover:text-white transition-colors";

// Detecta, dentro de um texto: [rótulo](link), URLs https://... e e-mails.
const TOKEN =
  /(\[[^\]]+\]\([^)]+\))|(https?:\/\/[^\s)]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  Array.from(text.matchAll(TOKEN)).forEach((m) => {
    const start = m.index ?? 0;
    const [full, markdown, url, email] = m;
    if (start > last) out.push(text.slice(last, start));

    if (markdown) {
      const parts = markdown.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const label = parts?.[1] ?? markdown;
      const href = parts?.[2] ?? "#";
      out.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className={linkClass}>
            {label}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {label}
          </a>
        )
      );
      last = start + full.length;
    } else if (url) {
      // pontuação colada no fim da URL (ponto final, vírgula) fica fora do link
      const clean = url.replace(/[.,;:]+$/, "");
      out.push(
        <a key={key++} href={clean} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {clean}
        </a>
      );
      last = start + clean.length;
    } else if (email) {
      out.push(
        <a key={key++} href={`mailto:${email}`} className={linkClass}>
          {email}
        </a>
      );
      last = start + full.length;
    }
  });

  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function LegalDocumentSection({ doc }: { doc: LegalDocumentData }) {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">

          {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
          <h1 className="font-sora font-extrabold text-3xl md:text-5xl text-white leading-tight mb-3">
            {doc.title}
          </h1>
          <p className="font-outfit text-sm text-gray-500 mb-6">
            Última atualização: {LEGAL.updatedAt}
          </p>
          <p className="font-outfit text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            {renderInline(doc.intro)}
          </p>

          {/* ─── ÍNDICE ───────────────────────────────────────────────── */}
          <nav aria-label="Índice do documento" className="card-base p-6 mb-12">
            <p className="font-sora font-semibold text-white text-sm mb-4">Neste documento</p>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {doc.sections.map((section, i) => (
                <li key={section.title}>
                  <a
                    href={`#secao-${i + 1}`}
                    className="font-outfit text-sm text-gray-400 hover:text-brand-blue transition-colors"
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ─── SEÇÕES ───────────────────────────────────────────────── */}
          <div className="space-y-10">
            {doc.sections.map((section, i) => (
              <article
                key={section.title}
                id={`secao-${i + 1}`}
                className="scroll-mt-28 border-t border-white/5 pt-8"
              >
                <h2 className="font-sora font-semibold text-xl md:text-2xl text-white mb-4">
                  {i + 1}. {section.title}
                </h2>

                {section.blocks.map((block, j) =>
                  block.type === "p" ? (
                    <p key={j} className="font-outfit text-gray-300 text-base leading-relaxed mb-4">
                      {renderInline(block.text)}
                    </p>
                  ) : (
                    <ul key={j} className="space-y-3 mb-4">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 font-outfit text-gray-300 text-base leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                          <span>{renderInline(item)}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
