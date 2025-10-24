import Link from "next/link";

// Blog Post Data
const blogPosts = [
  {
    id: 1,
    imageSrc: "assets/images/home/blogOne.png",
    tag: "Health",
    date: "October 20, 2024",
    title: "The Importance of Shelters in Combating Homelessness",
    description:
      "An analysis of why shelters are critical in the fight against homelessness and how we can make a the difference.",
    link: "/blog-details/the-importance-of-shelters-in-combating-homelessness",
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
    link: "/blog-details/a-place-to-rest-a-place-to-heal",
    tagLink: "/blog-list",
    aosDelay: 300,
  },
  {
    id: 3,
    imageSrc: "assets/images/home/blogThree.png",
    tag: "Food",
    date: "October 20, 2024",
    title: "how-providing-shelter-transforms-lives",
    description:
      "Exploring the profound impact of a safe place to sleep and how shelter leads to lasting change.",
    link: "/blog-details/how-providing-shelter-transforms-lives",
    tagLink: "/blog-list",
    aosDelay: 600,
  },
  {
    id: 4,
    imageSrc: "assets/images/home/blogFour.png",
    tag: "Food",
    date: "October 20, 2024",
    title: "The Journey of Homelessness to Hope",
    description:
      "A deep dive into the stories of individuals who found solace and a second chance through our shelter programs.",
    link: "/blog-details/the-journey-of-homelessness-to-hope",
    tagLink: "/blog-list",
    aosDelay: 600,
  },
];

const BlogGridInner = () => {
  return (
    <section className="blog-main blog cm-details">
      <div className="container">
        <div className="row gutter-60">
          {/* Main Blog Content Column - Now takes full width for the content itself */}
          <div className="col-12">
            <div className="row gutter-30">
              {/* Mapping over the blogPosts data to render the grid items */}
              {blogPosts.map((post) => (
                <div className="col-12 col-lg-4" key={post.id}>
                  <div
                    className="blog__single-wrapper"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay={post.aosDelay}
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
                            {post.author}
                          </p>
                          <p>{post.date}</p>
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
            {/* Pagination */}
            {/* <div className="row">
              <div className="col-12">
                <div
                  className="pagination-wrapper"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                >
                  <ul className="pagination main-pagination">
                    <li>
                      <button>
                        <i className="fa-solid fa-angles-left" />
                      </button>
                    </li>
                    <li>
                      <Link href="/blog-list">1</Link>
                    </li>
                    <li>
                      <Link href="/blog-list" className="active">
                        2
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-list">3</Link>
                    </li>
                    <li>
                      <button>
                        <i className="fa-solid fa-angles-right" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
          {/* The sidebar column (col-12 col-xl-4) and its contents have been removed. */}
        </div>
      </div>
    </section>
  );
};

export default BlogGridInner;
