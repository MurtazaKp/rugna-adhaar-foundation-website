import BlogDetailsInner from "@/components/BlogDetailsInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

export const samplePostData = {
  date: "02 Apr 2021",
  title: "The Importance of Shelters in Combating Homelessness",
  mainImage: "/assets/images/blog/blogPostOne/mainImage.png",
  intro: {
    paragraph1:
      "Homelessness is a global issue, affecting millions of individuals and families every day. The absence of a home not only means living without physical security, but also being deprived of basic human needs such as safety, stability, and dignity. At the core of fighting homelessness lies the importance of shelters—safe spaces that provide immediate relief from the dangers of life on the streets. However, the role of shelters extends far beyond providing a roof over one's head.",
    paragraph2:
      "At Rugan Aadhar Foundation, we believe in the transformative power of shelters. Our approach goes beyond the traditional idea of offering temporary housing; we aim to create a supportive environment that addresses both the physical and emotional needs of the homeless, empowering them to rebuild their lives.",
  },
  sections: [
    {
      title: "Shelter: The First Line of Defense",
      // Image paths for the group section
      imageGroup: [
        "/assets/images/blog/blogPostOne/subImgOne.png",
        "/assets/images/blog/blogPostOne/subImgTwo.png",
        "/assets/images/blog/blogPostOne/subImgThree.png",
      ],
      content: [
        {
          type: "paragraph",
          text: "Shelters serve as the first and most critical line of defense in the fight against homelessness. When individuals find themselves without a home, they are often exposed to unsafe and dangerous conditions on the streets. They are vulnerable to violence, exploitation, and adverse weather conditions, which pose threats to both their physical and mental health.",
        },
        // Example of the blockquote type, which defaults to 'fw-bold'
        {
          type: "blockquote",
          text: "“Shelters provide a refuge, protecting individuals from the immediate dangers of homelessness.”",
        },
        {
          type: "paragraph",
          text: "At Rugan Aadhar Foundation, our shelters offer a safe, clean, and welcoming environment for those in need. With access to basic amenities like food, water, and rest, individuals can find temporary relief from the challenges of homelessness. This basic safety net is essential in preventing further physical and emotional harm, giving them a chance to breathe and start their journey toward recovery.",
        },
      ],
    },
    {
      title: "A Safe Space for Physical and Mental Healing",
      imageGroup: [], // No images for this section
      content: [
        {
          type: "paragraph",
          text: "Shelters are more than just physical structures—they are spaces where healing can begin. Living on the streets can cause severe mental and emotional distress. The uncertainty and instability of homelessness often lead to anxiety, depression, and trauma. Without a safe place to stay, individuals are unable to address these issues, which can spiral into further crises.",
        },
        {
          type: "blockquote",
          text: "“At Rugan Aadhar Foundation, we provide more than just shelter; we provide an opportunity for individuals to heal, both physically and emotionally.”",
        },
        {
          type: "paragraph",
          text: "Our shelters are designed to promote healing by offering more than just a bed. We provide access to medical care, mental health services, and counseling, ensuring that individuals receive the holistic support they need. With a stable, nurturing environment, they can begin to process their experiences, regain a sense of control, and plan for their future.",
        },
      ],
    },
    {
      title: "Stability: The Foundation for Rebuilding Lives",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "Homelessness is often characterized by chaos and instability, making it nearly impossible for individuals to regain control of their lives. Shelters provide the structure and stability needed to break this cycle.",
        },
        {
          type: "blockquote",
          text: "“A shelter provides the stability needed to rebuild lives and regain independence.”",
        },
        {
          type: "paragraph",
          text: "At Rugan Aadhar Foundation, we help individuals establish daily routines, which are essential for long-term recovery. With consistent access to food, shelter, and support services, individuals can focus on setting and achieving their goals, such as finding employment, pursuing education, or reconnecting with family. This newfound stability is a critical stepping stone toward a more secure and self-sufficient future.",
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Blog Details" />

        {/* BlogDetailsInner */}
        <BlogDetailsInner post={samplePostData} />
      </section>
    </AOSWrap>
  );
};

export default page;
