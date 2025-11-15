import BannerOne from "@/components/BannerOne";
import BlogOne from "@/components/BlogOne";
import CauseOne from "@/components/CauseOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";

import DifferenceOne from "@/components/DifferenceOne";

import HelpOne from "@/components/HelpOne";

import ProfitOne from "@/components/ProfitOne";

import TestimonialOne from "@/components/TestimonialOne";

import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  title: "Rugna Aadhaar Foundation | Old Age Home, Orphanage & Charity",
  description:
    "Rugan Aadhar Foundation is committed to uplifting the lives of the homeless and helpless. Join us in making a difference, one life at a time.",
  keywords:
    "Rugna Aadhaar, Old Age Home, Orphanage, Charity, NGO, Homeless Help, Donate Pune, Nonprofit",

  // Canonical URL for SEO (Added)
  alternates: {
    canonical: "http://rugnafoundation.org", // Matches the Open Graph URL
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Rugna Aadhaar Foundation | Uplifting the Homeless and Helpless",
    description:
      "Rugan Aadhar Foundation is committed to uplifting the lives of the homeless and helpless. Join us in making a difference, one life at a time.",
    url: "http://rugnafoundation.org",
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/home/campaignOne.png",
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Logo and Mission",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Rugna Aadhaar Foundation | Old Age Home, Orphanage & Charity",
    description:
      "Rugan Aadhar Foundation is committed to uplifting the lives of the homeless and helpless. Join us in making a difference, one life at a time.",
    image: "/assets/images/home/campaignOne.png", // <-- IMPORTANT: Replace with your actual Twitter card image path
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <BannerOne />

        {/* DifferenceOne */}
        <DifferenceOne />
        {/* HelpOne */}
        <HelpOne />
        {/* CauseOne */}
        <CauseOne />
        {/* CtaSectionOne */}

        <div className="pg-four">
          <ProfitOne />
        </div>

        {/* TestimonialOne */}
        <TestimonialOne />
        {/* CauseSliderTwo */}
        <CauseSliderTwo />
        {/* DifferenceTwo */}

        {/* BlogOne */}
        <BlogOne />
      </section>
    </AOSWrap>
  );
};

export default page;
