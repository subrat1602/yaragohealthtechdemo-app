import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyle5 from "../../components/Services/ServicesStyle5";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Products" />

      <ServicesStyle5 />

      <Footer />
    </>
  );
}; 
