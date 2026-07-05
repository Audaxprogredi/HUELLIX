import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Camera,
  MapPin,
  Clock,
  Calendar,
  Signature,
  Send,
  Bot,
  User,
  Package,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HUELLIX · Plataforma logística de recepción digital" },
      {
        name: "description",
        content:
          "Evidencia digital, asistente inteligente y dashboard operativo en una sola plataforma para la recepción logística.",
      },
    ],
  }),
});

type ChatStatus = "progress" | "success" | "rejected";
type ChatMsg =
  | { role: "user"; text: string }
  | { role: "bot"; text: string; status: ChatStatus; guide: string };

const seedChat: ChatMsg[] = [
  { role: "user", text: "Estado de la guía G-4581" },
  {
    role: "bot",
    text: "Recepción en curso en rampa 3. ETA descarga: 12 min.",
    status: "progress",
    guide: "G-4581",
  },
  { role: "user", text: "Cita CT-2210" },
  {
    role: "bot",
    text: "Descarga completa. Acta firmada por J. Pérez.",
    status: "success",
    guide: "CT-2210",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteNav />
      <Hero />
      <SectionEvidence />
      <SectionChatbot />
      <SectionDashboard />
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 md:h-16 md:flex-row md:items-center md:justify-between md:py-0">
        <div className="flex items-center justify-between gap-2">
          <a href="#top" className="flex items-center gap-2">
            <span
              className="flex size-9 items-center justify-center rounded-xl text-lg"
              style={{
                background: "linear-gradient(135deg, var(--brand-pale), var(--brand-vivid))",
                boxShadow: "0 0 20px -4px color-mix(in oklab, var(--brand-vivid) 60%, transparent)",
              }}
              aria-hidden
            >
              🖐️
            </span>
            <span className="text-lg font-bold tracking-tight text-foreground">HUELLIX</span>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <NavPill href="#evidencia" label="1 · Evidencia" />
          <NavPill href="#asistente" label="2 · Asistente IA" />
          <NavPill href="#dashboard" label="3 · Dashboard" />
          <button
            className="ml-auto rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 md:ml-2"
            style={{
              background: "var(--brand-orange)",
              boxShadow: "0 6px 18px -6px color-mix(in oklab, var(--brand-orange) 55%, transparent)",
            }}
          >
            Solicitar demo
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavPill({ href, label }: { href: string; label: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    }
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--brand-vivid)";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.borderColor = "var(--brand-vivid)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "";
        e.currentTarget.style.color = "";
        e.currentTarget.style.borderColor = "";
      }}
    >
      {label}
    </a>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
      style={{
        background:
          "linear-gradient(135deg, #0693e3 0%, #06344d 45%, #050a14 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(142,209,252,0.35), transparent 40%), radial-gradient(circle at 85% 90%, rgba(255,105,0,0.25), transparent 45%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-3xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-md">
            <span className="size-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
            <span style={{ color: "var(--brand-pale)" }}>Plataforma de recepción digital</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tres capas para blindar cada{" "}
            <span style={{ color: "var(--brand-pale)" }}>entrega</span>: evidencia, asistente y{" "}
            <span style={{ color: "var(--brand-orange)" }}>dashboard</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
            Diseñado para bodegas y tiendas retail con altos volúmenes de recepción. Sin dependencia
            de un ERP externo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{
                background: "var(--brand-orange)",
                boxShadow: "0 10px 30px -8px color-mix(in oklab, var(--brand-orange) 65%, transparent)",
              }}
            >
              Probar plataforma
            </button>
            <button className="rounded-lg border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15">
              Ver demo guiada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- 1. EVIDENCIA DIGITAL -------------------- */
function SectionEvidence() {
  return (
    <section id="evidencia" className="border-b border-border bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="01"
          eyebrow="Evidencia digital"
          title="Cámara activa + metadatos automáticos"
          description="Cada captura queda firmada con timestamp, fecha y coordenadas GPS del punto exacto de recepción."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Upload / capture module */}
          <div
            className="relative overflow-hidden rounded-2xl border border-white/10 p-8 text-white shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #0693e3 0%, #06344d 55%, #04101a 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(142,209,252,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,105,0,0.25), transparent 50%)",
              }}
            />
            <div className="relative flex flex-col items-center justify-center gap-6 py-8 text-center">
              <span
                className="flex size-20 items-center justify-center rounded-2xl border border-white/20 backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <Camera className="size-9" />
              </span>
              <div>
                <div className="text-xl font-bold">Registra la evidencia</div>
                <p className="mt-2 max-w-sm text-sm text-white/70">
                  Toma una foto o sube una imagen. Se firma automáticamente con GPS, fecha y hora.
                </p>
              </div>
              <label
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90"
                style={{
                  background: "var(--brand-orange)",
                  boxShadow: "0 10px 30px -8px color-mix(in oklab, var(--brand-orange) 65%, transparent)",
                }}
              >
                <Camera className="size-4" />
                Abrir cámara / Subir foto
                <input type="file" accept="image/*" capture="environment" className="hidden" />
              </label>
              <span className="text-[11px] uppercase tracking-widest text-white/60">
                Formatos JPG · PNG · HEIC
              </span>
            </div>
          </div>


          {/* Metadata panel */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-bold">Metadatos vinculados</h3>
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white"
                style={{ background: "var(--brand-vivid)" }}
              >
                Firmado
              </span>
            </div>
            <ul className="space-y-4 text-sm">
              <MetaRow icon={<Clock className="size-4" />} label="Timestamp" value="14:32:07 UTC-5" />
              <MetaRow
                icon={<Calendar className="size-4" />}
                label="Fecha"
                value="05 Jul 2026"
              />
              <MetaRow
                icon={<MapPin className="size-4" />}
                label="Coordenadas GPS"
                value="-0.180653, -78.467834"
                mono
              />
              <MetaRow
                icon={<Signature className="size-4" />}
                label="Firma responsable"
                value="J. Pérez · Bodega Norte"
              />
            </ul>

            <div
              className="mt-6 rounded-xl border p-4 text-xs"
              style={{
                borderColor: "color-mix(in oklab, var(--brand-vivid) 30%, transparent)",
                background: "color-mix(in oklab, var(--brand-pale) 25%, transparent)",
              }}
            >
              <div className="font-semibold text-foreground">Hash de integridad</div>
              <div className="mt-1 break-all font-mono text-muted-foreground">
                0x8ed1fc…0693e3a17b4c
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaRow({
  icon,
  label,
  value,
  mono,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0">
      <div className="flex items-center gap-3 text-muted-foreground">
        <span
          className="flex size-8 items-center justify-center rounded-md"
          style={{ background: "color-mix(in oklab, var(--brand-pale) 45%, transparent)", color: "var(--brand-vivid)" }}
        >
          {icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
      </div>
      <span className={`text-right text-sm font-semibold text-foreground ${mono ? "font-mono" : ""}`}>
        {value}
      </span>
    </li>
  );
}

/* -------------------- 2. ASISTENTE INTELIGENTE -------------------- */
function SectionChatbot() {
  const [messages, setMessages] = useState<ChatMsg[]>(seedChat);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const guide = input.trim();
    if (!guide) return;

    const statuses: ChatStatus[] = ["progress", "success", "rejected"];
    const pick = statuses[Math.floor(Math.random() * statuses.length)];
    const replyMap: Record<ChatStatus, string> = {
      progress: `Recepción de ${guide} en proceso · rampa asignada 2.`,
      success: `Guía ${guide} finalizada con evidencia completa y firma validada.`,
      rejected: `Guía ${guide} rechazada: discrepancia en cantidades reportadas.`,
    };

    setMessages((prev) => [
      ...prev,
      { role: "user", text: guide },
      { role: "bot", text: replyMap[pick], status: pick, guide },
    ]);
    setInput("");
  };

  return (
    <section id="asistente" className="border-b border-border py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="02"
          eyebrow="Asistente inteligente"
          title="Consulta el estado por Guía o Cita, en tiempo real"
          description="Un widget conversacional conectado por API a la operación. Responde con estados claros y accionables."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left copy + legend */}
          <div>
            <h3 className="text-xl font-bold">Estados visuales inmediatos</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              El bot devuelve un badge de color para que el operador entienda el estado sin leer el
              texto completo.
            </p>
            <ul className="mt-6 space-y-3">
              <LegendItem color="var(--status-progress)" label="En proceso" hint="Recepción activa" />
              <LegendItem color="var(--status-success)" label="Finalizada" hint="Firmada y cerrada" />
              <LegendItem color="var(--status-rejected)" label="Rechazada" hint="Discrepancia detectada" />
            </ul>
            <div className="mt-8 rounded-xl border border-border bg-muted/60 p-4 text-xs text-muted-foreground">
              Prueba escribir un <span className="font-mono font-semibold text-foreground">Nº de Guía</span> o{" "}
              <span className="font-mono font-semibold text-foreground">Cita</span> (ej. G-9021).
            </div>
          </div>

          {/* Chat widget */}
          <div className="rounded-2xl border border-border bg-card shadow-xl">
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <div
                className="flex size-10 items-center justify-center rounded-full text-white"
                style={{ background: "var(--brand-vivid)" }}
              >
                <Bot className="size-5" />
              </div>
              <div>
                <div className="text-sm font-bold">Asistente HUELLIX</div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  En línea · API conectada
                </div>
              </div>
            </div>

            <div className="flex h-96 flex-col gap-3 overflow-y-auto p-5">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex items-end justify-end gap-2">
                    <div
                      className="max-w-[75%] rounded-2xl rounded-br-sm px-4 py-2 text-sm text-white"
                      style={{ background: "var(--brand-vivid)" }}
                    >
                      {m.text}
                    </div>
                    <div className="flex size-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <User className="size-3.5" />
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex items-end gap-2">
                    <div
                      className="flex size-7 items-center justify-center rounded-full text-white"
                      style={{ background: "var(--brand-orange)" }}
                    >
                      <Bot className="size-3.5" />
                    </div>
                    <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-border bg-muted/70 px-4 py-2.5 text-sm">
                      <div className="mb-1.5 flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-foreground">{m.guide}</span>
                        <StatusBadge status={m.status} />
                      </div>
                      <div className="text-foreground/90">{m.text}</div>
                    </div>
                  </div>
                ),
              )}
            </div>

            <form onSubmit={handleSend} className="border-t border-border p-3">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 pl-3 pr-1.5 py-1.5 focus-within:border-foreground/40">
                <Package className="size-4 text-muted-foreground" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ingresa Nº de Guía o Cita…"
                  className="flex-1 bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "var(--brand-orange)" }}
                >
                  <Send className="size-3.5" />
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegendItem({ color, label, hint }: { color: string; label: string; hint: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
      <span className="size-3 rounded-full" style={{ background: color }} />
      <div className="flex-1">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground">{hint}</div>
      </div>
      <span
        className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white"
        style={{ background: color }}
      >
        {label}
      </span>
    </li>
  );
}

