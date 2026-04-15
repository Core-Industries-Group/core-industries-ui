import { SectionWrapper } from "../components/SectionWrapper";
import { ColorSwatch } from "../components/ColorSwatch";

const brandColors = [
  { name: "Brand", value: "#FF602D", token: "--color-brand" },
  { name: "Brand Light", value: "#FF722D", token: "--color-brand-light" },
  { name: "Brand Dark", value: "#EC511F", token: "--color-brand-dark" },
  { name: "Brand Glow", value: "rgba(255,96,45,0.15)", token: "--color-brand-glow" },
  { name: "Brand Subtle", value: "rgba(255,96,45,0.06)", token: "--color-brand-subtle" },
];

/* ── Orange spectrum: tints (lighter) and shades (darker) from #FF602D ── */
const orangeTints = [
  { name: "Orange 50", value: "#FFF4F0", token: "tint-50" },
  { name: "Orange 100", value: "#FFE4DA", token: "tint-100" },
  { name: "Orange 200", value: "#FFC4AD", token: "tint-200" },
  { name: "Orange 300", value: "#FFA080", token: "tint-300" },
  { name: "Orange 400", value: "#FF8053", token: "tint-400" },
  { name: "Orange 500 (Brand)", value: "#FF602D", token: "primary" },
  { name: "Orange 600", value: "#E84E1E", token: "shade-600" },
  { name: "Orange 700", value: "#EC511F", token: "--color-brand-dark" },
  { name: "Orange 800", value: "#B33A12", token: "shade-800" },
  { name: "Orange 900", value: "#8C2D0E", token: "shade-900" },
];

/* ── Warm accent yellows that pair with the orange ── */
const warmYellows = [
  { name: "Amber 200", value: "#FDE68A", token: "amber-200" },
  { name: "Amber 300", value: "#FCD34D", token: "amber-300" },
  { name: "Amber 400", value: "#FBBF24", token: "amber-400" },
  { name: "Chart 2", value: "#FF7A4D", token: "--chart-2" },
  { name: "Warm Yellow", value: "#FFB347", token: "warm-yellow" },
  { name: "Gold", value: "#F59E0B", token: "gold" },
];

/* ── Primary color relationships ── */
const primaryRelationships = [
  { name: "Primary", value: "#FF602D", token: "--primary" },
  { name: "Primary Foreground", value: "#FFFFFF", token: "--primary-foreground" },
  { name: "Ring", value: "#FF602D", token: "--ring" },
  { name: "Chart 1", value: "#FF602D", token: "--chart-1" },
  { name: "Chart 2", value: "#FF722D", token: "--chart-2" },
  { name: "Chart 3", value: "#EC511F", token: "--chart-3" },
  { name: "Sidebar Primary", value: "#FF602D", token: "--sidebar-primary" },
  { name: "Destructive", value: "#EF4444", token: "--destructive" },
];

const lightSurfaces = [
  { name: "Background", value: "#F8F8F8", token: "--color-bg" },
  { name: "Surface", value: "#FFFFFF", token: "--color-surface" },
  { name: "Surface Raised", value: "#F3F3F3", token: "--color-surface-raised" },
  { name: "Surface Elevated", value: "#EBEBEB", token: "--color-surface-elevated" },
];

const darkSurfaces = [
  { name: "Background", value: "#080808", token: "--color-bg" },
  { name: "Surface", value: "#121212", token: "--color-surface" },
  { name: "Surface Raised", value: "#1A1A1A", token: "--color-surface-raised" },
  { name: "Surface Elevated", value: "#222222", token: "--color-surface-elevated" },
];

const lightInk = [
  { name: "Ink", value: "#272727", token: "--color-ink" },
  { name: "Ink Secondary", value: "#555555", token: "--color-ink-secondary" },
  { name: "Ink Tertiary", value: "#A3A3A3", token: "--color-ink-tertiary" },
  { name: "Ink Faint", value: "#D5D5D5", token: "--color-ink-faint" },
];

