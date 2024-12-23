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
import { BsMicFill, BsMicMute } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";

const AssociateComplaintInit = ({ patient }) => {
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
  const currentOptions = allOptions.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);


  const handleOptionSelect = (option) => {
    setSelectedOptions(prevOptions => {
      // Toggle the option
      const newOptions = prevOptions.includes(option)
        ? prevOptions.filter(o => o !== option)
        : [...prevOptions, option];
  
      // Update the selected options
      return newOptions;
    });
  
    // Automatically show the next set of options if an option is selected
    if (!selectedOptions.includes(option)) {
      const nextPage = Math.min(currentPage + 1, Math.ceil(allOptions.length / itemsPerPage) - 1);
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
    setSelectedOptions([])
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
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="chief_complaint.html">Associate Complaint</div>
              </li>
              <li className="breadcrumb-item active">Associate Complaint</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="patient-details mb-4 p-4 bg-white rounded border shadow-lg d-flex justify-content-between align-items-start">
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
      </div>

      <div>
        {rows.map((row, index) => (
          <form key={index} className="form-group mb-3">
            {/* Location Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.locationChecked}
                  onChange={() =>
                    handleCheckboxChange(index, "locationChecked")
                  }
                  id={`location-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.location}
                  onChange={(e) =>
                    setRows(
                      rows.map((r, i) =>
                        i === index ? { ...r, location: e.target.value } : r
                      )
                    )
                  }
                  onKeyDown={(e) => 
                  {
                    handleKeyPress(e, index)
                    setCurrentPage(0)
                    setselectedoptionvalue(row.location)
                    setselectedtype("location")
                  }
                    }
                  placeholder="Enter Location"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index, "location")}
                  aria-label="Dropdown"
                >
                  {row.locationValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen[index] === "location" && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "locationValue", "High")
                      }
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "locationValue", "Medium")
                      }
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "locationValue", "Low")
                      }
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Sensation Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.sensationChecked}
                  onChange={() =>
                    handleCheckboxChange(index, "sensationChecked")
                  }
                  id={`sensation-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.sensation}
                  onChange={(e) =>
                    setRows(
                      rows.map((r, i) =>
                        i === index ? { ...r, sensation: e.target.value } : r
                      )
                    )
                  }
                  onKeyDown={(e) => {handleKeyPress(e, index)

                    setCurrentPage(0)
                    setselectedoptionvalue(row.sensation)
                    setselectedtype("Sensation & Pathology")
                  }}
                  placeholder="Enter Sensation & Pathology"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index, "sensation")}
                  aria-label="Dropdown"
                >
                  {row.sensationValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen[index] === "sensation" && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "sensationValue", "High")
                      }
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "sensationValue", "Medium")
                      }
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "sensationValue", "Low")
                      }
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Modalities Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.modalitiesChecked}
                  onChange={() =>
                    handleCheckboxChange(index, "modalitiesChecked")
                  }
                  id={`modalities-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.modalities}
                  onChange={(e) =>
                    setRows(
                      rows.map((r, i) =>
                        i === index ? { ...r, modalities: e.target.value } : r
                      )
                    )
                  }
                  onKeyDown={(e) => {handleKeyPress(e, index)
                    setCurrentPage(0)
                    setselectedoptionvalue(row.modalities)
                    setselectedtype("Modalities AF")
                  }}
                  placeholder="Enter Modalities AF"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index, "modalities")}
                  aria-label="Dropdown"
                >
                  {row.modalitiesValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen[index] === "modalities" && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "modalitiesValue", "High")
                      }
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "modalitiesValue", "Medium")
                      }
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "modalitiesValue", "Low")
                      }
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Concomitant Section */}
            <div className="d-flex align-items-center mb-2">
              <div className="form-check me-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={row.concomitantChecked}
                  onChange={() =>
                    handleCheckboxChange(index, "concomitantChecked")
                  }
                  id={`concomitant-check-${index}`}
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <input
                  type="text"
                  className="form-control"
                  value={row.concomitant}
                  onChange={(e) =>
                    setRows(
                      rows.map((r, i) =>
                        i === index ? { ...r, concomitant: e.target.value } : r
                      )
                    )
                  }
                  onKeyDown={(e) => {handleKeyPress(e, index)
                    setCurrentPage(0)
                    setselectedoptionvalue(row.concomitant)
                    setselectedtype("Concomitant")
                  }}
                  placeholder="Enter Concomitant"
                />
                <button
                  type="button"
                  className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
                  onClick={() => toggleDropdown(index, "concomitant")}
                  aria-label="Dropdown"
                >
                  {row.concomitantValue || <MdArrowDropDown size={24} />}
                </button>
                {dropdownOpen[index] === "concomitant" && (
                  <div className="dropdown-menu show position-absolute end-0 mt-2">
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "concomitantValue", "High")
                      }
                    >
                      High
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(
                          index,
                          "concomitantValue",
                          "Medium"
                        )
                      }
                    >
                      Medium
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleDropdownSelect(index, "concomitantValue", "Low")
                      }
                    >
                      Low
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Display Selected Options */}
           
          </form>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={addRow}>
          <BiPlus size={24} /> Add Row
        </button>
      </div>

      {isModalVisible && (
  <div
    className="modal-backdrop modal fade show align-items-center justify-content-center"
    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)"  }}
    tabIndex="-1"
    role="dialog"
  >
    <div className="modal-dialog modal-dialog-scrollable" 
    role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{selectedtype} - {selectedoptionvalue}</h5>
          <button
            type="button"
            className="close"
            onClick={() => setIsModalVisible(false)}
          >
            <span>&times;</span>
          </button>
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
          <ul className="list-group">
            {currentOptions.map((option, index) => (
              <li
                key={index}
                className="list-group-item"
                onClick={() => handleOptionSelect(option)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionSelect(option)}
                  onClick={(e) => e.stopPropagation()}
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentPage === 0}
          >
            Previous
          </button>
          
          { (currentPage + 1) * itemsPerPage >= allOptions.length ? (
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
          ):<button
          type="button"
          className="btn btn-secondary"
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= allOptions.length}
        >
          Next
        </button>}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsModalVisible(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default AssociateComplaintInit;
