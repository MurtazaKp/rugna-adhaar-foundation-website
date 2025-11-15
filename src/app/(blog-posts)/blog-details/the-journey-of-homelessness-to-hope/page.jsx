import BlogDetailsInner from "@/components/BlogDetailsInner";
import BreadcrumbOne from "@/components/BreadcrumbOne";
import AOSWrap from "@/helper/AOSWrap";

export const metadata = {
  // Primary SEO Tags
  title: "The Journey of Homelessness to Hope | Rugna Aadhaar Foundation Blog",
  description:
    "Follow the inspiring path of individuals from the despair of homelessness to finding renewed hope and stability through the support of the Rugna Aadhaar Foundation.",
  keywords:
    "Homelessness to Hope, Inspiring Journey, Life Transformation, Rugna Aadhaar Success, Charity Blog Stories",

  // Canonical URL for SEO
  alternates: {
    canonical:
      "http://rugnafoundation.org/blog-details/the-journey-of-homelessness-to-hope",
  },

  // Open Graph (Social Sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    title:
      "The Journey of Homelessness to Hope | Rugna Aadhaar Foundation Blog",
    description:
      "Follow the inspiring path of individuals from the despair of homelessness to finding renewed hope and stability through the support of the Rugna Aadhaar Foundation.",
    url: "http://rugnafoundation.org/blog-details/the-journey-of-homelessness-to-hope", // <-- IMPORTANT: Replace with your final domain
    siteName: "Rugna Aadhaar Foundation",
    type: "article", // Crucial for blog posts
    images: [
      {
        url: "/assets/images/blog/blogPostFour/mainImage.png", // <-- IMPORTANT: Update this to the actual featured image of the post
        width: 1200,
        height: 630,
        alt: "Homelessness to Hope Journey",
      },
    ],
    locale: "en_US",
    // Optional: Add article specific tags
    // publishedTime: '2024-01-10T00:00:00.000Z',
    // authors: ['Rugna Aadhaar Team'],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image", // Use large image for blog posts
    title:
      "The Journey of Homelessness to Hope | Rugna Aadhaar Foundation Blog",
    description:
      "Follow the inspiring path of individuals from the despair of homelessness to finding renewed hope and stability through the support of the Rugna Aadhaar Foundation.",
    image: "/assets/images/blog/blogPostFour/mainImage.png", // <-- IMPORTANT: Update the image path for Twitter
  },
};

export const samplePostData = {
  date: "Date to be added",
  title: "The Journey of Homelessness to Hope",
  mainImage: "/assets/images/blog/blogPostFour/mainImage.png",
  intro: {
    paragraph1:
      "Homelessness is a reality that affects millions around the world, leaving individuals and families without the security of a roof over their heads or the certainty of a meal. But at Rugan Aadhar Foundation, we believe that no one’s story should end in despair. Through our shelter programs, we have seen countless lives transformed—people who have found not just a place to stay, but a second chance at life.",
    paragraph2: "",
  },
  sections: [
    {
      title: "The Power of a Safe Space",
      imageGroup: [
        "/assets/images/blog/blogPostFour/subImgOne.png",
        "/assets/images/blog/blogPostFour/subImgTwo.png",
        "/assets/images/blog/blogPostFour/subImgThree.png",
      ],
      content: [
        {
          type: "blockquote",
          text: "“The shelter is not just a building—it’s a space where broken lives are mended and new stories begin.”",
        },
        {
          type: "paragraph",
          text: "The comfort and stability provided by our shelter program allow individuals to focus on their recovery, both physically and emotionally. For many, it’s the first time in years they can truly rest, and this stability is the foundation upon which they can begin to rebuild their lives.",
        },
      ],
    },
    {
      title: "Asha’s Story: From Despair to Dignity",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "Asha, a woman in her early 30s, lost her job during the COVID-19 pandemic. With no steady income and mounting bills, she was eventually evicted from her home. Her days became a struggle for survival as she wandered the streets, seeking food and safety. When Asha arrived at Rugan Aadhar Foundation, she was physically exhausted and emotionally shattered.",
        },
        {
          type: "paragraph",
          text: "Our shelter provided Asha with more than just a bed—it gave her the support system she desperately needed. We helped her regain her health through nutritious meals and medical care, and she began attending job training courses offered by our team. Today, Asha has a stable job, her own apartment, and a renewed sense of dignity.",
        },
        {
          type: "blockquote",
          text: "“When you give someone a safe space to recover, you give them the tools to rediscover themselves.”",
        },
        {
          type: "paragraph",
          text: "Asha’s story is a testament to the resilience of the human spirit. Once given a second chance, she was able to take control of her life and regain the dignity that homelessness had taken away from her.",
        },
      ],
    },
    {
      title: "Ramesh’s Journey: Breaking Free from the Chains of Addiction",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "For Ramesh, homelessness wasn’t just about a lack of shelter—it was the consequence of years of struggling with addiction. His dependence on alcohol had cost him everything—his job, his family, and eventually, his home. When Ramesh came to our shelter, he was at rock bottom, unsure if he would ever be able to break free from his addiction.",
        },
        {
          type: "paragraph",
          text: "Our team at Rugan Aadhar Foundation provided not just a safe place for Ramesh to sleep but also access to rehabilitation services. With the support of our counselors and healthcare professionals, Ramesh was able to overcome his addiction. Today, he is sober, works as a mentor for others facing similar challenges, and is helping others on their journey from homelessness to hope.",
        },
        {
          type: "blockquote",
          text: "“It’s not just about providing shelter—it’s about providing the tools to rebuild lives.”",
        },
        {
          type: "paragraph",
          text: "Ramesh’s story shows that true transformation happens when people are given the resources and support they need to heal. He went from being homeless and addicted to leading others on a path to recovery.",
        },
      ],
    },
    {
      title: "Join the Movement: Donate Today",
      imageGroup: [],
      content: [
        {
          type: "paragraph",
          text: "At Rugan Aadhar Foundation, we are committed to providing life-changing shelter services for the homeless, but we can’t do it alone. By supporting our shelter programs, you are directly contributing to the transformation of lives. Whether it’s through donations, volunteering, or spreading the word about our work, every contribution helps us extend our reach to more people in need.",
        },
        {
          type: "blockquote",
          text: "“Together, we can turn homelessness into hope, one life at a time.”",
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
