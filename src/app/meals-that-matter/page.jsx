import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInner from "@/components/DonateInner";
import Preloader from "@/components/Preloader";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  // Primary SEO Tags
  title: "Meals That Matter | Rugna Aadhaar Foundation - Donate for Food",
  description:
    "Support the 'Meals That Matter' campaign by Rugna Aadhaar Foundation. Your donation provides nutritious meals to those in need at our old age home and orphanage.",
  keywords:
    "Meals That Matter, Donate for Food, Feeding the Homeless, Charity Campaign, Meal Sponsorship, Rugna Aadhaar Food Drive, Hunger Relief Pune",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/meals-that-matter", // Updated for the campaign page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Meals That Matter | Rugna Aadhaar Foundation",
    description:
      "Provide a nutritious meal today. Your support feeds the residents of our old age home and orphanage.",
    url: "http://rugnafoundation.org/meals-that-matter",
    siteName: "Rugna Aadhaar Foundation",
    type: "article",
    images: [
      {
        url: "assets/images/donate-us/bannerImg.png",
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation - Meals That Matter Campaign",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Meals That Matter | Rugna Aadhaar Foundation",
    description:
      "Donate now to the 'Meals That Matter' campaign and help us feed those who need it most.",
    image: "assets/images/donate-us/bannerImg.png", // <-- IMPORTANT: Update the image path for Twitter
  },
};
const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Meals That Matter" />

        {/* DonateInner */}
        <DonateInner />
      </section>
    </AOSWrap>
  );
};

export default page;
