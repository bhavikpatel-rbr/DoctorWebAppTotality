import React from 'react';
import { useFormik } from 'formik';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { insertScheduleAction } from '../../../reduxtool/app/middleware';

const daysOptions = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' },
  { value: 'Saturday', label: 'Saturday' },
  { value: 'Sunday', label: 'Sunday' }
];

const AddSchedule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      doctor_id: 1,
      clinic_id: 1,
      day_of_week: '',
      from_date: null,
      to_date: null,
      start_time: null,
      end_time: null
    },
    validationSchema: Yup.object({
      day_of_week: Yup.string().required('Day is required'),
      from_date: Yup.date().nullable().required('From Date is required'),
      to_date: Yup.date()
        .nullable()
        .required('To Date is required')
        .min(Yup.ref('from_date'), 'To Date must be after From Date'),
      start_time: Yup.date().nullable().required('Start Time is required'),
      end_time: Yup.date().nullable().required('End Time is required')
    }),
    onSubmit: (values) => {
      const payload = {
        doctor_id: 1,
        clinic_id: 1,
        day_of_week: values.day_of_week,
        from_date: values.from_date.toISOString().split('T')[0], // Format: YYYY-MM-DD
        to_date: values.to_date.toISOString().split('T')[0],
        start_time: values.start_time.toISOString().split('T')[1].slice(0, 5), // Format: HH:MM
        end_time: values.end_time.toISOString().split('T')[1].slice(0, 5)
      };

      dispatch(insertScheduleAction(payload)).then((res) => {
        if (res?.payload?.status) {
          navigate('/schedulelist');
        }
      });
    }
  });

  return (
    <div>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="schedule.html">Doctor Schedule</div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
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

                  {/* Day Picker */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>Day <span className="login-danger">*</span></label>
                      <Select
                        options={daysOptions}
                        value={daysOptions.find(option => option.value === formik.values.day_of_week)}
                        onChange={(selectedOption) => formik.setFieldValue('day_of_week', selectedOption.value)}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            minHeight: '45px',
                            borderRadius: '10px',
                            border: '2px solid rgba(46, 55, 164, 0.1)',
                            boxShadow: 'none',
                            fontSize: '14px',
                            fontFamily: 'inherit'
                          }),
                        }}
                      />
                      {formik.touched.day_of_week && formik.errors.day_of_week ? (
                        <div className="text-danger">{formik.errors.day_of_week}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* From Date Picker */}
                  <div className="col-12 col-md-6 col-xl-2">
                    <div className="input-block local-forms">
                      <label>From Date <span className="login-danger">*</span></label>
                      <DatePicker
                        selected={formik.values.from_date}
                        onChange={(date) => formik.setFieldValue('from_date', date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                      />
                      {formik.touched.from_date && formik.errors.from_date ? (
                        <div className="text-danger">{formik.errors.from_date}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* To Date Picker */}
                  <div className="col-12 col-md-6 col-xl-2">
                    <div className="input-block local-forms">
                      <label>To Date <span className="login-danger">*</span></label>
                      <DatePicker
                        selected={formik.values.to_date}
                        onChange={(date) => formik.setFieldValue('to_date', date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                        minDate={formik.values.from_date} // Ensures To Date is after From Date
                      />
                      {formik.touched.to_date && formik.errors.to_date ? (
                        <div className="text-danger">{formik.errors.to_date}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Start Time Picker */}
                  <div className="col-12 col-md-6 col-xl-2">
                    <div className="input-block local-forms">
                      <label>From Time <span className="login-danger">*</span></label>
                      <DatePicker
                        selected={formik.values.start_time}
                        onChange={(date) => formik.setFieldValue('start_time', date)}
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
                        selected={formik.values.end_time}
                        onChange={(date) => formik.setFieldValue('end_time', date)}
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

                </div>
                <div className="col-12">
                    <div className="doctor-submit text-end">
                     
                      <button type="button" className="btn btn-primary cancel-form me-2">
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary submit-form "onClick={() => navigate('/schedulelist')}>
                        Submit
                      </button>
                    </div>
                  </div>
                {/* <div className="col-12 text-end">
                  <button onClick={() => navigate('/schedulelist')} type="button" className="btn btn-primary me-2">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create Schedule
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSchedule;
