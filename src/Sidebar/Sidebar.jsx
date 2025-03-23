import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logout from "../img/icons/logout.svg";
import menuicon01 from "../img/icons/menu-icon-01.svg";
import menuicon02 from "../img/icons/menu-icon-02.svg";
import menuicon03 from "../img/icons/menu-icon-03.svg";
import menuicon04 from "../img/icons/menu-icon-04.svg";
import menuicon05 from "../img/icons/menu-icon-05.svg";
import menuicon06 from "../img/icons/menu-icon-06.svg";
import menuicon08 from "../img/icons/menu-icon-08.svg";
import menuicon13 from "../img/icons/menu-icon-13.svg";
import menuicon10 from "../img/icons/menu-icon-10.svg";
import menuicon09 from "../img/icons/menu-icon-09.svg";
import menuicon11 from "../img/icons/menu-icon-11.svg";
import { logoutAction } from '../reduxtool/auth/middleware';
import { useDispatch } from 'react-redux';
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const dispatch = useDispatch()

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div
      className="sidebar"
      id="sidebar"
      onMouseLeave={expandMenu}
      onMouseOver={expandMenuOpen}
    >
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            {/* <li className="menu-title">Main</li> */}
            <li className={`submenu ${openSubMenu === 'dashboard' ? 'active' : ''}`}>
              <Link onClick={() => toggleSubMenu('dashboard')}>
                <span className="menu-side">
                  <img src={menuicon01} alt="Dashboard" />
                </span>
                <span> Dashboard </span> <span className="menu-arrow"></span>
              </Link>
              <ul className={`${openSubMenu === 'dashboard' ? 'd-block' : 'd-none'}`}>
                <li>
                  <Link
                    to="/"
                    className={activeLink === "/" ? "active" : ""}
                    onClick={() => handleLinkClick("/")}
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctordashboard"
                    className={activeLink === "/doctordashboard" ? "active" : ""}
                    onClick={() => handleLinkClick("/doctordashboard")}
                  >
                    Doctor Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/patientdashboard"
                    className={activeLink === "/patientdashboard" ? "active" : ""}
                    onClick={() => handleLinkClick("/patientdashboard")}
                  >
                    Patient Dashboard
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`submenu ${openSubMenu === 'doctors' ? 'active' : ''}`}>
              <Link to="/doctors"
                  className={activeLink === "/doctors" ? "active" : ""}
                  onClick={() => handleLinkClick("/doctors")}>
                <span className="menu-side">
                  <img src={menuicon02} alt="Doctors" />
                </span>
                <span> Doctors </span>
                <span className="menu-arrow"></span>
              </Link>
              {/* <ul className={`${openSubMenu === 'doctors' ? 'd-block' : 'd-none'}`}> */}
                {/* <li><Link
                  to="/doctors"
                  className={activeLink === "/doctors" ? "active" : ""}
                  onClick={() => handleLinkClick("/doctors")}
                >Doctor List</Link></li> */}
                {/* <li><Link
                  to="/adddoctor"
                  className={activeLink === "/adddoctor" ? "active" : ""}
                  onClick={() => handleLinkClick("/adddoctor")}
                >Add Doctor</Link></li> */}
                {/* <li><Link
                  to="/editdoctor"
                  className={activeLink === "/editdoctor" ? "active" : ""}
                  onClick={() => handleLinkClick("/editdoctor")}
                >Edit Doctor</Link></li> */}
                {/* <li><Link
                  to="/doctorprofile"
                  className={activeLink === "/doctorprofile" ? "active" : ""}
                  onClick={() => handleLinkClick("/doctorprofile")}
                >Doctor Profile</Link></li> */}
              {/* </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'patients' ? 'active' : ''}`}>
              <Link to="/patients"  onClick={() => handleLinkClick("/patients")}>
                <span className="menu-side">
                  <img src={menuicon03} alt="Patients" />
                </span>
                <span> Patients </span>
                <span className="menu-arrow"></span>
              </Link>
              {/* <ul className={`${openSubMenu === 'patients' ? 'd-block' : 'd-none'}`}> */}
                {/* <li><Link
                  to="/patients"
                  className={activeLink === "/patients" ? "active" : ""}
                  onClick={() => handleLinkClick("/patients")}
                >Patients List</Link></li>
                <li><Link
                  to="/addpatient"
                  className={activeLink === "/addpatient" ? "active" : ""}
                  onClick={() => handleLinkClick("/addpatient")}
                >Add Patients</Link></li>
                <li><Link
                  to="/editpatient"
                  className={activeLink === "/editpatient" ? "active" : ""}
                  onClick={() => handleLinkClick("/editpatient")}
                >Edit Patients</Link></li> */}
                {/* <li><Link
                  to="/patientprofile"
                  className={activeLink === "/patientprofile" ? "active" : ""}
                  onClick={() => handleLinkClick("/patientprofile")}
                >Patients Profile</Link></li> */}
              {/* </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'staff' ? 'active' : ''}`}>
            <Link to="/stafflist"  onClick={() => handleLinkClick("/stafflist")}>
                <span className="menu-side">
                  <img src={menuicon03} alt="stafflist" />
                </span>
                <span> Staff </span>
                <span className="menu-arrow"></span>
              </Link>
              {/* <Link to="#" onClick={() => toggleSubMenu('staff')}>
                <span className="menu-side">
                  <img src={menuicon08} alt="Staff" />
                </span>
                <span> Staff </span>
                <span className="menu-arrow"></span>
              </Link> */}
              {/* <ul className={`${openSubMenu === 'staff' ? 'd-block' : 'd-none'}`}>
                <li><Link
                  to="/stafflist"
                  className={activeLink === "/stafflist" ? "active" : ""}
                  onClick={() => handleLinkClick("/stafflist")}
                >Staff List</Link></li>
                <li><Link
                  to="/addstaff"
                  className={activeLink === "/addstaff" ? "active" : ""}
                  onClick={() => handleLinkClick("/addstaff")}
                >Add Staff</Link></li>
                <li><Link
                  to="/editstaff"
                  className={activeLink === "/editstaff" ? "active" : ""}
                  onClick={() => handleLinkClick("/editstaff")}
                >Edit Staff</Link></li>
                <li><Link
                  to="/staffprofile"
                  className={activeLink === "/staffprofile" ? "active" : ""}
                  onClick={() => handleLinkClick("/staffprofile")}
                >Staff Profile</Link></li>
                <li><Link
                  to="/addleave"
                  className={activeLink === "/addleave" ? "active" : ""}
                  onClick={() => handleLinkClick("/addleave")}
                >Add Leaves</Link></li>
                <li><Link
                  to="/editleave"
                  className={activeLink === "/editleave" ? "active" : ""}
                  onClick={() => handleLinkClick("/editleave")}
                >Edit Leaves</Link></li>
                <li><Link
                  to="/leaverequest"
                  className={activeLink === "/leaverequest" ? "active" : ""}
                  onClick={() => handleLinkClick("/leaverequest")}
                >Leaves</Link></li>
                
                <li><Link
                  to="/attendancesheet"
                  className={activeLink === "/attendancesheet" ? "active" : ""}
                  onClick={() => handleLinkClick("/attendancesheet")}
                >Attendance</Link></li>
              </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'leaverequest' ? 'active' : ''}`}>
            <Link to="/leaverequest"  onClick={() => handleLinkClick("/leaverequest")}>
                <span className="menu-side">
                  <img src={menuicon03} alt="stafflist" />
                </span>
                <span> Leave </span>
                <span className="menu-arrow"></span>
              </Link>
              {/* <Link to="#" onClick={() => toggleSubMenu('leaverequest')}>
                <span className="menu-side">
                  <img src={menuicon08} alt="Staff" />
                </span>
                <span> Leave </span>
                <span className="menu-arrow"></span>
              </Link> */}
              {/* <ul className={`${openSubMenu === 'leaverequest' ? 'd-block' : 'd-none'}`}>
              
                
                <li><Link
                  to="/addleave"
                  className={activeLink === "/addleave" ? "active" : ""}
                  onClick={() => handleLinkClick("/addleave")}
                >Add Leaves</Link></li>
                <li><Link
                  to="/editleave"
                  className={activeLink === "/editleave" ? "active" : ""}
                  onClick={() => handleLinkClick("/editleave")}
                >Edit Leaves</Link></li>
                <li><Link
                  to="/leaverequest"
                  className={activeLink === "/leaverequest" ? "active" : ""}
                  onClick={() => handleLinkClick("/leaverequest")}
                >Leaves</Link></li>
                
                <li><Link
                  to="/attendancesheet"
                  className={activeLink === "/attendancesheet" ? "active" : ""}
                  onClick={() => handleLinkClick("/attendancesheet")}
                >Attendance</Link></li>
              </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'appointments' ? 'active' : ''}`}>
              <Link to="/appointmentlist" onClick={() => handleLinkClick("/appointmentlist")}>
                <span className="menu-side">
                  <img src={menuicon04} alt="Appointments" />
                </span>
                <span> Appointments </span> <span className="menu-arrow"></span>
              </Link>
              {/* <ul className={`${openSubMenu === 'appointments' ? 'd-block' : 'd-none'}`}> */}
                {/* <li><Link
                  to="/appointmentlist"
                  className={activeLink === "/appointmentlist" ? "active" : ""}
                  onClick={() => handleLinkClick("/appointmentlist")}
                >Appointment List</Link></li> */}
                {/* <li><Link
                  to="/bookappointment"
                  className={activeLink === "/bookappointment" ? "active" : ""}
                  onClick={() => handleLinkClick("/bookappointment")}
                >Book Appointment</Link></li>
                <li><Link
                  to="/editappointment"
                  className={activeLink === "/editappointment" ? "active" : ""}
                  onClick={() => handleLinkClick("/editappointment")}
                >Edit Appointment</Link></li> */}
              {/* </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'doctorSchedule' ? 'active' : ''}`}>
              <Link to="/schedulelist" onClick={() => handleLinkClick("/schedulelist")}>
                <span className="menu-side">
                  <img src={menuicon05} alt="Doctor Schedule" />
                </span>
                <span> Doctor Schedule </span> <span className="menu-arrow"></span>
              </Link>
              {/* <ul className={`${openSubMenu === 'doctorSchedule' ? 'd-block' : 'd-none'}`}>
                <li><Link
                  to="/schedulelist"
                  className={activeLink === "/schedulelist" ? "active" : ""}
                  onClick={() => handleLinkClick("/schedulelist")}
                >Schedule List</Link></li>
                <li><Link
                  to="/addschedule"
                  className={activeLink === "/addschedule" ? "active" : ""}
                  onClick={() => handleLinkClick("/addschedule")}
                >Add Schedule</Link></li>
                <li><Link
                  to="/editschedule"
                  className={activeLink === "/editschedule" ? "active" : ""}
                  onClick={() => handleLinkClick("/editschedule")}
                >Edit Schedule</Link></li>
              </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'cashRecord' ? 'active' : ''}`}>
              <Link to="/chiefcompaint">
                <span className="menu-side">
                  <img src={menuicon06} alt="Cash Record" />
                </span>
                <span> Case Record </span> <span className="menu-arrow"></span>
              </Link>
              
            </li>
           
            <li className={`submenu ${openSubMenu === 'departments' ? 'active' : ''}`}>
              <Link to="/departments" onClick={() => handleLinkClick("/departments")}>
                <span className="menu-side">
                  <img src={menuicon06} alt="Departments" />
                </span>
                <span> Departments </span> <span className="menu-arrow"></span>
              </Link>
              {/* <ul className={`${openSubMenu === 'departments' ? 'd-block' : 'd-none'}`}>
                <li><Link
                  to="/departments"
                  className={activeLink === "/departments" ? "active" : ""}
                  onClick={() => handleLinkClick("/departments")}
                >Department List</Link></li>
                <li><Link
                  to="/adddepartment"
                  className={activeLink === "/adddepartment" ? "active" : ""}
                  onClick={() => handleLinkClick("/adddepartment")}
                >Add Department</Link></li>
                <li><Link
                  to="/editdepartment"
                  className={activeLink === "/editdepartment" ? "active" : ""}
                  onClick={() => handleLinkClick("/editdepartment")}
                >Edit Department</Link></li>
              </ul> */}
            </li>
           
            <li className={`submenu ${openSubMenu === 'blog' ? 'active' : ''}`}>
              <Link to="/blog" onClick={() => handleLinkClick("/blog")}>
                <span className="menu-side">
                  <img src={menuicon13} alt="blog" />
                </span>
                <span> Blog </span> <span className="menu-arrow"></span>
              </Link>
              {/* <ul className={`${openSubMenu === 'blog' ? 'd-block' : 'd-none'}`}>
                <li><Link
                  to="/blog"
                  className={activeLink === "/blog" ? "active" : ""}
                  onClick={() => handleLinkClick("/blog")}
                >Blog</Link></li>
                <li><Link
                  to="/blogdetails"
                  className={activeLink === "/blogdetails" ? "active" : ""}
                  onClick={() => handleLinkClick("/blogdetails")}
                >Blog View</Link></li>
                <li><Link
                  to="/addblogpage"
                  className={activeLink === "/addblogpage" ? "active" : ""}
                  onClick={() => handleLinkClick("/addblogpage")}
                >Add Blog</Link></li>
                <li><Link
                  to="/editblogpage"
                  className={activeLink === "/editblogpage" ? "active" : ""}
                  onClick={() => handleLinkClick("/editblogpage")}
                >Edit Blog</Link></li>
              </ul> */}
            </li>
            {/* <li className={`submenu ${openSubMenu === 'blog' ? 'active' : ''}`}>
              <Link to="/blog" onClick={() => handleLinkClick("/blog")}>
                <span className="menu-side">
                  <img src={menuicon13} alt="blog" />
                </span>
                <span> Blog </span> <span className="menu-arrow"></span>
              </Link> */}
            <li className={`submenu ${openSubMenu === 'store' ? 'active' : ''}`}>
              <Link to="/store" onClick={() =>handleLinkClick("/store")}>
                <span className="menu-side">
                  <img src={menuicon09} alt="store" />
                </span>
                <span>Medical Store </span> <span className="menu-arrow"></span>
              </Link>
              
              {/* <ul className={`${openSubMenu === 'store' ? 'd-block' : 'd-none'}`}> */}
                {/* <li><Link
                  to="/store"
                  className={activeLink === "/store" ? "active" : ""}
                  onClick={() => handleLinkClick("/store")}
                >Store</Link></li> */}
                {/* <li><Link
                  to="/storedetails"
                  className={activeLink === "/storedetails" ? "active" : ""}
                  onClick={() => handleLinkClick("/storedetails")}
                >Store View</Link></li> */}
                {/* <li><Link
                  to="/addmedicalstorepage"
                  className={activeLink === "/addmedicalstorepage" ? "active" : ""}
                  onClick={() => handleLinkClick("/addmedicalstorepage")}
                >Add Store</Link></li> */}
                {/* <li><Link
                  to="/editstoredetails"
                  className={activeLink === "/editstoredetails" ? "active" : ""}
                  onClick={() => handleLinkClick("/editstoredetails")}
                >Edit Store</Link></li> */}
              {/* </ul> */}
            </li>
            <li className={`submenu ${openSubMenu === 'store' ? 'active' : ''}`}>
              <Link to="/articlelist" onClick={() =>handleLinkClick("/articlelist")}>
                <span className="menu-side">
                  <img src={menuicon09} alt="store" />
                </span>
                <span>Article </span> <span className="menu-arrow"></span>
              </Link>
              
              {/* <ul className={`${openSubMenu === 'store' ? 'd-block' : 'd-none'}`}> */}
                {/* <li><Link
                  to="/store"
                  className={activeLink === "/store" ? "active" : ""}
                  onClick={() => handleLinkClick("/store")}
                >Store</Link></li> */}
                {/* <li><Link
                  to="/storedetails"
                  className={activeLink === "/storedetails" ? "active" : ""}
                  onClick={() => handleLinkClick("/storedetails")}
                >Store View</Link></li> */}
                {/* <li><Link
                  to="/addmedicalstorepage"
                  className={activeLink === "/addmedicalstorepage" ? "active" : ""}
                  onClick={() => handleLinkClick("/addmedicalstorepage")}
                >Add Store</Link></li> */}
                {/* <li><Link
                  to="/editstoredetails"
                  className={activeLink === "/editstoredetails" ? "active" : ""}
                  onClick={() => handleLinkClick("/editstoredetails")}
                >Edit Store</Link></li> */}
              {/* </ul> */}
            </li>
            {/* <li className={`submenu ${openSubMenu === 'call' ? 'active' : ''}`}>
              <Link to="#" onClick={() => toggleSubMenu('call')}>
                <span className="menu-side">
                  <img src={menuicon11} alt="call" />
                </span>
                <span>Calls </span> <span className="menu-arrow"></span>
              </Link>
              <ul className={`${openSubMenu === 'call' ? 'd-block' : 'd-none'}`}>
                <li><Link
                  to="/voicecall"
                  className={activeLink === "/voicecall" ? "active" : ""}
                  onClick={() => handleLinkClick("/voicecall")}
                >Voice Call</Link></li>
                <li><Link
                  to="/videocall"
                  className={activeLink === "/videocall" ? "active" : ""}
                  onClick={() => handleLinkClick("/videocall")}
                >Video Call</Link></li>

              </ul>
            </li> */}

          </ul>
          
          <div className="logout-btn">
          {/* <Link
                  to="/holidays"
                  className={activeLink === "/holidays" ? "active" : ""}
                  onClick={() => handleLinkClick("/holidays")}
                >Holidays</Link> */}
            {/* <Link to="/chat">
              <span className="menu-side">
                <img src={menuicon10} alt="menuicon10" />
              </span>
              <span>Chat</span>
            </Link> */}
             <Link  to="/holidays">
              <span className="menu-side">
                <img src={menuicon10} alt="menuicon10" />
              </span>
              <span>Holidays</span>
            </Link>
            <Link to="/login" onClick={() => dispatch(logoutAction())}>
              <span className="menu-side">
                <img src={logout} alt="Logout" />
              </span>
              <span>Logout</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
