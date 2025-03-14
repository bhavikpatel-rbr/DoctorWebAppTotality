import { useFormik } from 'formik';
import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { editSelector } from '../../../reduxtool/editstate/editSlice';
import { createBlogAction, updateBlogAction } from '../../../reduxtool/app/middleware';
import { updateBlogAsync } from '../../../reduxtool/app/service';
const EditBlogPage = () => {
  // State to handle form inputs
  const [blogTitle, setBlogTitle] = useState('Vaccines Are Close - But Right Now We Need to Hunker Down');
  const [authorName, setAuthorName] = useState('Stephen Bruk');
  const [blogCategory, setBlogCategory] = useState('');
  const [blogSubCategory, setBlogSubCategory] = useState('');
  const [tags, setTags] = useState('');
  const [blogStatus, setBlogStatus] = useState('Active');
  const [message, setMessage] = useState('');
  const [avatar, setAvatar] = useState(null);
  const blog = useSelector(editSelector)

    const dispatch = useDispatch()
    const navigate = useNavigate();
  // Handle file upload
  const handleFileChange = (event) => {
    setAvatar(URL.createObjectURL(event.target.files[0]));
  };

  

  console.log("blog",blog);
  

  const formik = useFormik({
        initialValues: {
          blog_id:blog?.blogEdit?.blog_id,
          clinic_id:blog?.blogEdit?.clinic_id,
          title: blog?.blogEdit?.title,
          content: blog?.blogEdit?.content,
          author: blog?.blogEdit?.author,
          created_at: blog?.blogEdit?.created_at
          
        },
        validationSchema: Yup.object({
          title:Yup.string().required('Title is required'),
      content:Yup.string().required('Content is required'),
      author: Yup.string().required('Author is required'),
        }),
        onSubmit: (values) => {
          console.log('===========values=========================');
      console.log(values);
      console.log('==============values======================');
          const payload = {
            blog_id:blog?.blogEdit?.blog_id,
            clinic_id:blog?.blogEdit?.clinic_id,
            title:values?.title,
            content: values?.content,
            author: values?.author,
            images:''
           
          }
    
          dispatch(updateBlogAction(payload)).then((res) => {
            if (res?.payload?.status) {
              navigate('/blog')
            }
          })
        },
      });

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><div href="blog.html">Blog </div></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Edit Blogs</li>
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
                      <h4>Blog Details</h4>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Blog Title <span className="login-danger">*</span></label>
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Blog Title"
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
                      <label>Author Name <span className="login-danger">*</span></label>
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Enter Author Name"
                        name="author"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.author}
                      />
                       {formik.touched.author && formik.errors.author ? (
                        <div className="text-danger">{formik.errors.author}</div>
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

                  <div className="col-12 col-md-6 col-xl-12">
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
                  </div>

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

export default EditBlogPage;
