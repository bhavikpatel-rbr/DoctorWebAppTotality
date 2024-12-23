import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

import login from './img/login-02.png';
import doctorImage from './img/login-logo.png';
import loginicon01 from './img/icons/login-icon-01.svg';
import loginicon02 from './img/icons/login-icon-02.svg';
import loginicon03 from './img/icons/login-icon-03.svg';
import './../../../assest/commoncss.css'
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
    return (
      <div className="main-wrapper login-body">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-6 login-wrap">
            <div className="login-sec">
              <div className="log-img">
                <img className="img-fluid" src={login} alt="Doctor" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="login-right">
                  <div className="login-right-wrap">
                    {/* <div className="account-logo">
                      <Link to="/"><img src={doctorImage} alt="Logo" /></Link>
                    </div> */}
                    <h2>Reset Password</h2>

                    <form action="https://preclinic.dreamstechnologies.com/html/template/login.html">
                      <div className="input-block">
                        <label htmlFor="email">Email <span className="login-danger">*</span></label>
                        <input id="email" className="form-control" type="text" />
                      </div>
                      <div className="input-block login-btn">
                        <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                      </div>
                    </form>

                    <div className="next-sign">
                      <p className="account-subtitle">Need an account? <Link to="/login">Login</Link></p>

                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
  };
  
  export default ResetPassword;
