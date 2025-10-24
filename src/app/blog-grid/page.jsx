import BlogGridInner from "@/components/BlogGridInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
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
