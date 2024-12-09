import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import ReactPaginate from 'react-paginate';
import searchnormal from '../../../assest/img/icons/search-normal.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation
const data =[
  {
    id: 1,
    name: 'Andrea Lalema',
    doctor: 'Dr.Bernardo James',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'andrea@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-01.jpg'
  },
  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },

  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },

  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  {
    id: 1,
    name: 'Bhvaik Rupapara',
    doctor: 'Dr.Tushar Joshi',
    treatment: 'Infertility',
    mobile: '+1 23 456890',
    email: 'smith@example.com',
    date: '01.10.2022',
    time: '07:30',
    image: 'avatar-02.jpg'
  },
  // Add more rows as needed
]

const rowsPerPage = 5;
const AppointmentList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/appointments">Appointment</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Appointment List</li>
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
                      <h3>Appointment</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
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
                  {/* <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" className="me-2">
                      <img
                        src={pdf1}
                        alt="PDF Icon 1"
                      />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img
                        src={pdf2}
                        alt="PDF Icon 2"
                      />
                    </a>
                    <a href="javascript:;" className="me-2">
                      <img
                         src={pdf3}
                        alt="PDF Icon 3"
                      />
                    </a>
                    <a href="javascript:;">
                    <img
                         src={pdf4}
                        alt="PDF Icon 3"
                      />
                    </a>
                  </div> */}
                </div>
              </div>

              <div className="table-responsive">
                <table className="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                      
                      <th>Name</th>
                      <th>Consulting Doctor</th>
                      <th>Treatment</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentRows.map(appointment => (
                      <tr key={appointment.id}>
                        
                        <td className="profile-image">
                          <Link to="/profile">
                            
                            {appointment.name}
                          </Link>
                        </td>
                        <td>{appointment.doctor}</td>
                        <td>{appointment.treatment}</td>
                        <td>
                          <a href={`tel:${appointment.mobile}`}>{appointment.mobile}</a>
                        </td>
                        <td>
                          <a href={`mailto:${appointment.email}`}>{appointment.email}</a>
                        </td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                       
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

export default AppointmentList;
