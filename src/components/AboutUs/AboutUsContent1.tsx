"use client";

import React from "react";
import Image from "next/image";

import aboutImg from "/public/images/about-one.png";

const AboutUsContent1 = () => {
  return (
    <>
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-image">
                <Image src={aboutImg} alt="image" width={685} height={494} />
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="about-content">
                <div className="section-title">
                  <h2>About Us</h2>
                  <div className="bar"></div>
                  <p>
                    YARAGO healthtech is a trusted name in specialty-specific
                    digital transformation—built on 40+ years of combined
                    experience in healthtech innovation.
                  </p>
                </div>

                <p>
                  Our platform is crafted for modern medical practices,
                  delivering deeply integrated solutions in Ophthalmology and
                  Dental care. Whether it’s a solo clinic or a multi-location
                  chain, YARAGO EMR adapts seamlessly with unmatched
                  configurability and interoperability.
                </p>

                <p>
                  With support for 8 subspecialities, end-to-end department
                  coverage, and features like surgical inventory,
                  optical/pharmacy chains, and insurance workflows, YARAGO
                  simplifies the complex—so clinicians can focus on care.
                </p>

                <p>
                  Backed by a strong commitment to R&D and emerging technologies
                  like AI, we are continually evolving to meet the changing
                  needs of healthcare providers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent1;
