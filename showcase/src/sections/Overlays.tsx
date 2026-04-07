import { useState } from "react";
import { SectionPill } from "@ui/components/ui/section-pill";
import { AnnouncementPill } from "@ui/components/ui/announcement-pill";
import { Separator } from "@ui/components/ui/separator";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@ui/components/ui/sheet";
import { Button } from "@ui/components/ui/button";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

const sides = ["top", "right", "bottom", "left"] as const;

export function OverlaysSection() {
  return (
    <SectionWrapper id="overlays" title="Overlays & Layout" description="Pills, separators, and sheet overlays.">
      {/* Section Pill */}
      <ComponentCard title="SectionPill" description="Non-interactive label with pulsing orange dot and uppercase text" className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <SectionPill>Our Products</SectionPill>
          <SectionPill>Now Available</SectionPill>
        </div>
      </ComponentCard>

      {/* Announcement Pill */}
      <ComponentCard title="AnnouncementPill" description="Clickable CTA with green pulsing dot, text, divider, and arrow" className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <AnnouncementPill href="https://coredocs.ai" external>
            CoreDocs Software — Now in Beta
          </AnnouncementPill>
        </div>
      </ComponentCard>

      {/* Separator */}
      <ComponentCard title="Separator" className="mb-6">
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-mono text-[11px] text-muted-foreground">Horizontal</p>
            <Separator />
          </div>
          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] text-muted-foreground">Vertical</p>
            <Separator orientation="vertical" className="h-8" />
            <p className="text-sm text-muted-foreground">Content on the other side</p>
          </div>
        </div>
      </ComponentCard>

      {/* Sheet */}
      <ComponentCard title="Sheet" description="Slide-out panel from all four sides">
        <div className="flex flex-wrap gap-3">
          {sides.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  Open {side}
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet — {side}</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the {side} of the viewport.
                  </SheetDescription>
                </SheetHeader>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
