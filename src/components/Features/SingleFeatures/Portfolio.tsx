"use client";

import Image from "next/image";
import React from "react";
import { portfolioData } from "@/utils/data";

const Portfolio = () => {
  return (
    <div className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        {portfolioData.map((service, index) => (
          <div
            key={service.id}
            className={`row justify-content-center align-items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className="col-lg-6 col-md-12 services-content"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="section-title">
                <h2>{service.title}</h2>
                <div className="bar"></div>
                <p>{service.description}</p>
              </div>

              <div className="row">
                {service.features.map((feature, idx) => (
                  <div
                    className="col-lg-6 col-md-6"
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <div className="box">
                    <i className="bx bx-right-arrow-alt arrow-icon"></i>
                    {feature.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12 services-image"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="700"
              data-aos-once="true"
            >
              {service.image.map((imgSrc, idx) => (
                <Image
                  key={idx}
                  src={imgSrc}
                  alt={`service-img-${idx}`}
                  width={800}
                  height={600}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                  data-aos-once="true"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
