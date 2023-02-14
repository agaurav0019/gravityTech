import React from "react";
import "./WebBody.css";

const WebBody = () => {
  return (
    <>
      <div className="container homeBody">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12  mb-3">
            <h1 className="bodyTitle">
              Take complex applications simple for users
            </h1>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 text-center mb-3">
            <img src="./assets/img3.png" className="img-fluid"></img>
          </div>
        </div>
        <div className="webheading">Website Developement</div>
        <div className="websubheading">
          WE BUILD PERFECT AND CREATIVE WEBSITES
        </div>
        <div className="webbox">
          <div className="uppertext">
            Website advancement is a specialty of scratching the association job
            and limit suitably to the world to lift the organization picture and
            acquire significant clients. We are master in structuring and
            creating sites that are dynamic and financially savvy.
          </div>
          <div className="lowertext">
            We create custom, responsive sites with Top-indent grouping of
            innovations and our group is knowledgeable to create web as per
            different industry/verticals and convey an impressive item. We
            furnish inventive arrangements and imagine items with remarkable
            methodology.
          </div>
        </div>
        <div className="techheading">TECHNOLOGIES WE WORK</div>
        <div className="techsubheading">
          WE BUILD CUSTOM WEB APPLICATION THAT ARE STUNNING
        </div>
        <div className="row text-center">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-2 col-md-2 col-sm-12 text-center">
            <img
              src="./assets/image15.png"
              className="img-fluid"
              style={{ maxHeight: "109px" }}
            ></img>
            <div
              className="iconCard d-flex align-items-center justify-content-center"
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Java Development
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 text-center mt-3 mb-3">
            <img
              src="./assets/image16.png"
              className="img-fluid"
              style={{ maxHeight: "78px" }}
            ></img>
            <div
              className="iconCard d-flex align-items-center justify-content-center mt-3"
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Python Development
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 text-center mt-3 mb-3">
            <img
              src="./assets/image17.png"
              className="img-fluid"
              style={{ maxHeight: "78px" }}
            ></img>
            <div
              className="iconCard d-flex align-items-center justify-content-center mt-3"
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              PHP Development
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 text-center mt-3 mb-3">
            <img
              src="./assets/image18.png"
              className="img-fluid"
              style={{ maxHeight: "78px" }}
            ></img>
            <div
              className="iconCard d-flex align-items-center justify-content-center mt-3"
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              .Net Development
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 text-center mt-3 mb-3">
            <img
              src="./assets/image19.png"
              className="img-fluid"
              style={{ maxHeight: "78px" }}
            ></img>
            <div
              className="iconCard d-flex align-items-center justify-content-center mt-3"
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Ruby Development
            </div>
          </div>
          <div className="col-lg-1 col-md-1"></div>
        </div>
      </div>
    </>
  );
};

export default WebBody;
