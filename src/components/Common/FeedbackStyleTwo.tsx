"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";
import shape5 from "/public/images/shape5.png";

const feedbacks = [
  {
    id: 1,
    name: "Dr. Ashwin Shetty",
    position: "Siddhi Eye Care Centre, Bangalore",
    feedback:
      "Well thought out software which comprehensively covers all aspects of managing practice with a responsive team backing it up.",
  },
  {
    id: 2,
    name: "Dr. Chandrashekar Kamat",
    position: "Umakant Eye Hospital, Hospet, Bellary",
    feedback:
      "The functionality and usability of the system is superior to anything I have seen. The team at YARAGO is very aggressive and open to incorporating newer technologies. It's customizable and suits any size practice.",
  },
  {
    id: 3,
    name: "Dr. Prashanth C R",
    position: "Smitha Eye Care Centre, Madikeri",
    feedback:
      "YARAGO has been a wonderful value addition to my practice. It has significantly improved staff efficiency by streamlining appointment bookings, billing, and EMR management. As a clinician, I found it flexible, customizable, and a great tool to reduce paperwork.",
  },
  {
    id: 4,
    name: "Dr. Kukke Subramanya",
    position: "Sindhu Eye Hospital, Mysore",
    feedback:
      "YARAGO EMR is highly integrated. Its loaded features and simplicity made me migrate from my previous software. Automated insurance claim processing is a huge plus. Support from the team is excellent and customization is optimal.",
  },
];

const FeedbackStyleTwo = () => {
  return (
    <div className="feedback-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>What Doctor&apos;s Say</h2>
          <div className="bar"></div>
          <p>
            Hear directly from experienced practitioners who&apos;ve adopted
            YARAGO across their practices. Our platform is trusted for its
            innovation, flexibility, and ability to streamline care
            delivery—tailored to the real needs of clinicians.
          </p>
        </div>

        <div className="testimonials-slides-box">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            autoHeight={true}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback.id}>
                <div className="single-feedback-item">
                  <p>{feedback.feedback}</p>
                  <div className="client-info align-items-center">
                    <div className="title">
                      <h3>{feedback.name}</h3>
                      <span>{feedback.position}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="shape1">
        <Image src={shape1} alt="shape" width={202} height={202} />
      </div>
      <div className="shape2 rotateme">
        <Image src={shape2} alt="shape" width={22} height={22} />
      </div>
      <div className="shape3">
        <Image src={shape3} alt="shape" width={28} height={28} />
      </div>
      <div className="shape4">
        <Image src={shape4} alt="shape" width={21} height={20} />
      </div>
      <div className="shape5">
        <Image src={shape5} alt="shape" width={182} height={146} />
      </div>
      <div className="shape6 rotateme">
        <Image src={shape4} alt="shape" width={21} height={20} />
      </div>
      <div className="shape7">
        <Image src={shape4} alt="shape" width={21} height={20} />
      </div>
      <div className="shape8 rotateme">
        <Image src={shape2} alt="shape" width={22} height={22} />
      </div>
    </div>
  );
};

export default FeedbackStyleTwo;
