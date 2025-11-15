import BlogOne from "@/components/BlogOne";
import BreadcrumbOne from "@/components/BreadcrumbOne";

import DifferenceOne from "@/components/DifferenceOne";

import FaqOne from "@/components/FaqOne";

import HelpTwo from "@/components/HelpTwo";

import TestimonialOne from "@/components/TestimonialOne";

import Vision from "@/components/Vision";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "About Us | Rugna Aadhaar Foundation - Our Mission, Vision & Values",
  description:
    "Learn about the core mission, vision, and values that drive the Rugna Aadhaar Foundation. We are committed to uplifting the homeless, operating an old age home and an orphanage.",
  keywords:
    "Rugna Aadhaar, About Us, Mission, Vision, Values, Foundation History, NGO, Pune Charity",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/about-us", // Updated for the about-us page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "About Us | Rugna Aadhaar Foundation - Our Mission, Vision & Values",
    description:
      "Learn about the core mission, vision, and values that drive the Rugna Aadhaar Foundation. We are committed to uplifting the homeless, operating an old age home and an orphanage.",
    url: "http://rugnafoundation.org/about-us", // <-- IMPORTANT: Replace with your final domain
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/about-us/main-image.jpg", // <-- IMPORTANT: Update the image path for About Us
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Team and Mission",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "About Us | Rugna Aadhaar Foundation",
    description:
      "Learn about the core mission, vision, and values that drive the Rugna Aadhaar Foundation.",
    image: "/assets/images/about-us/main-image.jpg",
  },
};
const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="About Us" />
        {/* HelpOne */}
        <HelpTwo />
        <div className="py-5">
          <DifferenceOne />
        </div>

        <FaqOne />
        <Vision />
        {/* TestimonialOne */}
        <TestimonialOne />
        {/* ContactOne */}
        <BlogOne />
      </section>
    </AOSWrap>
  );
};

export default page;
