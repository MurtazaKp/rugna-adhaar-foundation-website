import Link from "next/link";

const FooterOne = () => {
  return (
    <>
      <footer className="footer-two">
        <div className="container">
          <div className="row gutter-60">
            <div className="col-12 col-md-6 col-xl-5">
              <div
                className="footer-two__widget"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="footer-two__widget-logo">
                  <div className="navbar-logo d-flex flex-column flex-lg-row  align-items-center">
                    <Link href="/">
                      <img
                        src="/assets/images/white-logo.png"
                        alt="Image_inner"
                      />
                    </Link>
                    <div className="d-flex flex-column">
                      <p className="font-bolder text-white text-center">
                        Rugna Aadhaar Foundation
                      </p>
                      <p className="font-bolder text-white">
                        {" "}
                        Ask Old Age Home Orphanage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="footer-two__widget-content">
                  <p>
                    Rugan Aadhar Foundation is committed to uplifting the lives
                    of the homeless and helpless. Join us in making a
                    difference, one life at a time.
                  </p>
                  <div className="social">
                    <Link
                      href="https://www.facebook.com/p/Ask-Old-Age-Home-61569215441317/"
                      target="_blank"
                      aria-label="share us on facebook"
                      title="facebook"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@rugnahakkaandolan360/videos"
                      target="_blank"
                      aria-label="share us on vimeo"
                      title="youtube"
                    >
                      <i className="fa-brands fa-youtube" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/askoldagehomengo/?igsh=MWM3YjZ2dGJiaTl6ag%3D%3D#"
                      target="_blank"
                      aria-label="share us on instagram"
                      title="twitter"
                    >
                      <i className="fa-brands fa-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-3 offset-xl-4">
              <div
                className="footer-two__widget footer-two__widget--alternate"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className="footer-two__widget-intro">
                  <h5>Get In Touch</h5>
                  <div className="line">
                    <span className="large-line" />
                    <span className="small-line" />
                    <span className="small-line" />
                  </div>
                </div>
                <div className="footer-two__widget-content footer-two__widget-content--contact">
                  <ul>
                    <li>
                      <Link
                        href="/https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8"
                        target="_blank"
                      >
                        <i className="fa-solid fa-location-dot" />
                        124/ 283 Bhim Nagar, Mundhwa, Pune, 411036
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:+919823105610">
                        <i className="fa-solid fa-phone" />
                        +91 98231 05610
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:donate@rugnafoundation.org">
                        <i className="fa-regular fa-envelope" />
                        donate@rugnafoundation.org
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-two__copyright">
          <div className="container">
            <div className="row align-items-center gutter-12">
              <div className="col-12 col-lg-6">
                <div className="footer-two__copyright-inner text-center text-lg-start">
                  <p>
                    Copyright © <span id="copyrightYear" />{" "}
                    <Link href="/">Rugna Aadhaar Foundation</Link>. All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="footer__bottom-left">
                  <ul className="footer__bottom-list justify-content-center justify-content-lg-end">
                    <li>
                      <Link href="/terms-conditions">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/return-refund-policy">
                        Return & Refund Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
          <img
            src="/assets/images/sprade.png"
            alt="Image_inner"
            className="base-img"
          />
        </div>
        <div
          className="sprade-light"
          data-aos="zoom-in"
          data-aos-duration={1000}
        >
          <img src="/assets/images/sprade-light.png" alt="Image_inner" />
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
