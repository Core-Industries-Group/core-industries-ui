import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

export function TemplatesSection() {
  return (
    <SectionWrapper id="templates" title="Templates" description="Next.js page-level templates. LegalHero renders live. MarketingNavbar, MarketingFooter, and CTASection require Next.js.">
      {/* LegalHero — rendered live */}
      <ComponentCard title="LegalHero" description="Hero section for legal pages with animated gradient bars" className="mb-6">
        <div className="relative overflow-hidden rounded-xl border border-border">
          <LegalHeroDemo />
        </div>
      </ComponentCard>

      {/* MarketingNavbar — docs only */}
      <ComponentCard title="MarketingNavbar" description="Requires Next.js — import from @core-industries-group/ui/templates" className="mb-6">
        <div className="rounded-lg border border-dashed border-border-brand bg-brand-subtle p-4">
          <p className="mb-2 text-sm font-medium text-foreground">Sticky navbar with theme toggle, logo, nav links, and CTA button.</p>
          <PropsTable rows={[
            ["logoDarkSrc", "string", "required", "Dark mode logo path"],
            ["logoLightSrc", "string", "required", "Light mode logo path"],
            ["navLinks", "NavLinkItem[]", "required", "Array of { label, href, external? }"],
            ["ctaLabel", "string", "optional", "CTA button text"],
            ["ctaHref", "string", "optional", "CTA button link"],
          ]} />
          <CodeSnippet code={`import { MarketingNavbar } from "@core-industries-group/ui/templates";`} />
        </div>
      </ComponentCard>

      {/* MarketingFooter — docs only */}
      <ComponentCard title="MarketingFooter" description="Requires Next.js — import from @core-industries-group/ui/templates" className="mb-6">
        <div className="rounded-lg border border-dashed border-border-brand bg-brand-subtle p-4">
          <p className="mb-2 text-sm font-medium text-foreground">Dark footer with newsletter signup, contact info, and legal links.</p>
          <PropsTable rows={[
            ["logoSrc", "string", "required", "Footer logo path"],
            ["tagline", "string", "optional", "Company tagline"],
            ["navLinks", "FooterNavLink[]", "optional", "Footer navigation"],
            ["showNewsletter", "boolean", "true", "Show newsletter signup"],
            ["email", "string", "optional", "Contact email"],
          ]} />
          <CodeSnippet code={`import { MarketingFooter } from "@core-industries-group/ui/templates";`} />
        </div>
      </ComponentCard>

      {/* CTASection — docs only */}
      <ComponentCard title="CTASection" description="Requires Next.js — import from @core-industries-group/ui/templates">
        <div className="rounded-lg border border-dashed border-border-brand bg-brand-subtle p-4">
          <p className="mb-2 text-sm font-medium text-foreground">Orange gradient CTA section with modal or link variants.</p>
          <PropsTable rows={[
            ["headline", "ReactNode", "required", "CTA heading content"],
            ["body", "string", "optional", "Description text"],
            ["variant", '"modal" | "link"', '"link"', "Interaction mode"],
            ["primaryCTA", "{ label, href }", "optional", "Primary button"],
            ["secondaryCTA", "{ label, href }", "optional", "Secondary button"],
          ]} />
          <CodeSnippet code={`import { CTASection } from "@core-industries-group/ui/templates";`} />
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}

/* ── LegalHero live demo ── */

import { GradientBars } from "@ui/components/effects/GradientBarsBackground";

function LegalHeroDemo() {
  return (
    <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden bg-surface px-6 py-16">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <GradientBars numBars={7} />
      </div>
      <h1 className="relative z-10 text-center font-display text-3xl font-bold text-foreground">
        Privacy Policy
      </h1>
    </div>
  );
}

/* ── Helper components ── */

function PropsTable({ rows }: { rows: string[][] }) {
  return (
    <div className="my-3 overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-border text-muted-foreground">
            <th className="pb-1.5 pr-4 font-medium">Prop</th>
            <th className="pb-1.5 pr-4 font-medium">Type</th>
            <th className="pb-1.5 pr-4 font-medium">Default</th>
            <th className="pb-1.5 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([prop, type, def, desc]) => (
            <tr key={prop} className="border-b border-border/50">
              <td className="py-1.5 pr-4 font-mono text-foreground">{prop}</td>
              <td className="py-1.5 pr-4 font-mono text-muted-foreground">{type}</td>
              <td className="py-1.5 pr-4 text-muted-foreground">{def}</td>
              <td className="py-1.5 text-muted-foreground">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CodeSnippet({ code }: { code: string }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg bg-surface-elevated p-3">
      <code className="showcase-code text-foreground">{code}</code>
    </pre>
  );
}
