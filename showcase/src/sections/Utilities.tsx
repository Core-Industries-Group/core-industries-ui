import { motion } from "framer-motion";
import { fadeUp, stagger } from "@ui/lib/animations";
import { cn } from "@ui/lib/utils";
import { Button } from "@ui/components/ui/button";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";
import { useState } from "react";

export function UtilitiesSection() {
  const [fadeKey, setFadeKey] = useState(0);

  return (
    <SectionWrapper id="utilities" title="Utilities" description="Helper functions and animation presets.">
      {/* cn() */}
      <ComponentCard title="cn()" description="Tailwind class merging with clsx + tailwind-merge" className="mb-6">
        <pre className="overflow-x-auto rounded-lg bg-surface-elevated p-4">
          <code className="showcase-code text-foreground">{`import { cn } from "@core-industries-group/ui";

// Merges classes and resolves conflicts
cn("px-4 py-2", "px-6")           // → "py-2 px-6"
cn("text-red-500", condition && "text-blue-500")
cn(buttonVariants({ variant }), className)`}</code>
        </pre>
      </ComponentCard>

      {/* fadeUp + stagger */}
      <ComponentCard title="fadeUp / stagger" description="Framer Motion animation presets for entrance animations">
        <div className="mb-4">
          <Button variant="outline" size="sm" onClick={() => setFadeKey((k) => k + 1)}>
            Replay Animation
          </Button>
        </div>
        <motion.div
          key={fadeKey}
          {...stagger}
          className="flex flex-wrap gap-3"
        >
          {["First", "Second", "Third", "Fourth"].map((label) => (
            <motion.div
              key={label}
              {...fadeUp}
              className="flex h-20 w-20 items-center justify-center rounded-xl border border-border bg-surface-raised text-sm font-medium text-foreground"
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-surface-elevated p-4">
          <code className="showcase-code text-foreground">{`import { fadeUp, stagger } from "@core-industries-group/ui";

<motion.div {...stagger}>
  <motion.div {...fadeUp}>Item</motion.div>
</motion.div>`}</code>
        </pre>
      </ComponentCard>
    </SectionWrapper>
  );
}
