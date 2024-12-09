import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { editSelector } from '../../../reduxtool/editstate/editSlice';
import { useDispatch } from 'react-redux';
import { updateStaffDataAction } from '../../../reduxtool/app/middleware';

const EditDoctor = () => {
  const doctor = useSelector(editSelector)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      firstName: doctor?.doctorEdit?.firstname,
      lastName: doctor?.doctorEdit?.lastname,
      userName: doctor?.doctorEdit?.username,
      mobile: doctor?.doctorEdit?.phone,
      email: doctor?.doctorEdit?.email,
      password: '',
      confirmPassword: '',
      dob: doctor?.doctorEdit?.birth_date,
      gender: doctor?.doctorEdit?.gender,
      education: doctor?.doctorEdit?.education,
      designation: doctor?.doctorEdit?.designation,
      department: doctor?.doctorEdit?.department,
      address: doctor?.doctorEdit?.address_line_1,
      city: doctor?.doctorEdit?.city,
      country: doctor?.doctorEdit?.country,
      state: doctor?.doctorEdit?.state,
      postalCode: doctor?.doctorEdit?.postal_code,
      biography: '',
      avatar: null,
      status: doctor?.doctorEdit?.active,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      userName: Yup.string().required('User Name is required'),
      mobile: Yup.string().required('Mobile is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      dob: Yup.string().required('Date of Birth is required'),
      gender: Yup.string().required('Gender is required'),
      education: Yup.string().required('Education is required'),
      designation: Yup.string().required('Designation is required'),
      department: Yup.string().required('Department is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      country: Yup.string().required('Country is required'),
      state: Yup.string().required('State/Province is required'),
      postalCode: Yup.string().required('Postal Code is required'),
      biography: Yup.string().required('Biography is required'),
      status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values) => {
      const updateDta = {
        doctor_id: doctor?.doctorEdit?.doctor_id,
        user_id: doctor?.doctorEdit?.user_id,
        doctor_name: doctor?.doctorEdit?.doctor_name,
        specialization: doctor?.doctorEdit?.specialization,
        education: values.education,
        designation: doctor?.doctorEdit?.designation,
        department: values.department,
        phone: values.mobile,
        email: values.email,
        doctor_phone: doctor?.doctorEdit?.doctor_phone,
        doctor_email: doctor?.doctorEdit?.doctor_email,
        license_number: doctor?.doctorEdit?.license_number,
        years_of_experience: doctor?.doctorEdit?.years_of_experience,
        clinic_id: doctor?.doctorEdit?.clinic_id,
        profile_image: null,
        address_line_1: values.address,
        address_line_2: doctor?.doctorEdit?.address_line_2,
        city: values.city,
        state: values.state,
        postal_code: values.postalCode,
        country: values.country,
        operating_hours: doctor?.doctorEdit?.operating_hours,
        services: doctor?.doctorEdit?.services,
        latitude: doctor?.doctorEdit?.latitude,
        longitude: doctor?.doctorEdit?.longitude,
        doctor_type: doctor?.doctorEdit?.doctor_type,
        status: values.status,
        created_at: doctor?.doctorEdit?.created_at,
        updated_at: doctor?.doctorEdit?.updated_at,
        id: doctor?.doctorEdit?.id,
        username: values.userName,
        firstname: values.firstName,
        lastname: values.lastName,
        gender: values.gender,
        birth_date: new Date(values.dob),
        active: doctor?.doctorEdit?.active,
        is_deleted: doctor?.doctorEdit?.is_deleted
      }
      dispatch(updateStaffDataAction(updateDta))
    },
  });

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="doctors.html">Doctors</a></li>
              {/* <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li> */}
              <li className="breadcrumb-item active">Edit Doctor</li>
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
                      <h4>Doctor Details</h4>
                    </div>
                  </div>
                  {[
                    { label: 'First Name', name: 'firstName', type: 'text' },
                    { label: 'Last Name', name: 'lastName', type: 'text' },
                    { label: 'User Name', name: 'userName', type: 'text' },
                    { label: 'Mobile', name: 'mobile', type: 'text' },
                    { label: 'Email', name: 'email', type: 'email' },
                    { label: 'Password', name: 'password', type: 'password' },
                    { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
                    { label: 'Date Of Birth', name: 'dob', type: 'text' }, // Adjust this as per your date picker component
                    { label: 'Education', name: 'education', type: 'text' },
                    { label: 'Designation', name: 'designation', type: 'text' },
                    { label: 'Department', name: 'department', type: 'select', options: ['Orthopedics', 'Radiology', 'Dentist'] },
                    { label: 'Address', name: 'address', type: 'textarea' },
                    { label: 'City', name: 'city', type: 'select', options: ['Alaska', 'California'] },
                    { label: 'Country', name: 'country', type: 'select', options: ['USA', 'UK', 'Italy'] },
                    { label: 'State/Province', name: 'state', type: 'select', options: ['Alaska', 'California'] },
                    { label: 'Postal Code', name: 'postalCode', type: 'text' },
                    { label: 'Start Biography', name: 'biography', type: 'textarea' },
                  ].map((field, index) => (
                    <div key={index} className={`col-12 col-md-6 col-xl-${field.name === 'biography' ? '12' : '4'}`}>
                      <div className="input-block local-forms">
                        <label>{field.label} <span className="login-danger">*</span></label>
                        {field.type === 'select' ? (
                          <select
                            className="form-control select"
                            name={field.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name]}
                          >
                            <option value="">Select {field.label}</option>
                            {field.options.map((option, i) => (
                              <option key={i} value={option}>{option}</option>
                            ))}
                          </select>
                        ) : field.type === 'textarea' ? (
                          <textarea
                            className="form-control"
                            rows="3"
                            cols="30"
                            name={field.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name]}
                          ></textarea>
                        ) : (
                          <input
                            className="form-control"
                            type={field.type}
                            name={field.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[field.name]}
                          />
                        )}
                        {formik.touched[field.name] && formik.errors[field.name] ? (
                          <div className="text-danger">{formik.errors[field.name]}</div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                  <div className="col-12 col-md-6 col-xl-6">
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
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-top-form">
                      <label className="local-top">Avatar <span className="login-danger">*</span></label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="avatar"
                          id="file"
                          className="hide-input"
                          onChange={(event) => {
                            formik.setFieldValue('avatar', event.currentTarget.files[0]);
                          }}
                        />
                        <label htmlFor="file" className="upload">Choose File</label>
                      </div>
                      {formik.values.avatar && (
                        <div className="upload-images upload-size">
                          <img src={URL.createObjectURL(formik.values.avatar)} alt="Avatar" />
                          <a href="javascript:void(0);" className="btn-icon logo-hide-btn" onClick={() => formik.setFieldValue('avatar', null)}>
                            <i className="feather-x-circle"></i>
                          </a>
                        </div>
                      )}
                      {formik.touched.avatar && formik.errors.avatar ? (
                        <div className="text-danger">{formik.errors.avatar}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block select-gender">
                      <label>Status <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        name="status"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.status}
                      >
                        <option value="">Select Status</option>
                        <option value="1">Active</option>
                        <option value="2">Inactive</option>
                      </select>
                      {formik.touched.status && formik.errors.status ? (
                        <div className="text-danger">{formik.errors.status}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className="col-12 col-md-12">
                    <div className="input-block local-forms mb-0">
                      <div className="remember-me-col d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary submit-btn">Save</button>
                        <button type="button" className="btn btn-secondary submit-btn">Cancel</button>
                      </div>
                    </div>
                  </div> */}
                 <div className="col-12">
                    <div className="doctor-submit local-forms text-end">
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

export default EditDoctor;
