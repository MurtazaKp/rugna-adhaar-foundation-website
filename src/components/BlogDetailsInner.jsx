import react from "react";

const BlogDetailsInner = ({ post }) => {
  // Destructure for cleaner access to data
  const { date, title, mainImage, intro, sections } = post;

  return (
    <section className="blog-main cm-details">
      <div className="container">
        <div className="row gutter-60">
          <div className="col-12">
            <div className="cm-details__content">
              {/* Poster/Main Image Section - Dynamic */}
              <div
                className="cm-details__poster"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                {/* Image source and alt text are dynamic */}
                <img src={mainImage} alt={title} />
              </div>

              {/* Meta Data Section - Dynamic */}
              <div className="cm-details-meta">
                <p>
                  <i className="fa-solid fa-calendar-days" />
                  {/* Date is dynamic */}
                  {date}
                </p>
              </div>

              {/* Introduction Content Section - Dynamic */}
              <div className="cm-group cta">
                <h2 className="title-animation_inner">
                  {/* Title is dynamic */}
                  {title}
                </h2>
                <p className="pt-3">{intro.paragraph1}</p>
                <p>{intro.paragraph2}</p>
              </div>

              {/* Looping through all content sections */}
              <div>
                {sections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    {/* Section Title */}
                    <h3 className="pt-5">{section.title}</h3>

                    {/* Image Group - Dynamic */}
                    {/* Only render the image group if there are images in the array */}
                    {section.imageGroup && section.imageGroup.length > 0 && (
                      <div className="cm-img-group cta mt-4">
                        {section.imageGroup.map((imageSrc, imgIndex) => (
                          <div className="cm-img-single" key={imgIndex}>
                            <img
                              src={imageSrc}
                              alt={`${section.title} image ${imgIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section Paragraphs/Blockquotes - Dynamic */}
                    <div className="">
                      {section.content.map((item, contentIndex) => (
                        // Render text content, using the 'type' for default classes, or 'className' for override
                        <p
                          key={contentIndex}
                          // Sets className to item.className (if present) OR defaults based on item.type
                          className={
                            item.className ||
                            (item.type === "paragraph" ? "my-4" : "fw-bold")
                          }
                        >
                          {item.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsInner;
