"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const BannerOne = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };

  // full list of slides
  const slides = [
    "/assets/images/home/mobile-banner.png",
    "/assets/images/home/banner.png", // first slide
    "/assets/images/home/bannerOne.png",
    "/assets/images/home/bannerTwo.png",
  ];

  // 📱 Mobile: show only first slide (static)
  if (isMobile) {
    return (
      <section className="banner-two">
        <div className="banner-two__slider-single">
          <div
            className="banner-two__slider-bg"
            style={{ backgroundImage: `url(${slides[0]})` }}
          ></div>
        </div>

        <div className="shape">
          <img src="/assets/images/shape.png" alt="Image_inner" />
        </div>
        <div
          className="shape-left"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src="/assets/images/banner/banner-two-shape.png"
            alt="Image_inner"
          />
        </div>
        <div className="sprade-shape">
          <img
            src="assets/images/sprade-base.png"
            alt="Image_inner"
            className="base-img"
            data-aos="zoom-in"
            data-aos-duration={1000}
          />
        </div>
        <div className="unity">
          <img src="/assets/images/unity.png" alt="Image_inner" />
        </div>
      </section>
    );
  }

  // 💻 Tablet + Desktop: show all slides EXCEPT first
  const filteredSlides = slides.slice(1);

  return (
    <section className="banner-two">
      <div className="banner-two__slider swiper">
        <Slider {...settings} ref={sliderRef} className="swiper-wrapper">
          {filteredSlides.map((src, i) => (
            <div className="swiper-slide" key={i}>
              <div className="banner-two__slider-single">
                <div
                  className="banner-two__slider-bg"
                  style={{ backgroundImage: `url(${src})` }}
                ></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="slider-navigation d-none d-md-flex">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          type="button"
          aria-label="prev slide"
          title="prev slide"
          className="prev-banner slider-btn"
        >
          <i className="fa-solid fa-arrow-left" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          type="button"
          aria-label="next slide"
          title="next slide"
          className="next-banner slider-btn slider-btn-next"
        >
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>

      <div className="shape">
        <img src="/assets/images/shape.png" alt="Image_inner" />
      </div>
      <div
        className="shape-left"
        data-aos="fade-right"
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img
          src="/assets/images/banner/banner-two-shape.png"
          alt="Image_inner"
        />
      </div>
      <div className="sprade-shape">
        <img
          src="assets/images/sprade-base.png"
          alt="Image_inner"
          className="base-img"
          data-aos="zoom-in"
          data-aos-duration={1000}
        />
      </div>
      <div className="unity">
        <img src="/assets/images/unity.png" alt="Image_inner" />
      </div>
    </section>
  );
};

export default BannerOne;
