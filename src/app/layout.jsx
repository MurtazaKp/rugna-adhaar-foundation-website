import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

import InitializeAOS from "@/helper/InitializeAOS";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import ColorPalate from "@/helper/ColorPalate";
import HeaderFive from "@/components/HeaderFive";
import TopBarFive from "@/components/TopBarFive";
import FooterOne from "@/components/FooterOne";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/helper/CustomCursor";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rugna Adhaar Foundation", // The official name of your organization
  url: "https://rugna-adhaar-foundation-website.vercel.app/", // Your official website URL

  // URL to your official logo (must be crawlable)
  logo: "https://rugna-adhaar-foundation-website.vercel.app/images/logo.png",

  description:
    "A non-profit organization dedicated to providing shelter, support, and hope to individuals experiencing homelessness.", // A brief mission statement

  // Link to your social media profiles (replace placeholders)
  sameAs: [
    "https://www.facebook.com/RugnaAdhaarFoundation",
    "https://twitter.com/RugnaAdhaar",
    "https://www.instagram.com/RugnaAdhaarFoundation",
    "https://www.linkedin.com/company/RugnaAdhaarFoundation",
  ],

  // Optional: Add a contact point
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98765-43210", // Your primary contact number
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Hubot+Sans:ital,wght@0,200..900;1,200..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/fonts/css/all.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/flag-icons.min.css" />
        <link rel="stylesheet" href="/assets/fonts/css/charifund.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />

        <link
          rel="stylesheet"
          href="/assets/css/default-theme.css"
          id="switch-color"
        />
        <link rel="stylesheet" href="/assets/css/sticky-header.css" />
        <link rel="stylesheet" href="/assets/css/box-layout.css" />
        <link rel="stylesheet" href="/assets/css/flag-icons.min.css" />
        <link rel="stylesheet" href="/assets/css/dark-mode.css" />
      </head>
      <body suppressHydrationWarning={true}>
        <InitializeAOS />
        <RouteScrollToTop />
        {/* <ColorPalate /> */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        <HeaderFive />
        {children}
        <FooterOne />

        <script src="/assets/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
