import { ShowcaseLayout } from "./components/ShowcaseLayout";
import { ColorPalette } from "./sections/ColorPalette";
import { TypographySection } from "./sections/Typography";
import { ButtonsSection } from "./sections/Buttons";
import { BadgesSection } from "./sections/Badges";
import { CardsSection } from "./sections/Cards";
import { FormElementsSection } from "./sections/FormElements";
import { OverlaysSection } from "./sections/Overlays";
import { AnimationSection } from "./sections/Animation";
import { EffectsSection } from "./sections/Effects";
import { DisplaySection } from "./sections/Display";
import { TemplatesSection } from "./sections/Templates";
import { TokensSection } from "./sections/Tokens";
import { UtilitiesSection } from "./sections/Utilities";

export default function App() {
  return (
    <ShowcaseLayout>
      <ColorPalette />
      <TypographySection />
      <ButtonsSection />
      <BadgesSection />
      <CardsSection />
      <FormElementsSection />
      <OverlaysSection />
      <AnimationSection />
      <EffectsSection />
      <DisplaySection />
      <TemplatesSection />
      <TokensSection />
      <UtilitiesSection />
    </ShowcaseLayout>
  );
}
