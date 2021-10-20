import React from "react";
import aboutus from "../../images/aboutus.png";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutus = () => {
  const element1 = <FontAwesomeIcon icon={faHandPointRight} />;
  return (
    <div className="mb-5 my-5">
      <div className="row container-fluid">
          <h1 className="text-center">Know <span className="text-danger">About Us</span> </h1>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="w-75">
            <img className="w-100 round-start" src={aboutus} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
        <div className="p-5">
            <h1 className="fs-1 fw-bold text-gray">
              We Provide Best{" "}
              <span className="text-danger">Medical Treatment</span>{" "}
            </h1>

            <p className="fs-4">
              <span className="text-info">{element1}</span> We have proffesional
              Doctors.
            </p>
            <p className="fs-4">
              <span className="text-info">{element1}</span> Hospital Room with
              Proper clean
            </p>
            <p className="fs-4">
              <span className="text-info">{element1}</span> Satisfied Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
