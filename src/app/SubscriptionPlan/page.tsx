import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import AboutUsContent1 from "../../components/AboutUs/AboutUsContent1";
import About from "@/components/Fintech/About";
import CTA from "@/components/PCRepair/CTA";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";
import TeamMembers from "@/components/Team/TeamMembers";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <AboutUsContent1 />

      <About />

      <TeamMembers />

      <CTA />

      <Footer />
    </>
  );
}
