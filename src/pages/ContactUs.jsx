import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import ContactUsBody from "../components/contactUs/ContactUsBody";

const ContactUs = () => {
  return (
    <>
      <Navbar></Navbar>
      <ContactUsBody></ContactUsBody>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
