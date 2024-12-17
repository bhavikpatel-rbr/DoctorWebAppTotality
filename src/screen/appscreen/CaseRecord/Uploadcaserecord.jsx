import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import noUploadImage from '../../../img/icons/upload.jfif'; // Replace with the path to your no-upload image

const data = [
  { id: 1, name: 'ONSET / SUDDEN', department: 'Hello', specialization: 'Select Analysed data', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 2, name: 'Physical Description', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 3, name: 'ONSET', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  { id: 4, name: 'SUDDEN', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
  
  // Add more data items here
];

const rowsPerPage = 5;

const UploadCaseRecord = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfFirstRow + rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleDropdownToggle = (doctorId) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [doctorId]: !prev[doctorId],
    }));
  };

  const handleOptionSelect = (doctorId, option) => {
    console.log(`Doctor ID: ${doctorId}, Selected Option: ${option}`);
    // Handle the selected option logic here
    // Close the dropdown after selecting an option
    setDropdownOpen((prev) => ({
      ...prev,
      [doctorId]: false,
    }));
  };

  return (
    <div >
      <div className="row">
        
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center mt-5 ">
          {uploadedFile ? (
            <p>File Uploaded: {uploadedFile.name}</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
              <img
                src={noUploadImage}
                alt="No upload"
                style={{ width: '200px',  margin: '50px 0' ,  }}
              />
             
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
              >
                Upload File
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadCaseRecord;
