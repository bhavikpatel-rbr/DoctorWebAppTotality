import React, { useState } from 'react';
import { Dropdown, Form, Table } from 'react-bootstrap'; // Import Bootstrap components if needed
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
import plus from '../../../img/icons/plus.svg'
import refresh from '../../../img/icons/re-fresh.svg'
import { FaPen, FaTrash } from 'react-icons/fa';
const data = [
  {
    id: 1,
    employeeName: 'Tushar Joshi',
    leaveType: 'Medical Leave',
    fromDate: '01.10.2024',
    toDate: '03.10.2024',
    noOfDays: 3,
    reason: 'Not feeling well',
    status: 'Approved',
  },
  {
    id: 2,
    employeeName: 'Priya Sharma',
    leaveType: 'Casual Leave',
    fromDate: '05.10.2024',
    toDate: '06.10.2024',
    noOfDays: 2,
    reason: 'Personal Work',
    status: 'Pending',
  },
  {
    id: 3,
    employeeName: 'Rahul Verma',
    leaveType: 'Loss of Pay',
    fromDate: '10.10.2024',
    toDate: '11.10.2024',
    noOfDays: 2,
    reason: 'Emergency',
    status: 'Declined',
  },
  {
    id: 4,
    employeeName: 'Anita Kumar',
    leaveType: 'Medical Leave',
    fromDate: '12.10.2024',
    toDate: '14.10.2024',
    noOfDays: 3,
    reason: 'Surgery',
    status: 'Approved',
  },
  {
    id: 5,
    employeeName: 'Ravi Mehta',
    leaveType: 'Casual Leave',
    fromDate: '15.10.2024',
    toDate: '17.10.2024',
    noOfDays: 3,
    reason: 'Family Function',
    status: 'Pending',
  },
  {
    id: 6,
    employeeName: 'Sneha Desai',
    leaveType: 'Loss of Pay',
    fromDate: '20.10.2024',
    toDate: '21.10.2024',
    noOfDays: 2,
    reason: 'Travel',
    status: 'Approved',
  },
  {
    id: 7,
    employeeName: 'Karan Singh',
    leaveType: 'Medical Leave',
    fromDate: '22.10.2024',
    toDate: '23.10.2024',
    noOfDays: 2,
    reason: 'Check-up',
    status: 'Declined',
  },
  {
    id: 8,
    employeeName: 'Neha Patel',
    leaveType: 'Casual Leave',
    fromDate: '25.10.2024',
    toDate: '27.10.2024',
    noOfDays: 3,
    reason: 'Vacation',
    status: 'Approved',
  },
  {
    id: 9,
    employeeName: 'Sanjay Gupta',
    leaveType: 'Loss of Pay',
    fromDate: '28.10.2024',
    toDate: '29.10.2024',
    noOfDays: 2,
    reason: 'Family Issues',
    status: 'Pending',
  },
  {
    id: 10,
    employeeName: 'Anjali Roy',
    leaveType: 'Medical Leave',
    fromDate: '30.10.2024',
    toDate: '31.10.2024',
    noOfDays: 2,
    reason: 'Flu',
    status: 'Approved',
  },
  // Add more leave request items here if needed
];;

const rowsPerPage = 5;
const LeaveRequest = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [leaveStatus, setLeaveStatus] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
 const [searchQuery, setSearchQuery] = useState('');
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
  };

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
              <li className="breadcrumb-item"><div href="staff-list.html">Staffs </div></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Leave Request</li>
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
                      <h3>Leave Request</h3>
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
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <div href="javascript:;" className="me-2">
                      <img src="assets/img/icons/pdf-icon-01.svg" alt="" />
                    </div>
                    <div href="javascript:;" className="me-2">
                      <img src="assets/img/icons/pdf-icon-02.svg" alt="" />
                    </div>
                    <div href="javascript:;" className="me-2">
                      <img src="assets/img/icons/pdf-icon-03.svg" alt="" />
                    </div>
                    <div href="javascript:;">
                      <img src="assets/img/icons/pdf-icon-04.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
        <table className="table border-0 custom-table comman-table datatable mb-0">
          <thead>
            <tr>
              
            <th>Employee Name</th>
                      <th>Leave Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>No of days</th>
                      <th>Reason</th>
                      <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map(request  => (
             <tr key={request.id}>
             
             <td className="profile-image">
               <div href="profile.html">{request.employeeName}</div>
             </td>
             <td>{request.leaveType}</td>
             <td>{request.fromDate}</td>
             <td>{request.toDate}</td>
             <td>{request.noOfDays} Days</td>
             <td>{request.reason}</td>
             <td>
  <Dropdown className="action-label">
    <Dropdown.Toggle
      className={`custom-badge status-${request.status.toLowerCase()}`}
      id={`dropdown-custom-components-${request.id}`}
      style={{ minWidth: '120px' }} // Set min-width for the toggle button
    >
      {request.status}
    </Dropdown.Toggle>
    <Dropdown.Menu style={{ minWidth: '120px' }}> {/* Set min-width for the dropdown menu */}
      <Dropdown.Item
        href="javascript:;"
        style={{
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s', // Smooth background color transition
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')} // Change background color on hover
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')} // Reset background color
      >
        New
      </Dropdown.Item>
      <Dropdown.Item
        href="javascript:;"
        style={{
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s', // Smooth background color transition
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        Pending
      </Dropdown.Item>
      <Dropdown.Item
        href="javascript:;"
        style={{
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s', // Smooth background color transition
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        Approved
      </Dropdown.Item>
      <Dropdown.Item
        href="javascript:;"
        style={{
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'background-color 0.3s', // Smooth background color transition
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        Declined
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</td>
<td className="text-end">
                          <button 
                            className="btn btn-sm btn-danger me-2" 
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            onClick={() => console.log('Edit', request.id)}
                          >
                            <FaPen />
                          </button>
                          <button 
                            className="btn btn-sm btn-danger " 
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            onClick={() => console.log('Delete', request.id)}
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
                      <div
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
                      </div>
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

export default LeaveRequest;
