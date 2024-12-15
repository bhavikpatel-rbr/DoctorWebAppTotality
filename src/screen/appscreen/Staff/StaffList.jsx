import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
import pdf1 from '../../../img/icons/pdf-icon-01.svg'
import pdf2 from '../../../img/icons/pdf-icon-02.svg'
import pdf3 from '../../../img/icons/pdf-icon-03.svg'
import pdf4 from '../../../img/icons/pdf-icon-04.svg'
import plus from '../../../img/icons/plus.svg'
import { FaPen, FaTrash } from 'react-icons/fa';
import refresh from '../../../img/icons/re-fresh.svg'
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';
import { allStaffUsersAction } from '../../../reduxtool/app/middleware';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { staffEditData } from '../../../reduxtool/editstate/editSlice';
const StaffList = () => {

  const Staff = useSelector(appSelector)
  const rowsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
  const router = useNavigate()

  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(allStaffUsersAction())
  }, [dispatch])

  

  
  const filteredDepartment = Staff?.Stafflist?.filter((doctor) =>
    `${doctor.firstname} ${doctor.lastname}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredDepartment?.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(filteredDepartment?.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="staff-list.html">Staffs </a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Staff List</li>
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
                      <h3>Staffs List</h3>
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
                        <Link to="/addstaff" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <div
                            onClick={() => dispatch(allStaffUsersAction())}
                            className="btn btn-primary doctor-refresh ms-2"
                          >
                            <img src={refresh} alt="Refresh" />
                          </div>
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
                      <th>Department</th>
                      <th>Specialization</th>
                     
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Joining Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map through staff data here */}
                    {currentRows?.map((staff, index) => (
                      <tr key={index}>
                        <td className="profile-image">
                          <a href="profile.html">
                            {/* <img
                              width="28"
                              height="28"
                              src={staff.profileImage}
                              className="rounded-circle m-r-5"
                              alt=""
                            /> */}
                            {staff.firstname}&nbsp;{staff.lastname}
                          </a>
                        </td>
                        <td>{staff.department}</td>
                        <td>{staff.specialization}</td>
                       
                        <td>
                          <a href="javascript:;">{staff.phone}</a>
                        </td>
                        <td>
                          <a href={`mailto:${staff.email}`} className="__cf_email__">
                            {staff.email}
                          </a>
                        </td>
                        <td>{staff.created_at}</td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm btn-danger me-2"
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            onClick={() => {
                              router('/editstaff');
                              dispatch(staffEditData(staff));
                            }}
                          >
                            <FaPen />
                          </button>
                          {/* <button
                            className="btn btn-sm btn-danger "
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                          // onClick={() => console.log('Delete', doctor.id)}
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

// Sample staff data (you would replace this with actual data)
const staffData = [
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },

  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  {
    profileImage: 'assets/img/profiles/avatar-01.jpg',
    name: 'Andrea Lalema',
    department: 'Otolaryngology',
    specialization: 'Infertility',
    degree: 'MBBS, MS',
    mobile: '+1 23 456890',
    email: 'andrea.lalema@example.com',
    joiningDate: '01.10.2022'
  },
  // Add more staff objects here
];

export default StaffList;
