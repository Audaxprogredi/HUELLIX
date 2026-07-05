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
      { title: "HUELLIX × SIPECOM · Plataforma logística de recepción digital" },
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
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          <a href="#evidencia" className="transition-colors hover:text-foreground">
            Evidencia
          </a>
          <a href="#asistente" className="transition-colors hover:text-foreground">
            Asistente IA
          </a>
          <a href="#dashboard" className="transition-colors hover:text-foreground">
            Dashboard
          </a>
          <button
            className="ml-auto rounded-lg px-4 py-2 font-semibold text-white shadow-sm transition-all hover:opacity-90 md:ml-0"
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

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="max-w-3xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ color: "var(--brand-vivid)" }}
          >
            <span className="size-1.5 rounded-full" style={{ background: "var(--brand-orange)" }} />
            Plataforma de recepción digital
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tres capas para blindar cada{" "}
            <span style={{ color: "var(--brand-vivid)" }}>entrega</span>: evidencia, asistente y{" "}
            <span style={{ color: "var(--brand-orange)" }}>dashboard</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Diseñado para bodegas y tiendas retail con altos volúmenes de recepción. Sin dependencia
            de un ERP externo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--brand-orange)" }}
            >
              Probar plataforma
            </button>
            <button className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted">
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
          {/* Camera module */}
          <div className="overflow-hidden rounded-2xl border border-border bg-neutral-950 text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-xs">
              <div className="flex items-center gap-2 font-medium">
                <span className="size-2 animate-pulse rounded-full bg-red-500" />
                REC · Cámara trasera
              </div>
              <span className="font-mono text-white/70">1080p · 30fps</span>
            </div>
            <div className="relative aspect-[4/3] w-full">
              {/* Simulated camera view */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, #0b3a52 0%, #061726 60%, #030b13 100%)",
                }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "80px 80px",
                }}
              />
              {/* Focus reticle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative size-40">
                  <div
                    className="absolute inset-0 rounded-md border-2"
                    style={{ borderColor: "var(--brand-orange)" }}
                  />
                  <div className="absolute -top-6 left-0 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                    Enfoque · Precinto
                  </div>
                </div>
              </div>
              {/* Package preview */}
              <div className="absolute bottom-6 left-6 rounded-lg bg-white/10 px-3 py-2 text-xs backdrop-blur-md">
                <div className="font-mono">GUÍA G-4581</div>
                <div className="text-white/70">Proveedor: LogiSur SA</div>
              </div>
              {/* Capture button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div
                  className="flex size-14 items-center justify-center rounded-full border-4 border-white/80"
                  style={{ boxShadow: "0 0 0 4px rgba(255,105,0,0.35)" }}
                >
                  <div
                    className="size-9 rounded-full"
                    style={{ background: "var(--brand-orange)" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-white/70">
              <span className="flex items-center gap-2">
                <Camera className="size-4" />5 fotos · 2 firmas
              </span>
              <span className="font-mono">SESIÓN #48219</span>
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
          <div className="flex size-6 items-center justify-center rounded" style={{ background: "var(--brand-vivid)" }}>
            <div className="size-2.5 rounded-sm border border-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">
            SIPECOM <span className="text-muted-foreground">×</span> HUELLIX
          </span>
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 Huellix Sipecom · Logística digital sin fricción.
        </div>
      </div>
    </footer>
  );
}
