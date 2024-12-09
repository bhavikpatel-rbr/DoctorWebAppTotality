import React from 'react';
import { ChevronRight } from 'react-feather';
import profile from '../../../assest/img/profile-bg.jpg'
import user from "../../../assest/img/user1.jpg";
const PatientProfile = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="patients.html">Patients</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Patient Profile</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="about-info">
                    <h4>Patient Profile</h4>
                  </div>
                  <div className="doctor-profile-head">
                    <div className="profile-bg-img">
                    <img src={profile} alt="Profile" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-xl-4 col-md-4">
                        <div className="profile-user-box">
                          <div className="profile-user-img">
                          <img src={user} alt="Profile" />
                            <div className="input-block doctor-up-files profile-edit-icon mb-0">
                              <div className="upload d-flex">
                                <label className="file-upload profile-upbtn mb-0">
                                  {/* <img src="assets/img/icons/camera-icon.svg" alt="Profile" /> */}
                                  <input type="file" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="names-profiles">
                            <h4>Bhvaik Rupapara</h4>
                            <h5>Engineer</h5>
                          </div>
                        </div>
                      </div>
                     
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="heading-detail">
                    <h4 className="mb-3">About me</h4>
                    <p>Hello I am Bhvaik Rupapara a Gynaecologist in Sanjivni Hospital Surat. I love to work with all my hospital staff and senior doctors.</p>
                  </div>
                  <div className="about-me-list">
                    <ul className="list-space">
                      <li>
                        <h4>Gender</h4>
                        <span>Male</span>
                      </li>
                      <li>
                        <h4>Age</h4>
                        <span>30</span>
                      </li>
                      <li>
                        <h4>Height</h4>
                        <span>5'9"</span>
                      </li>
                      <li>
                        <h4>Weight</h4>
                        <span>75 kg</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="col-lg-4">
           
            <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="heading-detail">
                    <h4>Skills:</h4>
                  </div>
                  <div className="skill-blk">
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Heart Beat</h5>
                        <p>45%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-operations" role="progressbar" style={{ width: '45%' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Haemoglobin</h5>
                        <p>85%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-haemoglobin" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Blood Pressure</h5>
                        <p>65%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-statistics" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                    <div className="skill-statistics">
                      <div className="skills-head">
                        <h5>Sugar</h5>
                        <p>90%</p>
                      </div>
                      <div className="progress mb-0">
                        <div className="progress-bar bg-visit" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="doctor-personals-grp">
              <div className="card">
                <div className="card-body">
                  <div className="heading-detail">
                    <h4 className="mb-3">Contact Information</h4>
                   
                  </div>
                  <div className="about-me-list mt-4">
                    <ul className="list-space">
                      <li>
                        <h4>Phone</h4>
                        <span>(123) 456-7890</span>
                      </li>
                      <li>
                        <h4>Email</h4>
                        <span>bhvaik@example.com</span>
                      </li>
                      <li>
                        <h4>Address</h4>
                        <span>123 Main St, Surat, India</span>
                      </li>
                      <li>
                        <h4>Biography </h4>
                        <span>Lorem Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet...</span>
                      </li>
                    </ul>
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

export default PatientProfile;
