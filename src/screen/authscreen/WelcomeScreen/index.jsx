import React from "react";
import { Link } from "react-router-dom";
import doctorImage from '../../../../src/assest/logo.jpeg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../../assest/commoncss.css";
const WelcomeScreen = () => {
  return (
    <div className="welcome d-flex align-items-center justify-content-center vh-100">
      <div className="text-center pb-5 mb-5">
        <div className="mb-5">
          <img
            src={doctorImage}
            alt="Logo"
            className="img-fluid blue-logo mb-3"
            style={{borderRadius:"10px"}}
          />
          <h1 className="mb-1"  style={{color:"#02090f"}}>Totality4homoeopathy - The Holistic Concept of Homoeopathy</h1>
          <p className="text-muted">Welcome to Totality4homoeopathy - The Holistic Concept of Homoeopathy</p>
        </div>
        <div className="fixed-bottom ">
          <div className="footer p-3 footer-custom d-flex justify-content-between welcome_btn">
            <Link to={"/signup"} className="btn btn-outline-primary btn-lg w-100 m-2">
              Sign Up
            </Link>
            <Link
              to={"/login"}
              className="btn btn-outline-primary btn-lg w-100 m-2"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
