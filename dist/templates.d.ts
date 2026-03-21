import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface NavLinkItem {
    label: string;
    href: string;
}
interface MarketingNavbarProps {
    /** Logo for light mode (dark wordmark on white background) */
    logoDarkSrc: string;
    /** Logo for dark mode (light wordmark on dark background) */
    logoLightSrc: string;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
    /** Where the logo links to */
    logoHref?: string;
    navLinks: NavLinkItem[];
    /** CTA button label */
    ctaLabel?: string;
    /** CTA button href */
    ctaHref?: string;
    /** Background color for mobile slide-down menu panel */
    mobileMenuBg?: string;
}
declare function MarketingNavbar({ logoDarkSrc, logoLightSrc, logoAlt, logoWidth, logoHeight, logoHref, navLinks, ctaLabel, ctaHref, mobileMenuBg, }: MarketingNavbarProps): react_jsx_runtime.JSX.Element;

interface FooterNavLink {
    label: string;
    href: string;
}
interface MarketingFooterProps {
    /** Logo image path (should work on dark background — use light/white wordmark) */
    logoSrc: string;
    logoAlt?: string;
    logoWidth?: number;
    logoHeight?: number;
    /** Short tagline below the logo */
    tagline?: string;
    /** Primary navigation links */
    navLinks?: FooterNavLink[];
    /** Contact email */
    email?: string;
    /** Contact phone (formatted for display) */
    phone?: string;
    /** Contact phone (href value, e.g. "+17726779555") */
    phoneTel?: string;
    /** Location string */
    location?: string;
    /** Show newsletter signup section */
    showNewsletter?: boolean;
    newsletterHeading?: string;
    newsletterSubtext?: string;
    newsletterButtonLabel?: string;
    /** Called with name + email on newsletter form submit */
    onNewsletterSubmit?: (name: string, email: string) => void;
    /** Copyright line (e.g. "2025 Acme Inc. All rights reserved.") — year is prepended automatically */
    copyrightText?: string;
    /** Legal/policy links in the bottom bar */
    legalLinks?: FooterNavLink[];
}
declare function MarketingFooter(props: MarketingFooterProps): react_jsx_runtime.JSX.Element;

interface CTAButton {
    label: string;
    href: string;
    external?: boolean;
}
interface CTASectionProps {
    headline: React.ReactNode;
    body?: string;
    primaryCTA?: CTAButton;
    secondaryCTA?: CTAButton;
    /** "modal" opens a multi-step form; "link" renders primaryCTA/secondaryCTA buttons */
    variant?: "modal" | "link";
    /** Label for the modal trigger button (variant="modal" only) */
    modalTriggerLabel?: string;
    /** Called when the modal form is submitted */
    onModalSubmit?: (data: {
        name: string;
        email: string;
        goal: string;
    }) => void;
}
declare function CTASection({ headline, body, primaryCTA, secondaryCTA, variant, modalTriggerLabel, onModalSubmit, }: CTASectionProps): react_jsx_runtime.JSX.Element;

interface LegalHeroProps {
    title: string;
    /** Number of gradient bars */
    numBars?: number;
}
declare function LegalHero({ title, numBars }: LegalHeroProps): react_jsx_runtime.JSX.Element;

export { type CTAButton, CTASection, type CTASectionProps, type FooterNavLink, LegalHero, type LegalHeroProps, MarketingFooter, type MarketingFooterProps, MarketingNavbar, type MarketingNavbarProps, type NavLinkItem };
