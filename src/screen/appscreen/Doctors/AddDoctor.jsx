import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { registerDoctorAction } from '../../../reduxtool/app/middleware';
import { useDispatch } from 'react-redux';

const AddDoctor = () => {
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch()
  const initialValues = {
    firstname:"",
    lastname:'',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    doctor_name: '',
    specialization: '',
    license_number: '',
    years_of_experience: '',
    // clinic_id: '',
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
  };

  const validationSchema = Yup.object().shape({
    firstname:Yup.string().required('Fistname is required'),
    lastname:Yup.string().required('Lastname is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
    doctor_name: Yup.string().required('Doctor Name is required'),
    specialization: Yup.string().required('Specialization is required'),
    license_number: Yup.string().required('License Number is required'),
    years_of_experience: Yup.number().min(1, 'Experience must be greater than 0').required('Experience is required'),
    // clinic_id: Yup.number().required('Clinic ID is required'),
    education: Yup.string().required('Education is required'),
    designation: Yup.string().required('Designation is required'),
    department: Yup.string().required('Department is required'),
    doctor_phone: Yup.string().required('Doctor phone is required'),
    doctor_email: Yup.string().email('Invalid email format').required('Doctor email is required'),
    address_line_1: Yup.string().required('Address Line 1 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    postal_code: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
    operating_hours: Yup.string().required('Operating hours are required'),
    services: Yup.string().required('Services are required'),
    latitude: Yup.number().required('Latitude is required'),
    longitude: Yup.number().required('Longitude is required'),
    doctor_type: Yup.string().required('Doctor Type is required'),
  });

  const handleSubmit = (values) => {
    const payload = {
      firstname:values?.firstname,
      lastname:values?.lastname,
      username: values?.username,
      email: values?.email,
      phone: values?.phone,
      password: values?.password,
      doctor_name: values?.doctor_name,
      specialization: values?.specialization,
      license_number: values?.license_number,
      years_of_experience: values?.years_of_experience,
      clinic_id: 1,
      education: values?.education,
      designation: values?.designation,
      department: values?.department,
      doctor_phone: values?.doctor_phone,
      doctor_email: values?.doctor_email,
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
      doctor_type: values?.doctor_type,
    }
    dispatch(registerDoctorAction(payload))
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="doctors.html">Doctors</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
              <li className="breadcrumb-item active">Add Doctor</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue, errors }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12" onClick={() => console.log(errors)}>
                        <div className="form-heading">
                          <h4>Doctor Details</h4>
                        </div>
                      </div>

                      {[
                        { name: 'firstname', label: 'Firstname', type: 'text' },
                        { name: 'lastname', label: 'Lastname', type: 'text' },
                        { name: 'username', label: 'Username', type: 'text' },
                        { name: 'email', label: 'Email', type: 'email' },
                        { name: 'phone', label: 'Phone', type: 'text' },
                        { name: 'password', label: 'Password', type: 'password' },
                        { name: 'confirmPassword', label: 'Confirm Password', type: 'password' },
                        { name: 'specialization', label: 'Specialization', type: 'text' },
                        { name: 'license_number', label: 'License Number', type: 'text' },
                        { name: 'years_of_experience', label: 'Experience (Years)', type: 'number' },
                        { name: 'education', label: 'Education', type: 'text' },
                        { name: 'designation', label: 'Designation', type: 'text' },
                        { name: 'doctor_phone', label: 'Doctor Phone', type: 'text' },
                        { name: 'doctor_email', label: 'Doctor Email', type: 'email' },
                        { name: 'address_line_1', label: 'Address Line 1', type: 'text' },
                        { name: 'city', label: 'City', type: 'text' },
                        { name: 'state', label: 'State', type: 'text' },
                        { name: 'postal_code', label: 'Postal Code', type: 'text' },
                        { name: 'country', label: 'Country', type: 'text' },
                       
                        
                      ].map((field, idx) => (
                        <div key={idx} className={`col-12 col-md-6 col-xl-4`}>
                          <div className="input-block local-forms">
                            <label>{field.label}</label>
                            <Field
                              className="form-control"
                              type={field.type}
                              name={field.name}
                            />
                            <ErrorMessage name={field.name} component="div" className="text-danger" />
                          </div>
                        </div>
                      ))}

                      {/* Doctor Type and Status */}
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>Department</label>
                          <Field as="select" name="department" className="form-control select">
                            <option value="">Select Type</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Dentist">Dentist</option>
                          </Field>
                          <ErrorMessage name="department" component="div" className="text-danger " />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="input-block local-forms">
                          <label>Doctor Type</label>
                          <Field as="select" name="doctor_type" className="form-control select">
                            <option value="">Select Type</option>
                            <option value="Consultant">Consultant</option>
                            <option value="Specialist">Specialist</option>
                          </Field>
                          <ErrorMessage name="doctor_type" component="div" className="text-danger" />
                        </div>
                      </div>
                     
                    </div>
<div  className="col-12">


                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                      <button type="button" className="btn btn-primary cancel-form">Cancel</button>
                    </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
