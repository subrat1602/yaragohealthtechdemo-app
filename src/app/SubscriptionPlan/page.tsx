import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import SubscriptionPlan from "../../components/Subscription/SubscriptionPlan";
import About from "@/components/Fintech/About";
import CTA from "@/components/PCRepair/CTA";
import Footer from "@/components/Fintech/Footer";
import Navbar from "@/components/HealthTech/Navbar";
import TeamMembers from "@/components/Team/TeamMembers";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="SubscriptionPlan" />

      <SubscriptionPlan />

      <About />

      <TeamMembers />

      <CTA />

      <Footer />
    </>
  );
}
 