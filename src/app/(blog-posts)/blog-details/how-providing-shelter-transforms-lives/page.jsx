import BlogDetailsInner from "@/components/BlogDetailsInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";

import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  title: "Charifund | Nonprofit & Fundraising Charity NEXT JS Template",
  description: "Nonprofit & Fundraising Charity NEXT JS Template.",
};

export const samplePostData = {
  date: "Date to be added",
  title: "How Providing Shelter Transforms Lives",
  mainImage: "/assets/images/blog/blogPostThree/mainImage.png",
  intro: {
    paragraph1:
      "Imagine waking up every day with no place to call home, no certainty about your next meal, and no shelter to shield you from the elements. For millions of homeless individuals, this is a harsh reality. However, for those fortunate enough to find a place of refuge, a shelter does more than just provide a roof—it restores hope, dignity, and the opportunity for a better future. At Rugan Aadhar Foundation, our mission is to offer not only physical shelter but emotional and psychological support that transforms lives.",
    paragraph2: "",
  },
  sections: [
    {
      title: "The Transformative Power of Shelter",
      imageGroup: [
        "/assets/images/blog/blogPostThree/subImgOne.png",
        "/assets/images/blog/blogPostThree/subImgTwo.png",
        "/assets/images/blog/blogPostThree/subImgThree.png",
        ,
      ],
      content: [
        {
          type: "paragraph",
          text: "Shelter is more than a bed or four walls; it’s a vital foundation for rebuilding lives. The simple act of providing a safe place to sleep can initiate a chain reaction that helps individuals recover from trauma, regain confidence, and rebuild their lives. At Rugan Aadhar Foundation, we have witnessed firsthand how a stable and secure environment can be the catalyst for incredible transformations.",
        },
        {
          type: "blockquote",
          text: "“A safe shelter provides more than protection—it offers a fresh start.”",
        },
        {
          type: "paragraph",
          text: "When someone experiences the trauma of homelessness, it affects every aspect of their being—physical, emotional, and mental. Offering shelter to those in need doesn’t just solve the immediate problem of finding a place to stay; it gives them the time and space to heal, recover, and regain a sense of self-worth. Our shelter services at Rugan Aadhar Foundation have helped countless individuals rediscover their purpose and begin a new chapter in their lives.",
        },
      ],
    },
    {
      title: "The Journey from Desperation to Dignity",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "For many, homelessness strips away dignity, leaving them vulnerable and isolated. Having a safe, warm bed in a secure environment can restore a sense of humanity. At Rugan Aadhar Foundation, we believe that every person deserves to live with dignity, and providing shelter is the first step in that journey.",
        },
        {
          type: "blockquote",
          text: "“Shelter offers more than a roof; it restores dignity and self-respect.”",
        },
        {
          type: "paragraph",
          text: "Through our shelters, individuals who were once lost and afraid are now able to take control of their lives again. We’ve seen how access to basic amenities like clean bedding, proper meals, and a safe environment helps restore confidence and encourages people to pursue opportunities for a brighter future.",
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* Preloader */}

        {/* BreadcrumbOne */}
        <BreadcrumbOne title="Blog Details" />

        {/* BlogDetailsInner */}
        <BlogDetailsInner post={samplePostData} />
      </section>
    </AOSWrap>
  );
};

export default page;
