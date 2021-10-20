import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Service from "./Services/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
      <h1 className="text-center fs-1 fw-bold">
        Our Special <span className="text-danger">Services</span>{" "}
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Services;
