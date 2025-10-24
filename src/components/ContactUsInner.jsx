const ContactUsInner = () => {
  return (
    <section className="contact-main volunteer">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-xl-6">
            <div className="contact__content">
              <div
                className="section__content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span className="sub-title">
                  <i className="icon-donation" /> Get In Touch
                </span>
                <h2 className="title-animation_inner">Contact Us</h2>
                <p>
                  Whether you have a question, want to volunteer, or need
                  assistance, the Rugan Aadhar Foundation team is ready to
                  support you.
                </p>
              </div>
              <div className="contact-main__inner cta">
                <div className="contact-main__single">
                  <div className="thumb">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="content">
                    <h6>Location</h6>
                    <p>
                      <a
                        href="https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        124/ 283 Bhim Nagar, Mundhwa, Pune, 411036
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-main__single">
                  <div className="thumb">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="content">
                    <h6>Phone</h6>
                    <p>
                      <a href="tel:>+919823105610">+91 98231 05610 </a>
                    </p>
                  </div>
                </div>
                <div className="contact-main__single">
                  <div className="thumb">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="content">
                    <h6>Email</h6>

                    <p>
                      <a href="mailto:donate@rugnafoundation.org">
                        donate@rugnafoundation.org
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-main__single">
                  <div className="thumb">
                    <i className="fa-solid fa-share-nodes" />
                  </div>
                  <div className="content">
                    <h6>Social</h6>
                    <div className="social">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                        title="facebook"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a
                        href="https://vimeo.com/"
                        target="_blank"
                        aria-label="share us on vimeo"
                        title="vimeo"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-vimeo-v" />
                      </a>
                      <a
                        href="https://x.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                        title="twitter"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        aria-label="share us on linkedin"
                        title="linkedin"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-main__thumb cta">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.521929627828!2d73.96658467579591!3d18.460003071020424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e92adf4e3d4b%3A0x5c8afd66d9c63a06!2sAsk%20Old%20Age%20Home%20Orphanage!5e0!3m2!1sen!2sin!4v1760775294202!5m2!1sen!2sin"
                  width="600"
                  height="250"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div
              className="contact__form volunteer__form checkout__form"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className="volunteer__form-content">
                <h4 className="title-animation_inner">Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action="#" method="post" className="cta">
                <div className="input-single">
                  <input
                    type="text"
                    name="full-name"
                    id="fullName"
                    placeholder="Enter Name"
                    required=""
                  />
                  <i className="fa-solid fa-user" />
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    name="c-email"
                    id="cEmail"
                    placeholder="Enter Email"
                    required=""
                  />
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="input-single">
                  <input
                    type="text"
                    name="phone-number"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    required=""
                  />
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="input-single alter-input">
                  <textarea
                    name="contact-message"
                    id="contactMessage"
                    placeholder="Your Message..."
                    defaultValue={""}
                  />
                  <i className="fa-solid fa-comments" />
                </div>
                <div className="form-cta">
                  <button
                    type="submit"
                    aria-label="submit message"
                    title="submit message"
                    className="btn--primary"
                  >
                    Send Message
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInner;
