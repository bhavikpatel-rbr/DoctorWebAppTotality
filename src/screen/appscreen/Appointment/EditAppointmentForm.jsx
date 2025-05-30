import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';

const EditAppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: 'Stephen',
    lastName: 'Patellin',
    gender: 'Male',
    mobile: '+1 23 456890',
    email: 'stephen@gmail.com',
    address: '201 , stavan parisar , gota ',
    appointmentDate: '26-11-22',
    fromTime: '07:00 PM',
    toTime: '08:00 PM',
    doctor: 'Select Doctor',
    treatment: 'Blood Pressure',
    notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quriesstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        gender: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="appointments.html">Appointment</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Edit Appointment</li>
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
                      <h4>Patient Details</h4>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        First Name <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        Last Name <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block select-gender">
                      <label className="gen-label">
                        Gender <span className="login-danger">*</span>
                      </label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleChange}
                          />
                          Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={handleChange}
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Mobile <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Email <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>
                        Address <span className="login-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Appointment Details</h4>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms cal-icon">
                      <label>
                        Date of Appointment <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        name="appointmentDate"
                        value={formData.appointmentDate}
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
                          name="toTime"
                          value={formData.toTime}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Consulting Doctor</label>
                      <select
                        className="form-control select"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                      >
                        <option>Select Doctor</option>
                        <option>Dr.Bernardo James</option>
                        <option>Dr.Andrea Lalema</option>
                        <option>Dr.Tushar Joshi</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Treatment</label>
                      <input
                        className="form-control"
                        type="text"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                      />
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
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-top-form">
                      <label className="local-top">
                        Avatar <span className="login-danger">*</span>
                      </label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="avatar"
                          id="file"
                          onChange={handleChange}
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">
                          Choose File
                        </label>
                      </div>
                      {formData.avatar && (
                        <div className="upload-images upload-size">
                          <img
                            src={URL.createObjectURL(formData.avatar)}
                            alt="Avatar Preview"
                          />
                          <div href="javascript:void(0);" className="btn-icon logo-hide-btn">
                            <i className="feather-x-circle"></i>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">
                        Update
                      </button>
                      <button type="button" className="btn btn-primary cancel-form">
                        Cancel
                      </button>
                    </div>
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

export default EditAppointmentForm;
