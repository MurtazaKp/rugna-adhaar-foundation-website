import BreadcrumbOne from "@/components/BreadcrumbOne";
import DonateInnerTwo from "@/components/DonateInnerTwo";
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
        <BreadcrumbOne title="Rebuild Lives Together" />

        {/* DonateInner */}
        <DonateInnerTwo />
      </section>
    </AOSWrap>
  );
};

export default page;
