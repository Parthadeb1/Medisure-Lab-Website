import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, desc, img, id } = service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top w-50 p-2" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-4">{name}</h5>
          <p className="card-text">{desc}</p>
        </div>
        <div className="p-2">
          <Link to={`/servicesDetails/${id}`}>
            <button className="btn btn-warning pb-2">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
