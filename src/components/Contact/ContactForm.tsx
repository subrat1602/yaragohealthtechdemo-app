"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

import contactImg from "/public/images/contact-img.png";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully sent and we will get back to you soon.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

interface ContactState {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

// Form initial state
const INITIAL_STATE: ContactState = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [contact, setContact] = useState<ContactState>(INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, message } = contact;
      const payload = { name, email, number, subject, message };
      // const response = await axios.post(url, payload);
      // console.log(response.data);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.error("Error submitting the contact form:", error);
    }
  };

  return (
    <>
      <div className="contact-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>Anything on your mind? We’ll be glad to assist you!</p>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Image
                src={contactImg}
                alt="Contact Us"
                width={685}
                height={494}
              />
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <form onSubmit={handleSubmit} className="contact-form-container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Your phone number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="form-control"
                        value={contact.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button type="submit" className="health-tech-green-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
