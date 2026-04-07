import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

const spacingScale = [
  { token: "--space-xs", value: "4px" },
  { token: "--space-sm", value: "8px" },
  { token: "--space-md", value: "16px" },
  { token: "--space-lg", value: "24px" },
  { token: "--space-xl", value: "32px" },
  { token: "--space-2xl", value: "48px" },
  { token: "--space-3xl", value: "64px" },
];

const radiusScale = [
  { token: "--radius-sm", label: "SM", tailwind: "rounded-sm" },
  { token: "--radius-md", label: "MD", tailwind: "rounded-md" },
  { token: "--radius", label: "Default", tailwind: "rounded-lg" },
  { token: "--radius-xl", label: "XL", tailwind: "rounded-xl" },
  { token: "--radius-2xl", label: "2XL", tailwind: "rounded-2xl" },
  { token: "--radius-3xl", label: "3XL", tailwind: "rounded-3xl" },
  { token: "--radius-pill", label: "Pill", tailwind: "rounded-full" },
];

const shadows = [
  { name: "Soft", token: "--shadow-soft", desc: "Default cards, subtle lift" },
  { name: "Medium", token: "--shadow-medium", desc: "Elevated cards, dropdowns" },
  { name: "Elevated", token: "--shadow-elevated", desc: "Modals, popovers" },
  { name: "Card", token: "--shadow-card", desc: "Featured cards, hover" },
  { name: "Glow", token: "--shadow-glow", desc: "Hero CTAs, brand emphasis" },
  { name: "Glow SM", token: "--shadow-glow-sm", desc: "Subtle brand glow" },
];

export function TokensSection() {
  return (
    <SectionWrapper id="tokens" title="Design Tokens" description="Spacing, border radius, shadows, gradients, and animation easing curves.">
      {/* Spacing */}
      <ComponentCard title="Spacing Scale" description="4px base unit — all values are multiples of 4" className="mb-6">
        <div className="space-y-2">
          {spacingScale.map(({ token, value }) => (
            <div key={token} className="flex items-center gap-4">
              <span className="w-24 shrink-0 font-mono text-[11px] text-muted-foreground">{value}</span>
              <div
                className="h-4 rounded-sm bg-brand/20"
                style={{ width: value }}
              />
              <span className="font-mono text-[11px] text-ink-tertiary">{token}</span>
            </div>
          ))}
        </div>
      </ComponentCard>

      {/* Border Radius */}
      <ComponentCard title="Border Radius" className="mb-6">
        <div className="flex flex-wrap gap-4">
          {radiusScale.map(({ label, tailwind }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className={`flex h-16 w-16 items-center justify-center border-2 border-brand bg-brand/10 ${tailwind}`}>
                <span className="text-[10px] font-medium text-brand">{label}</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">{tailwind}</span>
            </div>
          ))}
        </div>
      </ComponentCard>

      {/* Shadows */}
      <ComponentCard title="Elevation & Shadows" className="mb-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {shadows.map(({ name, token, desc }) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-surface p-4"
              style={{ boxShadow: `var(${token})` }}
            >
              <p className="text-sm font-medium text-foreground">{name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">{token}</p>
              <p className="mt-1 text-xs text-ink-tertiary">{desc}</p>
            </div>
          ))}
        </div>
      </ComponentCard>

      {/* Gradients */}
      <ComponentCard title="Gradient Utilities" className="mb-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">.brand-gradient-bg</p>
            <div className="brand-gradient-bg flex h-16 items-center justify-center rounded-xl">
              <span className="text-sm font-medium text-white">Brand Gradient</span>
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">.gradient-text</p>
            <p className="gradient-text font-display text-3xl font-bold">Gradient Text</p>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">.glow-line</p>
            <div className="glow-line" />
          </div>
        </div>
      </ComponentCard>

      {/* Easing Curves */}
      <ComponentCard title="Easing Curves" className="mb-6">
        <div className="space-y-3">
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)</p>
            <p className="text-xs text-ink-tertiary">Primary entrance/exit animations</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)</p>
            <p className="text-xs text-ink-tertiary">Subtle state changes</p>
          </div>
          <div>
            <p className="text-xs text-ink-tertiary">Durations: 150ms micro · 300ms transitions · 500ms page-level</p>
          </div>
        </div>
      </ComponentCard>

      {/* Float Animations */}
      <ComponentCard title="Float Animations">
        <div className="flex flex-wrap items-end gap-6">
          {(["float-a", "float-b", "float-c", "float-d"] as const).map((cls) => (
            <div key={cls} className="flex flex-col items-center gap-2">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-brand/10 ${cls}`}>
                <span className="text-[10px] font-medium text-brand">
                  {cls.split("-")[1].toUpperCase()}
                </span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">.{cls}</span>
            </div>
          ))}
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
