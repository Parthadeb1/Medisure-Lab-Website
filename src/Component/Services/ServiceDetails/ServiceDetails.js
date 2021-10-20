import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const { serviceId } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const singleValue = services.find((service) => service.id == serviceId);
//   console.log(singleValue);
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Service <span className="text-danger">Details</span> </h2>
      <div className="card h-100 w-75">
        <img src={singleValue?.img} className="card-img-top w-25 p-3" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{singleValue?.name}</h2>
          <p className="card-text">{singleValue?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
