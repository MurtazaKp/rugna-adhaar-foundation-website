import BlogOne from "@/components/BlogOne";
import BreadcrumbOne from "@/components/BreadcrumbOne";

import DifferenceOne from "@/components/DifferenceOne";

import FaqOne from "@/components/FaqOne";

import HelpTwo from "@/components/HelpTwo";

import TestimonialOne from "@/components/TestimonialOne";

import Vision from "@/components/Vision";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
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
