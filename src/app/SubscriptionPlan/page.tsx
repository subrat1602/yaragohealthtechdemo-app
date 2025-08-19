import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import SubscriptionPlan from "../../components/Subscription/SubscriptionPlan";

import CTA from "@/components/PCRepair/CTA";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";


export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="SubscriptionPlan" />

      <SubscriptionPlan />

      <CTA />

      <Footer />
    </>
  );
}
 