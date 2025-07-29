"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { partnerLogos } from "@/utils/data";

const Partner: React.FC = () => {
  return (
    <>
      <div
        className="agency-portfolio-partner-area ptb-80"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Our Customers</h2>
          <div className="bar" data-aos="zoom-in" data-aos-delay="100"></div>
        </div>
        <div className="container">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
              }}
            >
              {partnerLogos.map((client, index) => (
                <SwiperSlide
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={client.image}
                    alt="client-img"
                    style={{
                      width: "90%",
                      height: "200px",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
        <style jsx global>{`
          .custom-slide {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image-container {
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .image-container img {
            object-fit: contain;
            width: 200px;
            height: 100%;
          }
          @media (max-width: 600px) {
            .custom-slide {
              height: 300px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Partner;
