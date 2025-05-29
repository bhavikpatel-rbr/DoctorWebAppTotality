import React, { useEffect, useState } from 'react';
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import axios from "axios";
import DatePicker from 'react-datepicker';
import { MdArrowDropDown, MdMic } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { ChevronRight } from 'react-feather';
import { useFormik } from 'formik';
import {
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaUserCheck,
} from "react-icons/fa";
import { BsFillHeartFill, BsImage, BsGraphUp, BsCheckCircle } from 'react-icons/bs';
import { BsMicFill, BsMicMute, BsPlus } from "react-icons/bs";
import { BsClipboardData, BsGear, BsPencilSquare, BsFileText } from 'react-icons/bs';
import { BsBook, BsQuestionCircle } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../img/doctor-03.jpg";
import { TextArea } from '@blueprintjs/core';
import { registerDoctorAction } from '../../../reduxtool/app/middleware';
import Accordion from "react-bootstrap/Accordion";
import {
  BsHeart,
  BsFileMedical,
  BsUpload,
  BsClipboard,
  BsCalendar,
  BsSearch,
} from "react-icons/bs";
import { FaPen, FaTrash } from 'react-icons/fa';
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import * as Yup from 'yup';
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';
import { allPatientsUsersAction, getAllUserAction } from '../../../reduxtool/app/middleware';
import { useDispatch } from 'react-redux';
import { patientEditData } from '../../../reduxtool/editstate/editSlice';

