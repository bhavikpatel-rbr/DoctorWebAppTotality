import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';import { useSelector } from 'react-redux';
import { cleanEditState, editSelector, resetUpdateStatus } from '../../../reduxtool/editstate/editSlice';
import { useDispatch } from 'react-redux';
import { ChevronRight } from 'react-feather';
import { updatePatientDataAction, updateStaffDataAction } from '../../../reduxtool/app/middleware';
import DatePicker from 'react-datepicker';
import { TextArea } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

const EditStaff = ({ staffData, onSubmit }) => {
  const Staff = useSelector(editSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [avatar, setAvatar] = useState(null);
    
    const formik = useFormik({
      initialValues: {
        firstname: Staff?.staffEdit?.firstname,
        lastname: Staff?.staffEdit?.lastname,
        userName: Staff?.staffEdit?.username,
        phone: Staff?.staffEdit?.phone,
        email: Staff?.staffEdit?.email,
        password: '',
        confirmPassword: '',
        doctor_name: Staff?.staffEdit?.firstname,
        specialization: Staff?.staffEdit?.specialization,
        license_number: Staff?.staffEdit?.license_number,
        years_of_experience: Staff?.staffEdit?.years_of_experience,
        doctor_phone: '',
        doctor_email: '',
        address_line_2: '',
        birth_date: Staff?.staffEdit?.birth_date,
        gender: Staff?.staffEdit?.gender,
        education: Staff?.staffEdit?.education,
        designation: Staff?.staffEdit?.designation,
        department: Staff?.staffEdit?.department,
        address_line_1: Staff?.staffEdit?.address_line_1,
        city: Staff?.staffEdit?.city,
        country: Staff?.staffEdit?.country,
        state: Staff?.staffEdit?.state,
        postal_code: Staff?.staffEdit?.postal_code,
        biography: '',
        avatar: null,
        status: Staff?.staffEdit?.active,
        patient_type:"new",
        patient_email:Staff?.staffEdit?.email,
        patient_phone:"",
        images: '',
        doctor_id:Staff?.staffEdit?.doctor_id
      },
      validationSchema: Yup.object({
        firstname: Yup.string().required('Fistname is required'),
        lastname: Yup.string().required('Lastname is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Passwords must match')
          .required('Confirm Password is required'),
       
        years_of_experience: Yup.number().min(1, 'Experience must be greater than 0').required('Experience is required'),
        education: Yup.string().required('Education is required'),
        designation: Yup.string().required('Designation is required'),
        address_line_1: Yup.string().required('Address Line 1 is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        postal_code: Yup.string().required('Postal Code is required'),
        country: Yup.string().required('Country is required'),
        birth_date: Yup.string().required('BithDate is required')
      }),
  
      onSubmit: (values) => {
        const updateDta = {
          doctor_id: Staff?.staffEdit?.doctor_id,
          user_id: Staff?.staffEdit?.user_id,
          doctor_name: values?.doctor_name,
          specialization: Staff?.staffEdit?.specialization,
          education: values.education,
          designation: Staff?.staffEdit?.designation,
          department: values.department,
          phone: values.phone,
          email: values.email,
          doctor_phone: Staff?.staffEdit?.doctor_phone,
          doctor_email: Staff?.staffEdit?.doctor_email,
          license_number: Staff?.staffEdit?.license_number,
          years_of_experience: Staff?.staffEdit?.years_of_experience,
          clinic_id: Staff?.staffEdit?.clinic_id,
          profile_image: null,
          address_line_1: values.address_line_1,
          address_line_2: Staff?.staffEdit?.address_line_2,
          city: values.city,
          state: values.state,
          postal_code: values.postal_code,
          country: values.country,
          operating_hours: Staff?.staffEdit?.operating_hours,
          services: Staff?.staffEdit?.services,
          latitude: Staff?.staffEdit?.latitude,
          longitude: Staff?.staffEdit?.longitude,
          doctor_type: Staff?.staffEdit?.doctor_type,
          status: values.status,
          created_at: Staff?.staffEdit?.created_at,
          updated_at: Staff?.staffEdit?.updated_at,
          id: Staff?.staffEdit?.id,
          username: values.userName,
          firstname: values.firstname,
          lastname: values.lastname,
          gender: values.gender,
          birth_date: new Date(values.birth_date),
          active: Staff?.staffEdit?.active,
          is_deleted: Staff?.staffEdit?.is_deleted,
          patient_type:"new",
          patient_email:values.email,
          patient_phone:"",
          images: '',
          doctor_id:Staff?.staffEdit?.doctor_id
        }
        dispatch(updateStaffDataAction(updateDta)).then((res) => {
          if (res?.payload?.status) {
            dispatch(cleanEditState());
            navigate('/stafflist');
          }
        })
      },
    });
  
    const handleFileChange = (event) => {
      setAvatar(event.target.files[0]);
    };

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><div href="staff-list.html">Staff</div></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Edit Staff</li>
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
                                                  <h4>Edit Staff</h4>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Firstname <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="firstname"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.firstname}
                                                  />
                                                  {formik.touched.firstname && formik.errors.firstname ? (
                                                    <div className="text-danger">{formik.errors.firstname}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Lastname <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="lastname"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.lastname}
                                                  />
                                                  {formik.touched.lastname && formik.errors.lastname ? (
                                                    <div className="text-danger">{formik.errors.lastname}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Username <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="username"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.username}
                                                  />
                                                  {formik.touched.username && formik.errors.username ? (
                                                    <div className="text-danger">{formik.errors.username}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-6">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    email <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="email"
                                                    name="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                  />
                                                  {formik.touched.email && formik.errors.email ? (
                                                    <div className="text-danger">{formik.errors.email}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-6 col-xl-6">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Mobile Number <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="number"
                                                    name="phone"
                                                    onChange={formik.handleChange}
                                                    maxLength={10}
                                                    minLength={10}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.phone}
                                                  />
                                                  {formik.touched.phone && formik.errors.phone ? (
                                                    <div className="text-danger">{formik.errors.phone}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-6">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Password <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password}
                                                  />
                                                  {formik.touched.password && formik.errors.password ? (
                                                    <div className="text-danger">{formik.errors.password}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-6">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Confirm Password <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="password"
                                                    name="confirmPassword"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.confirmPassword}
                                                  />
                                                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                                    <div className="text-danger">{formik.errors.confirmPassword}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              {/* <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Specialization <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="specialization"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.specialization}
                                                  />
                                                  {formik.touched.specialization && formik.errors.specialization ? (
                                                    <div className="text-danger">{formik.errors.specialization}</div>
                                                  ) : null}
                                                </div>
                                              </div> */}
                            
                                              {/* <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    License Number <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="license_number"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.license_number}
                                                  />
                                                  {formik.touched.license_number && formik.errors.license_number ? (
                                                    <div className="text-danger">{formik.errors.license_number}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                             */}
                                              <div className="col-12 col-md-6 col-xl-2">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Experience (Years) <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="years_of_experience"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.years_of_experience}
                                                  />
                                                  {formik.touched.years_of_experience && formik.errors.years_of_experience ? (
                                                    <div className="text-danger">{formik.errors.years_of_experience}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-2">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Education <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="education"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.education}
                                                  />
                                                  {formik.touched.education && formik.errors.education ? (
                                                    <div className="text-danger">{formik.errors.education}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-2">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Designation <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="designation"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.designation}
                                                  />
                                                  {formik.touched.designation && formik.errors.designation ? (
                                                    <div className="text-danger">{formik.errors.designation}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-6 col-xl-4">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Department <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="department"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.department}
                                                  />
                                                  {formik.touched.department && formik.errors.department ? (
                                                    <div className="text-danger">{formik.errors.department}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-2">
                                                <div className="input-block local-forms ">
                                                  <label>
                                                    birth date <span className="login-danger">*</span>
                                                  </label>
                                                  <DatePicker
                                                    selected={formik.values.birth_date}
                                                    onChange={(date) => formik.setFieldValue('birth_date', date)}
                                                    dateFormat="yyyy/MM/dd"
                                                    className="form-control"
                            
                                                  />
                                                  {formik.touched.birth_date && formik.errors.birth_date ? (
                                                    <div className="text-danger">{formik.errors.birth_date}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                            
                                              <div className="col-12 col-md-6 col-xl-12">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Address <span className="login-danger">*</span>
                                                  </label>
                                                  <TextArea
                                                    className="form-control"
                                                    type="text"
                                                    name="address_line_1"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.address_line_1}
                                                  />
                                                  {formik.touched.address_line_1 && formik.errors.address_line_1 ? (
                                                    <div className="text-danger">{formik.errors.address_line_1}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-3">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    City <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="city"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.city}
                                                  />
                                                  {formik.touched.city && formik.errors.city ? (
                                                    <div className="text-danger">{formik.errors.city}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-3">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    State <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="state"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.state}
                                                  />
                                                  {formik.touched.state && formik.errors.state ? (
                                                    <div className="text-danger">{formik.errors.state}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-3">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Country <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="country"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.country}
                                                  />
                                                  {formik.touched.country && formik.errors.country ? (
                                                    <div className="text-danger">{formik.errors.country}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-3">
                                                <div className="input-block local-forms">
                                                  <label>
                                                    Postal Code <span className="login-danger">*</span>
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    type="text"
                                                    name="postal_code"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.postal_code}
                                                  />
                                                  {formik.touched.postal_code && formik.errors.postal_code ? (
                                                    <div className="text-danger">{formik.errors.postal_code}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-12 col-xl-6">
                                                <div className="input-block local-top-form">
                                                  <label className="local-top">Avatar <span className="login-danger">*</span></label>
                                                  <div className="settings-btn upload-files-avator">
                                                    <input
                                                      type="file"
                                                      accept="image/*"
                                                      name="avatar"
                                                      id="file"
                                                      onChange={handleFileChange}
                                                      className="hide-input"
                                                    />
                                                    <label htmlFor="file" className="upload">Choose File</label>
                                                  </div>
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-3" style={{justifyContent:"center" , marginTop:"7px", alignItems:"center"}} >
                    <div className="input-block select-gender" style={{flexDirection:"row" ,alignContent:"center", alignItems:"center"}}>
                      <label style={{color: "#333448",fontSize:"15px",fontWeight:"500"
   
    }} >Gender <span className="login-danger">*</span></label>
                      <div className="form-check-inline" style={{marginLeft:"20px"}}>
                                                    <label className="form-check-label">
                                                      <input
                                                        type="radio"
                                                        name="gender"
                                                        value="Male"
                                                        className="form-check-input"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        checked={formik.values.gender === 'Male' || 'male'}
                                                      /> Male
                                                    </label>
                                                  </div>
                                                  <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                      <input
                                                        type="radio"
                                                        name="gender"
                                                        value="Female"
                                                        className="form-check-input"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        checked={formik.values.gender === 'Female' || 'female'}
                                                      /> Female
                                                    </label>
                                                  </div>
                                                  {formik.touched.gender && formik.errors.gender ? (
                                                    <div className="text-danger">{formik.errors.gender}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                                              <div className="col-12 col-md-6 col-xl-3" style={{justifyContent:"center" , marginTop:"7px", alignItems:"center"}} >
                    <div className="input-block select-gender">
                    <label style={{color: "#333448",fontSize:"15px",fontWeight:"500"
   
  }} >Status <span className="login-danger">*</span></label>
                      <div className="form-check-inline" style={{marginLeft:"20px"}}>
                                                    <label className="form-check-label">
                                                      <input
                                                        type="radio"
                                                        name="status"
                                                        value="Active"
                                                        className="form-check-input"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        checked={formik.values.status === 'Active' || 'active'}
                                                      /> Active
                                                    </label>
                                                  </div>
                                                  <div className="form-check-inline">
                                                    <label className="form-check-label">
                                                      <input
                                                        type="radio"
                                                        name="status"
                                                        value="Inactive"
                                                        className="form-check-input"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        checked={formik.values.status === 'Inactive' || 'inactive'}
                                                      /> Inactive
                                                    </label>
                                                  </div>
                                                  {formik.touched.status && formik.errors.status ? (
                                                    <div className="text-danger">{formik.errors.status}</div>
                                                  ) : null}
                                                </div>
                                              </div>
                            
                            
                            
                            
                                              <div className="col-12">
                                                <div className="doctor-submit text-end">
                                                <button
                                                   onClick={()=>{
                                                    navigate('/stafflist')
                                                   }}
                                                    type="button"
                                                    className="btn btn-primary cancel-form  me-2"
                                                  >
                                                    Cancel
                                                  </button>
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary submit-form"
                                                  >
                                                    Save Changes
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

export default EditStaff;
