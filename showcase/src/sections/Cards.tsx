import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@ui/components/ui/card";
import { Button } from "@ui/components/ui/button";
import { Badge } from "@ui/components/ui/badge";
import { SectionWrapper } from "../components/SectionWrapper";

export function CardsSection() {
  return (
    <SectionWrapper id="cards" title="Cards" description="Composable card components with semantic subcomponents.">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Full composition */}
        <Card>
          <CardHeader>
            <CardTitle>CoreDocs</CardTitle>
            <CardDescription>AI-powered document automation for insurance agencies.</CardDescription>
            <CardAction>
              <Badge variant="default">Active</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Generate ACORD forms, policy summaries, and client communications in seconds.
            </p>
          </CardContent>
          <CardFooter className="justify-end">
            <Button variant="ghost" size="sm">
              Learn More <ArrowRight />
            </Button>
          </CardFooter>
        </Card>

        {/* Minimal card */}
        <Card>
          <CardHeader>
            <CardTitle>CorePortal</CardTitle>
            <CardDescription>White-label client portals for service businesses.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Branded onboarding, document exchange, and status tracking — deployed in days.
            </p>
          </CardContent>
        </Card>

        {/* Card with glow */}
        <Card className="card-glow">
          <CardHeader>
            <CardTitle>RealtyCore</CardTitle>
            <CardDescription>Transaction management for real estate teams.</CardDescription>
            <CardAction>
              <Badge variant="outline">Beta</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              From contract to close — task automation, compliance tracking, and team dashboards.
            </p>
          </CardContent>
          <CardFooter className="justify-end">
            <Button size="sm">
              Get Started <ArrowRight />
            </Button>
          </CardFooter>
        </Card>

        {/* Elevated card */}
        <Card style={{ boxShadow: "var(--shadow-elevated)" }}>
          <CardHeader>
            <CardTitle>Elevated Shadow</CardTitle>
            <CardDescription>Using --shadow-elevated for modal-like emphasis.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Reserve elevated shadows for popovers, modals, and high-priority content.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
