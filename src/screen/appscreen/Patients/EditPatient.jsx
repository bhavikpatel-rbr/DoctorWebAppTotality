import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';

const EditPatient = () => {
  const [formData, setFormData] = useState({
    firstName: 'Bhavik',
    lastName: 'Patel',
    userName: 'Bhavik Patel',
    mobile: '+1 23 456890',
    email: 'example@email.com',
    password: 'password',
    confirmPassword: 'password',
    dob: '24-11-2022',
    gender: 'Male',
    education: 'M.B.B.S, M.S.',
    designation: 'Physician',
    department: 'Orthopedics',
    address: '201 , stavan parisar , gota ',
    city: 'Alaska',
    country: 'Usa',
    state: 'Alaska',
    postalCode: '91403',
    biography: 'Lorem ipsum dolor sit amet...',
    status: 'Active',
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="patients.html">Patients</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Edit Patient</li>
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
                      <h4>Patients Details</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>First Name <span className="login-danger">*</span></label>
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
                      <label>Last Name <span className="login-danger">*</span></label>
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
                    <div className="input-block local-forms">
                      <label>User Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Mobile <span className="login-danger">*</span></label>
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
                      <label>Email <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Confirm Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms cal-icon">
                      <label>Date Of Birth <span className="login-danger">*</span></label>
                      <input
                        className="form-control datetimepicker"
                        type="text"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Gender <span className="login-danger">*</span></label>
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
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Education <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Designation <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Department <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <option>Select Department</option>
                        <option>Orthopedics</option>
                        <option>Radiology</option>
                        <option>Dentist</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Address <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        rows="3"
                        cols="30"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>City <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      >
                        <option>Select City</option>
                        <option>Alaska</option>
                        <option>California</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Country <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option>Select Country</option>
                        <option>Usa</option>
                        <option>Uk</option>
                        <option>Italy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>State/Province <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      >
                        <option>Select State</option>
                        <option>Alaska</option>
                        <option>California</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Postal Code <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Start Biography <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        rows="3"
                        cols="30"
                        name="biography"
                        value={formData.biography}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-top-form">
                      <label className="local-top">Avatar <span className="login-danger">*</span></label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="avatar"
                          id="file"
                          onChange={handleChange}
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">Choose File</label>
                      </div>
                      {formData.avatar &&
                      <div className="upload-images upload-size">
                        {formData.avatar && <img src={URL.createObjectURL(formData.avatar)} alt="Avatar" />}
                        <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
                          <i className="feather-x-circle"></i>
                        </a>
                      </div>
}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Status <span className="login-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            className="form-check-input"
                            value="Active"
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
                            className="form-check-input"
                            value="Inactive"
                            checked={formData.status === 'Inactive'}
                            onChange={handleChange}
                          />
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                      <button type="button" className="btn btn-primary cancel-form">Cancel</button>
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

export default EditPatient;
