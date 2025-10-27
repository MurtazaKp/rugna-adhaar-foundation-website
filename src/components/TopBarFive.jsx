const TopBarFive = () => {
  return (
    <div className="topbar topbar--secondary topbar--quaternary topbar-five d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center gutter-12">
                <div className="col-12 col-lg-11 col-xxl-8">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list justify-content-center justify-content-xxl-start">
                      <li>
                        <i className="fa-solid fa-comment-dots" /> Helpline:{" "}
                        <a href="tel:+919823105610">+91 98231 05610</a>
                      </li>
                      <li>
                        <span className="divider" />
                      </li>
                      <li>
                        <a href="mailto:donate@rugnafoundation.org">
                          donate@rugnafoundation.org
                        </a>
                      </li>
                      <li>
                        <span className="divider" />
                      </li>
                      <li>
                        <a
                          href="https://maps.app.goo.gl/Gr9pTNqz5FRNrjQw8"
                          target="_blank"
                          rel="noreferrer"
                        >
                          124/ 283 Bhim Nagar, Mundhwa, Pune, 411036
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-1 col-xxl-4">
                  <div className="topbar-five-extra justify-content-end">
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
                        aria-label="share us on vimeo"
                        title="vimeo"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-youtube" />
                      </a>
                      <a
                        href="https://www.instagram.com/askoldagehomengo/?igsh=MWM3YjZ2dGJiaTl6ag%3D%3D#"
                        target="_blank"
                        aria-label="share us on twitter"
                        title="twitter"
                        rel="noreferrer"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarFive;
