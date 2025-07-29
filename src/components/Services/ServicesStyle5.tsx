"use client";

import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import { services } from "@/utils/data";

const ServicesStyle5 = () => {
  return (
    <div className="agency-services-area">
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Link href={service.slug} className="agency-services-box-link">
                <div className="agency-services-box">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={860}
                    height={700}
                  />
                  <div className="content">
                    <h3>{service.title}</h3>
                    <span className="read-more-btn">
                      Read More <Icon.PlusCircle />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesStyle5;
