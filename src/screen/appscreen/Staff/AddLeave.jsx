// src/components/AddLeave.js

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg'
const AddLeave = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [leaveType, setLeaveType] = useState('');
    const [leaveStatus, setLeaveStatus] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Implement search functionality
    };
  

  return (
    <div className="content">
     <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="staff-list.html">Leave Request </a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Add Leave Request</li>
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
                      
                    </div>
                  </div>
                
                </div>
              </div>

              <div className="staff-search-table">
                <Form onSubmit={handleSearch}>
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-12">
                      <div className="input-block local-forms">
                        <label>Employee Name</label>
                        <Form.Control
                          type="text"
                          value={employeeName}
                          onChange={(e) => setEmployeeName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12">
                      <div className="input-block local-forms">
                        <label>Leave Type</label>
                        <Form.Control
                          as="select"
                          value={leaveType}
                          onChange={(e) => setLeaveType(e.target.value)}
                        >
                          <option>Select Leave Type</option>
                          <option>Medical Leave</option>
                          <option>Casual Leave</option>
                          <option>Loss of Pay</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12">
                      <div className="input-block local-forms">
                        <label>Leave Status</label>
                        <Form.Control
                          as="select"
                          value={leaveStatus}
                          onChange={(e) => setLeaveStatus(e.target.value)}
                        >
                          <option>Leave Status</option>
                          <option>Pending</option>
                          <option>Approved</option>
                          <option>Declined</option>
                        </Form.Control>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12">
                      <div className="input-block local-forms cal-icon">
                        <label>From</label>
                        <Form.Control
                          type="text"
                          className="datetimepicker"
                          value={fromDate}
                          onChange={(e) => setFromDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-12">
                      <div className="input-block local-forms cal-icon">
                        <label>To</label>
                        <Form.Control
                          type="text"
                          className="datetimepicker"
                          value={toDate}
                          onChange={(e) => setToDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-12 mb-5">
                    <div className="doctor-submit text-end">
                    <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                    <button type="button" className="btn btn-primary cancel-form">Cancel</button>
                    </div>
                  </div>
                  </div>
                </Form>
              </div>

             

             
            </div>
          </div>
        </div>
        
      </div>
      {/* <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Leave Type</Form.Label>
          <Form.Control
            as="select"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          >
            <option>Select Leave Type</option>
            <option>Medical Leave</option>
            <option>Casual Leave</option>
            <option>Loss of Pay</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>To</Form.Label>
          <Form.Control
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <Form.Control
            as="textarea"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form> */}
    </div>
  );
};

export default AddLeave;
