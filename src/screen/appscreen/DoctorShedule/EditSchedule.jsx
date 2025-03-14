import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from "date-fns";
import * as Yup from 'yup';

import Select from 'react-select';
import { editSelector } from '../../../reduxtool/editstate/editSlice';
import DatePicker from 'react-datepicker';
import { updateDepartmentAction, updateScheduleAction } from '../../../reduxtool/app/middleware';
const EditSchedule = () => {

  const shedule = useSelector(editSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const daysOptions = [
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' }
  ];

  const formatTime = (date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return ""; // ✅ Handle invalid Date case
    }
    return date.toTimeString().split(" ")[0]; // ✅ Converts to "HH:mm:ss"
  };
  console.log('=============schedule=======================');
  console.log(shedule);
  console.log('==================schedule==================');
  // State for form fields
  const formik = useFormik({
      initialValues: {
        
      
        doctor_id: shedule?.sheduleEdit?.doctor_id,
        schedule_id: shedule?.sheduleEdit?.schedule_id,
        clinic_id:shedule?.sheduleEdit?.clinic_id,
              clinic_id: shedule?.sheduleEdit?.clinic_id,
              day_of_week: shedule?.sheduleEdit?.day_of_week,
              start_time: formatTime(shedule?.sheduleEdit?.start_time),
              end_time: formatTime(shedule?.sheduleEdit?.end_time)
       
      },
      validationSchema: Yup.object({
        day_of_week: Yup.string().required('Day is required'),
                     start_time: Yup.string().required('Start Time is required'),
                     end_time: Yup.string().required('end Date is required'),
      }),
      onSubmit: (values) => {
        const updateDta = {
          doctor_id: shedule?.sheduleEdit?.doctor_id,
        schedule_id: shedule?.sheduleEdit?.schedule_id,
        clinic_id:shedule?.sheduleEdit?.clinic_id,
              day_of_week: values?.day_of_week,
              start_time:  values?.start_time,
              end_time: values?.end_time
         
        }
  
        dispatch(updateScheduleAction(updateDta)).then((res) => {
          console.log(res);
          
          navigate('/schedulelist')
        })
   
      },
    });
  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="schedule.html">Doctor Schedule</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Edit Schedule</li>
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
                      <h4>Edit Schedule</h4>
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
  <div className="input-block local-forms">
    <label>Day <span className="login-danger">*</span></label>
    <Select
      options={daysOptions}
      value={daysOptions.find(option => option.value === formik.values.day_of_week)}
      onChange={(selectedOption) => formik.setFieldValue('day_of_week', selectedOption.value)}
      // className="form-control"
      // classNamePrefix="select"
      styles={{
        control: (provided) => ({
          ...provided,
          minHeight: '45px',
          borderRadius: '10px',
          border: '2px solid rgba(46, 55, 164, 0.1)',
          boxShadow: 'none',
          fontSize: '14px',
          fontFamily: 'inherit',
         
        
        }),
      }}
    />
    {formik.touched.day_of_week && formik.errors.day_of_week ? (
      <div className="text-danger">{formik.errors.day_of_week}</div>
    ) : null}
  </div>
</div>


                  {/* Start Time Picker */}
                  <div className="col-12 col-md-6 col-xl-2">
                    <div className="input-block local-forms">
                      <label>From Time <span className="login-danger">*</span></label>
                      <DatePicker
                        selected={formik.values.start_time ? new Date(`1970-01-01T${formik.values.start_time}`) : null} // Convert string to Date
                        onChange={(date) => {
                          if (date) {
                            const formattedTime = format(date, "HH:mm:ss"); // ✅ Convert Date to "HH:mm:ss"
                            formik.setFieldValue("start_time", formattedTime);
                          }
                        }}
                       
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="hh:mm:ss aa"
                        className="form-control"
                      />
                      {formik.touched.start_time && formik.errors.start_time ? (
                        <div className="text-danger">{formik.errors.start_time}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* End Time Picker */}
                  <div className="col-12 col-md-6 col-xl-2">
                    <div className="input-block local-forms">
                      <label>To Time <span className="login-danger">*</span></label>
                      <DatePicker
                        selected={formik.values.end_time ? new Date(`1970-01-01T${formik.values.end_time}`) : null} // Convert string to Date
                        onChange={(date) => {
                          if (date) {
                            const formattedTime = format(date, "HH:mm:ss"); // ✅ Convert Date to "HH:mm:ss"
                            formik.setFieldValue("end_time", formattedTime);
                          }
                        }}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="hh:mm:ss aa"
                        className="form-control"
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
                  <button 
                     onClick={()=>{
                      navigate('/schedulelist')
                    }}
                    type="button" className="btn btn-primary cancel-form me-2 ">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary submit-form ">
                      Update Schedule
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

export default EditSchedule;
