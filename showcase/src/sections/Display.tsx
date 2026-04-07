import { FileText, Shield, BarChart3, Users, Globe } from "lucide-react";
import { AvatarCircles } from "@ui/components/display/AvatarCircles";
import DisplayCards from "@ui/components/display/DisplayCards";
import FloatingLogos from "@ui/components/display/FloatingLogos";
import { SectionWrapper } from "../components/SectionWrapper";
import { ComponentCard } from "../components/ComponentCard";

const sampleAvatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
];

const sampleLogos = [
  { icon: <FileText className="h-6 w-6" />, size: 48, bgClassName: "bg-brand/10", top: "10%", left: "15%", rotate: "-5deg", delay: 0, zIndex: 1 },
  { icon: <Shield className="h-6 w-6" />, size: 48, bgClassName: "bg-blue-500/10", top: "20%", left: "70%", rotate: "8deg", delay: 0.5, zIndex: 1 },
  { icon: <BarChart3 className="h-6 w-6" />, size: 48, bgClassName: "bg-emerald-500/10", top: "60%", left: "25%", rotate: "3deg", delay: 1, zIndex: 1 },
  { icon: <Users className="h-6 w-6" />, size: 48, bgClassName: "bg-amber-500/10", top: "55%", left: "65%", rotate: "-10deg", delay: 1.5, zIndex: 1 },
  { icon: <Globe className="h-6 w-6" />, size: 48, bgClassName: "bg-purple-500/10", top: "35%", left: "45%", rotate: "6deg", delay: 2, zIndex: 1 },
];

export function DisplaySection() {
  return (
    <SectionWrapper id="display" title="Display" description="Decorative and showcase components.">
      {/* AvatarCircles */}
      <ComponentCard title="AvatarCircles" description="Overlapping avatar images with overflow count" className="mb-6">
        <div className="flex items-center gap-8">
          <AvatarCircles avatarUrls={sampleAvatars.slice(0, 3)} />
          <AvatarCircles avatarUrls={sampleAvatars} numPeople={42} />
        </div>
      </ComponentCard>

      {/* DisplayCards */}
      <ComponentCard title="DisplayCards" description="Stacked fanned card showcase" className="mb-6">
        <div className="relative h-80 w-full overflow-hidden rounded-xl">
          <DisplayCards />
        </div>
      </ComponentCard>

      {/* FloatingLogos */}
      <ComponentCard title="FloatingLogos" description="Floating isometric logo grid with gentle animations">
        <div className="relative h-64 w-full overflow-hidden rounded-xl border border-border bg-surface">
          <FloatingLogos logos={sampleLogos} />
        </div>
      </ComponentCard>
    </SectionWrapper>
  );
}
