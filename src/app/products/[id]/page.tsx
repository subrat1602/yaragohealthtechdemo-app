"use client";
import React from "react";
import { usePathname } from "next/navigation";
import PageBanner from "../../../components/Common/PageBanner";
import Navbar from "@/components/HealthTech/Navbar";
import Footer from "@/components/Fintech/Footer";
import { services } from "@/utils/data";
import ProductDetailsContent from "../../../components/Services/ProductDetailsContent";

export default function Page() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];

  const product = services.find((service) => service.slug === slug);

  if (!product) {
    return <p className="text-center py-10 text-lg">Product not found!</p>;
  }

  return (
    <>
      <Navbar />
      <PageBanner pageTitle={product.title} />
      <ProductDetailsContent slug={slug} />
      <Footer />
    </>
  );
}
