"use client";
import Link from "next/link";
// Removed: import { useRef } from "react";
// Removed: import Slider from "react-slick";
import ProgressBar from "../helper/ProgressBar";
// Removed: import Link from "next/link"; (Already imported)

const Vision = () => {
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
                Our Vision
              </span>
              <h2 className="title-animation_inner col-10 mx-auto">
                Our Vision Empowering Lives, Restoring Hope
              </h2>

              <span className="my-4">
                “Every act of kindness sparks a chain of hope that can transform
                the world.”{" "}
              </span>
              <span className="text-secondary">
                The vision of Rugan Aadhar Foundation is simple yet profound: to
                create a society where no life is abandoned, and every
                individual, regardless of their circumstances, receives the care
                and compassion they deserve. Our long-term goal is to establish
                a support system for the homeless, helpless, and voiceless,
                providing them with food, shelter, medical aid, and the
                opportunity to rebuild their lives.
              </span>
              <span className="text-secondary mt-3">
                We aim to inspire others to join us in this mission, creating a
                ripple effect of kindness and humanity that will lead to a more
                compassionate world. We believe that by working together, we can
                bridge the gap between those in need and the resources required
                to uplift them.
              </span>
            </div>
          </div>
        </div>
        <div className="spade">
          <img src="/assets/images/help/spade.png" alt="Image_inner" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