const rowsPerPage = 25;
const ChiefCompaintInit = ({ patient }) => {
  const [rows, setRows] = useState([
    {
      location: "",
      locationValue: "",
      locationChecked: false,
      sensation: "",
      sensationValue: "",
      sensationChecked: false,
      modalities: "",
      modalitiesValue: "",
      modalitiesChecked: false,
      concomitant: "",
      concomitantValue: "",
      concomitantChecked: false,
      selectedOptions: [],
    },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const handleFileChange = (event) => {
    // setAvatar(event.target.files[0]);
  };
   const formik = useFormik({
      initialValues: {
      firstname:"",
      lastname:'',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      doctor_name: '',
      specialization: '',
      license_number: '',
      years_of_experience: '',
        gender:'Male',
      education: '',
      designation: '',
      department: '',
      doctor_phone: '',
      doctor_email: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
      operating_hours: '',
      services: '',
      latitude: '',
      longitude: '',
      doctor_type: '',
      birth_date:"",
      status:'Active',
      },
      validationSchema: Yup.object({
        firstname:Yup.string().required('Fistname is required'),
      lastname:Yup.string().required('Lastname is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
       password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
       confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
       specialization: Yup.string().required('Specialization is required'),
      license_number: Yup.string().required('License Number is required'),
       years_of_experience: Yup.number().min(1, 'Experience must be greater than 0').required('Experience is required'),
       education: Yup.string().required('Education is required'),
       designation: Yup.string().required('Designation is required'),
       address_line_1: Yup.string().required('Address Line 1 is required'),
       city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      postal_code: Yup.string().required('Postal Code is required'),
      country: Yup.string().required('Country is required'),
      birth_date:Yup.string().required('BithDate is required')
     
      }),
      onSubmit: (values) => {
        console.log("values",values);
        const payload = {
          email: values?.email,
          username: values?.username,
          phone: values?.phone,
          password: values?.password,
          doctor_name:values?.firstname,
          specialization: values?.specialization,
          license_number: values?.license_number,
          years_of_experience:  parseInt(values?.years_of_experience),
          clinic_id: 1,
          firstname:values?.firstname,
          lastname: values?.lastname,
          gender:values?.gender,
          birth_date: values?.birth_date,
          doctor_phone: "",
          doctor_email: "",
          education: values?.education,
          designation: values?.designation,
          department: values?.department,
          address_line_1:values?.address_line_1,
          address_line_2: "",
          city: values?.city,
          state: values?.state,
          postal_code:  values?.postal_code,
          country:values?.country,
          operating_hours: "",
          services: "",
          latitude: 40.712776,
          longitude: -74.005974,
          doctor_type: "",
          images: ''
      }
      dispatch(registerDoctorAction(payload)).then((res) => {
              if (res?.payload?.status) {
                navigate('/doctors')
              }
            })
        //  dispatch(registerDoctorAction(payload))
      },
    });
    
  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedoptionvalue, setselectedoptionvalue] = useState(false);
  const [selectedtype, setselectedtype] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // Toggle modal visibility
  const [selectedOptions, setSelectedOptions] = useState([]); // Tracks selected options
  const itemsPerPage = 4; // Number of items per page
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [mode, setmode] = useState(1);
  const users = useSelector(appSelector);
   const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  console.log("users",users);
  console.log('=====================patientList===============');
    console.log(users?.patientList);
    console.log('=====================patientList===============');
   const router = useNavigate();
   const [searchQuery, setSearchQuery] = useState('');



  useEffect(() => {
     dispatch(allPatientsUsersAction());
   }, [dispatch]);

   const handleSearchChange = (e) => {
     setSearchQuery(e.target.value);
     setCurrentPage(1); // Reset to first page on search
   };
 
   const filteredDoctors = users?.patientList?.filter((doctor) =>
     `${doctor.firstname} ${doctor.lastname}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
     doctor.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
     doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
     doctor.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
     doctor.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
     doctor.email.toLowerCase().includes(searchQuery.toLowerCase())
   );
 
   const indexOfLastRow = currentPage * rowsPerPage;
   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
   const currentRows = filteredDoctors?.slice(indexOfFirstRow, indexOfLastRow);
 
   const totalPages = Math.ceil(filteredDoctors?.length / rowsPerPage);
 
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Assuming you have an array of 36 items
  const allOptions = Array.from({ length: 36 }, (_, i) => `Option ${i + 1}`);

  // Get the current items to display based on the current page
  const currentOptions = allOptions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => {
      // Toggle the option
      const newOptions = prevOptions.includes(option)
        ? prevOptions.filter((o) => o !== option)
        : [...prevOptions, option];

      // Update the selected options
      return newOptions;
    });

    // Automatically show the next set of options if an option is selected
    if (!selectedOptions.includes(option)) {
      const nextPage = Math.min(
        currentPage + 1,
        Math.ceil(allOptions.length / itemsPerPage) - 1
      );
      setCurrentPage(nextPage);
    }
  };

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < allOptions.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleDropdown = (index, section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [index]: prevState[index] === section ? null : section,
    }));
  };
  const handleDropdownSelect = (index, key, value) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, [key]: value } : row))
    );
    setDropdownOpen((prevState) => ({ ...prevState, [index]: null })); // Close the dropdown after selecting an option
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "",
        sensation: "",
        modalities: "",
        concomitant: "",
        locationValue: "",
        sensationValue: "",
        modalitiesValue: "",
        concomitantValue: "",
        locationChecked: false,
        sensationChecked: false,
        modalitiesChecked: false,
        concomitantChecked: false,
        selectedOptions: [], // Initialize with empty array
      },
    ]);
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRows(
          rows.map((row, i) =>
            i === index ? { ...row, [inputField]: transcript } : row
          )
        );
      };

      recognition.start();
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };

  const handleCheckboxChange = (index, key) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, [key]: !row[key] } : row))
    );
  };

  const navigate = useNavigate();

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add your recording start/stop logic here
  };

  const handleKeyPress = (event, index) => {
    setSelectedOptions([]);
    if (event.key === "Enter") {
      setFocusedIndex(index);
      setModalContent(
        `Location: ${rows[index].location}, Sensation: ${rows[index].sensation}, Modalities: ${rows[index].modalities}, Concomitant: ${rows[index].concomitant}`
      );
      setShowOptions(true);
      setIsModalVisible(true);
    }
  };

  const handleNewCaseClick = () => {
    setmode(2);
    // setTimeout(() => {
    //   navigate("/addCase"); // Navigate after setting mode
    // }, 0);
  };


  return (
    <div >
     

      {/* <div className="patient-details mb-4 p-4 bg-white rounded border shadow-lg d-flex justify-content-between align-items-start">
        <div className="details-info">
          <div className="d-flex align-items-center mb-3">
            <FaUserCheck size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark">
              <strong>Name:</strong> Tushar Joshi
            </p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaBirthdayCake size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark">
              <strong>Age:</strong> 29
            </p>
          </div>
          <div className="d-flex align-items-center">
            <FaVenusMars size={24} className="text-info me-2" />
            <p className="mb-0 fs-6 text-dark">
              <strong>Gender:</strong> Male
            </p>
          </div>
        </div>
        <div className="recording-controls d-flex align-items-center">
          <button
            className={`btn btn-${
              isRecording ? "danger" : "primary"
            } d-flex align-items-center`}
            onClick={toggleRecording}
          >
            {isRecording ? <BsMicMute size={24} /> : <BsMicFill size={24} />}
            <span className="ms-2">
              {isRecording ? "Stop Recording" : "Start Recording"}
            </span>
          </button>
        </div>
      </div> */}

<div className="card-box profile-header">
  <div className="row">
    <div className="col-md-12">
      <div className="profile-view">
        <div className="profile-basic">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-1">
                  <div className="patient_img-wrap">
                    <a>
                      <img className="patient_img" src={Avatar} alt="" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-7 pt-2"
                  style={{ paddingLeft: "30px" }}
                >
                  <ul className="personal-info">
                    <li>
                      <span className="title">Name:</span>
                      <span className="text">
                        <div>Tushar Joshi</div>
                      </span>
                    </li>
                    <li>
                      <span className="title">Phone:</span>
                      <span className="text">
                        <div>770-889-6484</div>
                      </span>
                    </li>

                    <li>
                      <span className="title">Gender:</span>
                      <span className="text">Male</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-end pt-2">
                <div className="mb-2">
      <button
        onClick={handleNewCaseClick}
        className="btn btn-success btn-rounded"
      >
        <BsPlus size={25} />
        New Case
      </button>
    </div>

                  <div className="mb-2">  {/* Added mb-2 for spacing */}
                    <Link
                      to="/addPatientDetails"
                      className={`btn btn-primary-StartRecording btn-rounded`}
                    >
                      <BsPlus size={25} />
                      {"Add Patient Details"}
                    </Link>
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
 
 {mode == 1 &&
     <div className="row mt-2">
     <div className="col-sm-12">
       <div className="card card-table show-entire">
         <div className="card-body">
           <div className="page-table-header mb-2">
             <div className="row align-items-center">
               <div className="col">
                 <div className="doctor-table-blk">
                   <h3>Patient Old Case Record List</h3>
                   <div className="doctor-search-blk">
                     <div className="top-nav-search table-search-blk">
                     <form>
                         <input
                           type="text"
                           className="form-control"
                           placeholder="Search here"
                           value={searchQuery}
                           onChange={handleSearchChange}
                         />
                         
                       </form>
                     </div>
                     <div className="add-group">
                     {/* <Link to="/addpatient" className="btn btn-primary add-pluss ms-2">
                         <img src={plus} alt="" />
                       </Link> */}
                       <div
                         onClick={() => dispatch(allPatientsUsersAction())}
                         className="btn btn-primary doctor-refresh ms-2"
                       >
                         <img src={refresh} alt="Refresh" />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

             </div>
           </div>

           <div className="table-responsive">
             <table className="table border-0 custom-table comman-table datatable mb-0">
               <thead>
                 <tr>

                   <th>id</th>
                   <th>case record title</th>
                   <th>doctor_notes</th>
                   <th>others_notes</th>
                   <th>case record date</th>
                   
                 </tr>
               </thead>
               <tbody>
                 {currentRows?.map(doctor => (
                   <tr key={doctor.id}>

                   <td>{doctor.id}</td>
                     <td>Flu Treatment</td>
                     <td>Monitor for fever</td>
                     <td>Patient needs rest</td>
                    
                   
                     <td><div href={`mailto:${doctor.email}`} >23/03/2023</div></td>
                    
                     <td className="text-end">
                       <button
                         className="btn btn-sm btn-danger me-2"
                         style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                        onClick={()=>{
                         setmode(3)
                        }}
                       >
                         <FaPen />
                       </button>
                       {/* <button
                         className="btn btn-sm btn-danger "
                         style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                         onClick={() => console.log('Delete', doctor.id)}
                       >
                         <FaTrash />
                       </button> */}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
           <nav>
             <ul className="pagination justify-content-center" style={{ marginTop: '20px' }}>
               {Array.from({ length: totalPages }, (_, index) => (
                 <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} style={{ margin: '0 5px' }}>
                   <div
                     className="page-link"
                     href="#"
                     onClick={() => paginate(index + 1)}
                     style={{
                       border: '1px solid #2e37a4',
                       color: currentPage === index + 1 ? '#fff' : '#2e37a4',
                       backgroundColor: currentPage === index + 1 ? '#2e37a4' : '#fff',
                       borderRadius: '4px',
                       padding: '6px 12px',
                       cursor: 'pointer',
                     }}
                   >
                     {index + 1}
                   </div>
                 </li>
               ))}
             </ul>
           </nav>
         </div>
       </div>
     </div>
   </div>

      

     
    }
  {mode == 2 &&
   <div >
        
  
        <div className="row mt-2">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-heading">
                        <h4>Add Case record</h4>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                        Case record title <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstname}
                          onKeyPress={(e) => handleKeyPress(e, 'firstname')}
                        />
                        {formik.touched.firstname && formik.errors.firstname ? (
                          <div className="text-danger">{formik.errors.firstname}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                        Doctor notes <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstname}
                          onKeyPress={(e) => handleKeyPress(e, 'firstname')}
                        />
                        {formik.touched.firstname && formik.errors.firstname ? (
                          <div className="text-danger">{formik.errors.firstname}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms">
                        <label>
                        Other notes <span className="login-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstname}
                          onKeyPress={(e) => handleKeyPress(e, 'firstname')}
                        />
                        {formik.touched.firstname && formik.errors.firstname ? (
                          <div className="text-danger">{formik.errors.firstname}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-6">
                      <div className="input-block local-forms ">
                        <label>
                        birth date <span className="login-danger">*</span>
                        </label>
                        <DatePicker
                          selected={formik.values.birth_date}
                          onChange={(date) => formik.setFieldValue('birth_date', date)}
                          dateFormat="yyyy/MM/dd"
                          className="form-control"
                          onKeyPress={(e) => handleKeyPress(e, 'birth_date')}
                          
                        />
                        {formik.touched.birth_date && formik.errors.birth_date ? (
                          <div className="text-danger">{formik.errors.birth_date}</div>
                        ) : null}
                      </div>
                    </div>
  
                   
                    
                    <div className="col-12">
                      <div className="doctor-submit text-end">
                      <button
                        // onClick={()=>{
                        //   navigate('/doctors')
                        // }}
                          type="button"
                          className="btn btn-primary cancel-form me-2"
                        >
                          Cancel
                        </button>
                        <button
                           onClick={()=>{
                         setmode(3)
                        }}
                          type="submit"
                          className="btn btn-primary submit-form "
                        >
                          Save
                        </button>
                       
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
}
{mode == 3 &&
    <div className="mt-4">
        <div className="patient__Menu card p-3">
          <Tab.Container id="left-tabs-example" defaultActiveKey="CaseRecord">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column patient-nav">
                  <Nav.Item>
                    <Nav.Link eventKey="CaseRecord" className="patient__tab">
                      <div className="Patient_menu_title">
                        <h3>Case Record</h3>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="CaseRecordAnalysis"
                      className="patient__tab"
                    >
                      <div className="Patient_menu_title">
                        <h3>Case Analysis</h3>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="DisplayIcon" className="patient__tab">
                      <div className="Patient_menu_title">
                        <h3>Display Icon</h3>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Followup" className="patient__tab">
                      <div className="Patient_menu_title">
                        <h3>Rx, Follow up & Interpretation</h3>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Definations" className="patient__tab">
                      <div className="Patient_menu_title">
                        <h3>Definitions</h3>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="CaseRecord">
                    <div className="doctor-list-blk">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/chiefcomplaintstart"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsHeart size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Chief Complaint</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/associatecomplaintStart"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsFileMedical size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Associate Complaint</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/caserecordadd"
                                className="doctor-widget patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Patient As A Person (Attributes & Function)</h5>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 mt-4">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/uploadcaserecord"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsUpload size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Upload Case Record</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/addSfft"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Add Diagnosis (SFFT)</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/lstTable"
                                className="doctor-widget patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Add Life Space Table</h5>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 mt-4">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/adddata"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Add Data</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/dateAndDailyroutine"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsCalendar size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Date And Daily Routine</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/lifeSpaceInvestigation"
                                className="doctor-widget patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsSearch size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Life-Space Investigation</h5>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="CaseRecordAnalysis">
                  <div className="doctor-list-blk">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/chiefcomplaintstart"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsHeart size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Chief Complaint</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/associatecomplaintStart"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsFileMedical size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Associate Complaint</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/caserecordadd"
                                className="doctor-widget patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Case Record</h5>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 mt-4">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/uploadcaserecord"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsUpload size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Upload Case Record</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/addSfft"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Add Diagnosis (SFFT)</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/lstTable"
                                className="doctor-widget patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Add Life Space Table</h5>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12 mt-4">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/adddata"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsClipboard size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Add Data</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/dateAndDailyroutine"
                                className="doctor-widget border-right-bg patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsCalendar size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Date And Daily Routine</h5>
                                </div>
                              </Link>
                            </div>
                            <div className="col-xl-4 col-md-6">
                              <Link
                                to="/lifeSpaceInvestigation"
                                className="doctor-widget patient__submenu"
                              >
                                <div className="doctor-box-icon flex-shrink-0">
                                  <BsSearch size={20} />
                                </div>
                                <div className="doctor-content dash-count flex-grow-1">
                                  <h5>Life-Space Investigation</h5>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="DisplayIcon">
      <div className="doctor-list-blk">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsFillHeartFill size={20}  />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Mental State</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6 ">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsImage size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Conceptual Image (C.l)</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget  patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsGraphUp size={20}  />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Essential Evolutionary Totality (EET)</h5>
                  </div>
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col-xl-12 mt-4">
            <div className="row">
            <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsGraphUp size={20}  />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Essential Evolutionary Totality (EET)</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsCheckCircle size={20}  />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Repertorization</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Pane>
    <Tab.Pane eventKey="Followup">
      <div className="doctor-list-blk">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsClipboardData size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Planning & Programming Of Rx</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsGear size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>General Management</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget  patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsPencilSquare size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Therapeutic Problem Definition</h5>
                  </div>
                </Link>
              </div>
             
            </div>
          </div>
          <div className="col-xl-12 mt-4">
            <div className="row">
            <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsFileText size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Progress Record</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsFileText size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Progress Notes</h5>
                  </div>
                </Link>
              </div>

              <div className="col-xl-4 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget  patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsFileText size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Case Summary</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Pane>
    <Tab.Pane eventKey="Definations">
      <div className="doctor-list-blk">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget border-right-bg patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsBook size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>Glossary</h5>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-md-6">
                <Link
                  to="/appointments"
                  className="doctor-widget  patient__submenu"
                >
                  <div className="doctor-box-icon flex-shrink-0">
                    <BsQuestionCircle size={20} />
                  </div>
                  <div className="doctor-content dash-count flex-grow-1">
                    <h5>How It Works</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
}
    </div>
    
  );
};

export default ChiefCompaintInit;
