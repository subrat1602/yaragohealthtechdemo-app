"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="health-tech-about-area">
        <div className="container">
          <div className="ht-about-content">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="about-img position-relative text-center">
                  <Image
                    src="/images/health-tech/about-us.jpg"
                    alt="about-us"
                    width={635}
                    height={400}
                  />
                </div>
              </div>

              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="about-content position-relative">
                  <div
                    className="saas-section-title mw-full"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                  >
                    <span className="sub-title2 d-inline-flex align-items-center gap-2">
                      <Image
                        src="/images/fav.png"
                        alt="icon1"
                        width={24}
                        height={16}
                      />
                      About YARAGO
                    </span>
                    <h2>
                      Driving digital transformation in healthcare. Our products
                      connect patient care, data integrity, and clinical
                      workflows—enabling smarter decisions across the healthcare
                      ecosystem.
                    </h2>
                  </div>

                  <Link
                    href="/about"
                    className="ht-about-btn d-inline-flex align-items-center gap-1"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    Read more<i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
