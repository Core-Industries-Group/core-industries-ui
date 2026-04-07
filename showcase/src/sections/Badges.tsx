import { Check, AlertTriangle, Info, X } from "lucide-react";
import { Badge } from "@ui/components/ui/badge";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

const variants = ["default", "secondary", "destructive", "outline"] as const;

export function BadgesSection() {
  return (
    <SectionWrapper id="badges" title="Badges" description="Semantic badge variants for status indicators and labels.">
      <ComponentCard title="Variants" className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          {variants.map((v) => (
            <Badge key={v} variant={v}>
              {v}
            </Badge>
          ))}
        </div>
      </ComponentCard>

      <ComponentCard title="With Icons">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default"><Check className="mr-1 h-3 w-3" /> Approved</Badge>
          <Badge variant="destructive"><X className="mr-1 h-3 w-3" /> Rejected</Badge>
          <Badge variant="outline"><AlertTriangle className="mr-1 h-3 w-3" /> Warning</Badge>
          <Badge variant="secondary"><Info className="mr-1 h-3 w-3" /> Info</Badge>
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
