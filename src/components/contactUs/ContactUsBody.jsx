import React from 'react'
import "./ContactUsBody.css"

const ContactUsBody = () => {
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
                  <input type="text"></input>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                  style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                  <label>Mobile*</label>
                  <input type="number"></input>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                  style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                  <label>Your E-mail*</label>
                  <input type="email"></input>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-12 text-start d-flex flex-column mb-3"
                  style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                  <label>Subject*</label>
                  <input type="text"></input>
                </div>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 text-start d-flex flex-column mb-3"
                  style={{ paddingLeft: "60px", paddingRight: "60px" }}
                >
                  <label className="mb-3">Comments*</label>
                  <textarea type="text"></textarea>
                </div>
              </div>
            </div>
            <button type="submit" className="sendMessageBtn" >Send Message</button>
          </div>
        </div>
      </div>
  )
}

export default ContactUsBody
