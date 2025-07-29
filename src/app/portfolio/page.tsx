import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";
import FeedbackStyleTwo from "@/components/Common/FeedbackStyleTwo";
import Portfolio from "@/components/Features/SingleFeatures/Portfolio";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Portfolio" />

      <Portfolio />

      <FeedbackStyleTwo />

      <Footer />
    </>
  );
}
