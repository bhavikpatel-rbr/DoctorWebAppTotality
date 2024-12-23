import React, { useState } from "react";
import axios from "axios";
import { MdArrowDropDown, MdMic } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
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

import Accordion from "react-bootstrap/Accordion";
import {
  BsHeart,
  BsFileMedical,
  BsUpload,
  BsClipboard,
  BsCalendar,
  BsSearch,
} from "react-icons/bs";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

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

  const [language, setLanguage] = useState("en");
  const [isRecording, setIsRecording] = useState(false);
  const [selectedoptionvalue, setselectedoptionvalue] = useState(false);
  const [selectedtype, setselectedtype] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // Toggle modal visibility
  const [currentPage, setCurrentPage] = useState(0); // Tracks current page
  const [selectedOptions, setSelectedOptions] = useState([]); // Tracks selected options
  const itemsPerPage = 4; // Number of items per page
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);

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

      <div class="card-box profile-header">
        <div class="row">
          <div class="col-md-12">
            <div class="profile-view">
             

              <div class="profile-basic">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div className="col-md-1">
                        <div className="patient_img-wrap">
                          <a>
                            <img class="patient_img" src={Avatar} alt="" />
                          </a>
                        </div>
                      </div>
                      <div
                        className="col-md-7 pt-2"
                        style={{ paddingLeft: "30px" }}
                      >
                        <ul class="personal-info">
                          <li>
                            <span class="title">Name:</span>
                            <span class="text">
                              <div href>Tushar Joshi</div>
                            </span>
                          </li>
                          <li>
                            <span class="title">Phone:</span>
                            <span class="text">
                              <div href>770-889-6484</div>
                            </span>
                          </li>

                          <li>
                            <span class="title">Gender:</span>
                            <span class="text">Male</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 d-flex flex-column align-items-end pt-2">
      <div className="mb-2">
        <a
          className={`btn btn-${isRecording ? "danger" : "primary-StartRecording"} btn-rounded`}
          onClick={toggleRecording}
        >
          {isRecording ? (
            <BsMicMute size={25} style={{ paddingRight: "10px" }} />
          ) : (
            <BsMicFill size={25} style={{ paddingRight: "10px" }} />
          )}
          {isRecording ? "Stop Recording" : "Start Recording"}
        </a>
      </div>

      <div>
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

      {isModalVisible && (
        <div
          className="modal-backdrop modal fade show align-items-center justify-content-center"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title Modal_main__Title">
                  {selectedtype} - {selectedoptionvalue}
                </h5>
                {/* <button
                  type="button"
                  className="close"
                  onClick={() => setIsModalVisible(false)}
                >
                  <span>&times;</span>
                </button> */}

                <button
                  type="button"
                  class="btn-close"
                  onClick={() => setIsModalVisible(false)}
                ></button>
              </div>
              <div className="modal-body">
                {selectedOptions.length > 0 && (
                  <div>
                    <p>Selected Options:</p>
                    <ul className="Optionitemlist">
                      {selectedOptions.map((option, index) => (
                        <li className="selectedOptionsList" key={index}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <ul className="list-group custom-list ">
                  {currentOptions.map((option, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex align-items-center justify-content-between"
                      onClick={() => handleOptionSelect(option)}
                      style={{ cursor: "pointer" }}
                    >
                      <p className="mb-0">{option}</p>
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleOptionSelect(option)}
                        onClick={(e) => e.stopPropagation()}
                        className="form-check-input me-2"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>

                {(currentPage + 1) * itemsPerPage >= allOptions.length ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      // Handle save action
                      // For example, save data or perform any action needed
                      setIsModalVisible(false);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleNext}
                    disabled={
                      (currentPage + 1) * itemsPerPage >= allOptions.length
                    }
                  >
                    Next
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalVisible(false)}
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiefCompaintInit;
