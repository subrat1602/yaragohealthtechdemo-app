import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import GoogleMap from "../../components/Contact/GoogleMap";
import ContactForm from "../../components/Contact/ContactForm";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contact Us" />

      <ContactForm />

      <ContactInfo />

      <GoogleMap />

      <Footer />
    </>
  );
}
