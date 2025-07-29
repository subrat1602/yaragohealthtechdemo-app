"use client";

import React from "react";
import Image from "next/image";
import * as Icon from "react-feather";

const mission = {
  title: "Our Mission",
  description:
    "To empower healthcare providers with intuitive, interoperable, and specialty-specific digital solutions that enhance clinical outcomes and operational efficiency.",
  icon: "/images/fintech/icon3.png",
};

const vision = {
  title: "Our Vision",
  description:
    "To become the global benchmark in specialty EMR platforms, driving digital transformation across all sizes of medical practices through continuous innovation and trusted technology.",
  icon: "/images/fintech/icon4.png",
};

const values = [
  {
    title: "Trust",
    description:
      "We build long-term partnerships by earning trust through consistency and reliability.",
  },
  {
    title: "Innovation",
    description:
      "We continuously evolve our products with cutting-edge technology to meet tomorrow’s healthcare needs.",
  },
  {
    title: "Specialty Focus",
    description:
      "We tailor our solutions for specific medical domains, ensuring maximum value and usability.",
  },
];

const About: React.FC = () => {
  return (
    <div className="fintech-about-area pb-70">
      <div className="container mw-1320 position-relative z-1">
        <div
          className="saas-section-title text-center mw-full"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h4>
            YARAGO healthtech is a specialty-focused digital transformation
            platform, developed with over 40 years of combined domain experience
            and trusted by clinicians worldwide.
          </h4>
        </div>

        <div className="row justify-content-center align-items-center mt-5">
          <div
            className="col-md-6 col-lg-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="fintech-our-mission">
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
              <div className="text-center">
                <Image
                  src={mission.icon}
                  alt="mission icon"
                  width={70}
                  height={130}
                />
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-6 col-xl-3"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="fintech-our-vision">
              <div className="text-end ov-img">
                <Image
                  src={vision.icon}
                  alt="vision icon"
                  width={150}
                  height={92}
                />
              </div>
              <h3>{vision.title}</h3>
              <p>{vision.description}</p>
            </div>
          </div>

          <div
            className="col-lg-12 col-xl-6"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <div className="fintech-our-values">
              <h3>Our Values</h3>
              <div className="fintech-values-list">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="fintech-values-card"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <div className="flex-shrink-0">
                      <Icon.ArrowRight className="icon" />
                    </div>
                    <p>
                      <span>{value.title}:</span> {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
