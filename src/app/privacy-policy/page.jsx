import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import PrivacyPolicyInner from "@/components/PrivacyPolicyInner";
import TermsAndConditionsInner from "@/components/TermsConditionInner";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "Privacy Policy | Rugna Aadhaar Foundation - Data Protection",
  description:
    "Read the official Privacy Policy of the Rugna Aadhaar Foundation detailing data collection, usage, and protection measures for donors and users.",
  keywords:
    "Privacy Policy, Data Protection, Donor Privacy, NGO Data Security, Rugna Aadhaar Privacy",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/privacy-policy", // Updated for the policy page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Privacy Policy | Rugna Aadhaar Foundation",
    description:
      "Review our commitment to data protection and privacy for all users and donors.",
    url: "http://rugnafoundation.org/privacy-policy", // <-- IMPORTANT: Replace with your final domain
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Update the image path for policy pages
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Privacy Policy",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "Privacy Policy | Rugna Aadhaar Foundation",
    description:
      "Review our commitment to data protection and privacy for all users and donors.",
    image: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Update the image path for Twitter
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Privacy Policy" />

        {/* ContactUsInner */}
        <PrivacyPolicyInner />
      </section>
    </AOSWrap>
  );
};

export default page;
