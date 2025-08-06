"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  name: string;
  href: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks: LinkItem[] = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Subscription Plan", href: "/subscriptionplan" },
  ];

  const contactInfo = {
    address:
      "2126, First Floor, Block B, Ardent Office One Hoodi Circle, Bengaluru-560048, Karnataka, India",
    phone: "(+91) 9008401930",
    email: "info@yaragohealthtech.com",
  };

  return (
    <>
      <footer className="footer-area saas-footer-area fintech-footer-area">
        <Image
          src={"/images/map.png"}
          alt="map"
          height={443}
          width={910}
          className="map"
        />
        <div className="footer-overlay"></div>
        <div className="footer-overlay-wrapper">
          <div className="container mw-1320">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={180}
                        height={36}
                      />
                    </Link>
                  </div>

                  <p>
                    YARAGO delivers smart, specialty-focused EMR solutions to
                    simplify care and enhance outcomes.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="single-footer-widget ps-5">
                  <h3 className="border-orange pb-3 w-75">Quick Links</h3>
                  <ul className="list">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <i className="bx bx-right-arrow-alt arrow-icon-1"></i>
                        <div className="text-footer">
                          <Link href={link.href}>{link.name}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="single-footer-widget">
                  <h3 className="border-orange pb-3 w-75">Contact Us</h3>

                  <div className="footer-contact-info">
                    <div className="info-card d-flex align-items-center gap-2">
                      <i className="bx bx-map"></i> {contactInfo.address}
                    </div>
                    <div className="info-card d-flex align-items-center gap-2">
                      <i className="bx bx-phone"></i>
                      <a href={`tel:${contactInfo.phone}`}>
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="info-card d-flex align-items-center gap-2">
                      <i className="bx bx-envelope"></i>
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="copyright-area">
                  <p>
                    Copyright &copy; {currentYear} All rights reserved by YARAGO 
                    Healthtech Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
