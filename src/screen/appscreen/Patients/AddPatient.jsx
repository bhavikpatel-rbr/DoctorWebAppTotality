import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { registerPatientAction } from '../../../reduxtool/app/middleware'
import DatePicker from 'react-datepicker';
import { TextArea } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';

const AddPatient = () => {
  const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    const formik = useFormik({
      initialValues: {
      firstname:"",
      lastname:'',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      patient_name: '',
      specialization: '',
      license_number: '',
      years_of_experience: '',
        gender:'Male',
      education: '',
      designation: '',
      department: '',
      doctor_phone: '',
      doctor_email: '',
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
      doctor_type: '',
      birth_date:"",
      status:'Active',
      },
      validationSchema: Yup.object({
        firstname:Yup.string().required('Fistname is required'),
      lastname:Yup.string().required('Lastname is required'),
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
       password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
       confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
       specialization: Yup.string().required('Specialization is required'),
      license_number: Yup.string().required('License Number is required'),
       years_of_experience: Yup.number().min(1, 'Experience must be greater than 0').required('Experience is required'),
       education: Yup.string().required('Education is required'),
       designation: Yup.string().required('Designation is required'),
       address_line_1: Yup.string().required('Address Line 1 is required'),
       city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      postal_code: Yup.string().required('Postal Code is required'),
      country: Yup.string().required('Country is required'),
      birth_date:Yup.string().required('BithDate is required')
     
      }),
      onSubmit: (values) => {
        console.log("values",values);
        const payload = {
          email: values?.email,
          username: values?.username,
          phone: values?.phone,
          password: values?.password,
          patient_name:values?.firstname,
          specialization: values?.specialization,
          license_number: values?.license_number,
          years_of_experience:  parseInt(values?.years_of_experience),
          clinic_id: 1,
          firstname:values?.firstname,
          lastname: values?.lastname,
          gender:values?.gender,
          birth_date: values?.birth_date,
          doctor_phone: "",
          doctor_email: "",
          education: values?.education,
          designation: values?.designation,
          department: values?.department,
          address_line_1:values?.address_line_1,
          address_line_2: "",
          city: values?.city,
          state: values?.state,
          postal_code:  values?.postal_code,
          country:values?.country,
          operating_hours: "",
          services: "",
          latitude: 40.712776,
          longitude: -74.005974,
          doctor_type: "",
          patient_type:"new",
          patient_email:values?.email,
          patient_phone:"",
          images: '',
          doctor_id:1
      }
        //  dispatch(registerPatientAction(payload))
          dispatch(registerPatientAction(payload)).then((res) => {
                     if (res?.payload?.status) {
                       navigate('/patients')
                     }
                   })
      },
    });
    
  
    const handleFileChange = (event) => {
      setAvatar(event.target.files[0]);
    };
  
    
    const handleKeyPress = (e, fieldName) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (formik.values[fieldName]?.trim() === '') {
          formik.setFieldTouched(fieldName, true, true);
          formik.validateField(fieldName);
        } else {
          const form = e.target.form;
          const index = Array.prototype.indexOf.call(form, e.target);
          form.elements[index + 1]?.focus();
        }
      }
    };

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
                                   <h4>Add Doctor</h4>
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
                                     onKeyPress={(e) => handleKeyPress(e, 'firstname')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'lastname')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'username')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'email')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'phone')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'password')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'confirmPassword')}
                                   />
                                   {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                     <div className="text-danger">{formik.errors.confirmPassword}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-6 col-xl-4">
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
                                     onKeyPress={(e) => handleKeyPress(e, 'specialization')}
                                   />
                                   {formik.touched.specialization && formik.errors.specialization ? (
                                     <div className="text-danger">{formik.errors.specialization}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-6 col-xl-4">
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
                                     onKeyPress={(e) => handleKeyPress(e, 'license_number')}
                                   />
                                   {formik.touched.license_number && formik.errors.license_number ? (
                                     <div className="text-danger">{formik.errors.license_number}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-6 col-xl-4">
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
                                     onKeyPress={(e) => handleKeyPress(e, 'years_of_experience')}
                                   />
                                   {formik.touched.years_of_experience && formik.errors.years_of_experience ? (
                                     <div className="text-danger">{formik.errors.years_of_experience}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-6 col-xl-3">
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
                                     onKeyPress={(e) => handleKeyPress(e, 'education')}
                                   />
                                   {formik.touched.education && formik.errors.education ? (
                                     <div className="text-danger">{formik.errors.education}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-6 col-xl-3">
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
                                     onKeyPress={(e) => handleKeyPress(e, 'designation')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'department')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'birth_date')}
                                     
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
                                     onKeyPress={(e) => handleKeyPress(e, 'address_line_1')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'city')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'state')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'country')}
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
                                     onKeyPress={(e) => handleKeyPress(e, 'postal_code')}
                                   />
                                   {formik.touched.postal_code && formik.errors.postal_code ? (
                                     <div className="text-danger">{formik.errors.postal_code}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-12 col-xl-5">
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
             
                               <div className="col-12 col-md-6 col-xl-2">
                                 <div className="input-block select-gender">
                                   <label className="gen-label">Gender <span className="login-danger">*</span></label>
                                   <div className="form-check-inline">
                                     <label className="form-check-label">
                                       <input
                                         type="radio"
                                         name="gender"
                                         value="Male"
                                         className="form-check-input"
                                         onChange={formik.handleChange}
                                         onBlur={formik.handleBlur}
                                         checked={formik.values.gender === 'Male'}
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
                                         checked={formik.values.gender === 'Female'}
                                       /> Female
                                     </label>
                                   </div>
                                   {formik.touched.gender && formik.errors.gender ? (
                                     <div className="text-danger">{formik.errors.gender}</div>
                                   ) : null}
                                 </div>
                               </div>
             
                               <div className="col-12 col-md-6 col-xl-2">
                                 <div className="input-block select-gender">
                                   <label className="gen-label">Status <span className="login-danger">*</span></label>
                                   <div className="form-check-inline">
                                     <label className="form-check-label">
                                       <input
                                         type="radio"
                                         name="status"
                                         value="Active"
                                         className="form-check-input"
                                         onChange={formik.handleChange}
                                         onBlur={formik.handleBlur}
                                         checked={formik.values.status === 'Active'}
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
                                         checked={formik.values.status === 'Inactive'}
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
                                     type="submit"
                                     className="btn btn-primary submit-form me-2"
                                   >
                                     Save Changes
                                   </button>
                                   <button
                                     type="button"
                                     className="btn btn-primary cancel-form"
                                   >
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

export default AddPatient;
