import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg';
import refresh from '../../../img/icons/re-fresh.svg';
import plus from '../../../img/icons/plus.svg';

const AttendanceSheet = () => {
  // Sample attendance data for demonstration
  const [attendanceData] = useState([
    { name: 'Andrea Lalema', attendance: ['P', 'P', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'A', 'A', 'P', 'P', 'P'] },
    { name: 'John Doe', attendance: ['P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A'] },
    { name: 'Jane Smith', attendance: ['P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'A'] },
    { name: 'Andrea Lalema', attendance: ['P', 'P', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'A', 'A', 'P', 'P', 'P'] },
    { name: 'John Doe', attendance: ['P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A'] },
    { name: 'Jane Smith', attendance: ['P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'A'] },
    { name: 'Andrea Lalema', attendance: ['P', 'P', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'A', 'A', 'P', 'P', 'P'] },
    { name: 'John Doe', attendance: ['P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'A', 'A', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A'] },
    { name: 'Jane Smith', attendance: ['P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'P', 'A', 'A', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'A', 'P', 'P', 'A', 'P', 'P', 'P', 'P', 'P', 'A', 'P', 'P', 'A'] },
    // Add more employees as needed
  ]);

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="staff-list.html">Staffs</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Attendance Sheet</li>
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
                      <h3>Attendance Sheet</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                            />
                            <div className="btn">
                              <img
                                src={searchnormal}
                                alt=""
                              />
                            </div>
                          </form>
                        </div>
                        <div className="add-group">
                         
                          <div href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                            <img src={refresh} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive mt-3">
                <table className="table border-0 custom-table attent-table datatable mb-0">
                  <thead>
                    <tr>
                      <th style={{textAlign:"left"}}>Employee</th>
                      <th>01</th>
                      <th>02</th>
                      <th>03</th>
                      <th>04</th>
                      <th>05</th>
                      <th>06</th>
                      <th>07</th>
                      <th>08</th>
                      <th>09</th>
                      <th>10</th>
                      <th>11</th>
                      <th>12</th>
                      <th>13</th>
                      <th>14</th>
                      <th>15</th>
                      <th>16</th>
                      <th>17</th>
                      <th>18</th>
                      <th>19</th>
                      <th>20</th>
                      <th>21</th>
                      <th>22</th>
                      <th>23</th>
                      <th>24</th>
                      <th>25</th>
                      <th>26</th>
                      <th>27</th>
                      <th>28</th>
                      <th>29</th>
                      <th>30</th>
                      <th>31</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.map((employee, index) => (
                      <tr key={index}>
                        <td className="month-table"  >
                          <h5 style={{textAlign:"left"}}>{employee.name}</h5>
                        </td>
                        {employee.attendance.map((status, dayIndex) => (
                          <td key={dayIndex}>
                            <span className={`attent-status ${status === 'P' ? 'present-table' : 'absent-table'}`}>
                              {status === 'P' ? <i className="feather-check"></i> : 'X'}
                            </span>
                          </td>
                        ))}
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

export default AttendanceSheet;
