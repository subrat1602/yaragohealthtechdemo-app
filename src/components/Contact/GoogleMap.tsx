"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6706456027505!2d77.71566419999999!3d12.992904999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae119729f41d8d%3A0x49fc37a26ed23914!2sArdente%20Office%20One!5e0!3m2!1sen!2sin!4v1747841724270!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
