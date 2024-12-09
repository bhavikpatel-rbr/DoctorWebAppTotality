import React, { useState } from 'react'
import { mdiAccountCircleOutline, mdiEmailOutline, mdiLockOutline } from '@mdi/js';
import { BiAbacus, BiBarChartAlt, BiBellOff } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import HcOffcanvasNav from 'hc-offcanvas-nav';
import { useLocation } from 'react-router-dom';
const Otp = () => {
  const navigate = useNavigate()
  const Location = useLocation();
  
  return (
    <div className="bg-light">
    <div className="verify p-4">
    <Sidebar/>
      <div className="d-flex align-items-start justify-content-between mb-4">
        <div>
          <span className="mdi mdi-account-check-outline display-1 text-primary"></span>
          <h2 className="my-3 fw-bold">Verification Code</h2>
          <p className="text-muted mb-0">Enter The Code We Send You?</p>
        </div>
        <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5 hc-nav-trigger hc-nav-1" href="#">
          <BiAbacus size={24} className="d-flex" />
        </a>
      </div>
      <div className="d-flex gap-1 mb-2">
        {[5, 2, 7, 2, 8].map((num, index) => (
          <div className="col" key={index}>
            <input
              type="text"
              className="form-control form-control-lg text-center py-3"
              value={num}
              maxLength="1"
            />
          </div>
        ))}
      </div>
      <p className="text-muted text-center mt-4">
        Didn't receive it? <a href="#" className="ml-2 text-primary">Resend Code</a>
      </p>
    </div>
    <div className="footer fixed-bottom m-4">
      <a href="congrats.html" className="btn btn-info btn-lg w-100 rounded-4">
        Confirm
      </a>
    </div>
 </div>
  
  )
}

export default Otp
