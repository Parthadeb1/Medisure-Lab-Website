import React from 'react';

const Doctor = ({doctor}) => {
    const {name, depertment, img} =doctor
    return (
        <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top w-50 p-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title fs-4">{name}</h5>
            <p className="card-text fs-5 text-danger">{depertment}</p>
          </div>
        </div>
      </div>
    );
};

export default Doctor;