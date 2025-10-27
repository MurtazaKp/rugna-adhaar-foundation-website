const FaqOne = () => {
  return (
    <section className="faq">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8 col-xl-6">
            <div className="faq__content">
              <div
                className="section__content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span className="sub-title">
                  <i className="icon-donation" />
                  Meet Our Founder
                </span>
                <h2 className="title-animation_inner">
                  Dadarao Vainkat Gaikwad
                </h2>

                <p>
                  Rugan Aadhar Foundation was born out of the passion and
                  dedication of Dadarao, who has always had an unwavering
                  commitment to helping the most vulnerable. He started by
                  personally assisting homeless individuals and animals in need,
                  offering food, shelter, and care. What began as small acts of
                  kindness has now grown into a full-scale operation, with a
                  dedicated team working around the clock to provide a better
                  life for those who are often forgotten.
                </p>
                <p>
                  Dadarao envisioned a world where no one is left behind, and
                  Rugan Aadhar Foundation is the embodiment of that dream.
                  Through years of hard work and persistence, he has built an
                  organization that not only meets immediate needs but also
                  helps individuals rebuild their lives with dignity and
                  respect.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-5 offset-xl-1 mt-4 mt-lg-0">
            <div className="faq__thumb  d-lg-block">
              <div className="faq__thumb-inner">
                <div
                  className="thumb-lg"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img
                    className="rounded-3"
                    src="assets/images/about-us/main-image.jpg"
                    alt="Image_inner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape d-none d-lg-block">
        <img src="assets/images/faq/shape.png" alt="Image_inner" />
      </div>
    </section>
  );
};

export default FaqOne;
