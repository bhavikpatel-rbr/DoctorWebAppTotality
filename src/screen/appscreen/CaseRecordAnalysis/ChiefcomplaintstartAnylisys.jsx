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
import { BsMicFill, BsMicMute, BsPlus } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../img/doctor-03.jpg";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const ChiefcomplaintstartAnylisys = ({ patient }) => {
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const itemsPerPage = 4;
  const [showOptions, setShowOptions] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const allOptions = Array.from({ length: 36 }, (_, i) => `Option ${i + 1}`);
  const currentOptions = allOptions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = prevOptions.includes(option)
        ? prevOptions.filter((o) => o !== option)
        : [...prevOptions, option];
      return newOptions;
    });
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
    setDropdownOpen((prevState) => ({ ...prevState, [index]: null }));
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
        selectedOptions: [],
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
    <div className="row">
      <div className="col-sm-7 col-6">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <div href="chief_complaint.html">Chief Complaint</div>
          </li>
          <li className="breadcrumb-item">
            <i className="feather-chevron-right"></i>
          </li>
          <li className="breadcrumb-item active">Chief Complaint</li>
        </ul>
      </div>
      <div className="col-sm-5 col-6 text-end m-b-30">
        <button
          className={`btn btn-${isRecording ? 'danger' : 'primary'}`}
          onClick={addRow}
        >
          <BsPlus size={30} style={{ marginHorizontal: 10 }} />
          Add Row
        </button>
      </div>
    </div>

    <table className="table mt-2 mb-5">
      <thead>
        <tr>
          <th>Location</th>
          <th>Sensation & Pathology</th>
          <th>Modalities AF</th>
          <th>Concomitant</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>
              <div className={`d-flex p-1 align-items-center ${row.location ? 'bg-highlight' : 'bg-default'}`}>
                <input
                  type="checkbox"
                  style={{width:"18px" , height:"18px" , marginRight:"10px" , marginLeft:"10px"}}
                  checked={row.locationChecked}
                  onChange={(e) => setRows(
                    rows.map((r, i) => i === index ? { ...r, locationChecked: e.target.checked } : r)
                  )}
                />
                <div className="flex-grow-1 position-relative">
                  <input
                    type="text"
                    className="form-control"
                    value={row.location}
                    onChange={(e) => setRows(
                      rows.map((r, i) => i === index ? { ...r, location: e.target.value } : r)
                    )}
                    onKeyDown={(e) => {
                      handleKeyPress(e, index);
                      setCurrentPage(0);
                      setselectedoptionvalue(row.location);
                      setselectedtype('location');
                    }}
                    placeholder="Enter Location"
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                    onClick={() => toggleDropdown(index, 'location')}
                    aria-label="Dropdown"
                  >
                    {row.locationValue || <MdArrowDropDown size={24} />}
                  </button>
                  {dropdownOpen[index] === 'location' && (
                    <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'locationValue', '1')}
                      >
                        1
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'locationValue', '2')}
                      >
                        2
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'locationValue', '3')}
                      >
                        3
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </td>
            <td>
              <div className={`d-flex p-1 align-items-center ${row.sensation ? 'bg-highlight' : 'bg-default'}`}>
                <input
                  type="checkbox"
                  style={{width:"18px" , height:"18px" , marginRight:"10px" , marginLeft:"10px"}}
                  checked={row.sensationChecked}
                  onChange={(e) => setRows(
                    rows.map((r, i) => i === index ? { ...r, sensationChecked: e.target.checked } : r)
                  )}
                />
                <div className="flex-grow-1 position-relative">
                  <input
                    type="text"
                    className={`form-control ${row.sensation ? 'input-highlight' : 'input-default'}`}
                    value={row.sensation}
                    onChange={(e) => setRows(
                      rows.map((r, i) => i === index ? { ...r, sensation: e.target.value } : r)
                    )}
                    onKeyDown={(e) => {
                      handleKeyPress(e, index);
                      setCurrentPage(0);
                      setselectedoptionvalue(row.sensation);
                      setselectedtype('sensation');
                    }}
                    placeholder="Enter Sensation"
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                    onClick={() => toggleDropdown(index, 'sensation')}
                    aria-label="Dropdown"
                  >
                    {row.sensationValue || <MdArrowDropDown size={24} />}
                  </button>
                  {dropdownOpen[index] === 'sensation' && (
                    <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'sensationValue', '1')}
                      >
                        1
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'sensationValue', '2')}
                      >
                        2
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'sensationValue', '3')}
                      >
                        3
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </td>
            <td>
              <div className={`d-flex p-1 align-items-center ${row.modalities ? 'bg-highlight' : 'bg-default'}`}>
                <input
                  type="checkbox"
                  style={{width:"18px" , height:"18px" , marginRight:"10px" , marginLeft:"10px"}}
                  checked={row.modalitiesChecked}
                  onChange={(e) => setRows(
                    rows.map((r, i) => i === index ? { ...r, modalitiesChecked: e.target.checked } : r)
                  )}
                />
                <div className="flex-grow-1 position-relative">
                  <input
                    type="text"
                    className={`form-control ${row.modalities ? 'input-highlight' : 'input-default'}`}
                    value={row.modalities}
                    onChange={(e) => setRows(
                      rows.map((r, i) => i === index ? { ...r, modalities: e.target.value } : r)
                    )}
                    onKeyDown={(e) => {
                      handleKeyPress(e, index);
                      setCurrentPage(0);
                      setselectedoptionvalue(row.modalities);
                      setselectedtype('modalities');
                    }}
                    placeholder="Enter Modalities"
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                    onClick={() => toggleDropdown(index, 'modalities')}
                    aria-label="Dropdown"
                  >
                    {row.modalitiesValue || <MdArrowDropDown size={24} />}
                  </button>
                  {dropdownOpen[index] === 'modalities' && (
                    <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'modalitiesValue', '1')}
                      >
                        1
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'modalitiesValue', '2')}
                      >
                        2
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'modalitiesValue', '3')}
                      >
                        3
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </td>
            <td>
              <div className={`d-flex  align-items-center ${row.concomitant ? 'bg-highlight' : 'bg-default'}`}>
                <input
                  type="checkbox"
                  style={{width:"18px" , height:"18px" , marginRight:"10px" , marginLeft:"10px"}}
                  checked={row.concomitantChecked}
                  onChange={(e) => setRows(
                    rows.map((r, i) => i === index ? { ...r, concomitantChecked: e.target.checked } : r)
                  )}
                />
                <div className="flex-grow-1 position-relative">
                  <input
                    type="text"
                    className={`form-control ${row.concomitant ? 'input-highlight' : 'input-default'}`}
                    value={row.concomitant}
                    onChange={(e) => setRows(
                      rows.map((r, i) => i === index ? { ...r, concomitant: e.target.value } : r)
                    )}
                    onKeyDown={(e) => {
                      handleKeyPress(e, index);
                      setCurrentPage(0);
                      setselectedoptionvalue(row.concomitant);
                      setselectedtype('concomitant');
                    }}
                    placeholder="Enter Concomitant"
                  />
                  <button
                    type="button"
                    className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                    onClick={() => toggleDropdown(index, 'concomitant')}
                    aria-label="Dropdown"
                  >
                    {row.concomitantValue || <MdArrowDropDown size={24} />}
                  </button>
                  {dropdownOpen[index] === 'concomitant' && (
                    <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'concomitantValue', '1')}
                      >
                        1
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'concomitantValue', '2')}
                      >
                        2
                      </button>
                      <button
                        className="custom-dropdown-item"
                        onClick={() => handleDropdownSelect(index, 'concomitantValue', '3')}
                      >
                        3
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default ChiefcomplaintstartAnylisys;
