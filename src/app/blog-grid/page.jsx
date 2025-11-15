import BlogGridInner from "@/components/BlogGridInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "Blog | Rugna Aadhaar Foundation - News, Updates & Stories",
  description:
    "Read the latest news, updates, and impact stories from the Rugna Aadhaar Foundation. Stay informed about our campaigns, events, and how your support is changing lives.",
  keywords:
    "Rugna Aadhaar Blog, Charity News, NGO Updates, Foundation Stories, Campaign Results, Pune Charity Events",

  // Canonical URL for SEO
  alternates: {
    canonical: "http://rugnafoundation.org/blog-grid", // Updated for the blog grid page
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Blog | Rugna Aadhaar Foundation - News, Updates & Stories",
    description:
      "Stay informed about our campaigns, events, and how your support is changing lives.",
    url: "http://rugnafoundation.org/blog-grid",
    siteName: "Rugna Aadhaar Foundation",
    type: "website",
    images: [
      {
        url: "/assets/images/blog/blogPostTwo/mainImage.png",
        width: 1200,
        height: 630,
        alt: "Rugna Aadhaar Foundation Blog and News",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Blog | Rugna Aadhaar Foundation",
    description:
      "Read the latest news, updates, and impact stories from the Rugna Aadhaar Foundation.",
    image: "/assets/images/blog/blogPostTwo/mainImage.png",
  },
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* TopBarOne */}

        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Latest News" />

        {/* BlogGridInner */}
        <BlogGridInner />
      </section>
    </AOSWrap>
  );
};

export default page;
