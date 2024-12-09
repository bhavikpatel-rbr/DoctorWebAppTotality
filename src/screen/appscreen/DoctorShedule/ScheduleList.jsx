import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import searchnormal from '../../../img/icons/search-normal.svg';
import plus from '../../../img/icons/plus.svg';
import refresh from '../../../img/icons/re-fresh.svg';
import { FaPen, FaTrash } from 'react-icons/fa';
const ScheduleList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for doctors
  const [data] = useState([
    {
      id: 1,
      name: 'Dr. Andrea Lalema',
      department: 'Cardiology',
      availableDays: 'Mon - Sun',
      availableTime: '09:00 AM - 06:00 PM',
      status: 'Active',
    },
    {
      id: 1,
      name: 'Dr. John Doe',
      department: 'Neurology',
      availableDays: 'Mon - Fri',
      availableTime: '10:00 AM - 05:00 PM',
      status: 'Active',
    },
    {
      id: 1,
      name: 'Dr. Jane Smith',
      department: 'Pediatrics',
      availableDays: 'Mon - Sat',
      availableTime: '08:00 AM - 04:00 PM',
      status: 'Inactive',
    },
    {
      id: 1,
      name: 'Dr. Jane Smith',
      department: 'Pediatrics',
      availableDays: 'Mon - Sat',
      availableTime: '08:00 AM - 04:00 PM',
      status: 'Inactive',
    },
    {
      id: 1,
      name: 'Dr. Jane Smith',
      department: 'Pediatrics',
      availableDays: 'Mon - Sat',
      availableTime: '08:00 AM - 04:00 PM',
      status: 'Inactive',
    },
    {
      id: 1,
      name: 'Dr. Jane Smith',
      department: 'Pediatrics',
      availableDays: 'Mon - Sat',
      availableTime: '08:00 AM - 04:00 PM',
      status: 'Inactive',
    },
    {
      id: 1,
      name: 'Dr. John Doe',
      department: 'Neurology',
      availableDays: 'Mon - Fri',
      availableTime: '10:00 AM - 05:00 PM',
      status: 'Active',
    },
    {
      id: 1,
      name: 'Dr. John Doe',
      department: 'Neurology',
      availableDays: 'Mon - Fri',
      availableTime: '10:00 AM - 05:00 PM',
      status: 'Active',
    },
    // Add more doctors as needed
  ]);
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="schedule.html">Doctor Schedule</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Schedule List</li>
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
                      <h3>Schedule List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              value={searchTerm}
                              onChange={handleSearchChange}
                            />
                            <a className="btn">
                              <img
                                src={searchnormal}
                                alt="Search"
                              />
                            </a>
                          </form>
                        </div>
                        <div className="add-group">
                          <Link to="add-doctor.html" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
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
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Available Days</th>
                      <th>Available Time</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentRows.map(doctor => (
                      <tr key={doctor.id}>
                        <td className="profile-image">
                          <Link to="profile.html">{doctor.name}</Link>
                        </td>
                        <td>{doctor.department}</td>
                        <td>{doctor.availableDays}</td>
                        <td>{doctor.availableTime}</td>
                        <td>
                          <button className={`custom-badge ${doctor.status === 'Active' ? 'status-green' : 'status-red'}`}>
                            {doctor.status}
                          </button>
                        </td>
                        
                        <td className="text-end">
                          <button 
                            className="btn btn-sm btn-danger me-2" 
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            
                          >
                            <FaPen />
                          </button>
                          <button 
                            className="btn btn-sm btn-danger " 
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {/* End of repeated <tr> block */}
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

export default ScheduleList;
