import React from 'react';
import aboutus from "../../images/aboutus.png"
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer';

const Aboutus = () => {
    const  element1 = <FontAwesomeIcon icon={faHandPointRight} />;
    return (
            <div>
                <div className="container-fluid mt-5">
            <h1 className="text-danger fw-bold text-center">About Us</h1>
            <div className="container d-flex justify-content-center align-items-center mt-3 mb-5">
                <div className="p-5">
                    <h1 className="fs-1 fw-bold text-gray">We Provide Best <span className="text-danger">Medical Treatment</span> </h1>
            
                    <p className="fs-4"><span className="text-info">{element1}</span> We have proffesional Doctors.</p>
                    <p className="fs-4"><span className="text-info">{element1}</span> Hospital Room with Proper clean</p>
                    <p className="fs-4"><span className="text-info">{element1}</span> Satisfied Customer</p>
                </div>
                <div>
                    <img className="w-100 round-start" src={aboutus} alt="" />
                </div>
            </div>
            
            </div>
            <Footer/>
           
            </div>
            
    );
    
};

export default Aboutus;