"use client";

const HelpTwo = () => {
  return (
    <section className="help-two">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 col-xxl-6 ">
            <div className="help-two__thumb d-none d-lg-block">
              <div className="">
                <div
                  className="thumb-sm "
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img
                    className="rounded-5"
                    src="assets/images/about-us/banner.png"
                    alt="Image_inner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="help-two__content">
              <div className="section__content">
                <span className="sub-title">
                  <i className="icon-donation" />A Beacon of Hope for the
                  Helpless
                </span>
                <h2 className="title-animation_inner">
                  Empowering Lives with Care and Compassion
                </h2>
                <p>
                  At Rugan Aadhar Foundation, we believe that every life
                  matters, and it is our mission to extend a helping hand to
                  those who have been abandoned by society. Our organization is
                  dedicated to providing care, shelter, food, and medical
                  support to homeless individuals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpTwo;
