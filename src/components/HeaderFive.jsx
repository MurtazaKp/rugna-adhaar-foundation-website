"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderFive = () => {
  const countryRef = useRef(null);
  let pathname = usePathname();
  let [search, setSearch] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  return (
    <>
      <header
        className={`header header-secondary header-five ${
          scroll && "sticky-header"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main-header__menu-box">
                <nav className="navbar p-0">
                  <div className="navbar-logo d-flex flex-column flex-sm-row align-items-center">
                    <Link className="" href="/">
                      <img
                        src="/assets/images/white-logo.png"
                        alt="Image_inner"
                      />

                      <div className="d-flex flex-column">
                        <p className="font-bolder text-center text-white fs-6">
                          Rugna Aadhaar Foundation
                        </p>
                        <p className="font-bolder fs-6 text-white">
                          {" "}
                          Ask Old Age Home Orphanage
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="navbar__menu-wrapper">
                    <div className="navbar__menu pe-0 d-none d-xl-block">
                      <ul className="navbar__list">
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/"].includes(pathname) ? "active" : ""
                          }`}
                        >
                          <Link href="/" className="nav-links">
                            Home
                          </Link>
                        </li>
                        <li
                          className={`navbar__item nav-fade ${
                            ["/about-us"].includes(pathname) ? "active" : ""
                          }`}
                        >
                          <Link className="nav-links" href="/about-us">
                            About Us
                          </Link>
                        </li>
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/our-causes", "/cause-details"].includes(pathname)
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            href="#"
                            aria-label="dropdown menu"
                            className="navbar__dropdown-label dropdown-label-alter nav-links"
                          >
                            Our Campaigns
                          </Link>
                          <ul className="navbar__sub-menu">
                            <li
                              className={
                                ["/our-causes"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href="/meals-that-matter">
                                Meals That Matter
                              </Link>
                            </li>
                            <li
                              className={
                                ["/cause-details"].includes(pathname)
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link href="/rebuild-lives-together">
                                Rebuild Lives Together
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${
                            ["/blog-grid"].includes(pathname) ? "active" : ""
                          } `}
                        >
                          <Link href="/blog-grid" className="nav-links">
                            Blogs
                          </Link>
                        </li>
                        <li
                          className={`navbar__item nav-fade ${
                            ["/contact-us"].includes(pathname) ? "active" : ""
                          } `}
                        >
                          <Link className="nav-links" href="/contact-us">
                            Contact Us
                          </Link>
                        </li>

                        <li
                          className={`navbar__item nav-fade ${
                            ["/rebuild-lives-together"].includes(pathname)
                              ? "active"
                              : ""
                          } `}
                        >
                          <Link
                            className="nav-links"
                            href="/rebuild-lives-together"
                          >
                            Donate Now
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="navbar__options">
                    <div className="contact-btn ps-0 pe-4 d-none d-md-flex">
                      <div className="contact-icon">
                        <i className="fa-solid fa-phone-volume text-white" />
                      </div>
                      <div className="contact-content ">
                        <p className="text-white">Call Us Now</p>
                        <a className="text-white" href="tel:+919823105610">
                          +91 98231 05610
                        </a>
                      </div>
                    </div>
                    {/* <div className="navbar__mobile-options ">
                      <Link
                        href="/meals-that-matter"
                        className="btn--primary d-none d-md-flex"
                      >
                        Donate Now
                      </Link>
                    </div> */}
                    <button
                      onClick={handleMobileMenu}
                      className="open-offcanvas-nav d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                    >
                      <span className="icon-bar top-bar" />
                      <span className="icon-bar middle-bar" />
                      <span className="icon-bar bottom-bar" />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            search ? "search-active search-popup" : "search-popup"
          }`}
        >
          <button
            onClick={handleSearch}
            className="close-search"
            aria-label="close search box"
            title="close search box"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <form action="#" method="post">
            <div className="search-popup__group">
              <input
                type="text"
                name="search-field"
                id="searchField"
                placeholder="Search...."
                required=""
              />
              <button
                type="submit"
                aria-label="search products"
                title="search products"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className="mobile-menu__wrapper">
          <div className="mobile-menu__header nav-fade">
            <div className="logo  ">
              <Link
                className="d-flex justify-content-center"
                href="/"
                aria-label="home page"
                title="logo"
              >
                <img src="/assets/images/logo.png" alt="Image_inner" />
              </Link>
              <div className="d-flex flex-column mobile-brand-name">
                <p className="font-bolder text-center">
                  Rugna Aadhaar Foundation
                </p>
                <p className="font-bolder"> Ask Old Age Home Orphanage</p>
              </div>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label="close mobile menu"
              className="close-mobile-menu"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="mobile-menu__list" ref={mobileMenuListRef}></div>

          <div className="mobile-menu__cta nav-fade d-block d-md-none">
            <Link href="/meals-that-matter" className="btn--primary ">
              Donate Now <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
              title="facebook"
            >
              <i className="fa-brands fa-facebook-f" />
            </Link>
            <Link
              href="https://vimeo.com/"
              target="_blank"
              aria-label="share us on vimeo"
              title="vimeo"
            >
              <i className="fa-brands fa-vimeo-v" />
            </Link>
            <Link
              href="https://x.com/"
              target="_blank"
              aria-label="share us on twitter"
              title="twitter"
            >
              <i className="fa-brands fa-twitter" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              aria-label="share us on linkedin"
              title="linkedin"
            >
              <i className="fa-brands fa-linkedin-in" />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default HeaderFive;
