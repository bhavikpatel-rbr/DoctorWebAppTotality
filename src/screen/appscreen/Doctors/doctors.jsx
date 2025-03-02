import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg';
import plus from '../../../img/icons/plus.svg';
import refresh from '../../../img/icons/re-fresh.svg';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';
import { allDoctorsUsersAction } from '../../../reduxtool/app/middleware';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { doctorEditData } from '../../../reduxtool/editstate/editSlice';

const rowsPerPage = 25;
const DoctorList = () => {
  const users = useSelector(appSelector);
  const router = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allDoctorsUsersAction());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const filteredDoctors = users?.doctorList?.filter((doctor) =>
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
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="doctors.html">Doctors</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Doctors List</li>
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
                      <h3>Doctors List</h3>
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
                            {/* <div className="btn">
                              <img src={searchnormal} alt="Search" />
                            </div> */}
                          </form>
                        </div>
                        <div className="add-group">
                          <Link to="/adddoctor" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <div
                            onClick={() => dispatch(allDoctorsUsersAction())}
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
                        <th style={{textAlign:'left'}}>Name</th>
                        <th>Department</th>
                        <th>Experience</th>
                        <th>Specialization</th>
                        
                        <th>Mobile</th>
                        <th style={{textAlign:'left'}}>Email</th>
                        
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRows?.map((doctor) => (
                        <tr key={doctor?.id}>
                          <td className="profile-image" style={{textAlign:'left'}}>
                            <div href="profile.html">{doctor?.firstname}&nbsp;{doctor?.lastname}</div>
                          </td>
                          <td >{doctor?.department}</td>
                          <td>{doctor?.years_of_experience}</td>
                          <td>{doctor?.specialization}</td>
                         
                          <td><div href="javascript:;">{doctor?.phone}</div></td>
                          <td><div style={{textAlign:'left'}}   href={`mailto:${doctor?.email}`}>{doctor?.email}</div></td>
                          
                          <td className="text-end">
                            <button
                              className="btn btn-sm btn-danger me-2"
                              style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                              onClick={() => {
                                router('/editdoctor');
                                dispatch(doctorEditData(doctor));
                              }}
                            >
                              <FaPen />
                            </button>
                            {/* <button
                              className="btn btn-sm btn-danger "
                              style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                              onClick={() => console.log('Delete', doctor?.id)}
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

export default DoctorList;
