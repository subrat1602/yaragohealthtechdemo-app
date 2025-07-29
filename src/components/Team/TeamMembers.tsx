"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const teamMembers = [
  {
    id: 1,
    name: "Shankar YARAGOppa",
    title: "Founder Director & CEO",
    description:
      "Has 20+ years of leadership role in IT Services and Product management space. Over the last 12 years into the healthtech space. Started his career as an entrepreneur in 2002. Being a founder director of YARAGO HEALTHTECH contributing to bring the change in the healthcare system. Graduated from PES College of Engineering, Mysore University and MBA from Symbiosis University.",
    image: "/images/team/2.png",
  },
  {
    id: 2,
    name: "Anand K R",
    title: "Director & CTO",
    description:
      "Has 20+ years of experience. Prior to associate with YARAGO, Anand was associated with industry majors such as Mindtree and Talisma Corp. etc. Over the last 10 years acquired immense healthtech domain expertise as chief product officer and instrumental in rolling out multiple specialty specific digital solutions. Anand graduated from PES College of Engg. and Masters (M Tech) from JCE, Mysore.",
    image: "/images/team/1.png",
  },
];

const TeamMembers = () => {
  return (
    <div className="team-area bg-f9f6f6">
      <div
        className="section-title text-center"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <h2>Leadership</h2>
        <div className="bar"></div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="single-team d-flex flex-column align-items-center text-center p-3">
                <div className="team-image mb-3">
                  <div className="team-image-container">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={125}
                      height={125}
                    />
                  </div>
                </div>
                <div className="team-content">
                  <div className="team-info mb-2">
                    <h3>{member.name}</h3>
                    <span>{member.title}</span>
                  </div>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