const darkInk = [
  { name: "Ink", value: "#EEEEEE", token: "--color-ink" },
  { name: "Ink Secondary", value: "#999999", token: "--color-ink-secondary" },
  { name: "Ink Tertiary", value: "#5C5C5C", token: "--color-ink-tertiary" },
  { name: "Ink Faint", value: "#3A3A3A", token: "--color-ink-faint" },
];

const semanticColors = [
  { name: "Success", value: "#22C55E", token: "success" },
  { name: "Warning", value: "#F59E0B", token: "warning" },
  { name: "Destructive", value: "#EF4444", token: "destructive" },
  { name: "Info", value: "#3B82F6", token: "info" },
];

export function ColorPalette() {
  return (
    <SectionWrapper id="colors" title="Color Palette" description="Brand, surface, ink, and semantic color tokens. All swatches show raw hex values — in production, use CSS variables.">
      {/* Brand */}
      <div className="mb-10">
        <h3 className="overline mb-4">Brand Colors</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {brandColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </div>

      {/* Orange Spectrum */}
      <div className="mb-10">
        <h3 className="overline mb-2">Orange Spectrum — Tints &amp; Shades</h3>
        <p className="mb-4 text-xs text-muted-foreground">
          Full range from lightest tint to deepest shade, anchored on <span className="font-mono font-semibold text-foreground">#FF602D</span> (500).
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:grid-cols-10">
          {orangeTints.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
        {/* Continuous gradient bar */}
        <div className="mt-4 h-8 w-full overflow-hidden rounded-lg border border-border">
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(to right, #FFF4F0, #FFE4DA, #FFC4AD, #FFA080, #FF8053, #FF602D, #E84E1E, #D4501F, #B33A12, #8C2D0E)`,
            }}
          />
        </div>
        <div className="mt-1 flex justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">50 (lightest)</span>
          <span className="font-mono text-[10px] font-semibold text-foreground">500 (brand)</span>
          <span className="font-mono text-[10px] text-muted-foreground">900 (darkest)</span>
        </div>
      </div>

      {/* Warm Yellows / Amber */}
      <div className="mb-10">
        <h3 className="overline mb-2">Warm Accents — Yellows &amp; Ambers</h3>
        <p className="mb-4 text-xs text-muted-foreground">
          Companion warm tones that pair naturally with the brand orange.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {warmYellows.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </div>

      {/* Primary Color Relationships */}
      <div className="mb-10">
        <h3 className="overline mb-2">Primary Color Relationships</h3>
        <p className="mb-4 text-xs text-muted-foreground">
          How <span className="font-mono font-semibold text-foreground">#FF602D</span> flows across the token system: primary, ring, charts, sidebar, and its sibling destructive red.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
          {primaryRelationships.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
        {/* Visual relationship diagram */}
        <div className="mt-6 rounded-xl border border-border bg-surface-raised/50 p-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Dark", hex: "#EC511F" },
              { label: "Brand", hex: "#FF602D" },
              { label: "Light", hex: "#FF722D" },
            ].map((c, i) => (
              <div key={c.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="h-16 w-16 rounded-full border-2 border-white shadow-md"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="mt-2 text-xs font-semibold text-foreground">{c.label}</span>
                  <span className="font-mono text-[10px] text-muted-foreground">{c.hex}</span>
                </div>
                {i < 2 && (
                  <span className="text-lg text-muted-foreground">→</span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Dark → Brand → Light — the core triad used across gradients, buttons, and hover states
          </p>
        </div>
      </div>

      {/* Surfaces */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="overline mb-4">Light Surfaces</h3>
          <div className="grid grid-cols-2 gap-4">
            {lightSurfaces.map((c) => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="overline mb-4">Dark Surfaces</h3>
          <div className="grid grid-cols-2 gap-4">
            {darkSurfaces.map((c) => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* Ink */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="overline mb-4">Light Ink</h3>
          <div className="grid grid-cols-2 gap-4">
            {lightInk.map((c) => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="overline mb-4">Dark Ink</h3>
          <div className="grid grid-cols-2 gap-4">
            {darkInk.map((c) => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </div>
      </div>

      {/* Semantic */}
      <div>
        <h3 className="overline mb-4">Semantic</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {semanticColors.map((c) => (
            <ColorSwatch key={c.name} {...c} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
