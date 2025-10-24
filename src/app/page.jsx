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
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
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
