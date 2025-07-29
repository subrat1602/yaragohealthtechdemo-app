"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import manAndWomen from "/public/images/man-and-women.png";
import circle from "/public/images/circle.png";
import ctaShape from "/public/images/cta-shape.png";

const CTA: React.FC = () => {
  return (
    <>
      <div className="repair-cta-area">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="cta-repair-content">
                <h3>Ready to Digitally Transform Your Practice?</h3>
                <p>
                  Whether you run a single-specialty clinic or a multi-location
                  hospital, YARAGO helps you streamline workflows, improve
                  clinical outcomes, and stay future-ready with our
                  specialty-specific EMR solutions.
                </p>

                <Link href="/contact" className="health-tech-green-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="cta-repair-img">
                <Image src={manAndWomen} alt="image" width={558} height={375} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="cta-shape"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <Image src={ctaShape} alt="image" width={421} height={401} />
        </div>
      </div>
    </>
  );
};

export default CTA;
