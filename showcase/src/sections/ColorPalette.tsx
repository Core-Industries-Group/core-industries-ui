import { SectionWrapper } from "../components/SectionWrapper";
import { ColorSwatch } from "../components/ColorSwatch";

const brandColors = [
  { name: "Brand", value: "#FF602D", token: "--color-brand" },
  { name: "Brand Light", value: "#FE8D3F", token: "--color-brand-light" },
  { name: "Brand Deep", value: "#D4501F", token: "--color-brand-deep" },
  { name: "Brand Glow", value: "rgba(255,96,45,0.15)", token: "--color-brand-glow" },
  { name: "Brand Subtle", value: "rgba(255,96,45,0.06)", token: "--color-brand-subtle" },
];

const lightSurfaces = [
  { name: "Background", value: "#F7F8FC", token: "--color-bg" },
  { name: "Surface", value: "#FFFFFF", token: "--color-surface" },
  { name: "Surface Raised", value: "#F1F3F8", token: "--color-surface-raised" },
  { name: "Surface Elevated", value: "#E8EBF2", token: "--color-surface-elevated" },
];

const darkSurfaces = [
  { name: "Background", value: "#06060A", token: "--color-bg" },
  { name: "Surface", value: "#0C0C12", token: "--color-surface" },
  { name: "Surface Raised", value: "#12121A", token: "--color-surface-raised" },
  { name: "Surface Elevated", value: "#1A1A24", token: "--color-surface-elevated" },
];

const lightInk = [
  { name: "Ink", value: "#272727", token: "--color-ink" },
  { name: "Ink Secondary", value: "#4B5563", token: "--color-ink-secondary" },
  { name: "Ink Tertiary", value: "#9CA3AF", token: "--color-ink-tertiary" },
  { name: "Ink Faint", value: "#D1D5DB", token: "--color-ink-faint" },
];

const darkInk = [
  { name: "Ink", value: "#F0EFE8", token: "--color-ink" },
  { name: "Ink Secondary", value: "#9B9A93", token: "--color-ink-secondary" },
  { name: "Ink Tertiary", value: "#5E5D58", token: "--color-ink-tertiary" },
  { name: "Ink Faint", value: "#3A3A3F", token: "--color-ink-faint" },
];

const semanticColors = [
  { name: "Success", value: "#22C55E", token: "success" },
  { name: "Warning", value: "#F59E0B", token: "warning" },
  { name: "Destructive", value: "#EF4444", token: "destructive" },
  { name: "Info", value: "#3B82F6", token: "info" },
];

const chartColors = [
  { name: "Chart 1", value: "#FF602D", token: "--chart-1" },
  { name: "Chart 2", value: "#FE8D3F", token: "--chart-2" },
  { name: "Chart 3", value: "#D4501F", token: "--chart-3" },
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

      {/* Semantic & Charts */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="overline mb-4">Semantic</h3>
          <div className="grid grid-cols-2 gap-4">
            {semanticColors.map((c) => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="overline mb-4">Chart Colors</h3>
          <div className="grid grid-cols-3 gap-4">
            {chartColors.map((c) => (
              <ColorSwatch key={c.name} {...c} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
