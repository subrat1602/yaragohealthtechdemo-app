import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Subscription from "../../components/Subscription/Plans";
import CTA from "@/components/PCRepair/CTA";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";


export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="SubscriptionPlan" />

      <Subscription />

      <CTA />

      <Footer />
    </>
  );
}
 