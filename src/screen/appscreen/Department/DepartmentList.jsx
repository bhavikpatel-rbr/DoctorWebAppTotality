import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { ChevronRight } from 'react-feather';
import plus from '../../../img/icons/plus.svg'
import { FaPen, FaTrash } from 'react-icons/fa';
import refresh from '../../../img/icons/re-fresh.svg'
import searchnormal from '../../../img/icons/search-normal.svg'
import { useDispatch } from 'react-redux';
import { getdepartmentlist, getdepartmentlistAction } from '../../../reduxtool/app/middleware';
import { appSelector } from '../../../reduxtool/app/appslice';
import { useSelector } from 'react-redux';
import { departmentEditData } from '../../../reduxtool/editstate/editSlice';


const DepartmentList = () => {
  // Sample data
  
  const department = useSelector(appSelector)
  const rowsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
  const router = useNavigate()

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getdepartmentlistAction())
  }, [dispatch])

  

  const filteredDepartment = department?.departmentList?.filter((doctor) =>
  doctor.department_name.toLowerCase().includes(searchQuery.toLowerCase()) 
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
                <Link to="/departments">Department</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Department List</li>
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
                      <h3>Department List</h3>
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
                          <Link to="/adddepartment" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <div
                            onClick={() => dispatch(getdepartmentlistAction())}
                            className="btn btn-primary doctor-refresh ms-2"
                          >
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

                      <th>Department</th>
                      <th>Department Head</th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRows?.map(department => (
                      <tr key={department.id}>
                        <td>{department.department_name}</td>
                        <td className="profile-image">
                          <Link to="/profile">
                            static
                          </Link>
                        </td>
                        <td>static</td>
                        <td>{department.created_at}</td>
                        <td>
                          <button className={`custom-badge ${department.status === 'Active' ? 'status-green' : 'status-green'}`}>
                            {/* 'status-pink' */}
                            Active
                          </button>
                        </td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm btn-danger me-2"
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            onClick={() => {
                              router('/editdepartment')
                              dispatch(departmentEditData(department))
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

export default DepartmentList;
