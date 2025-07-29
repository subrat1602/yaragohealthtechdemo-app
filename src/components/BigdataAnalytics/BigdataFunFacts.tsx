"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const BigdataFunFacts: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="funfacts-area bg-image ptb-80">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <h2>We Empower Digital Health at Scale</h2>
          <div className="bar"></div>
          <p>
            YARAGO&apos;s platform is shaped by 40+ years of combined domain
            expertise and trusted by medical professionals across dental and
            ophthalmology practices globally.
          </p>
        </div>

        <div className="row justify-content-center" ref={ref}>
          {[
            { end: 40, label: "Years of Combined Expertise" },
            { end: 12, label: "Years in HealthTech Innovation" },
            { end: 8, label: "Subspecialities Supported" },
          ].map((item, index) => (
            <div key={index} className="col-lg-3 col-md-3 col-6 col-sm-6">
              <div className="single-funfact">
                <h3>
                  {inView && <CountUp end={item.end} duration={2} suffix="+" />}
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigdataFunFacts;
