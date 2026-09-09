import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  Truck,
  Ruler,
  MessageCircle,
  Quote,
  ArrowRight,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import boxImg from "@/assets/box.jpg";
import fachadaImg from "@/assets/fachada.jpg";
import guardaCorpoImg from "@/assets/guardacorpo.jpg";

const WHATSAPP_URL =
  "https://wa.me/5522997637205?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Teres%C3%B3polis,+257+-+Parque+Guarus,+Campos+dos+Goytacazes+-+RJ";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Disk Vidros Vidraçaria | Campos dos Goytacazes - RJ" },
      {
        name: "description",
        content:
          "Vidraçaria 5 estrelas em Campos dos Goytacazes. Box de vidro, fachadas, guarda-corpos, janelas e espelhos sob medida. Orçamento rápido pelo WhatsApp (22) 99763-7205.",
      },
      { property: "og:title", content: "Disk Vidros Vidraçaria | Campos dos Goytacazes - RJ" },
      {
        property: "og:description",
        content:
          "Box de vidro, fachadas, guarda-corpos e espelhos sob medida. Atendimento 5 estrelas, preço justo e entrega pontual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Disk Vidros Vidraçaria",
          telephone: "+55-22-99763-7205",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Teresópolis, 257 - Parque Guarus",
            addressLocality: "Campos dos Goytacazes",
            addressRegion: "RJ",
            postalCode: "28070-370",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "49",
          },
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    image: boxImg,
    title: "Box de vidro para banheiro",
    description:
      "Box em vidro temperado sob medida, com perfis discretos e instalação impecável. Do orçamento à instalação com agilidade.",
  },
  {
    image: fachadaImg,
    title: "Fachadas e portas de vidro",
    description:
      "Fachadas comerciais, portas de correr e de abrir em vidro temperado, com estrutura em alumínio de alta qualidade.",
  },
  {
    image: guardaCorpoImg,
    title: "Guarda-corpos de vidro",
    description:
      "Guarda-corpos para sacadas, escadas e mezaninos, unindo segurança e uma vista livre para o seu ambiente.",
  },
];

const extraServices = [
  "Janelas e esquadrias",
  "Espelhos sob medida",
  "Tampos de mesa em vidro",
  "Divisórias de ambiente",
  "Vidros temperados e laminados",
  "Manutenção e reposição de vidros",
];

const reviews = [
  {
    name: "Milena Pacheco",
    time: "há 9 meses",
    text: "Disk Vidros recomendo para todos. Nagib e sua equipe atenciosos do início ao final do meu pedido, entrega no prazo correto e preço justo!",
  },
  {
    name: "Daniel Bastos",
    time: "há 11 meses",
    text: "Trabalho impecável, compromisso com o cliente, serviços de qualidade. Parabéns a toda equipe. Já sou cliente há anos e indico pra quem me pede.",
  },
  {
    name: "Anderson Oliveira",
    time: "há 7 meses",
    text: "Ótimo atendimento e serviço de ótima qualidade, parabéns.",
  },
];

const differentials = [
  {
    icon: ShieldCheck,
    title: "Qualidade garantida",
    text: "Materiais de alta qualidade e mão de obra especializada em cada projeto.",
  },
  {
    icon: Truck,
    title: "Entrega pontual",
    text: "Compromisso com prazos: seu pedido entregue e instalado na data combinada.",
  },
  {
    icon: Ruler,
    title: "Sob medida",
    text: "Medição precisa e projetos personalizados para o seu espaço.",
  },
  {
    icon: Sparkles,
    title: "Preço justo",
    text: "Orçamento transparente, sem surpresas, com o melhor custo-benefício da região.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 animate-twinkle fill-amber-400 text-amber-400"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">
              Disk Vidros <span className="hidden text-sm font-medium text-muted-foreground sm:inline">Vidraçaria</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-foreground">Serviços</a>
            <a href="#diferenciais" className="transition-colors hover:text-foreground">Diferenciais</a>
            <a href="#avaliacoes" className="transition-colors hover:text-foreground">Avaliações</a>
            <a href="#contato" className="transition-colors hover:text-foreground">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Pedir orçamento</span>
            <span className="sm:hidden">Orçamento</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              5,0 no Google · 49 avaliações
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Vidros sob medida com <span className="text-primary">instalação impecável</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              Box de vidro, fachadas, guarda-corpos e espelhos em Campos dos Goytacazes e região.
              Atendimento atencioso, preço justo e entrega no prazo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar orçamento grátis
              </a>
              <a
                href="tel:+5522997637205"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-semibold transition-colors hover:bg-accent"
              >
                <Phone className="h-5 w-5" />
                (22) 99763-7205
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              Av. Teresópolis, 257 - Parque Guarus, Campos dos Goytacazes - RJ
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Profissional da Disk Vidros instalando box de vidro temperado"
              width={1600}
              height={1000}
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg md:block">
              <div className="flex items-center gap-2">
                <Stars />
              </div>
              <p className="mt-1 text-sm font-medium">"Trabalho impecável, compromisso com o cliente"</p>
              <p className="text-xs text-muted-foreground">— Daniel Bastos, cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="border-y border-border bg-secondary/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Serviços</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Tudo em vidro para sua casa ou empresa
            </h2>
            <p className="mt-3 text-muted-foreground">
              Projetos sob medida com vidros temperados de alta qualidade, do orçamento à instalação final.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {extraServices.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Diferenciais</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Por que escolher a Disk Vidros?
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="border-y border-border bg-secondary/50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Avaliações</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                Quem contrata, recomenda
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3">
              <span className="text-4xl font-extrabold">5,0</span>
              <div>
                <Stars />
                <p className="mt-1 text-xs text-muted-foreground">49 avaliações no Google</p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <Quote className="h-6 w-6 text-primary/40" />
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground">"{r.text}"</blockquote>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <Stars />
                  <p className="mt-2 text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time} · avaliação no Google</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Peça seu orçamento</h2>
              <p className="mt-3 text-muted-foreground">
                Atendimento rápido pelo WhatsApp: envie as medidas ou fotos do seu projeto e receba um orçamento
                sem compromisso.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong className="block font-semibold">Endereço</strong>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground underline-offset-2 hover:underline">
                    Av. Teresópolis, 257 - Parque Guarus, Campos dos Goytacazes - RJ, 28070-370
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong className="block font-semibold">Telefone / WhatsApp</strong>
                  <a href="tel:+5522997637205" className="text-muted-foreground underline-offset-2 hover:underline">
                    (22) 99763-7205
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <strong className="block font-semibold">Horário de atendimento</strong>
                  <span className="text-muted-foreground">Segunda a sexta, das 8h às 18h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>
            <strong className="text-foreground">Disk Vidros Vidraçaria</strong> · Campos dos Goytacazes - RJ
          </p>
          <p>(22) 99763-7205</p>
        </div>
      </footer>
    </div>
  );
}
