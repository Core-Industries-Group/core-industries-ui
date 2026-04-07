import { Highlight } from "@ui/components/animation/hero-highlight";
import { SectionWrapper } from "../components/SectionWrapper";

const typeScale = [
  { label: "Display Hero", size: "56px", weight: 800, lh: "1.05", ls: "-1.4px", font: "display", text: "Build Something Real" },
  { label: "Display Large", size: "48px", weight: 700, lh: "1.10", ls: "-0.96px", font: "display", text: "Build Something Real" },
  { label: "Section Heading", size: "32px", weight: 700, lh: "1.15", ls: "-0.64px", font: "display", text: "Build Something Real" },
  { label: "Sub-heading", size: "24px", weight: 600, lh: "1.20", ls: "-0.48px", font: "display", text: "Build Something Real" },
  { label: "Card Title", size: "20px", weight: 600, lh: "1.25", ls: "-0.2px", font: "display", text: "Build Something Real" },
];

const bodyScale = [
  { label: "Body Large", size: "18px", weight: 400, lh: "1.50", text: "Operational infrastructure that handles what your team shouldn't have to." },
  { label: "Body", size: "16px", weight: 400, lh: "1.50", text: "Operational infrastructure that handles what your team shouldn't have to." },
  { label: "Body Small", size: "14px", weight: 400, lh: "1.45", text: "Operational infrastructure that handles what your team shouldn't have to." },
  { label: "Caption", size: "12px", weight: 400, lh: "1.45", text: "Operational infrastructure that handles what your team shouldn't have to." },
];

export function TypographySection() {
  return (
    <SectionWrapper id="typography" title="Typography" description="Archivo for display & headlines. DM Sans for body & UI. Never use Inter, Roboto, or system defaults.">
      {/* Display Scale */}
      <div className="mb-10">
        <h3 className="overline mb-6">Display Scale — Archivo</h3>
        <div className="space-y-6">
          {typeScale.map((t) => (
            <div key={t.label} className="border-b border-border pb-4 last:border-0">
              <p className="mb-1 font-mono text-[11px] text-muted-foreground">
                {t.label} · {t.size} · {t.weight} · {t.lh} · {t.ls}
              </p>
              <p
                className="font-display text-foreground"
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: t.lh,
                  letterSpacing: t.ls,
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Body Scale */}
      <div className="mb-10">
        <h3 className="overline mb-6">Body Scale — DM Sans</h3>
        <div className="space-y-4">
          {bodyScale.map((t) => (
            <div key={t.label} className="border-b border-border pb-3 last:border-0">
              <p className="mb-1 font-mono text-[11px] text-muted-foreground">
                {t.label} · {t.size} · {t.weight}
              </p>
              <p
                className="font-body text-foreground"
                style={{
                  fontSize: t.size,
                  fontWeight: t.weight,
                  lineHeight: t.lh,
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overline */}
      <div className="mb-10">
        <h3 className="overline mb-4">Overline Style</h3>
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="mb-1 font-mono text-[11px] text-muted-foreground">
            11px · 600 · ALL CAPS · letter-spacing 0.14em
          </p>
          <p className="overline">Our Products</p>
        </div>
      </div>

      {/* Gradient Text */}
      <div className="mb-10">
        <h3 className="overline mb-4">Gradient Text</h3>
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="gradient-text font-display text-3xl font-bold">
            Brand gradient text effect
          </p>
        </div>
      </div>

      {/* Highlight */}
      <div>
        <h3 className="overline mb-4">Text Highlight</h3>
        <div className="rounded-xl border border-border bg-surface p-6">
          <p className="font-display text-2xl font-bold text-foreground">
            We build <Highlight>operational infrastructure</Highlight> for growing companies.
          </p>
          <p className="mt-2 font-mono text-[11px] text-muted-foreground">
            {"<Highlight>"} — animated gradient background expansion
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
