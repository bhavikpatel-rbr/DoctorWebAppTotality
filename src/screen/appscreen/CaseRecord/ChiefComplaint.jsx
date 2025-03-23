import React, { useState } from 'react';
import axios from 'axios';
import { ChevronRight } from 'react-feather';
import { MdArrowDropDown, MdMic } from 'react-icons/md';
import { BiPlus } from 'react-icons/bi';
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import searchnormal from '../../../img/icons/search-normal.svg'
import { useNavigate } from 'react-router-dom';
import { FaPen, FaTrash } from 'react-icons/fa';

const rowsPerPage = 5;
const data = [
  { id: 1, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 2, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 3, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 4, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 5, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 6, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 7, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 8, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 9, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 10, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 11, name: 'Tushar Joshi', department: 'Otolaryngology', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  // Add more data items here
];
const ChiefCompaint = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [language, setLanguage] = useState("en"); // Default language
  const [rows, setRows] = useState([
    {
      location: "",
      sensation: "",
      modalities: "",
      concomitant: ""
    }
  ]);

  const languages = [
    { code: "en", name: "English (US)" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "zh", name: "Chinese (Mandarin)" },
    { code: "gu", name: "Gujarati" },
    { code: "bn", name: "Bengali" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "ru", name: "Russian" },
    { code: "ar", name: "Arabic" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese (Brazil)" },
    { code: "ta", name: "Tamil" },
    { code: "te", name: "Telugu" },
    { code: "ml", name: "Malayalam" },
    { code: "mr", name: "Marathi" },
    { code: "kn", name: "Kannada" },
    { code: "pa", name: "Punjabi" },
    // Add more languages as needed
  ];

  // Function to translate text using Google Translate API
  const translateText = async (text, targetLanguage) => {
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {
          q: text,
          target: targetLanguage,
          format: 'text'
        },
        {
          params: {
            key: 'YOUR_GOOGLE_API_KEY' // Replace with your Google API key
          }
        }
      );
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error('Translation API error:', error);
      return text; // Fallback to original text if error occurs
    }
  };

  // Handle language change and translate all text inputs
  const handleLanguageChange = async (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);

    // Translate all rows' text inputs
    const translatedRows = await Promise.all(rows.map(async (row) => {
      const translatedRow = {
        location: await translateText(row.location, newLanguage),
        sensation: await translateText(row.sensation, newLanguage),
        modalities: await translateText(row.modalities, newLanguage),
        concomitant: await translateText(row.concomitant, newLanguage),
      };
      return translatedRow;
    }));

    setRows(translatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        location: "",
        sensation: "",
        modalities: "",
        concomitant: ""
      }
    ]);
  };

  const startListening = (inputField, index) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = language; // Use the selected language
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRows(rows.map((row, i) =>
          i === index ? { ...row, [inputField]: transcript } : row
        ));
      };

      recognition.start();
    } else {
      alert("Speech Recognition API is not supported in this browser.");
    }
  };

  const handleDropdownClick = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const removeRow = () => {
    if (selectedRowIndex !== null) {
      setRows(rows.filter((_, index) => index !== selectedRowIndex));
      setSelectedRowIndex(null); // Reset the selected row index
    }
  };

  const handleRowSelect = (index) => {
    setSelectedRowIndex(index);
  };
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/chiefcompaint/${id}`);
  };

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="chief_complaint.html">Case Record</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Patient List</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              <div className="page-table-header mb-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="doctor-table-blk">
                      <h3>Patient List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                        <form>
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              // value={searchQuery}
                              // onChange={handleSearchChange}
                            />
                           
                          </form>
                        </div>
                        <div className="add-group">
                          <div href="add-doctor.html" className="btn btn-primary add-pluss ms-2">
                          <img src={plus} alt="" />
                          </div>
                          <div href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                          <img src={refresh} alt="" />
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
           
            <th>Name</th>
            <th>Department</th>
            <th>Specialization</th>
            <th>Degree</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Joining Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((doctor) => (
            <tr key={doctor.id} onClick={() => handleRowClick(doctor.id)}>
              
              <td className="profile-image">
                <div href="profile.html">{doctor.name}</div>
              </td>
              <td>{doctor.department}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.degree}</td>
              <td><div href="javascript:;">{doctor.mobile}</div></td>
              <td><div href={`mailto:${doctor.email}`}>{doctor.email}</div></td>
              <td>{doctor.joiningDate}</td>
              <td className="text-end">
                          <button 
                            className="btn btn-sm btn-danger me-2" 
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            
                          >
                            <FaPen />
                          </button>
                          {/* <button 
                            className="btn btn-sm btn-danger " 
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            
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
                      <a
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
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for dropdown content */}
      {isModalVisible && (
        <div className="modal fade show align-items-center justify-content-center" style={{ display: 'block', }} tabIndex="-1" role="dialog">
           
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Dropdown Options</h5>
                <button type="button" className="close" onClick={() => setIsModalVisible(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Render the content for dropdown options */}
                <p>{modalContent}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalVisible(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiefCompaint;
