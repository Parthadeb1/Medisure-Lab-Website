import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] =useState([])

    useEffect(()=>{
        fetch("./doctors.json")
        .then(res=>res.json())
        .then(data => setDoctors(data))
    },[])
   
    return (
        <div className="container mt-5">
        <h1 className="text-center my-5">Meet Our <span className="text-primary">Doctors</span></h1>
         <div className=" row row-cols-1 row-cols-md-3 g-3">
           {doctors.map((doctors) => (
             <div className="col">
               <div className="card h-100">
                <img
                   src={doctors.img}
                   className="card-img-top p-2 w-50"
                   alt="..."
                 />
                
                 <div className="card-body w-50">
                   <h5 className="card-title fs-3">{doctors.name}</h5>
                   <p className="card-text text-danger fw-bolder">{doctors.depertment}</p>
                   
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
    );
};

export default Doctors;