import React, { useState } from "react";
import axios from "axios";
import { MdArrowDropDown, MdMic } from "react-icons/md";
import { BiPlus } from "react-icons/bi";
import { BsExclamationTriangleFill } from "react-icons/bs";
import {
  FaUser,
  FaBirthdayCake,
  FaVenusMars,
  FaUserCheck,
} from "react-icons/fa";
import { BsMicFill, BsMicMute, BsPlus, BsTrash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../img/doctor-03.jpg";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const Chiefcomplaintstart = ({ patient }) => {
  const [rows, setRows] = useState([
    {
      location: "",
      locationValue: "1",
      locationChecked: false,
      sensation: "",
      sensationValue: "1",
      sensationChecked: false,
      modalities: "",
      modalitiesValue: "1",
      modalitiesChecked: false,
      concomitant: "",
      concomitantValue: "1",
      concomitantChecked: false,
      selectedOptions: [],
    },
  ]);
  const locationSuggestions = [
    { id: 0, name: "Onset" },
    { id: 0, name: "Duration" },
    { id: 0, name: "Frequency" },
    { id: 0, name: "Progress" },
    { id: 0, name: "Tissues" },
    { id: 0, name: "Organs" },
    { id: 0, name: "System" },
    { id: 0, name: "Extension" },
    { id: 0, name: "Spread" },
    { id: 1, name: "Nervous System" },
    { id: 1, name: "CNS" },
    { id: 1, name: "PNS" },
    { id: 1, name: "ANS" },
    { id: 1, name: "Tissue" },
    { id: 2, name: "Gastrointestinal Tract" },
    { id: 2, name: "Mouth" },
    { id: 2, name: "Pharynx" },
    { id: 2, name: "Larynx" },
    { id: 2, name: "Esophagus" },
    { id: 2, name: "Stomach" },
    { id: 2, name: "Duodenum" },
    { id: 2, name: "Pancreas" },
    { id: 2, name: "Small Intestine" },
    { id: 2, name: "Large Intestine" },
    { id: 2, name: "Anus" },
    { id: 2, name: "Rectum" },
    { id: 3, name: "Tissues" },
    { id: 3, name: "Organs" },
    { id: 3, name: "System" },
    { id: 3, name: "Spread" }
  ];
  
  const sensationAndPathology  = {
    1: [
      "Cognitive symptoms",
      "Confusion",
      "Disorientation",
      "Memory loss",
      "Concentration Difficulty and attention",
      "Motor symptoms",
      "Weakness",
      "Paralysis",
      "Tremors",
      "Seizures",
      "Difficulty with coordination and balance",
      "Sensory symptoms",
      "Numbness",
      "Tingling pain",
      "Burning sensations",
      "Difficulty with sensation and perception",
      "Emotional and behavioral symptoms",
      "Mood changes",
      "Anxiety",
      "Depression",
      "Personality changes",
      "Difficulty with emotional regulation",
      "Sleep disturbances",
      "Insomnia",
      "Sleep apnea",
      "Restless leg syndrome",
      "Narcolepsy",
      "Autonomic symptoms",
      "Regulation difficulty",
      "Neurodegenerative disorders",
      "Alzheimer's disease",
      "Parkinson's disease",
      "Huntington's disease",
      "Stroke and cerebrovascular disorders",
      "Ischemic stroke",
      "Hemorrhagic stroke",
      "Transient ischemic attack",
      "Infections",
      "Meningitis",
      "Encephalitis",
      "Brain abscess",
      "Inflammatory disorders",
      "Multiple sclerosis",
      "Guillain-Barré syndrome",
      "Chronic inflammatory demyelinating polyneuropathy",
      "Neoplasms",
      "Brain tumors",
      "Spinal cord tumors",
      "Peripheral nerve tumors",
      "Trauma",
      "Head trauma",
      "Spinal cord injury",
      "Peripheral nerve injury",
      "Toxic and metabolic disorders",
      "Encephalopathy",
      "Metabolic encephalopathy",
      "Electrolyte imbalance",
      "Epilepsy",
    ],
    2: [
      "Upper GI symptoms",
      "Abdominal pain or discomfort",
      "Nausea and vomiting",
      "Heartburn",
      "Regurgitation",
      "Swallowing difficulty",
      "Bloating",
      "Gas",
      "Lower GI symptoms",
      "Abdominal pain",
      "Cramping",
      "Diarrhea",
      "Constipation",
      "Bloody stools",
      "Black tarry stools",
      "Urgency or incontinence",
      "Rectal pain or discomfort",
      "General symptoms",
      "Weight loss",
      "Weight gain",
      "Fatigue",
      "Lethargy",
      "Loss of appetite",
      "Fever",
      "Chills",
      "Nausea",
      "Vomiting",
      "Physical examination",
      "Abdominal tenderness",
      "Guarding",
      "Rebound tenderness",
      "Laboratory tests",
      "Complete Blood Count (CBC)",
      "Electrolyte panel",
      "Electrolyte imbalances",
      "Liver function tests (LFTs)",
      "Pancreatic enzymes",
      "Pancreatitis",
      "Stool tests",
      "Infections",
      "Inflammatory conditions",
      "Imaging studies",
      "Barium swallow",
      "Barium enema",
      "Endoscopy",
      "Colonoscopy",
      "CT scan",
      "MRI scans",
      "Endoscopic procedures",
      "Biopsy",
      "Gastroesophageal reflux disease (GERD)",
      "Peptic ulcer disease",
      "Inflammatory bowel disease (IBD)",
      "Irritable bowel syndrome (IBS)",
      "Laboratory test CBC",
      "Electrolyte panel",
      "Gastrointestinal bleeding",
      "Peptic ulcer disease (PUD)",
      "Cancer",
      "Abdominal pain",
      "Gastroenteritis",
      "Diarrhea",
      "Gastroenteritis",
      "Malabsorption syndromes",
      "Constipation",
      "Hypothyroidism",
      "Diabetes",
      "Neurological disorders",
    ],
    3: [
      "Cardiac Symptoms",
      "Chest pain or discomfort",
      "Angina",
      "Shortness of breath (dyspnea)",
      "Fatigue",
      "Weakness",
      "Palpitations",
      "Irregular heartbeat",
      "Dizziness or lightheadedness",
      "Vascular Symptoms",
      "Leg pain",
      "Cramping",
      "Claudication",
      "Weakness",
      "Numbness",
      "Coldness",
      "Discoloration of the skin",
      "Ulcers",
      "Wounds that won't heal",
      "General Symptoms",
      "Weight gain",
      "Weight loss",
      "Swelling",
      "Coughing",
      "Wheezing",
      "Pale skin",
      "Blue-tinged skin",
      "Physical Examination",
      "Blood pressure",
      "Heart rate",
      "Cardiovascular sounds",
      "Electrocardiogram (ECG)",
      "Echocardiogram",
      "Stress Test",
      "Imaging Studies",
      "Chest X-ray",
      "CT scan",
      "MRI",
      "Blood Tests",
      "CBC",
      "Blood chemistry tests",
      "Lipid profile",
      "Cholesterol",
      "Triglyceride",
      "Coronary Artery Disease (CAD)",
      "Coronary angiogram",
      "Heart Failure",
      "Urine tests",
      "Atrial Fibrillation",
      "Heart attack (myocardial infarction)",
      "Pulmonary embolism",
      "Pneumonia",
      "GERD",
      "COPD",
      "Atrial fibrillation",
      "Supraventricular tachycardia (SVT)",
      "Ventricular tachycardia (VT)",
      "Heart valve problems",
      "Anxiety",
    ],
  };
  

   
  
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

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

  const confirmDeleteRow = () => {
    if (rowToDelete !== null) {
      setRows(rows.filter((_, index) => index !== rowToDelete));
    }
    setIsDeleteModalVisible(false);
  };
  const formatText = (value) => {
    if (value === "1") {
      return { textTransform: "lowercase", fontStyle: "normal", fontWeight: "normal" };
    } else if (value === "2") {
      return { textTransform: "capitalize", fontStyle: "italic", fontWeight: "normal" };
    } else if (value === "3") {
      return { fontStyle: "normal", fontWeight: "bold" };
    }
    return {};
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "",
        sensation: "",
        modalities: "",
        concomitant: "",
        locationValue: "1",
        sensationValue: "1",
        modalitiesValue: "1",
        concomitantValue: "1",
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

  const handleInputChange = (e, index, fieldKey) => {
    const value = e.target.value;
    const updatedRows = [...rows];
    updatedRows[index][fieldKey] = value;
    setRows(updatedRows);

    let newFilteredSuggestions = { ...filteredSuggestions };
    let newShowSuggestions = { ...showSuggestions };

    if (fieldKey === "location" && value.length >= 2) {
        const filtered = locationSuggestions.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        newFilteredSuggestions[index] = { location: filtered };
        newShowSuggestions[index] = { location: true };
    } else if (fieldKey === "sensation" && value.length >= 2) {
        const selectedLocation = locationSuggestions.find(
            (item) => item.name === updatedRows[index].location
        );
        const selectedId = selectedLocation ? selectedLocation.id : null;
        const filteredSensation = selectedId ? sensationAndPathology[selectedId] || [] : [];
        const matchedSensations = filteredSensation.filter((sensation) =>
            sensation.toLowerCase().includes(value.toLowerCase())
        );

        newFilteredSuggestions[index] = { sensation: matchedSensations.map((name) => ({ name })) };
        newShowSuggestions[index] = { sensation: true };
    } else {
        newShowSuggestions[index] = { location: false, sensation: false };
    }

    setFilteredSuggestions(newFilteredSuggestions);
    setShowSuggestions(newShowSuggestions);
};
const selectSuggestion = (index, suggestion, field) => {
  const updatedRows = [...rows];
  updatedRows[index][field] = suggestion.name;
  setRows(updatedRows);

  let newShowSuggestions = { ...showSuggestions };
  newShowSuggestions[index] = { location: false, sensation: false };
  setShowSuggestions(newShowSuggestions);
};

  const renderInput = (row, index, field, dropdownField, placeholder) => {
    const isLocationField = field === "location";
    const isSensationField = field === "sensation";

    const selectedLocation = locationSuggestions.find(loc => loc.name === row.location);
    const selectedId = selectedLocation ? selectedLocation.id : null;
    const filteredSensations = selectedId ? sensationAndPathology[selectedId] || [] : [];
    return (
      <div className={`d-flex p-1 align-items-center ${row[field] ? "bg-highlight" : "bg-default"}`}>
      <div className="flex-grow-1 position-relative">
          <input
              type="text"
              className="form-control"
              value={row[field]}
              style={formatText(row[dropdownField])}
              onChange={(e) => handleInputChange(e, index, field)}
              onKeyDown={(e) => {
                  handleKeyPress(e, index);
                  setCurrentPage(0);
                  setselectedoptionvalue(row[field]);
                  setselectedtype(field);
              }}
              placeholder={placeholder}
          />

          {/* Show Location Suggestions */}
          {isLocationField && showSuggestions[index]?.location && (
                <ul className="list-group position-absolute w-100 mt-1 shadow bg-white" style={{ zIndex: 1000 }}>
                    {filteredSuggestions[index]?.location?.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            className="list-group-item list-group-item-action"
                            onClick={() => selectSuggestion(index, suggestion, "location")}
                            style={{ cursor: "pointer" }}
                        >
                            {suggestion.name}
                        </li>
                    ))}
                </ul>
            )}

            {/* Show Sensation Suggestions */}
            {isSensationField && showSuggestions[index]?.sensation && (
                <ul className="list-group position-absolute w-100 mt-1 shadow bg-white" style={{ zIndex: 1000 }}>
                    {filteredSuggestions[index]?.sensation?.map((sensation, idx) => (
                        <li
                            key={idx}
                            className="list-group-item list-group-item-action"
                            onClick={() => selectSuggestion(index, { name: sensation.name }, "sensation")}
                            style={{ cursor: "pointer" }}
                        >
                            {sensation.name}
                        </li>
                    ))}
                </ul>
            )}

          <button
              type="button"
              className="btn position-absolute top-50 me-3 end-0 translate-middle-y p-0 border-0"
              onClick={() => toggleDropdown(index, dropdownField)}
              aria-label="Dropdown"
          >
              {row[dropdownField] || <MdArrowDropDown size={24} />}
          </button>
          {dropdownOpen[index] === dropdownField && (
              <div className="custom-dropdown-menu position-absolute end-0 mt-2">
                  <button className="custom-dropdown-item" onClick={() => handleDropdownSelect(index, dropdownField, "1")}>1</button>
                  <button className="custom-dropdown-item" onClick={() => handleDropdownSelect(index, dropdownField, "2")}>2</button>
                  <button className="custom-dropdown-item" onClick={() => handleDropdownSelect(index, dropdownField, "3")}>3</button>
              </div>
          )}
      </div>
  </div>
    );
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
          <a
            className={`btn btn-${isRecording ? "danger" : "primary-StartRecording"}`}
            onClick={addRow}
          >
            <BsPlus size={30} style={{ marginHorizontal: 10 }} />
            Add Row
          </a>
        </div>
      </div>
<div className="card card-table show-entire">
<table className="table mt-2 mb-5">
        <thead>
          <tr>
            <th>Location</th>
            <th>Sensation & Pathology</th>
            <th>Modalities AF</th>
            <th>Concomitant</th>
            <th>Action</th>
          </tr>
        </thead>
        {rows.map((row, index) => (
    <tr key={index}>
      <td>{renderInput(row, index, "location", "locationValue", "Enter Location")}</td>
      <td>{renderInput(row, index, "sensation", "sensationValue", "Enter Sensation")}</td>
      <td>{renderInput(row, index, "modalities", "modalitiesValue", "Enter Modalities")}</td>
      <td>{renderInput(row, index, "concomitant", "concomitantValue", "Enter Concomitant")}</td>
      <td>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            setRowToDelete(index);
            setIsDeleteModalVisible(true);
          }}
          style={{backgroundColor:"rgb(240, 43, 79)"}}
        >
          
          <BsTrash />
        </button>
      </td>
    </tr>
  ))}
      </table>

      {isModalVisible && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Select Option</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalVisible(false)}
                ></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {currentOptions.map((option) => (
                    <li
                      key={option}
                      className={`list-group-item ${
                        selectedOptions.includes(option) ? "active" : ""
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalVisible(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setIsModalVisible(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

{isDeleteModalVisible && (
         <div
         style={{
           position: "fixed",
           top: 0,
           left: 0,
           width: "100vw",
           height: "100vh",
           backgroundColor: "rgba(0, 0, 0, 0.5)",
           display: "flex",
           alignItems: "center",
           justifyContent: "center",
           zIndex: 1050,
         }}
       >
         <div
           style={{
             backgroundColor: "#fff",
             borderRadius: "12px",
             boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
             width: "400px",
             maxWidth: "90%",
             padding: "20px",
             textAlign: "center",
           }}
         >
           <div style={{ display: "flex", justifyContent: "center", marginBottom: "15px" }}>
             <BsExclamationTriangleFill size={50} color="red" />
           </div>
           <h5 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Confirm Deletion</h5>
           <p style={{ fontSize: "16px", color: "#555" }}>Are you sure you want to delete this row?</p>
           <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
             <button
               style={{
                 backgroundColor: "#6c757d",
                 color: "#fff",
                 border: "none",
                 padding: "10px 15px",
                 borderRadius: "6px",
                 cursor: "pointer",
                 flex: 1,
                 marginRight: "10px",
               }}
               onClick={() => setIsDeleteModalVisible(false)}
             >
               Cancel
             </button>
             <button
               style={{
                 backgroundColor: "#dc3545",
                 color: "#fff",
                 border: "none",
                 padding: "10px 15px",
                 borderRadius: "6px",
                 cursor: "pointer",
                 flex: 1,
               }}
               onClick={confirmDeleteRow}
             >
               Delete
             </button>
           </div>
         </div>
       </div>
      )}
</div>
     
    </div>
  );
};

export default Chiefcomplaintstart;
