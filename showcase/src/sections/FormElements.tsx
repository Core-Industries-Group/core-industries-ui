import { Input } from "@ui/components/ui/input";
import { Label } from "@ui/components/ui/label";
import { MultiStepForm } from "@ui/components/ui/multi-step-form";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

export function FormElementsSection() {
  return (
    <SectionWrapper id="forms" title="Form Elements" description="Input, Label, and MultiStepForm components with multiple states and variants.">
      {/* Input States */}
      <ComponentCard title="Input States" className="mb-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="default">Default</Label>
            <Input id="default" placeholder="Enter your name..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" placeholder="Not editable" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="with-value">With Value</Label>
            <Input id="with-value" defaultValue="otis@coreindustries.io" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file">File Input</Label>
            <Input id="file" type="file" />
          </div>
        </div>
      </ComponentCard>

      {/* MultiStepForm — Default */}
      <ComponentCard title="MultiStepForm — Default" description='variant="default"' className="mb-6">
        <MultiStepForm variant="default" />
      </ComponentCard>

      {/* MultiStepForm — On Orange */}
      <ComponentCard title="MultiStepForm — On Orange" description='variant="onOrange"' className="mb-6">
        <div className="rounded-xl bg-brand p-6">
          <MultiStepForm variant="onOrange" />
        </div>
      </ComponentCard>

      {/* MultiStepForm — Modal */}
      <ComponentCard title="MultiStepForm — Modal" description='variant="modal"'>
        <MultiStepForm variant="modal" />
      </ComponentCard>
    </SectionWrapper>
  );
}
