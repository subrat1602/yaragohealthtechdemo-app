import React from "react";
import "animate.css";
import "../../styles/bootstrap.min.css";
import "../../styles/boxicons.min.css";
import "../../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../styles/style.css";
// Global Responsive Style
import "../../styles/responsive.css";

// Multicolor if you want this just one color comment out
// import '../../styles/colors/brink-pink-style.css'
// import '../../styles/colors/pink-style.css'
// import '../../styles/colors/purple-style.css'

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import AosAnimation from "@/components/Layout/AosAnimation";
import GoTop from "@/components/Layout/GoTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YARAGO Healthtech(Testing web)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
