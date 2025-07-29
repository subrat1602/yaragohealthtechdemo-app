"use client";

import React from "react";
import Image from "next/image";
import { benefitsData } from "@/utils/data";
import * as Icon from "react-feather";

const Benefits: React.FC = () => {
  return (
    <div className="health-tech-benefits-area pb-70">
      <div className="container mw-1320">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="benefits-img">
              <Image
                src="/images/home/benefits1.jpg"
                alt="benefits"
                width={804}
                height={675}
              />
              <div className="content">
                <p>{benefitsData.experienceText}</p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="benefits-content">
              <div
                className="saas-section-title mw-full"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="sub-title2 d-inline-flex align-items-center gap-2">
                  <Image
                    src="/images/fav.png"
                    alt="icon1"
                    width={24}
                    height={16}
                  />
                  Benefits
                </span>
                <h2>{benefitsData.mainTitle}</h2>
              </div>

              <div className="row align-items-start">
                {Array.from({ length: 2 }).map((_, colIndex) => {
                  const chunkSize = Math.ceil(
                    benefitsData.benefitsList.length / 2
                  );
                  const start = colIndex * chunkSize;
                  const items = benefitsData.benefitsList.slice(
                    start,
                    start + chunkSize
                  );

                  return (
                    <div
                      className="col-sm-6"
                      key={colIndex}
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="benefits-list">
                        <ul>
                          {items.map((benefit, index) => (
                            <li
                              key={start + index}
                              data-aos="fade-left"
                              data-aos-delay="100"
                              >
                              <Icon.ArrowRight className="icon" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
