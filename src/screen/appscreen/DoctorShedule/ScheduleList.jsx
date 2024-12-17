import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import searchnormal from '../../../img/icons/search-normal.svg';
import plus from '../../../img/icons/plus.svg';
import refresh from '../../../img/icons/re-fresh.svg';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';
import { getdepartmentlistAction, getschedulelistAction } from '../../../reduxtool/app/middleware';
import { departmentEditData, SheduleEditData } from '../../../reduxtool/editstate/editSlice';

const rowsPerPage = 8;
const ScheduleList = () => {

  const schedule = useSelector(appSelector)
   const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
  const router = useNavigate()

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getschedulelistAction())
  }, [dispatch])


  
  

  const filteredDepartment = schedule?.scheduleList?.filter((doctor) =>
  doctor.day_of_week.toLowerCase().includes(searchQuery.toLowerCase()) 
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
    <div >
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
                               value={searchQuery}
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
                        <Link to="/addstaff" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <div
                            onClick={() => dispatch(getschedulelistAction())}
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
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Days</th>
                      <th>From Time</th>
                      <th>To Time</th>
                      {/* <th>Status</th> */}
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {currentRows?.map(doctor => (
                      <tr key={doctor.id}>
                        <td className="profile-image">
                          <Link to="profile.html">Static</Link>
                        </td>
                        <td>
                          Static</td>
                        <td>{doctor.day_of_week}</td>
                        <td>{doctor.start_time}</td>
                        <td>{doctor.end_time}</td>
                        {/* <td>
                          <button className={`custom-badge ${doctor.status === 'Active' ? 'status-green' : 'status-red'}`}>
                            {doctor.status}
                          </button>
                        </td> */}
                        
                        <td className="text-end">
                          <button 
                            className="btn btn-sm btn-danger me-2" 
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            onClick={() => {
                                                          router('/editschedule')
                                                          dispatch(SheduleEditData(doctor))
                                                        }}
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
