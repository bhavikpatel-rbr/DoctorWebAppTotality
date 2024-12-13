import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import doctorImage2 from '../../../assest/img/landing/2.png';
import doctorImage1 from '../../../assest/img/landing/1.png';
import doctorImage3 from '../../../assest/img/landing/3.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../../assest/commoncss.css'
const OnBordingScreen = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="landing text-center"
        
        >
            <Slider {...settings} className="landing-slider  ">
                <div className="landing-slider-item">
                    <div className="card bg-transparent border-0 pt-5 mt-5">
                        <img src={doctorImage1}alt="" className="rounded-0 card-img-top landing-img" />
                        <div className="card-body p-4">
                            <h3 className="card-title mb-2 lh-base">
                                Schedule <span className="fw-bold text-primary">appointments</span> with expert Homoeopathy doctors!
                            </h3>
                            <p className="card-text text-muted">
                                Easily book appointments with top homoeopathy doctors who can help you with a range of health issues.<br />
                                 Our experts are ready to provide personalized treatment plans.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="landing-slider-item">
                    <div className="card bg-transparent border-0 pt-5 mt-5">
                        <img src={doctorImage2} alt="" className="rounded-0 card-img-top landing-img" />
                        <div className="card-body p-4">
                            <h3 className="card-title mb-2 lh-base">
                                Find the best <span className="fw-bold text-info">Doctors</span> in your vicinity
                            </h3>
                            <p className="card-text text-muted">
                                Discover highly qualified and experienced doctors near you.<br /> Get the best medical advice and treatment without the hassle of long wait times.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="landing-slider-item">
                    <div className="card bg-transparent border-0 pt-5 mt-5">
                        <img src={doctorImage3} alt="" className="rounded-0 card-img-top landing-img" />
                        <div className="card-body p-4">
                            <h3 className="card-title mb-2 lh-base">
                                Book <span className="fw-bold">face-to-face</span> Appointment!
                            </h3>
                            <p className="card-text text-muted">
                                Schedule in-person consultations with ease. <br />Our platform allows you to book face-to-face appointments with trusted homoeopathy professionals at your convenience.
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="footer fixed-bottom p-3 footer-custom">
                <Link to={"/welcomescreen"}className="btn splash-btn btn-lg w-100">
                    NEXT
                </Link>
            </div>
        </div>
    );
};

export default OnBordingScreen;
