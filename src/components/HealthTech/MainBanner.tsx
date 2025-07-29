"use client";

import React from "react";
import Link from "next/link";
import CountUp from "react-countup";

const MainBanner = () => {
  return (
    <>
      <div
        className="health-tech-main-banner mx-auto"
        style={{
          backgroundImage: 'url("/images/home/home.jpg',
        }}
      >
        <div className="container mw-1320 position-relative">
          <div className="hero-content">
            <h1
              className="title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <span>Most Trusted</span> Speciality Specific Digital
              Transformation Platform
            </h1>

            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="ht-funfact">
                  <div className="row align-items-center">
                    <div className="col-6 col-sm-6 item">
                      <div className="ht-funfact-card">
                        <h3>
                          <CountUp end={40} duration={2} suffix="+" />
                        </h3>
                        <p>Years of Healthtech Domain Experience</p>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 item">
                      <div className="ht-funfact-card">
                        <h3>
                          <CountUp end={8} duration={2} suffix="+" />
                        </h3>
                        <p>Subspecialities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="content-card">
                  <p>
                    YARAGO healthtech is the most trusted specialty-specific
                    digital transformation platform for healthcare. Our
                    solutions empower medical professionals with seamless
                    interoperability, ease of use, and robust features tailored
                    for all practice sizes.
                  </p>

                  <Link
                    href="/contact"
                    className="health-tech-green-btn d-inline-flex align-items-center gap-1"
                  >
                    Get Started <i className="bx bx-right-arrow-alt"></i>
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

export default MainBanner;
