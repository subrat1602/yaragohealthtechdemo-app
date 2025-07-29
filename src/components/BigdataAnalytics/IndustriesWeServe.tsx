"use client";

import React from "react";
import Image from "next/image";
import { industriesData } from "@/utils/data";
import vectorImg from "/public/images/bigdata-analytics/vector.png";

const IndustriesWeServe: React.FC = () => {
  return (
    <>
      <div
        className="industries-serve-area ptb-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="section-title">
            <h2>{industriesData.title}</h2>
            <div className="bar"></div>
            <p>{industriesData.description}</p>
          </div>

          <div className="row justify-content-center">
            {industriesData.industries.map((industry, index) => (
              <div key={index} className="col-lg-3 col-6 col-sm-6 col-md-4">
                <div className="single-industries-serve-box">
                  <div className="icon">
                    <i className={industry.icon}></i>
                  </div>
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-shape2">
          <Image src={vectorImg} alt="image" width={672} height={429} />
        </div>
      </div>
    </>
  );
};

export default IndustriesWeServe;
