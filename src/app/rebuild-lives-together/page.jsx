import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInnerTwo from "@/components/DonateInnerTwo";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title:
    "Rebuild Lives Together | Rugna Aadhaar Foundation - Rehabilitation Campaign",
  description:
    "Join the 'Rebuild Lives Together' campaign to support rehabilitation, healthcare, and education for the helpless and homeless. Donate today to rebuild futures with Rugna Aadhaar Foundation.",
  keywords:
    "Rebuild Lives Together, Rehabilitation Donation, Homeless Support, Future Building, Healthcare Charity, Rugna Aadhaar Campaign, Education for Homeless",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/rebuild-lives-together",
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Rebuild Lives Together | Rugna Aadhaar Foundation",
    description:
      "Support our efforts to provide long-term rehabilitation and stability to those in dire need. Every donation helps rebuild a future.",
    url: "http://rugnafoundation.org/rebuild-lives-together",
    siteName: "Rugna Aadhaar Foundation",
    type: "article",
    images: [
      {
        url: "assets/images/home-slider/dharnaTwo.jpg", // <-- IMPORTANT: Update the image path for this campaign
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation - Rebuild Lives Together Campaign",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Rebuild Lives Together | Rugna Aadhaar Foundation",
    description:
      "Donate now to rebuild futures. Support rehabilitation, healthcare, and education for the homeless.",
    image: "assets/images/home-slider/dharnaTwo.jpg", // <-- IMPORTANT: Update the image path for Twitter
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Rebuild Lives Together" />

        {/* DonateInner */}
        <DonateInnerTwo />
      </section>
    </AOSWrap>
  );
};

export default page;