function StatusBadge({ status }: { status: ChatStatus }) {
  const map = {
    progress: { bg: "var(--status-progress)", label: "En proceso" },
    success: { bg: "var(--status-success)", label: "Finalizada" },
    rejected: { bg: "var(--status-rejected)", label: "Rechazada" },
  }[status];
  return (
    <span
      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white"
      style={{ background: map.bg }}
    >
      {map.label}
    </span>
  );
}

/* -------------------- 3. DASHBOARD OPERATIVO -------------------- */
function SectionDashboard() {
  return (
    <section id="dashboard" className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          index="03"
          eyebrow="Dashboard operativo"
          title="Cuatro tarjetas, cero ambigüedad"
          description="Panel independiente del ERP. Métricas de conteo rápido para el turno operativo actual."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            icon={<Package className="size-5" />}
            label="Entregas del día"
            value="248"
            delta="+12 vs. ayer"
            accent="var(--brand-vivid)"
          />
          <KpiCard
            icon={<CheckCircle2 className="size-5" />}
            label="A tiempo"
            value="196"
            delta="79% cumplimiento"
            accent="var(--status-success)"
          />
          <KpiCard
            icon={<XCircle className="size-5" />}
            label="Rechazadas"
            value="14"
            delta="5.6% del total"
            accent="var(--status-rejected)"
          />
          <KpiCard
            icon={<AlertTriangle className="size-5" />}
            label="Con incidencias"
            value="38"
            delta="Requiere revisión"
            accent="var(--brand-orange)"
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div
              className="flex size-10 items-center justify-center rounded-lg text-white"
              style={{ background: "var(--brand-orange)" }}
            >
              <TrendingUp className="size-5" />
            </div>
            <div>
              <div className="text-sm font-bold">Vista en tiempo real</div>
              <div className="text-xs text-muted-foreground">
                Actualización cada 30s · Turno 14:00 – 22:00
              </div>
            </div>
          </div>
          <button
            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "var(--brand-orange)" }}
          >
            Abrir dashboard completo
          </button>
        </div>
      </div>
    </section>
  );
}

function KpiCard({
  icon,
  label,
  value,
  delta,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: accent }}
      />
      <div className="flex items-center justify-between">
        <span
          className="flex size-10 items-center justify-center rounded-lg text-white"
          style={{ background: accent }}
        >
          {icon}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Hoy
        </span>
      </div>
      <div className="mt-5 text-4xl font-extrabold tabular-nums tracking-tight">{value}</div>
      <div className="mt-1 text-sm font-semibold text-foreground">{label}</div>
      <div className="mt-2 text-xs text-muted-foreground">{delta}</div>
    </div>
  );
}

/* -------------------- Helpers -------------------- */
function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span
            className="rounded-md px-2 py-1 font-mono text-xs font-bold text-white"
            style={{ background: "var(--brand-orange)" }}
          >
            {index}
          </span>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--brand-vivid)" }}
          >
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <span
            className="flex size-7 items-center justify-center rounded-lg text-sm"
            style={{ background: "linear-gradient(135deg, var(--brand-pale), var(--brand-vivid))" }}
            aria-hidden
          >
            🖐️
          </span>
          <span className="text-sm font-bold tracking-tight">HUELLIX</span>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 HUELLIX · Logística digital sin fricción.
        </div>
      </div>
    </footer>
  );
}
