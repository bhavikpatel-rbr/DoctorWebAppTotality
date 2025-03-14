import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createBlogAction, createMedicalStoreAction } from '../../../reduxtool/app/middleware';

const AddMedicalStorePage = () => {
  // State to handle form inputs
 
  const [avatar, setAvatar] = useState(null);


  const dispatch = useDispatch()
  const navigate = useNavigate();


  const formik = useFormik({
      initialValues: {
        store_id:0,
        clinic_id:1,
        title: "",
        phone:"",
        location: "",
        email: "",
        website: ""
        
      },
      validationSchema: Yup.object({
        title:Yup.string().required('Title is required'),
        location:Yup.string().required('location is required'),
        email: Yup.string().required('Email is required'),
        phone: Yup.string().required('Mobile Number is required'),
      }),
      onSubmit: (values) => {
       
        const payload = {
          
          clinic_id:1,
          store_name:values?.title,
          location: values?.location,
          contact_number: values?.phone,
          email: values?.email,
          website:values?.website
         
        }
  
        dispatch(createMedicalStoreAction(payload)).then((res) => {
          if (res?.payload?.status) {
            navigate('/store')
          }
        })
      },
    });
  

  // Handle file upload
  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><div href="blog.html">Medical Store </div></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Add Medical Store</li>
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
                      <h4>Medical Store Details</h4>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-xl-12">
                    <div className="input-block local-forms">
                      <label>Store Name <span className="login-danger">*</span></label>
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Store Name"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                      />
                       {formik.touched.title && formik.errors.title ? (
                        <div className="text-danger">{formik.errors.title}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>location <span className="login-danger">*</span></label>
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Enter location"
                        name="location"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                      />
                       {formik.touched.location && formik.errors.location ? (
                        <div className="text-danger">{formik.errors.location}</div>
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
                      website <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="website"
                        name="website"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.website}
                      
                      />
                      {formik.touched.website && formik.errors.website ? (
                        <div className="text-danger">{formik.errors.website}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Blog Category <span className="login-danger">*</span></label>
                      <select 
                        className="form-control select"
                        value={blogCategory}
                        onChange={(e) => setBlogCategory(e.target.value)}
                      >
                        <option>Choose Blog Category</option>
                        <option>Health Care</option>
                        <option>Child</option>
                        <option>Safety</option>
                      </select>
                    </div>
                  </div> */}

                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Blog Sub Category <span className="login-danger">*</span></label>
                      <select 
                        className="form-control select"
                        value={blogSubCategory}
                        onChange={(e) => setBlogSubCategory(e.target.value)}
                      >
                        <option>Choose Sub Blog Category</option>
                        <option>Health Care</option>
                        <option>Corona Virus</option>
                      </select>
                    </div>
                  </div> */}

                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Tags <small>(separated with a comma)</small> <span className="login-danger">*</span></label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                      />
                    </div>
                  </div> */}

                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Blog Status <span className="login-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input 
                            type="radio" 
                            name="blogStatus" 
                            className="form-check-input" 
                            value="Active"
                            checked={blogStatus === 'Active'}
                            onChange={() => setBlogStatus('Active')}
                          />Active
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input 
                            type="radio" 
                            name="blogStatus" 
                            className="form-check-input" 
                            value="InActive"
                            checked={blogStatus === 'InActive'}
                            onChange={() => setBlogStatus('InActive')}
                          />InActive
                        </label>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-12 col-md-6 col-xl-12">
                    <div className="input-block summer-mail">
                      <textarea 
                        rows="4" 
                        cols="5" 
                        className="form-control summernote" 
                         name="content"
                        placeholder="Enter your blog details here"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                      ></textarea>
                       {formik.touched.content && formik.errors.content ? (
                        <div className="text-danger">{formik.errors.content}</div>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-xl-12">
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
                  </div> */}

                  <div className="col-12">
                    <div className="doctor-submit text-end">
                      
                      <button
                      onClick={()=>{
                        navigate('/blog')
                      }}
                        type="button"
                        className="btn btn-primary cancel-form  me-2"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                         className="btn btn-primary submit-form "
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

export default AddMedicalStorePage;
