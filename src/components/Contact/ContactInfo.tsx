"use client";

import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:info@yaragohealthtech.com">
                    info@yaragohealthtech.com
                  </a>
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Visit Here</h3>
                <p>
                  2126, First Floor, Block B, Ardent Office One Hoodi Circle,
                  Bengaluru-560048, Karnataka, India
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+919008401930">+91 9008401930</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
