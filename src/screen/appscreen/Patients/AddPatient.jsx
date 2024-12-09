import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { registerPatientAction } from '../../../reduxtool/app/middleware'

const AddPatient = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmpassword: '',
      firstname: '',
      lastname: '',
      gender: '',
      birth_date: '',
      patient_name: '',
      specialization: '',
      education: '',
      designation: '',
      department: '',
      patient_phone: '',
      patient_email: '',
      license_number: '',
      years_of_experience: '',
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
      operating_hours: '',
      services: '',
      latitude: '',
      longitude: '',
      patient_type: '',
      clinic_id: '',
      doctor_id: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      password: Yup.string().required('Password is required'),
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      gender: Yup.string().required('Gender is required'),
      birth_date: Yup.date().required('Birth date is required'),
      patient_name: Yup.string().required('Patient name is required'),
      specialization: Yup.string().required('Specialization is required'),
      education: Yup.string().required('Education is required'),
      designation: Yup.string().required('Designation is required'),
      department: Yup.string().required('Department is required'),
      patient_phone: Yup.string().required('Patient phone is required'),
      patient_email: Yup.string().email('Invalid email format').required('Patient email is required'),
      license_number: Yup.string().required('License number is required'),
      years_of_experience: Yup.number().required('Years of experience is required'),
      address_line_1: Yup.string().required('Address line 1 is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      postal_code: Yup.string().required('Postal code is required'),
      country: Yup.string().required('Country is required'),
      operating_hours: Yup.string().required('Operating hours are required'),
      services: Yup.string().required('Services are required'),
      latitude: Yup.number().required('Latitude is required'),
      longitude: Yup.number().required('Longitude is required'),
      patient_type: Yup.string().required('Patient type is required'),
    }),

    onSubmit: (values) => {
      const payload = {
        username: values?.username,
        email: values?.email,
        phone: values?.phone,
        password: values?.password,
        firstname: values?.firstname,
        lastname: values?.lastname,
        gender: values?.gender,
        birth_date: values?.birth_date,
        patient_name: values?.patient_name,
        specialization: values?.specialization,
        education: values?.education,
        designation: values?.designation,
        department: values?.department,
        patient_phone: values?.phone,
        patient_email: values?.patient_email,
        license_number: values?.license_number,
        years_of_experience: values?.years_of_experience,
        address_line_1: values?.address_line_1,
        address_line_2: values?.address_line_2,
        city: values?.city,
        state: values?.state,
        postal_code: values?.postal_code,
        country: values?.country,
        operating_hours: values?.operating_hours,
        services: values?.services,
        latitude: values?.latitude,
        longitude: values?.longitude,
        patient_type: values?.patient_type,
        clinic_id: 1,
        doctor_id: 2,

      };
      dispatch(registerPatientAction(payload));
    }
  });

  console.log(formik.errors);

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="patients.html">Patients</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
              <li className="breadcrumb-item active">Add Patient</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Patient Details</h4>
                    </div>
                  </div>
                  {/* first name  */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>First Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        value={formik.values.firstname}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.firstname && formik.errors.firstname ? <div className="text-danger">{formik.errors.username}</div> : null}
                    </div>
                  </div>
                  {/* Last name  */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Last Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        value={formik.values.lastname}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.lastname && formik.errors.lastname ? <div className="text-danger">{formik.errors.lastname}</div> : null}
                    </div>
                  </div>

                  {/* Username */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>User Name <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.username && formik.errors.username ? <div className="text-danger">{formik.errors.username}</div> : null}
                    </div>
                  </div>
                  {/* Email */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                    </div>
                  </div>
                  {/* Mobile */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Mobile <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.phone && formik.errors.phone ? <div className="text-danger">{formik.errors.phone}</div> : null}
                    </div>
                  </div>
                  {/* Date Of Birth */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Date Of Birth</label>
                      <input
                        type="date"
                        name="birth_date"
                        value={formik.values.birth_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.birth_date && formik.errors.birth_date ? <div className="text-danger">{formik.errors.birth_date}</div> : null}
                    </div>
                  </div>


                  {/* Password */}
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="confirmpassword"
                        value={formik.values.confirmpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className="text-danger">{formik.errors.confirmpassword}</div> : null}
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
                            checked={formik.values.gender === 'Male'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                            checked={formik.values.gender === 'Female'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                        value={formik.values.education}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.education && formik.errors.education ? <div className="text-danger">{formik.errors.education}</div> : null}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Designation <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="designation"
                        value={formik.values.designation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.designation && formik.errors.designation ? <div className="text-danger">{formik.errors.designation}</div> : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Department <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="department"
                        value={formik.values.department}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option>Select Department</option>
                        <option>Orthopedics</option>
                        <option>Radiology</option>
                        <option>Dentist</option>
                      </select>
                      {formik.touched.department && formik.errors.department ? <div className="text-danger">{formik.errors.department}</div> : null}
                    </div>
                  </div>

                  <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>Address <span className="login-danger">*</span></label>
                      <textarea
                        className="form-control"
                        rows="3"
                        cols="30"
                        name="address_line_1"
                        value={formik.values.address_line_1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.address_line_1 && formik.errors.address_line_1 ? <div className="text-danger">{formik.errors.address_line_1}</div> : null}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>City <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option>Select City</option>
                        <option>Alaska</option>
                        <option>California</option>
                      </select>
                      {formik.touched.city && formik.errors.city ? <div className="text-danger">{formik.errors.city}</div> : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Country <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option>Select Country</option>
                        <option>Usa</option>
                        <option>Uk</option>
                        <option>Italy</option>
                      </select>
                      {formik.touched.country && formik.errors.country ? <div className="text-danger">{formik.errors.country}</div> : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>State/Province <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option>Select State</option>
                        <option>Alaska</option>
                        <option>California</option>
                      </select>
                      {formik.touched.state && formik.errors.state ? <div className="text-danger">{formik.errors.state}</div> : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-3">
                    <div className="input-block local-forms">
                      <label>Postal Code <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="postal_code"
                        value={formik.values.postal_code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.postal_code && formik.errors.postal_code ? <div className="text-danger">{formik.errors.postal_code}</div> : null}
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
                        value={formik.values.Biography}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                  </div>

                  {/* Patient Email */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Patient Email <span className="login-danger">*</span></label>
                      <input
                        type="email"
                        name="patient_email"
                        value={formik.values.patient_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.patient_email && formik.errors.patient_email ? (
                        <div className="text-danger">{formik.errors.patient_email}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Patient Phone */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Patient Phone <span className="login-danger">*</span></label>
                      <input
                        type="tel"
                        name="patient_phone"
                        value={formik.values.patient_phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.patient_phone && formik.errors.patient_phone ? (
                        <div className="text-danger">{formik.errors.patient_phone}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Patient Name */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Patient Name <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="patient_name"
                        value={formik.values.patient_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.patient_name && formik.errors.patient_name ? (
                        <div className="text-danger">{formik.errors.patient_name}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Specialization <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="specialization"
                        value={formik.values.specialization}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.specialization && formik.errors.specialization ? (
                        <div className="text-danger">{formik.errors.specialization}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* License Number */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>License Number <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="license_number"
                        value={formik.values.license_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.license_number && formik.errors.license_number ? (
                        <div className="text-danger">{formik.errors.license_number}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Years of Experience */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Years of Experience <span className="login-danger">*</span></label>
                      <input
                        type="number"
                        name="years_of_experience"
                        value={formik.values.years_of_experience}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.years_of_experience && formik.errors.years_of_experience ? (
                        <div className="text-danger">{formik.errors.years_of_experience}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Operating Hours <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="operating_hours"
                        value={formik.values.operating_hours}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.operating_hours && formik.errors.operating_hours ? (
                        <div className="text-danger">{formik.errors.operating_hours}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Services <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="services"
                        value={formik.values.services}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.services && formik.errors.services ? (
                        <div className="text-danger">{formik.errors.services}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-top-form">
                      <label className="local-top">Avatar <span className="login-danger">*</span></label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="avatar"
                          id="file"
                          onChange={formik.handleChange}
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">Choose File</label>
                      </div>
                      {formik.values.avatar &&
                        <div className="upload-images upload-size">
                          {formik.values.avatar && <img src={URL.createObjectURL(formik.values.avatar)} alt="Avatar" />}
                          <a href="javascript:void(0);" className="btn-icon logo-hide-btn">
                            <i className="feather-x-circle"></i>
                          </a>
                        </div>
                      }
                    </div>
                  </div> */}

                  {/* Confirm Password */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Confirm Password <span className="login-danger">*</span></label>
                      <input
                        type="password"
                        name="confirmpassword"
                        value={formik.values.confirmpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                        <div className="text-danger">{formik.errors.confirmpassword}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Latitude */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Latitude <span className="login-danger">*</span></label>
                      <input
                        type="number"
                        name="latitude"
                        value={formik.values.latitude}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.latitude && formik.errors.latitude ? (
                        <div className="text-danger">{formik.errors.latitude}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Longitude */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Longitude <span className="login-danger">*</span></label>
                      <input
                        type="number"
                        name="longitude"
                        value={formik.values.longitude}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.longitude && formik.errors.longitude ? (
                        <div className="text-danger">{formik.errors.longitude}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Patient Type */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Patient Type <span className="login-danger">*</span></label>
                      <select
                        name="patient_type"
                        value={formik.values.patient_type}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      >
                        <option value="">Select Patient Type</option>
                        <option value="Inpatient">Inpatient</option>
                        <option value="Outpatient">Outpatient</option>
                      </select>
                      {formik.touched.patient_type && formik.errors.patient_type ? (
                        <div className="text-danger">{formik.errors.patient_type}</div>
                      ) : null}
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
                            checked={formik.values.status === 'Active'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
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
                            checked={formik.values.status === 'Inactive'}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Submit Button */}
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

export default AddPatient;
