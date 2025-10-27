"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsInner = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    cEmail: "",
    phoneNumber: "",
    contactMessage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message Sent");
        setFormData({
          fullName: "",
          cEmail: "",
          phoneNumber: "",
          contactMessage: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Submission failed:", errorData);
        toast.error(
          "There was an error sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Network or unexpected error:", error);
      toast.error(
        "⚠️ Network error! Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        className="toast-container"
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        pauseOnHover
        theme="colored"
        style={{ zIndex: 999999 }}
      />
      <section className="contact-main volunteer">
        <div className="container">
          <div className="row gutter-40">
            {/* Contact info left column */}
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
                  {/* Location */}
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
                  {/* Phone */}
                  <div className="contact-main__single">
                    <div className="thumb">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="content">
                      <h6>Phone</h6>
                      <p>
                        <a href="tel:+919823105610">+91 98231 05610 </a>
                      </p>
                    </div>
                  </div>
                  {/* Email */}
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
                  {/* Social */}
                  <div className="contact-main__single">
                    <div className="thumb">
                      <i className="fa-solid fa-share-nodes" />
                    </div>
                    <div className="content">
                      <h6>Social</h6>
                      <div className="social">
                        <a
                          href="https://www.facebook.com/p/Ask-Old-Age-Home-61569215441317/"
                          target="_blank"
                          aria-label="share us on facebook"
                          title="facebook"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a
                          href="https://www.youtube.com/@rugnahakkaandolan360/videos"
                          target="_blank"
                          aria-label="share us on Youtube"
                          title="youtube"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-youtube" />
                        </a>
                        <a
                          href="https://www.instagram.com/askoldagehomengo/?igsh=MWM3YjZ2dGJiaTl6ag%3D%3D#"
                          target="_blank"
                          aria-label="share us on instagram"
                          title="instagram"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-instagram" />
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
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact form right column */}
            <div className="col-12 col-xl-6">
              <div
                className="contact__form volunteer__form checkout__form"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className="volunteer__form-content">
                  <h4 className="title-animation_inner">Write to Us</h4>
                  <p>
                    Reach out to support our mission or share your thoughts with
                    us.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="cta">
                  <div className="input-single">
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Enter Name"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    <i className="fa-solid fa-user" />
                  </div>
                  <div className="input-single">
                    <input
                      type="email"
                      id="cEmail"
                      placeholder="Enter Email"
                      required
                      value={formData.cEmail}
                      onChange={handleChange}
                    />
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <div className="input-single">
                    <input
                      type="text"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div className="input-single alter-input">
                    <textarea
                      id="contactMessage"
                      placeholder="Your Message..."
                      value={formData.contactMessage}
                      onChange={handleChange}
                      required
                    />
                    <i className="fa-solid fa-comments" />
                  </div>

                  <div className="form-cta">
                    <button
                      type="submit"
                      className="btn--primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsInner;
