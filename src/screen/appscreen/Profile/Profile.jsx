import React, { useEffect } from 'react';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { userDetailsAction } from '../../../reduxtool/app/middleware';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';

const ProfilePage = () => {
  const dispatch = useDispatch()
  const profile = useSelector(appSelector)
  useEffect(() => {
    if (!profile) {
      dispatch(userDetailsAction({ user_id: 18 }))
    }
  }, [])

  console.log(profile.adminProfile);

  return (
    <div >
      <div className="row">
        <div className="col-sm-7 col-6">
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
            <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
            <li className="breadcrumb-item active">My Profile</li>
          </ul>
        </div>
        <div className="col-sm-5 col-6 text-end mb-3">
          <a href="edit-profile.html" className="btn btn-primary btn-rounded">
            <i className="fa fa-plus"></i> Edit Profile
          </a>
        </div>
      </div>
      <div className="card-box profile-header">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-view">
              <div className="profile-img-wrap">
                <div className="profile-img">
                  <a href="#">
                    <img className="avatar" src="assets/img/doctor-03.jpg" alt="Profile" />
                  </a>
                </div>
              </div>
              <div
                style={{ marginLeft: 170 }}
                className="profile-basic">
                <div className="row">
                  <div className="col-md-5">
                    <div className="profile-info-left">
                      <h3 className="user-name mt-0 mb-0">Tushar Joshi</h3>
                      <small className="text-muted">Gynecologist</small>
                      <div className="staff-id">Employee ID : DR-0001</div>
                      <div className="staff-msg">
                        <a href="chat.html" className="btn btn-primary">Send Message</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <ul className="personal-info">
                      <li>
                        <span className="title">Phone:</span>
                        <span className="text"><a href="tel:770-889-6484">770-889-6484</a></span>
                      </li>
                      <li>
                        <span className="title">Email:</span>
                        <span className="text">
                          <a href="mailto:[email protected]"><span className="__cf_email__">[email protected]</span></a>
                        </span>
                      </li>
                      <li>
                        <span className="title">Birthday:</span>
                        <span className="text">3rd March</span>
                      </li>
                      <li>
                        <span className="title">Address:</span>
                        <span className="text">714 Burwell Heights Road, Bridge City, TX, 77611</span>
                      </li>
                      <li>
                        <span className="title">Gender:</span>
                        <span className="text">Female</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-tabs mt-3">
        <ul className="nav nav-tabs nav-tabs-bottom">
          <li className="nav-item"><a className="nav-link active" href="#about-cont" data-bs-toggle="tab">About</a></li>

        </ul>
        <div className="tab-content">
          <div className="tab-pane show active" id="about-cont">
            <div className="row">
              <div className="col-md-12">
                <div className="card-box">
                  <h3 className="card-title">Education Informations</h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      <li>
                        <div className="experience-user">
                          <div className="before-circle"></div>
                        </div>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <a href="#/" className="name">International College of Medical Science (UG)</a>
                            <div>MBBS</div>
                            <span className="time">2001 - 2003</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-user">
                          <div className="before-circle"></div>
                        </div>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <a href="#/" className="name">International College of Medical Science (PG)</a>
                            <div>MD - Obstetrics & Gynaecology</div>
                            <span className="time">1997 - 2001</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-box">
                  <h3 className="card-title">Experience</h3>
                  <div className="experience-box">
                    <ul className="experience-list">
                      <li>
                        <div className="experience-user">
                          <div className="before-circle"></div>
                        </div>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <a href="#/" className="name">Consultant Gynecologist</a>
                            <span className="time">Jan 2014 - Present (4 years 8 months)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-user">
                          <div className="before-circle"></div>
                        </div>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <a href="#/" className="name">Consultant Gynecologist</a>
                            <span className="time">Jan 2009 - Present (6 years 1 month)</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="experience-user">
                          <div className="before-circle"></div>
                        </div>
                        <div className="experience-content">
                          <div className="timeline-content">
                            <a href="#/" className="name">Consultant Gynecologist</a>
                            <span className="time">Jan 2004 - Present (5 years 2 months)</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="bottom-tab2">
            Tab content 2
          </div>
          <div className="tab-pane" id="bottom-tab3">
            Tab content 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
