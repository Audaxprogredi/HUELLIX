import { createFileRoute } from "@tanstack/react-router";
import dashboardImg from "@/assets/huellix-dashboard.jpg";
import mobileAppImg from "@/assets/huellix-mobile-app.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: dashboardImg,
      },
      {
        name: "twitter:image",
        content: dashboardImg,
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <div className="size-4 rounded-full border-2 border-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              HUELLIX <span className="text-primary">/</span> SIPECOM
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-primary">
              Plataforma
            </a>
            <a href="#mobile" className="transition-colors hover:text-primary">
              App Móvil
            </a>
            <a href="#analytics" className="transition-colors hover:text-primary">
              Analítica
            </a>
            <button className="rounded-full bg-primary px-5 py-2 font-medium text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90">
              Solicitar Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Logística de Alta Precisión
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              La huella digital de su{" "}
              <span className="text-primary">recepción logística.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Elimine la incertidumbre en bodega. HUELLIX captura evidencia irrefutable de cada
              entrega mediante validación biométrica digital, GPS y validación por IA.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-foreground px-8 py-4 font-semibold text-background transition-all hover:bg-foreground/90">
                Explorar Dashboard
              </button>
              <button className="rounded-xl border border-border bg-card px-8 py-4 font-semibold text-foreground transition-all hover:bg-muted">
                Ver App Móvil
              </button>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="relative rounded-2xl border border-border bg-card p-2 shadow-2xl">
              <img
                src={dashboardImg}
                alt="Dashboard operativo de HUELLIX con mapa de entregas y métricas logísticas"
                width={1200}
                height={800}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digital Fingerprint Section */}
      <section id="features" className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Evidencia Multi-Capa</h2>
            <p className="mt-4 text-muted-foreground">
              Cada recepción genera un certificado de integridad digital único.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              step="01"
              title="Geolocalización"
              description="Registro preciso mediante coordenadas GPS en el momento exacto de la descarga."
            />
            <FeatureCard
              step="02"
              title="Registro Visual"
              description="Captura de fotografías de precintos, estado de carga y facturación física."
            />
            <FeatureCard
              step="03"
              title="Firma Biométrica"
              description="Validación por firma digital del responsable de bodega y transportista."
            />
            <FeatureCard
              step="04"
              title="AI Assistant"
              description="Chatbot operativo para resolución de incidencias y soporte en tiempo real."
            />
          </div>
        </div>
      </section>

      {/* Operational Preview */}
      <section id="mobile" className="overflow-hidden bg-foreground py-24 text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-24 -left-24 size-64 bg-primary/20 blur-[120px]" />
              <h2 className="mb-6 text-4xl font-bold">Control Total en Bodega</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-secondary/50">
                    <div className="size-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Alertas de Discrepancia</h4>
                    <p className="text-sm text-muted-foreground/80">
                      Detección automática de faltantes o daños antes de finalizar la recepción.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-secondary/50">
                    <div className="size-2 rounded-full bg-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">Reportes de Cumplimiento</h4>
                    <p className="text-sm text-muted-foreground/80">
                      Analítica detallada por proveedor, horario y nivel de eficiencia operativa.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-12 rounded-2xl border border-background/10 bg-background/5 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    AI
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                      Asistente Operativo
                    </p>
                    <p className="text-sm italic">
                      "Detectada demora de 15 min en rampa 4. ¿Desea reasignar prioridad?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto aspect-[9/19] w-72 overflow-hidden rounded-[3rem] border-[8px] border-background shadow-2xl">
                <img
                  src={mobileAppImg}
                  alt="Aplicación móvil de HUELLIX mostrando firma digital y carga de fotos"
                  width={800}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics CTA */}
      <section id="analytics" className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Dashboard operativo para decisiones en tiempo real
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Visualice el rendimiento de recepciones, tiempos de descarga, cumplimiento de
              proveedores y alertas activas desde un único panel centralizado.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-all hover:bg-primary/90">
                Solicitar Demo
              </button>
              <button className="rounded-xl border border-border bg-background px-8 py-4 font-semibold text-foreground transition-all hover:bg-muted">
                Conocer Más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="flex items-center gap-2 opacity-70 grayscale">
            <div className="flex size-6 items-center justify-center rounded bg-foreground">
              <div className="size-3 rounded-full border border-background" />
            </div>
            <span className="font-bold tracking-tight">
              SIPECOM <span className="text-muted-foreground">×</span> HUELLIX
            </span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Huellix Sipecom. Todos los derechos reservados. Logística digital sin fricción.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-muted/50 p-8 transition-colors hover:border-secondary">
      <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-card text-lg font-bold text-primary shadow-sm">
        {step}
      </div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground text-pretty">{description}</p>
    </div>
  );
}
