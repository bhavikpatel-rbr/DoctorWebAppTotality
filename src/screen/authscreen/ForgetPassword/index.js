import React, { useState } from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';

import HcOffcanvasNav from 'hc-offcanvas-nav';
import { useLocation } from 'react-router-dom';

const ForgetPassword = () => {
    return (
      <div className="bg-light">
        <div className="sign-in p-4">
        <Sidebar/>
          <div className="d-flex align-items-start justify-content-between mb-4">
            <div>
              <span className="mdi mdi-account-lock-outline display-1 text-primary"></span>
              <h2 className="my-3 fw-bold">Forget Password</h2>
              <p className="text-muted mb-0">
                We need your registration email account to send you password reset code!
              </p>
            </div>
            <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5 hc-nav-trigger hc-nav-1" href="#">
          <BiAbacus size={24} className="d-flex" />
        </a>
          </div>
          <form>
            <div className="mb-2">
              <label htmlFor="exampleFormControlEmail" className="form-label mb-1">Email</label>
              <div className="input-group border bg-white rounded-3 py-1" id="exampleFormControlEmail">
                <span className="input-group-text bg-transparent rounded-0 border-0" id="mail">
                  <span className="mdi mdi-email-outline mdi-18px text-muted"></span>
                </span>
                <input
                  type="email"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Type your email or phone"
                  aria-label="Type your email or phone"
                  aria-describedby="mail"
                  value="singh@email.com"
                />
              </div>
            </div>
          </form>
        </div>
  
        <div className="footer fixed-bottom m-4">
        <Link to={"/resetpassword"}  className="btn btn-info btn-lg w-100 rounded-4">Send</Link>
        </div>
  
       
      </div>
    );
  };
  
  export default ForgetPassword;
