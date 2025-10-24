"use client";
import Link from "next/link";
// Removed: import { useRef } from "react";
// Removed: import Slider from "react-slick";
import ProgressBar from "../helper/ProgressBar";
// Removed: import Link from "next/link"; (Already imported)

const CauseOne = () => {
  // Removed: const sliderRef = useRef(null);
  // Removed: const settings = { ... };

  return (
    <section
      className="cause"
      style={{
        backgroundImage: "url(/assets/images/cause/cause-bg.png)",
      }}
    >
      <div className="container">
        {/* Header Section (Kept the same) */}
        <div className="row gutter-30 align-items-center">
          <div className="col-12  text-center">
            <div className="section__header">
              <span className="sub-title">
                <i className="icon-donation" />
                Start donating poor people
              </span>
              <h2 className="title-animation_inner">Our Campaigns</h2>
            </div>
          </div>
          {/* Navigation/Arrows are removed as they are no longer needed */}
          <div className="col-12 col-md-4 col-xl-5">
            <div className="slider-navigation">
              {/* Removed Slider Navigation Buttons */}
            </div>
          </div>
        </div>

        {/* NEW: Half-and-Half (50/50) Content */}
        <div className="row justify-content-center gutter-30 col-10 mx-auto">
          {/* Item 1: Children we work with (col-md-6) */}
          <div className="col-12 col-md-6">
            <div className="cause__slider-inner">
              <div className="cause__slider-single">
                <div className="thumb">
                  <Link href="/cause-details">
                    <img
                      src="/assets/images/home/campaignOne.png"
                      alt="Image_inner"
                    />
                  </Link>
                  <div className="tag">
                    <Link href="/our-causes">Food</Link>
                  </div>
                </div>
                <div className="content">
                  <h6>
                    <Link href="/cause-details">Feed the Helpless</Link>
                  </h6>
                  <p>
                    With every meal we provide, we restore dignity and offer a
                    sense of security to the most vulnerable.
                  </p>
                </div>
                <div className="cause__slider-cta">
                  <div className="cause__progress progress-bar-single">
                    <ProgressBar percent={5} />
                    <div className="cause-progress__goal">
                      <p>
                        Raised: <span className="raised">4.31 Lakhs</span>
                      </p>
                      <p>
                        Goal: <span className="goal">30 Lakhs</span>
                      </p>
                    </div>
                  </div>
                  <div className="cause__cta">
                    <Link
                      href="/donate-us"
                      aria-label="donate now"
                      title="donate now"
                      className="btn--secondary"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Help For Education (col-md-6) */}
          <div className="col-12 col-md-6">
            <div className="cause__slider-inner">
              <div className="cause__slider-single">
                <div className="thumb">
                  <Link href="/cause-details">
                    <img
                      src="/assets/images/home/campaignTwo.png"
                      alt="Image_inner"
                    />
                  </Link>
                  <div className="tag">
                    <Link href="/our-causes">Health</Link>
                  </div>
                </div>
                <div className="content">
                  <h6>
                    <Link href="/cause-details">Shelter for the Homeless</Link>
                  </h6>
                  <p>
                    Ensuring that those who are left abandoned, find a safe
                    space to rest, recover, and rebuild their lives.
                  </p>
                </div>
                <div className="cause__slider-cta">
                  <div className="cause__progress progress-bar-single">
                    <ProgressBar percent={0} />
                    <div className="cause-progress__goal">
                      <p>
                        Raised: <span className="raised">0</span>
                      </p>
                      <p>
                        Goal: <span className="goal">30 lakhs</span>
                      </p>
                    </div>
                  </div>
                  <div className="cause__cta">
                    <Link
                      href="/donate-us"
                      aria-label="donate now"
                      title="donate now"
                      className="btn--secondary"
                    >
                      Donate Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spade">
        <img src="/assets/images/help/spade.png" alt="Image_inner" />
      </div>
    </section>
  );
};

export default CauseOne;
