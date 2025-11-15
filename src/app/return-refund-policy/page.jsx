import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import ReturnRefundPolicyInner from "@/components/ReturnRefundPolicyInner";
import TermsAndConditionsInner from "@/components/TermsConditionInner";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "Return & Refund Policy | Rugna Aadhaar Foundation",
  description:
    "Review the official donation return, cancellation, and refund policy for the Rugna Aadhaar Foundation.",
  keywords:
    "Donation Refund Policy, Cancellation Policy, Return Policy, Rugna Aadhaar Donations, NGO Policy",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/return-refund-policy", // Updated for the policy page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Return & Refund Policy | Rugna Aadhaar Foundation",
    description:
      "Read the full terms regarding donation refunds and cancellations.",
    url: "http://rugnafoundation.org/return-refund-policy", // <-- IMPORTANT: Replace with your final domain
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Update the image path for policy pages
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Policy",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "Return & Refund Policy | Rugna Aadhaar Foundation",
    description:
      "Read the full terms regarding donation refunds and cancellations.",
    image: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Update the image path for Twitter
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Return & Refund Policy" />

        {/* ContactUsInner */}
        <ReturnRefundPolicyInner />
      </section>
    </AOSWrap>
  );
};

export default page;
