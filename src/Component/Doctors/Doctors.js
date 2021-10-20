import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] =useState([])

    useEffect(()=>{
        fetch("./doctors.json")
        .then(res=>res.json())
        .then(data => setDoctors(data))
    },[])
   
    return (
      <div>
        <div className="container mt-5">
      <h1 className="text-center fs-1 fw-bold">
        Meet Our <span className="text-danger">Doctors</span>{" "}
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {doctors.map((doctor) => (
          <Doctor 
          key={doctor.id} 
          doctor={doctor}>

          </Doctor>
        ))}
      </div>
    </div>
      </div>
    );
};

export default Doctors;