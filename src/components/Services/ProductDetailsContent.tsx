"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { services } from "@/utils/data";
import FaqSection from "../Common/FaqSection";

interface Title {
  title?: string;
  extraDescription?: string;
}

interface Section {
  subtitle?: string;
  description?: string;
  image?: string;
  features?: string[];
  titles?: Title[];
}

interface FAQ {
  question?: string;
  answer?: string;
}

interface Product {
  id: number;
  title: string;
  sections: Section[];
  faq?: FAQ[];
}

interface ProductDetailsProps {
  slug: string;
}

const ProductDetailsContent: React.FC<ProductDetailsProps> = ({ slug }) => {
  const product: Product | undefined = services.find(
    (service) => service.slug === slug
  );

  if (!product) {
    return <p className="text-center py-10 text-lg">Product not found!</p>;
  }

  return (
    <div className="services-details-area">
      {product.sections?.map((section, index) => (
        <div
          key={index}
          className={`w-full ${
            index % 2 === 0 ? "bg-gray-100" : "bg-white"
          } ptb-60`}
        >
          <div className="container">
            <div
              className={`row align-items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className="col-lg-6 services-details"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="services-details-desc">
                  <h3>{section.subtitle}</h3>
                  <p>{section.description}</p>

                  {section.features && section.features.length > 0 && (
                    <ul className="list-disc pl-5">
                      {section.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="product-list"
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="600"
                          data-aos-once="true"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.titles && section.titles.length > 0 && (
                    <div className="mt-4">
                      {section.titles.map((item, i) => (
                        <div
                          key={i}
                          className="mb-4"
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="600"
                          data-aos-once="true"
                        >
                          <h4 className="font-semibold">{item.title}</h4>
                          <p>{item.extraDescription}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div
                className="col-lg-6 services-details-image"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="600"
                data-aos-once="true"
              >
                {section.image && product.title && (
                  <Image
                    src={section.image}
                    alt={product.title}
                    width={800}
                    height={600}
                  />
                )}
              </div>

              {index !== product.sections.length - 1 && (
                <div className="separate"></div>
              )}
            </div>
          </div>
        </div>
      ))}

      {product.faq && product.faq.length > 0 && (
        <FaqSection faq={product.faq} />
      )}
    </div>
  );
};

export default ProductDetailsContent;
