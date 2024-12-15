import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Form } from 'react-bootstrap';
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import searchnormal from '../../../img/icons/search-normal.svg'
import { ChevronRight } from 'react-feather';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';
import { allPatientsUsersAction, getAllUserAction } from '../../../reduxtool/app/middleware';
import { useDispatch } from 'react-redux';

const rowsPerPage = 8;
const PatientList = () => {
   const users = useSelector(appSelector);
   const dispatch = useDispatch();

   console.log("users",users);
   console.log('=====================patientList===============');
     console.log(users?.patientList);
     console.log('=====================patientList===============');
    const router = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
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
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/patients">Patients</Link>
              </li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
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
                              value={searchQuery}
                              onChange={handleSearchChange}
                            />
                            <a className="btn">
                              <img src={searchnormal} alt="Search" />
                            </a>
                          </form>
                        </div>
                        <div className="add-group">
                          <a href="add-doctor.html" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </a>
                          <a href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                            <img src={refresh} alt="" />
                          </a>
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
                      <th>City</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Joining Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows?.map(doctor => (
                      <tr key={doctor.id}>

                        <td className="profile-image">
                          <a href="profile.html">{doctor.firstname}&nbsp;{doctor.lastname}</a>
                        </td>
                        <td>{doctor.department}</td>
                        <td>{doctor.specialization}</td>
                        <td>{doctor.city}</td>
                        <td><a href="javascript:;">{doctor.phone}</a></td>
                        <td><a href={`mailto:${doctor.email}`}>{doctor.email}</a></td>
                        <td>{doctor.created_at}</td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm btn-danger me-2"
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            onClick={() => console.log('Edit', doctor.id)}
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
    </div>
  );
};

export default PatientList;
