"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

interface FAQ {
  question?: string;
  answer?: string;
}

interface FaqSectionProps {
  faq: FAQ[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faq }) => {
  if (!faq || faq.length === 0) return null;

  return (
    <div
      className="w-full bg-f7fafd ptb-60"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="container">
        <div className="row align-items-center flex justify-center items-center">
          <div className="col-lg-12 services-details">
            <div className="services-details-desc">
              <div className="section-title" data-aos="fade-up">
                <h2>FAQ</h2>
              </div>
              <div className="services-details-accordion">
                <Accordion preExpanded={["faq-0"]}>
                  {faq.map((faqItem, index) => (
                    <AccordionItem
                      key={index}
                      uuid={`faq-${index}`}
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <span>{faqItem.question}</span>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{faqItem.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
