import React from "react";
import {
  faEnvelopeOpenText,
  faPhoneSquareAlt,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const element1 = <FontAwesomeIcon icon={faStreetView} />;
  const element2 = <FontAwesomeIcon icon={faEnvelopeOpenText} />;
  const element3 = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
  return (
    <div className="container-fluid mt-4 bg-dark text-light">
      <div className="d-flex justify-content-between">
        <div className="item-center p-4">
          <div>
            <h1 className="fs-3 fw-bold">
              Medi<span className="text-danger">Health</span>{" "}
            </h1>
            <div className="w-50 text-auto">
              <p>
                Best Choice for Medical Health Care. We Serve the patient by our
                best Doctors who are best at their Depertment
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h1>Contact</h1>
          <p>{element1} 350 Avenue, Dhanmondi, Dhaka 1206</p>
          <p>{element2} medi.health88@gamil.com </p>
          <p>{element3} +8801923733234 </p>
        </div>
      </div>

      <div className=" d-flex justify-content-center align-item-center">
        <h5>®™ Copyright reserve to Medi<span className="text-danger">Health</span> </h5>
      </div>
    </div>
  );
};

export default Footer;
