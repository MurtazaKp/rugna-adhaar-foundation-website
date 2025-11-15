import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import TermsAndConditionsInner from "@/components/TermsConditionInner";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "Terms & Conditions | Rugna Aadhaar Foundation - Official Policy",
  description:
    "Read the official Terms and Conditions of service, donation, and website usage for the Rugna Aadhaar Foundation.",
  keywords:
    "Terms and Conditions, NGO Terms, Website Usage Policy, Donation Terms, Rugna Aadhaar Policy",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/terms-conditions", // Updated for the policy page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Terms & Conditions | Rugna Aadhaar Foundation",
    description:
      "Review the full terms governing your use of the Rugna Aadhaar Foundation website and services.",
    url: "http://rugnafoundation.org/terms-conditions", // <-- IMPORTANT: Replace with your final domain
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Update the image path for policy pages
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Terms and Conditions",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Rugna Aadhaar Foundation",
    description:
      "Review the full terms governing your use of the Rugna Aadhaar Foundation website and services.",
    image: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Update the image path for Twitter
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Terms of Service" />

        {/* ContactUsInner */}
        <TermsAndConditionsInner />
      </section>
    </AOSWrap>
  );
};

export default page;
