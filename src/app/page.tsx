import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import IndustriesWeServe from "@/components/BigdataAnalytics/IndustriesWeServe";
import FaqSection from "@/components/Common/FaqSection";
import Partner from "@/components/DigitalAgencyPortfolio/Partner";
import Footer from "@/components/Fintech/Footer";
import About from "@/components/HealthTech/About";
import Benefits from "@/components/HealthTech/Benefits";
import MainBanner from "@/components/HealthTech/MainBanner";
import Navbar from "@/components/HealthTech/Navbar";
import Services from "@/components/HealthTech/Services";
import { faqData } from "@/utils/data";
import React from "react";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

      <Services />

      <Benefits />

      <IndustriesWeServe />

      <Partner />

      <BigdataFunFacts />

      <FaqSection faq={faqData} />

      <Footer />
    </>
  );
}
