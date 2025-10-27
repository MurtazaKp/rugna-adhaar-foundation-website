"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const HelpOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="help">
        <div className="container">
          <div className="row align-items-center gutter-40">
            <div className="col-12 col-lg-5 col-xxl-6 d-none d-lg-block">
              <div className="help__thumb">
                <div className="help__thumb-inner">
                  <div
                    className="thumb-lg thumb"
                    data-aos="fade-left"
                    data-aos-duration={1000}
                  >
                    <img
                      src="/assets/images/home/paper.jpg"
                      alt="Image_inner"
                    />
                  </div>
                  <div className="thumb thumb-bottom">
                    <img
                      src="/assets/images/home/helperOne.png"
                      alt="Image_inner"
                    />
                  </div>
                  <div className="line">
                    <img src="/assets/images/help/line.png" alt="Image_inner" />
                  </div>
                  <div className="grid-line">
                    <img
                      src="/assets/images/help/grid.png"
                      alt="Image_inner"
                      className="base-img"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xxl-6">
              <div className="help__content">
                <span className="sub-title">
                  <i className="icon-donation" />
                  Who we are
                </span>
                <h2 className="title-animation_inner">
                  Compassion, Care, and Change
                </h2>
                <p>
                  Our foundation is built on the belief that every life deserves
                  respect and dignity. We focus on rescuing abandoned and
                  homeless people and animals, offering them a second chance
                  through proper care, nutrition, medical attention, and a place
                  to call home.
                </p>
                <div className="help__content-icon-group">
                  <div className="help__content-icon">
                    <div className="thumb">
                      <i className="icon-make-donation" />
                    </div>
                    <div className="content">
                      <h6>Start helping them</h6>
                      <p>
                        Raising awareness about the charity's mission and cause.
                      </p>
                    </div>
                  </div>
                  <div className="help__content-icon">
                    <div className="thumb">
                      <i className="icon-support-heart" />
                    </div>
                    <div className="content">
                      <h6>Make Donations</h6>
                      <p>
                        Raising awareness about the charity's mission and cause.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="help__content-list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check" /> Helped fund
                      3,265 Project powerful corporate poor.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" /> We give child a
                      gift of a education
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" /> We help
                      companies develop powerful corporate social
                      Responsibility,
                    </li>
                  </ul>
                </div>
                <div className="help__content-cta cta">
                  <Link
                    href="/about-us"
                    aria-label="more about us"
                    title="about us"
                    className="btn--primary"
                  >
                    More About Us
                  </Link>
                  <div className="contact-btn">
                    <div className="contact-icon">
                      <i className="icon-phone" />
                    </div>
                    <div className="contact-content">
                      <p>Phone</p>
                      <a href="tel:+919823105610">+91 98231 05610</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hand">
          <img src="/assets/images/help/hand.png" alt="Image_inner" />
        </div>
        <div className="parasuit">
          <img src="/assets/images/parasuit.png" alt="Image_inner" />
        </div>
        <div className="spade">
          <img src="/assets/images/help/spade.png" alt="Image_inner" />
        </div>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="XxVg_s8xAms"
          onClose={() => setIsOpen(false)}
          allowFullScreen
        />
      </section>
    </>
  );
};

export default HelpOne;
