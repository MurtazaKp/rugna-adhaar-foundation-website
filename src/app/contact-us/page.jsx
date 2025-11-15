import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "Contact Us | Rugna Aadhaar Foundation - Get in Touch",
  description:
    "Get in touch with the Rugna Aadhaar Foundation. Find our address, phone number (+91 98231 05610), email (donate@rugnafoundation.org), and contact form for support.",
  keywords:
    "Rugna Aadhaar Contact, Foundation Address, Phone Number, Email, Donation Inquiry, Volunteer Contact Pune, NGO Contact",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/contact-us", // Updated for the contact-us page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Contact Us | Rugna Aadhaar Foundation",
    description:
      "Find our official address, contact details, and support information for the Rugna Aadhaar Foundation.",
    url: "http://rugnafoundation.org/contact-us", // <-- IMPORTANT: Replace with your final domain
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/home/campaignTwo.png", // <-- IMPORTANT: Update the image path for Contact Us
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Contact Information",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Rugna Aadhaar Foundation",
    description:
      "Reach out to Rugna Aadhaar Foundation for donations, volunteering, or general queries.",
    image: "/assets/images/twitter-card-contact.jpg", // <-- IMPORTANT: Update the image path for Twitter
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Contact Us" />

        {/* ContactUsInner */}
        <ContactUsInner />
      </section>
    </AOSWrap>
  );
};

export default page;
