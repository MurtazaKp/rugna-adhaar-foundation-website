import Link from "next/link";

// 1. Declare the data outside the component
const blogPosts = [
  {
    id: 1,
    imageSrc: "assets/images/home/blogOne.png",
    tag: "Health",
    date: "October 20, 2024",
    title: "The Importance of Shelters in Combating Homelessness",
    description:
      "An analysis of why shelters are critical in the fight against homelessness and how we can make a the difference.",
    link: "/blog-details",
    tagLink: "/blog-list",
    aosDelay: 0,
  },
  {
    id: 2,
    imageSrc: "assets/images/home/blogTwo.png",
    tag: "Education",
    date: "October 20, 2024",
    title: "A Place to Rest, A Place to Heal",
    description:
      "The emotional and psychological relief that comes from having a safe, secure place to call home.",
    link: "/blog-details",
    tagLink: "/blog-list",
    aosDelay: 300,
  },
  {
    id: 3,
    imageSrc: "assets/images/home/blogThree.png",
    tag: "Food",
    date: "October 20, 2024",
    title: "How Providing Shelter Transforms Lives",
    description:
      " Exploring the profound impact of a safe place to sleep and how shelter leads to lasting change.",
    link: "/blog-details",
    tagLink: "/blog-list",
    aosDelay: 600,
  },
];

const BlogOne = () => {
  return (
    <section className="blog">
      <div className="container">
        {/* Blog Section Header */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-xl-7">
            <div
              className="section__header text-center"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span className="sub-title">
                <i className="icon-donation" />
                Insights and Updates on Our Mission
              </span>
              <h2 className="title-animation_inner">Stories of Compassion</h2>
              <p>
                Explore our blog for the latest updates on our campaigns,
                success stories, and how you can get involved.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts: Using map() to render the cards */}
        <div className="row gutter-40">
          {blogPosts.map((post) => (
            <div
              className="col-12 col-lg-6 col-xl-4"
              key={post.id} // Important for list rendering in React
            >
              <div
                className="blog__single-wrapper"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={post.aosDelay} // Use dynamic delay
              >
                <div className="blog__single van-tilt">
                  <div className="blog__single-thumb">
                    <Link href={post.link}>
                      <img src={post.imageSrc} alt="Image_inner" />
                    </Link>
                    <div className="tag">
                      <Link href={post.tagLink}>
                        <i className="fa-solid fa-tags" />
                        {post.tag}
                      </Link>
                    </div>
                  </div>
                  <div className="blog__single-inner">
                    <div className="blog__single-meta">
                      <p>
                        <i className="icon-user" />
                        {post.date}
                      </p>
                    </div>
                    <div className="blog__single-content">
                      <h5>
                        <Link href={post.link}>{post.title}</Link>
                      </h5>
                    </div>
                    <div className="blog__single-cta">
                      <Link
                        href={post.link}
                        aria-label="blog details"
                        title="blog details"
                      >
                        Read More
                        <i className="fa-solid fa-circle-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <img
                    src="assets/images/blog/spade.png"
                    alt="Image_inner"
                    className="spade-two"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="row">
          <div className="col-12">
            <div className="section__cta cta text-center">
              <Link
                href="/blog-list"
                aria-label="our blog"
                title="our blog"
                className="btn--primary"
              >
                View All <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background/Decoration Images */}
      <div className="blog-bg">
        <img src="assets/images/blog/blog-bg.png" alt="Image_inner" />
      </div>
      <div className="spade">
        <img
          src="assets/images/blog/spade-base.png"
          alt="Image_inner"
          className="base-img"
        />
      </div>
    </section>
  );
};

export default BlogOne;
