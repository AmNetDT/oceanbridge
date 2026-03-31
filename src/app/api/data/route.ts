import { NextResponse } from "next/server";

import { headerItem } from "@/app/types/menu";
import { featureData } from "@/app/types/featuredata";
import { socialLinksData } from "@/app/types/sociallinks";
import { plansData } from "@/app/types/plans";
import { footerlLinksData } from "@/app/types/footerlinks";

const HeaderData: headerItem[] = [
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Features", href: "/#features " },
  { label: "Contact Us", href: "/#contact " },
  // { label: 'Docs', href: '/documentation' },
];

const FeatureData: featureData[] = [
  {
    imgSrc: "/images/features/sms-api-svg.svg",
    heading: "Personalisation at scale",
    paragraph:
      "Use fields and templates so each bulk text still feels personal.",
  },
  {
    imgSrc: "/images/features/viber-messaging-api-svg.svg",
    heading: "Segmentation and scheduling",
    paragraph:
      "Send to saved lists. Use your two custom fields per contact to create simple segments or personalise messages.",
  },
  {
    imgSrc: "/images/features/smpp-api-svg.svg",
    heading: "Opt-out and compliance helpers",
    paragraph:
      "Respect quiet hours and opt-out rules. Built-in STOP keyword support included.",
  },
];

const PlansData: plansData[] = [
  {
    heading: "Lite",
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: "Purchase",
    option: [
      "Basic invoice generation",
      "Downloadable PDF invoice",
      "Unlimited transactions",
      "Emails for all the updates",
    ],
    category: ["monthly", "yearly"],
    imgSrc: "/images/pricing/starone.svg",
  },
  {
    heading: "Basic",
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: "Purchase",
    option: [
      "All Lite features",
      "Custom invoice templates",
      "Tax calculation support",
      "Automatic invoice reminders",
    ],
    category: ["monthly", "yearly"],
    imgSrc: "/images/pricing/startwo.svg",
  },
  {
    heading: "Plus",
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: "Purchase",
    option: [
      "All Basic features",
      "Multi-currency support",
      "Invoice payment tracking",
      "Priority customer support",
    ],
    category: ["monthly", "yearly"],
    imgSrc: "/images/pricing/starthree.svg",
  },
];

const FooterLinks: footerlLinksData[] = [
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Features", href: "/#features " },
  { label: "Contact Us", href: "/#contact " },
];

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: "fa-brands:facebook-f",
    link: "www.facebook.com",
    width: 10,
  },
  {
    imgSrc: "fa6-brands:instagram",
    link: "www.instagram.com",
    width: 14,
  },
  {
    imgSrc: "fa6-brands:twitter",
    link: "www.twitter.com",
    width: 14,
  },
];

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  });
};
