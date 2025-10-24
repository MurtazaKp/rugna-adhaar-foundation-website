"use client";

import { useRef } from "react";
import Slider from "react-slick";

const TestimonialOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="testimonial"
        style={{
          backgroundImage: "url(/assets/images/bg-one.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-xl-7">
              <div
                className="section__header text-center"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span className="sub-title">
                  <i className="icon-donation" />
                  Testimonials
                </span>
                <h2 className="title-animation_inner">Voices of Gratitude</h2>
                <p>
                  The impact of our work is best described by the individuals
                  and donors who have experienced or supported our mission.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial__inner">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="testimonial__slider swiper">
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className="swiper-wrapper"
                  >
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="review">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                        <div className="content">
                          <blockquote>
                            <q>
                              I have seen firsthand the difference Rugna Aadhar
                              Foundation make in the lives of the homeless.
                              Their dedication is truly inspiring.
                            </q>
                          </blockquote>
                        </div>
                        <div className="author-info">
                          <div className="author-content">
                            <h6>Anjali</h6>
                            <p>08 SEPT 2024</p>
                          </div>
                        </div>
                        <div className="quote">
                          <img
                            src="assets/images/quote.png"
                            alt="Image_inner"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="review">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                        <div className="content">
                          <blockquote>
                            <q>
                              Knowing that my contributions are helping people
                              in need brings me immense joy. Amazed by Rugna
                              Aadhar Foundation's work.
                            </q>
                          </blockquote>
                        </div>
                        <div className="author-info">
                          <div className="author-content">
                            <h6>Rajesh</h6>
                            <p>18 Oct 2024</p>
                          </div>
                        </div>
                        <div className="quote">
                          <img
                            src="assets/images/quote.png"
                            alt="Image_inner"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial__slider-single">
                        <div className="review">
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                          <i className="icon-star" />
                        </div>
                        <div className="content">
                          <blockquote>
                            <q>
                              I’m proud to be a part of a mission that gives
                              hope and restores dignity to so many. Rugna Aadhar
                              Foundation is a lifeline to many.
                            </q>
                          </blockquote>
                        </div>
                        <div className="author-info">
                          <div className="author-content">
                            <h6>Asahi</h6>
                            <p>8 SEPT 2024</p>
                          </div>
                        </div>
                        <div className="quote">
                          <img
                            src="assets/images/quote.png"
                            alt="Image_inner"
                          />
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-navigation">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type="button"
              aria-label="prev slide"
              title="prev slide"
              className="prev-testimonial slider-btn"
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type="button"
              aria-label="next slide"
              title="next slide"
              className="next-testimonial slider-btn slider-btn-next"
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
        <div
          className="shape"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img
            src="assets/images/community/shape.png"
            alt="Image_inner"
            className="base-img"
          />
        </div>
      </section>
    </>
  );
};

export default TestimonialOne;
