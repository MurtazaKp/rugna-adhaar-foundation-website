import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactUsInner from "@/components/ContactUsInner";
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
        <BreadcrumbOne title="Contact Us" />

        {/* ContactUsInner */}
        <ContactUsInner />
      </section>
    </AOSWrap>
  );
};

export default page;
