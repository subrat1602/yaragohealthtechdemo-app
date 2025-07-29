"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "YARAGO EMR for Dental Practice",
    description:
      "Designed for ease of use and interoperability, our Dental EMR is feature-rich and fits all practice sizes — enabling smarter decisions and better clinical outcomes.",
    image: "/images/products/emr1.jpg",
    link: "/products/dental-emr",
  },
  {
    id: 2,
    title: "YARAGO EMR for Eye Care Delivery",
    description:
      "The most trusted EMR for ophthalmology, built with global standards and integrated specialty tools to elevate clinical outcomes and streamline operations.",
    image: "/images/products/emr2.jpg",
    link: "/products/eye-care-emr",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="health-tech-services-area mx-auto">
        <div className="container position-relative mw-1320">
          <div
            className="saas-section-title text-center mw-780 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="sub-title2 d-inline-flex align-items-center gap-2">
              <Image src="/images/fav.png" alt="icon1" width={24} height={16} />
              Products
            </span>
            <h2>Healthtech Products</h2>
          </div>

          <div className="row mt-5">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="col-md-6 col-12 mb-4 d-flex align-items-stretch"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <Link
                  href={service.link}
                  className="w-100 text-decoration-none"
                >
                  <div className="health-tech-services-card w-100 h-100">
                    <div className="image">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={606}
                        height={257}
                      />
                    </div>
                    <div className="content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
