import React, { useState } from "react";
import "./ContactUsBody.css";
import axios from "axios";

const ContactUsBody = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  function handleButtonClick() {
    const postData = {
      Name: name,
      Email: email,
      Mobile: mobile,
      Message: message,
    };

    axios
      .post(
        "https://gravitytech.azurewebsites.net/api/v1/CreateEnquiryDetails",
        postData
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setName("");
    setEmail("");
    setMobile("");
    setMessage("");
  }

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div style={{ marginTop: "30px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15121.667594260922!2d73.764782!3d18.645279!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c359982581%3A0x7981a7c5d2397867!2seSparse%20Matrix%20Solutions%20Pvt%20Ltd%20%7C%20software%20company!5e0!3m2!1sen!2sin!4v1676202548939!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12 text-center">
          <div className="formSection">
            <div
              className="formTitle"
              style={{ paddingLeft: "60px", paddingRight: "60px" }}
            >
              Get In Touch!
            </div>
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label>Your Name*</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label>Mobile*</label>
                <input
                  type="text"
                  vlaue={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                ></input>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label>Your E-mail*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
              <div
                className="col-lg-12 col-md-12 col-sm-12 text-start d-flex flex-column mb-3"
                style={{ paddingLeft: "60px", paddingRight: "60px" }}
              >
                <label className="mb-3">Comments*</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="sendMessageBtn"
            onClick={handleButtonClick}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
