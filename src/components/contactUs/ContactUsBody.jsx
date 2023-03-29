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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.9193721671727!2d73.819407!3d18.487311000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzE0LjMiTiA3M8KwNDknMDkuOSJF!5e0!3m2!1sen!2sin!4v1679849039557!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
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
