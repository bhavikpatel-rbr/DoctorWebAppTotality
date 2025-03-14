import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import refresh from '../../../img/icons/re-fresh.svg'
import { Link } from 'react-router-dom';
const data = [
    { id: 1, name: 'ONSET / SUDDEN', department: 'Hello', specialization: 'Select Analysed data', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 2, name: 'Physical Description', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 3, name: 'ONSET', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    { id: 4, name: 'SUDDEN', department: 'Hello', specialization: 'Infertility', degree: 'MBBS, MS', mobile: '9758698568', email: 'tushar@example.com', joiningDate: '01.10.2022', imgSrc: 'avatar-01.jpg' },
    
    // Add more data items here
  ];
  
  const rowsPerPage = 25;
const CaseRecordAdd = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const totalPages = Math.ceil(data.length / rowsPerPage);

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
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="doctors.html">Case Record</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Case Record List</li>
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
                      <h3>Case Record List</h3>
                      <div className="doctor-search-blk">
                        
                        <div className="add-group">
                          <Link to={'/caserecordinit'} href="add-doctor.html" className="btn btn-primary add-pluss ms-2">
                          <img src={plus} alt="" />
                          </Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>

              <div className="table-responsive">
              <table className="table table-hover table-striped custom-table mb-0">
      <tbody>
        {currentRows.map((doctor) => (
          <tr key={doctor.id} className="align-middle">
            <td className="profile-image ">
              <div href="profile.html" >ONSET / SUDDEN</div>
            </td>
            <td className="text-muted">Alcohol</td>
            <td
              className="text-info cursor-pointer bordered-cell m-2 "
             
              onClick={() => handleDropdownToggle(doctor.id)}
            >
              Select Analysed Data <FontAwesomeIcon icon={faCaretDown} />
              {dropdownOpen[doctor.id] && (
                <div className="dropdown-menu-custom show">
                  <button
                    className="dropdown-item"
                    onClick={() => handleOptionSelect(doctor.id, "Heart")}
                  >
                    Heart
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleOptionSelect(doctor.id, "Head")}
                  >
                    Head
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => handleOptionSelect(doctor.id, "Back")}
                  >
                    Back
                  </button>
                </div>
              )}
            </td>
            <td
              className="text-warning cursor-pointer"
              onClick={() => handleDropdownToggle(doctor.id)}
            >
              High
            </td>
            <td className="text-end">
              <button className="btn btn-primary btn-sm m-1">Add Analysis</button>
              <button className="btn btn-danger btn-sm m-1">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
     
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseRecordAdd;
