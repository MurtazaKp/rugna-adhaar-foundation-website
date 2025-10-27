import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
import ReturnRefundPolicyInner from "@/components/ReturnRefundPolicyInner";
import TermsAndConditionsInner from "@/components/TermsConditionInner";
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
        <BreadcrumbOne title="Return & Refund Policy" />

        {/* ContactUsInner */}
        <ReturnRefundPolicyInner />
      </section>
    </AOSWrap>
  );
};

export default page;
