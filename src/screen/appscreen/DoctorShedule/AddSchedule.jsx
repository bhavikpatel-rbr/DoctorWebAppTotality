import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { insertScheduleAction } from '../../../reduxtool/app/middleware';
const AddSchedule = () => {
  const dispatch = useDispatch()
    const navigate = useNavigate();
  // State for form fields
  
  
  


  const formik = useFormik({
         initialValues: {
              doctor_id: 1,
              clinic_id: 1,
              day_of_week: "",
              start_time: "",
              end_time: ""
            
            },
            validationSchema: Yup.object({
              day_of_week: Yup.string().required('Day is required'),
              start_time: Yup.string().required('Start Time is required'),
              end_time: Yup.string().required('end Date is required'),
              // status: Yup.string().required('Status is required'),
            }),
        onSubmit: (values) => {
          console.log('===========values=========================');
      console.log(values);
      console.log('==============values======================');
          const payload = {
            doctor_id: 1,
            clinic_id: 1,
            day_of_week: values?.day_of_week,
            start_time: values?.start_time,
            end_time: values?.end_time
            
           
          }
    
          dispatch(insertScheduleAction(payload)).then((res) => {
            if (res?.payload?.status) {
              navigate('/schedulelist')
            }
          })
        },
      });

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
              <li className="breadcrumb-item active">Add Schedule</li>
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
                      <h4>Add Schedule</h4>
                    </div>
                  </div>
                  {/* <div className="col-12 col-md-6 col-xl-6">
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
                  </div> */}
                  {/* <div className="col-12 col-md-6 col-xl-6">
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
                  </div> */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms ">
                      <label>
                        Day <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control "
                        type="text"
                        name="day_of_week"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.day_of_week}
                      />
                       {formik.touched.day_of_week && formik.errors.day_of_week ? (
                        <div className="text-danger">{formik.errors.day_of_week}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        From Time<span className="login-danger">*</span>
                      </label>
                     
                        <input
                          type="text"
                          className="form-control"
                         
                          name="start_time"
                          onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.start_time}
                        />
                         {formik.touched.start_time && formik.errors.start_time ? (
                        <div className="text-danger">{formik.errors.start_time}</div>
                      ) : null}
                     
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        To Time<span className="login-danger">*</span>
                      </label>
                     
                        <input
                          type="text"
                          className="form-control"
                        
                          name="end_time"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.end_time}
                        />
                         {formik.touched.end_time && formik.errors.end_time ? (
                        <div className="text-danger">{formik.errors.end_time}</div>
                      ) : null}
                     
                    </div>
                  </div>
                  {/* <div className="col-12 col-sm-12">
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
                  </div> */}
                  {/* <div className="col-12 col-md-6 col-xl-4">
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
                  </div> */}
                </div>
                <div className="col-12">
                  <div className="doctor-submit text-end">
                    <button type="submit" className="btn btn-primary submit-form me-2">
                      Create Schedule
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

export default AddSchedule;
