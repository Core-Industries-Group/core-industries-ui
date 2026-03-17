# @core-industries-group/ui

The Core Industries design system and component library. One install gives any project the full visual DNA: tokens, UI primitives, animation components, background effects, and optional pre-built layout templates.

---

## What's in the box

| Category | Components |
|---|---|
| **Design tokens** | All CSS custom properties — brand colors, fonts, shadows, easings, keyframes, glass utilities |
| **UI primitives** | Button, Card, Badge, Input, Label, Separator, Sheet (drawer), SectionPill, MultiStepForm |
| **Animation** | FlipText, FlipWords, AnimatedGroup, AnimatedGrid, TextEffect, Highlight, ScrollProgress |
| **Effects** | NoiseTexture, GradientBarsBackground, FlickeringGrid, Spotlight, ProgressiveBlurCard, AuroraBackground |
| **Display** | AvatarCircles, DisplayCards, FloatingLogos |
| **Templates** | MarketingNavbar, MarketingFooter, CTASection, LegalHero *(Next.js-specific, optional)* |
| **Utilities** | `cn()`, `fadeUp`, `stagger`, `ThemeProvider`, `usePageAnimation`, `PageAnimationGate` |

---

## Install

```bash
npm install @core-industries-group/ui
```

> **Requires a GitHub Packages token.** See [Authentication](#authentication) below.

### Peer dependencies

The package does **not** bundle these — your project provides them:

```bash
npm install react react-dom tailwindcss framer-motion next-themes
```

If you use the template components:

```bash
npm install next  # for next/link, next/image, next/navigation
```

---

## Authentication

This package is published to GitHub Packages (private registry). You need a GitHub Personal Access Token with `read:packages` scope.

**One-time setup:**

1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Create a token with `read:packages` checked
3. Add to your `~/.npmrc` (global) or project `.npmrc`:

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
@core-industries-group:registry=https://npm.pkg.github.com
```

Or set as an environment variable before `npm install`:

```bash
export NODE_AUTH_TOKEN=YOUR_TOKEN_HERE
```

---

## Setup

### 1. Import design tokens

In your `globals.css` (or equivalent entry CSS), import the token layer first:

```css
@import "tailwindcss";
@import "@core-industries-group/ui/tokens";
```

This pulls in all brand colors, fonts, shadows, dark mode variables, and glass utility classes.

### 2. Wrap your app with ThemeProvider

In your root layout (e.g. `app/layout.tsx`):

```tsx
import { ThemeProvider } from "@core-industries-group/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 3. Add NoiseTexture (optional but recommended)

The noise overlay adds subtle texture depth across all pages:

```tsx
import { NoiseTexture } from "@core-industries-group/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NoiseTexture />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## Usage

### UI primitives

```tsx
import { Button, Card, CardContent, Badge, Input } from "@core-industries-group/ui";

<Button>Click me</Button>
<Button variant="outline" size="sm">Secondary</Button>

<Card>
  <CardContent>Content here</CardContent>
</Card>

<Badge variant="secondary">New</Badge>
<Input placeholder="Enter text..." />
```

### Animation components

```tsx
import { FlipText, FlipWords, AnimatedGroup, TextEffect } from "@core-industries-group/ui";

// 3D flip on hover (wrap a button or link)
<FlipText>Hover me</FlipText>

// Cycling word carousel
<FlipWords
  words={["faster.", "smarter.", "better."]}
  duration={3000}
  className="text-primary"
/>

// Staggered children animation
<AnimatedGroup preset="blur-slide">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimatedGroup>

// Per-word/character text animation
<TextEffect preset="blur" per="word">
  Animate each word
</TextEffect>
```

### Background effects

```tsx
import {
  NoiseTexture,
  FlickeringGrid,
  GradientBarsBackground,
  Spotlight,
  AuroraBackground,
} from "@core-industries-group/ui";

// Subtle canvas-based flickering dot grid
<div className="relative h-64 w-full">
  <FlickeringGrid color="rgb(255,96,45)" maxOpacity={0.15} />
</div>

// Animated vertical gradient bars (good for section backgrounds)
<GradientBarsBackground numBars={9}>
  <h2>Your content here</h2>
</GradientBarsBackground>

// Animated spotlight effect (good for dark hero sections)
<div className="relative overflow-hidden">
  <Spotlight />
  <YourHeroContent />
</div>
```

### Display components

```tsx
import { AvatarCircles, DisplayCards, FloatingLogos } from "@core-industries-group/ui";

// Stacked avatar circles with overflow count
<AvatarCircles
  avatarUrls={["/avatar1.jpg", "/avatar2.jpg", "/avatar3.jpg"]}
  numPeople={42}
/>

// Stacked floating cards (good for product screenshots/demos)
<DisplayCards
  cards={[
    {
      icon: <CheckCircle className="size-4" />,
      title: "Task Complete",
      description: "All items processed",
      date: "Just now",
    },
  ]}
/>

// Floating logo/icon scatter animation
<FloatingLogos
  logos={[
    { icon: <YourLogoSVG />, size: 48, top: "20%", left: "10%", rotate: -15 },
  ]}
/>
```

### Utilities

```tsx
import { cn, fadeUp, stagger } from "@core-industries-group/ui";
import { motion } from "framer-motion";

// Merge Tailwind classes safely
<div className={cn("base-class", condition && "conditional-class")} />

// Framer Motion fade-up variants
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={stagger}
>
  <motion.h2 variants={fadeUp} custom={0}>Heading</motion.h2>
  <motion.p variants={fadeUp} custom={0.08}>Body</motion.p>
</motion.div>
```

---

## Template components

Templates are pre-built Next.js layout components with full Core Industries styling. They require `next/link`, `next/image`, and `next/navigation`.

Import from the `/templates` entry point:

```tsx
import {
  MarketingNavbar,
  MarketingFooter,
  CTASection,
  LegalHero,
} from "@core-industries-group/ui/templates";
```

### MarketingNavbar

Pill navbar: transparent at top, floating pill on scroll, 3D flip nav links, mobile slide-down menu, light/dark toggle, back-to-top button.

```tsx
<MarketingNavbar
  logoDarkSrc="/images/logo/wordmark-dark.webp"  // shown in light mode
  logoLightSrc="/images/logo/wordmark-light.webp" // shown in dark mode
  logoAlt="Acme Inc"
  navLinks={[
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
  ctaLabel="Get Started"
  ctaHref="/contact"
/>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `logoDarkSrc` | `string` | — | Logo for light mode (dark wordmark) |
| `logoLightSrc` | `string` | — | Logo for dark mode (light wordmark) |
| `logoAlt` | `string` | `"Logo"` | Alt text |
| `logoWidth` | `number` | `100` | Logo width in px |
| `logoHeight` | `number` | `28` | Logo height in px |
| `logoHref` | `string` | `"/"` | Where the logo links |
| `navLinks` | `NavLinkItem[]` | — | Array of `{ label, href }` |
| `ctaLabel` | `string` | `"Get in Touch"` | CTA button text |
| `ctaHref` | `string` | `"/contact"` | CTA button link |
| `mobileMenuBg` | `string` | `"#FCF8F7"` | Mobile menu background |

### MarketingFooter

Dark footer with 4-column grid (brand, nav, contact, newsletter), sticky reveal on desktop.

```tsx
<MarketingFooter
  logoSrc="/images/logo/wordmark-light.webp"
  logoAlt="Acme Inc"
  tagline="We build software you wish you had all along."
  navLinks={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ]}
  email="hello@example.com"
  phone="(555) 123-4567"
  location="Miami, Florida"
  showNewsletter={true}
  newsletterHeading="Stay in the loop"
  newsletterSubtext="Product updates and insights, straight to your inbox."
  onNewsletterSubmit={(name, email) => {
    // send to your newsletter service
  }}
  copyrightText="Acme Inc. All rights reserved."
  legalLinks={[
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]}
/>
```

### CTASection

Orange gradient CTA band. Two variants: `"link"` renders CTA buttons; `"modal"` opens a multi-step contact form.

```tsx
// Link variant
<CTASection
  headline="Ready to get started?"
  body="Join hundreds of teams already using the platform."
  variant="link"
  primaryCTA={{ label: "Start free trial", href: "/signup" }}
  secondaryCTA={{ label: "See pricing", href: "/pricing" }}
/>

// Modal variant — opens contact form
<CTASection
  headline={<>Ready to replace your <span>workarounds?</span></>}
  variant="modal"
  modalTriggerLabel="Talk to us"
/>
```

### LegalHero

Minimal hero for Privacy Policy / Terms of Service pages with animated gradient bar background.

```tsx
<LegalHero title="Privacy Policy" />
<LegalHero title="Terms of Service" numBars={5} />
```

---

## Dark mode

The token layer ships both light and dark CSS variable sets. Dark mode is class-based — add `class="dark"` to `<html>` to activate it.

`ThemeProvider` handles this automatically with `next-themes`. The `MarketingNavbar` template includes the toggle button.

If you need the toggle standalone:

```tsx
import { useTheme } from "next-themes";

function MyToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      Toggle
    </button>
  );
}
```

---

## Glass utilities

The token layer adds four glass CSS utility classes:

```tsx
<div className="glass">Light glass</div>
<div className="glass-strong">Stronger glass</div>
<div className="glass-card">Card glass</div>
<div className="glass-premium">Premium glass with glow border</div>
```

---

## Versioning

This package follows [semver](https://semver.org/):

| Change type | Version bump | Example |
|---|---|---|
| Bug fix, token tweak | `0.0.x` patch | `0.1.0` → `0.1.1` |
| New component added | `0.x.0` minor | `0.1.1` → `0.2.0` |
| Breaking change | `x.0.0` major | `0.2.0` → `1.0.0` |

Breaking changes = renamed exports, changed prop APIs, restructured tokens.

---

## Update workflow

### Updating a single project

```bash
# In your project directory
npm update @core-industries-group/ui

git add package.json package-lock.json
git commit -m "chore: bump @core-industries-group/ui to x.x.x"

# Redeploy
vercel --prod
```

### Updating all projects at once

Save this script as `update-ui.sh` in a parent directory containing all your project folders:

```bash
#!/bin/bash
# update-ui.sh — bump @core-industries-group/ui in every project directory

PROJECTS=(
  "path/to/core-industries"
  "path/to/coredocs"
  "path/to/realtycore"
  "path/to/other-project"
)

for PROJECT in "${PROJECTS[@]}"; do
  echo "→ Updating $PROJECT"
  cd "$PROJECT" || { echo "  Skipping — directory not found"; continue; }

  npm update @core-industries-group/ui

  git add package.json package-lock.json
  git commit -m "chore: bump @core-industries-group/ui to latest"

  echo "  Done. Deploy $PROJECT when ready."
  cd - > /dev/null
done

echo ""
echo "All projects updated. Redeploy each one via 'vercel --prod' when ready."
```

Make it executable: `chmod +x update-ui.sh`

---

## Publishing a new version

1. Make changes in this repo
2. Bump the version in `package.json`
3. Commit and push to `main`
4. GitHub Actions runs automatically — builds and publishes to GitHub Packages

To publish manually:

```bash
npm run build
npm publish
```

---

## Local development / testing

To test changes locally before publishing:

```bash
# In this package repo
npm run build
npm pack
# Creates: core-industries-group-ui-x.x.x.tgz

# In your consuming project
npm install ../core-industries-ui/core-industries-group-ui-x.x.x.tgz
```

---

## Project structure

```
src/
├── components/
│   ├── ui/          ← button, card, badge, input, label, separator, sheet, ...
│   ├── animation/   ← flip-text, flip-words, animated-group, text-effect, ...
│   ├── effects/     ← noise-texture, gradient-bars, flickering-grid, spotlight, ...
│   ├── display/     ← avatar-circles, display-cards, floating-logos
│   └── templates/   ← MarketingNavbar, MarketingFooter, CTASection, LegalHero
├── lib/
│   ├── utils.ts          ← cn()
│   ├── animations.ts     ← fadeUp, stagger
│   ├── theme-provider.tsx
│   ├── animation-tracker.ts
│   └── page-animation.tsx
├── tokens/
│   └── tokens.css        ← all design tokens
├── index.ts              ← main barrel export
└── templates.ts          ← templates barrel export
```
