import BlogDetailsInner from "@/components/BlogDetailsInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";

import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

export const samplePostData = {
  date: "Date to be added",
  title: "A Place to Rest, A Place to Heal",
  mainImage: "/assets/images/blog/blogPostTwo/mainImage.png",
  intro: {
    paragraph1:
      "Homelessness is not just a physical experience—it’s an emotional and psychological ordeal that takes a profound toll on those who endure it. The uncertainty of not knowing where you’ll sleep, the constant fear for safety, and the overwhelming sense of isolation can strip away a person’s dignity, self-worth, and hope. At Rugan Aadhar Foundation, we understand that providing shelter is about so much more than offering a roof—it’s about restoring the emotional and psychological well-being of those who need it the most.",
    paragraph2: "",
  },
  sections: [
    {
      title: "The Emotional Weight of Homelessness",
      imageGroup: [
        "/assets/images/blog/blogPostTwo/subImgOne.png",
        "/assets/images/blog/blogPostTwo/subImgTwo.png",
        "/assets/images/blog/blogPostTwo/subImgThree.png",
      ],
      content: [
        {
          type: "paragraph",
          text: "Homelessness comes with heavy emotional baggage. People who find themselves without a home often experience deep feelings of anxiety, depression, and helplessness. Every day is a struggle for survival, where finding food, safety, and warmth become the primary concerns. But the emotional toll doesn’t end there. The constant stress and fear of being exposed to harm or neglect can cause long-term trauma.",
        },
        {
          type: "blockquote",
          text: "“Homelessness isn’t just about losing your home—it’s about losing your sense of safety, security, and self-worth.”",
        },
        {
          type: "paragraph",
          text: "Many individuals who come to Rugan Aadhar Foundation are exhausted—not just physically, but emotionally. They’ve been fighting an uphill battle, and the loss of a stable environment has left them feeling disconnected from society, family, and sometimes even themselves.",
        },
      ],
    },
    {
      title: "A Safe Haven for Healing",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "The first and most important gift a shelter offers is peace of mind. At Rugan Aadhar Foundation, our shelters provide a safe, secure, and welcoming environment where individuals can finally rest without fear.",
        },
        {
          type: "blockquote",
          text: "“A shelter is more than four walls—it’s a sanctuary for those who have been deprived of safety and security.”",
        },
        {
          type: "paragraph",
          text: "The relief of knowing that you have a place to sleep, protected from the elements and dangers of the streets, is immeasurable. For many, this is the first time they’ve felt safe in months or even years. This sense of security allows individuals to begin the process of emotional healing, where they can focus on their mental and emotional well-being, rather than constantly worrying about survival.",
        },
      ],
    },
    {
      title: "The Impact of a Safe Space on Mental Health",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "The connection between shelter and mental well-being cannot be overstated. When people have a secure place to rest, they experience a significant reduction in anxiety and stress. At Rugan Aadhar Foundation, we’ve seen how providing shelter has an immediate positive impact on mental health.",
        },
        {
          type: "blockquote",
          text: "“The first night of safe sleep is often the first night of healing.”",
        },
        {
          type: "paragraph",
          text: "As the body rests, so does the mind. The constant fight-or-flight mode experienced on the streets is replaced with a sense of calm. Individuals can finally take a breath and begin to focus on themselves—whether that’s addressing their mental health needs, connecting with counselors, or simply reflecting on their next steps. Over time, this emotional and mental recovery becomes the foundation for rebuilding their lives.",
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
