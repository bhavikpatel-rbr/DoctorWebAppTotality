import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { registerStaffAction } from '../../../reduxtool/app/middleware';

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required'),
  password: Yup.string()
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  firstname: Yup.string()
    .required('First name is required'),
  lastname: Yup.string()
    .required('Last name is required'),
  gender: Yup.string()
    .oneOf(['male', 'female', 'other'], 'Invalid gender')
    .required('Gender is required'),
  birth_date: Yup.date()
    .required('Birth date is required')
    .max(new Date(), 'Birth date cannot be in the future'),
  staff_name: Yup.string()
    .required('Staff name is required'),
  specialization: Yup.string()
    .required('Specialization is required'),
  education: Yup.string()
    .required('Education is required'),
  designation: Yup.string()
    .required('Designation is required'),
  department: Yup.string()
    .required('Department is required'),
  staff_phone: Yup.string()
    .required('Staff phone number is required'),
  staff_email: Yup.string()
    .email('Invalid staff email format')
    .required('Staff email is required'),
  license_number: Yup.string()
    .required('License number is required'),
  years_of_experience: Yup.number()
    .required('Years of experience is required')
    .min(0, 'Years of experience cannot be negative'),
  address_line_1: Yup.string()
    .required('Address line 1 is required'),
  address_line_2: Yup.string(),
  city: Yup.string()
    .required('City is required'),
  state: Yup.string()
    .required('State is required'),
  postal_code: Yup.string()
    .required('Postal code is required'),
  country: Yup.string()
    .required('Country is required'),
  operating_hours: Yup.string()
    .required('Operating hours are required'),
  services: Yup.string()
    .required('Services are required'),
  latitude: Yup.string()
    .required('Latitude is required'),
  longitude: Yup.string()
    .required('Longitude is required'),
  staff_type: Yup.string()
    .oneOf(['permanent', 'temporary'], 'Invalid staff type')
    .required('Staff type is required')
});


const AddStaff = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      gender: '',
      birth_date: '',
      staff_name: '',
      specialization: '',
      education: '',
      designation: '',
      department: '',
      staff_phone: '',
      staff_email: '',
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
      staff_type: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const payload = {
        username: values.username,
        email: values.email,
        phone: values.phone,
        password: values.password,
        confirmPassword: values.confirmPassword,
        firstname: values.firstname,
        lastname: values.lastname,
        gender: values.gender,
        birth_date: values.birth_date,
        staff_name: values.staff_name,
        specialization: values.specialization,
        education: values.education,
        designation: values.designation,
        department: values.department,
        staff_phone: values.staff_phone,
        staff_email: values.staff_email,
        license_number: values.license_number,
        years_of_experience: values.years_of_experience,
        address_line_1: values.address_line_1,
        address_line_2: values.address_line_2,
        city: values.city,
        state: values.state,
        postal_code: values.postal_code,
        country: values.country,
        operating_hours: values.operating_hours,
        services: values.services,
        latitude: values.latitude,
        longitude: values.longitude,
        staff_type: values.staff_type,
        clinic_id: 1
      }
      dispatch(registerStaffAction(payload));
    }
  });
  console.log(formik.errors);

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="staff-list.html">Staffs</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
              <li className="breadcrumb-item active">Add Staffs</li>
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
                      <h4>Staffs Details</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>First Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div className="text-danger">{formik.errors.firstname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Last Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div className="text-danger">{formik.errors.lastname}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>User Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <div className="text-danger">{formik.errors.username}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Mobile <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div className="text-danger">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Email <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Confirm Password <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* Gender */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Gender <span className="login-danger">*</span></label>
                      <select
                        className="form-control"
                        name="gender"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      {formik.touched.gender && formik.errors.gender ? (
                        <div className="text-danger">{formik.errors.gender}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Birth Date */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Birth Date <span className="login-danger">*</span></label>
                      <input
                        type="date"
                        name="birth_date"
                        value={formik.values.birth_date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.birth_date && formik.errors.birth_date ? (
                        <div className="text-danger">{formik.errors.birth_date}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Staff Name */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Staff Name <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="staff_name"
                        value={formik.values.staff_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.staff_name && formik.errors.staff_name ? (
                        <div className="text-danger">{formik.errors.staff_name}</div>
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

                  {/* Education */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Education <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="education"
                        value={formik.values.education}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.education && formik.errors.education ? (
                        <div className="text-danger">{formik.errors.education}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Designation */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Designation <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="designation"
                        value={formik.values.designation}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.designation && formik.errors.designation ? (
                        <div className="text-danger">{formik.errors.designation}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Department */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Department <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="department"
                        value={formik.values.department}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.department && formik.errors.department ? (
                        <div className="text-danger">{formik.errors.department}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Staff Phone */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Staff Phone <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="staff_phone"
                        value={formik.values.staff_phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.staff_phone && formik.errors.staff_phone ? (
                        <div className="text-danger">{formik.errors.staff_phone}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Staff Email */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Staff Email <span className="login-danger">*</span></label>
                      <input
                        type="email"
                        name="staff_email"
                        value={formik.values.staff_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.staff_email && formik.errors.staff_email ? (
                        <div className="text-danger">{formik.errors.staff_email}</div>
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

                  {/* Latitude */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Latitude <span className="login-danger">*</span></label>
                      <input
                        type="text"
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
                        type="text"
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

                  {/* Staff Type */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Staff Type <span className="login-danger">*</span></label>
                      <select
                        className="form-control"
                        name="staff_type"
                        value={formik.values.staff_type}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">Select Staff Type</option>
                        <option value="permanent">Permanent</option>
                        <option value="temporary">Temporary</option>
                      </select>
                      {formik.touched.staff_type && formik.errors.staff_type ? (
                        <div className="text-danger">{formik.errors.staff_type}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Address Line 1 */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Address Line 1 <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="address_line_1"
                        value={formik.values.address_line_1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.address_line_1 && formik.errors.address_line_1 ? (
                        <div className="text-danger">{formik.errors.address_line_1}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* City */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>City <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.city && formik.errors.city ? (
                        <div className="text-danger">{formik.errors.city}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* State */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>State <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.state && formik.errors.state ? (
                        <div className="text-danger">{formik.errors.state}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Postal Code */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Postal Code <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="postal_code"
                        value={formik.values.postal_code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.postal_code && formik.errors.postal_code ? (
                        <div className="text-danger">{formik.errors.postal_code}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Country */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Country <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-control"
                      />
                      {formik.touched.country && formik.errors.country ? (
                        <div className="text-danger">{formik.errors.country}</div>
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



                </div>

                <div className="form-submit">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
