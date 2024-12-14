import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight } from 'react-feather';
import { createDepartmentAction } from '../../../reduxtool/app/middleware';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
  const currentDateTime = new Date().toISOString();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      clinic_id: 1,
      departmentName: '',
      created_at: currentDateTime,
      // departmentHead: '',
      // description: '',
      departmentDate: currentDateTime,
      // status: 'Active',
    },
    validationSchema: Yup.object({
      departmentName: Yup.string().required('Department Name is required'),
      // departmentHead: Yup.string().required('Department Head is required'),
      // description: Yup.string().required('Description is required'),
      departmentDate: Yup.date().required('Department Date is required'),
      // status: Yup.string().required('Status is required'),
    }),
    onSubmit: (values) => {
      console.log("values", values);
      const payload = {
        clinic_id: 1,
        department_name: values?.departmentName,
        created_at: values?.departmentDate
      }

      dispatch(createDepartmentAction(payload)).then((res) => {
        if (res?.payload?.status) {
          navigate('/departments')
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
                <a href="departments.html">Department</a>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Add Department</li>
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
                      <h4>Add Department</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Department Name <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="departmentName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.departmentName}
                      />
                      {formik.touched.departmentName && formik.errors.departmentName ? (
                        <div className="text-danger">{formik.errors.departmentName}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Department Head <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="departmentHead"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.departmentHead}
                      />
                      {formik.touched.departmentHead && formik.errors.departmentHead ? (
                        <div className="text-danger">{formik.errors.departmentHead}</div>
                      ) : null}
                    </div>
                  </div> */}
                  {/* <div className="col-12 col-sm-12">
                    <div className="input-block local-forms">
                      <label>
                        Description <span className="login-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        cols="30"
                        name="description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                      ></textarea>
                      {formik.touched.description && formik.errors.description ? (
                        <div className="text-danger">{formik.errors.description}</div>
                      ) : null}
                    </div>
                  </div> */}
                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms ">
                      <label>
                        Department Date <span className="login-danger">*</span>
                      </label>
                      <DatePicker
                        selected={formik.values.departmentDate}
                        onChange={(date) => formik.setFieldValue('departmentDate', date)}
                        dateFormat="yyyy/MM/dd"
                        className="form-control "
                      />
                      {formik.touched.departmentDate && formik.errors.departmentDate ? (
                        <div className="text-danger">{formik.errors.departmentDate}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">
                        Status <span className="login-danger">*</span>
                      </label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            className="form-check-input"
                            value="Active"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.status === 'Active'}
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.status === 'Inactive'}
                          />
                          Inactive
                        </label>
                      </div>
                      {formik.touched.status && formik.errors.status ? (
                        <div className="text-danger">{formik.errors.status}</div>
                      ) : null}
                    </div>
                  </div> */}
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

export default AddDepartment;
