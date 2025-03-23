import React, { useState } from 'react';
import { ChevronRight, FileText } from 'react-feather';

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    address: '',
    appointmentDate: '',
    fromTime: '',
    toTime: '',
    doctor: '',
    treatment: '',
    notes: '',
    avatar: null,
  });
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const languagePDFs = {
    english: '/pdfs/dummy.pdf',
    gujarati: '/pdfs/dummy.pdf',
    hindi: '/pdfs/dummy.pdf',
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleRadioChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
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
              <li className="breadcrumb-item active">Book Appointment</li>
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
                        Gender<span className="login-danger">*</span>
                      </label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={handleRadioChange}
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
                            onChange={handleRadioChange}
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
                        <option value="">Select Doctor</option>
                        <option value="Dr.Bernardo James">Dr.Bernardo James</option>
                        <option value="Dr.Andrea Lalema">Dr.Andrea Lalema</option>
                        <option value="Dr.Tushar Joshi">Dr.Tushar Joshi</option>
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

                 
                  <div>
      <div className="form-heading">
        <h4>Select Language for PDF Form</h4>
      </div>

      <div className="input-block local-forms">
        <label>Select Language</label>
        <select className="form-control" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">Choose Language</option>
          <option value="english">English</option>
          <option value="gujarati">Gujarati</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>

      {selectedLanguage && (
         <div className="pdf-container mt-3 text-center">
         <a href={languagePDFs[selectedLanguage]} download className="pdf-download">
           <FileText size={50} color="red" /> {/* Small PDF icon */}
           <p>Download PDF</p>
         </a>
       </div>
      )}
    </div>
                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">
                        Submit
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

export default BookAppointmentForm;
