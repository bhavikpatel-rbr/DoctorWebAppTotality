import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';

const EditSchedule = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    doctorName: 'Dr.Tushar Joshi',
    department: '',
    availableDays: '28-11-22',
    fromTime: '09:00',
    toTime: '06:00',
    notes: '',
    status: 'Active'
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'radio' ? (checked ? value : prevState.status) : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="schedule.html">Doctor Schedule</a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Edit Schedule</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Edit Schedule</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Doctor Name <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Department <span className="login-danger">*</span>
                      </label>
                      <select
                        className="form-control select"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <option value="">Choose Department</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Urology">Urology</option>
                        <option value="Radiology">Radiology</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms cal-icon">
                      <label>
                        Available Days <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        name="availableDays"
                        value={formData.availableDays}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        From <span className="login-danger">*</span>
                      </label>
                      <div className="time-icon">
                        <input
                          type="text"
                          className="form-control"
                          id="datetimepicker3"
                          name="fromTime"
                          value={formData.fromTime}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        To <span className="login-danger">*</span>
                      </label>
                      <div className="time-icon">
                        <input
                          type="text"
                          className="form-control"
                          id="datetimepicker4"
                          name="toTime"
                          value={formData.toTime}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>
                        Notes <span className="login-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        cols="30"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block select-gender">
                      <label className="gen-label">
                        Status <span className="login-danger">*</span>
                      </label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="Active"
                            className="form-check-input"
                            checked={formData.status === 'Active'}
                            onChange={handleChange}
                          />
                          Active
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="In Active"
                            className="form-check-input"
                            checked={formData.status === 'In Active'}
                            onChange={handleChange}
                          />
                          In Active
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="doctor-submit text-end">
                    <button type="submit" className="btn btn-primary submit-form me-2">
                      Update Schedule
                    </button>
                    <button type="button" className="btn btn-primary cancel-form">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSchedule;
