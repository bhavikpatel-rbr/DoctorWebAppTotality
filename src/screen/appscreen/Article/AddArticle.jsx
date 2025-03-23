import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
//import { registerDoctorAction, registerStaffAction } from '../../../reduxtool/app/middleware'; // Replace with your article action
import { addArticleAction } from '../../../reduxtool/app/middleware'; //  Example action - adjust as needed!
import { TextArea } from '@blueprintjs/core';
import { useNavigate } from 'react-router-dom';


const AddArticle = () => {
  const [image, setImage] = useState(null);  // Changed from avatar to image
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      author: '',
      publicationDate: '',  //  Consider using a Date object directly
      category: '',
      tags: '', // Might be an array, depending on your needs
      status: 'Draft', // Example: Draft, Published, etc.
      excerpt: '',  // Short summary
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      content: Yup.string().required('Content is required').min(50, 'Content must be at least 50 characters'), // Added min length
      author: Yup.string().required('Author is required'),
      publicationDate: Yup.date().required('Publication Date is required'), // Validate as a date
      category: Yup.string().required('Category is required'),
      tags: Yup.string(), //  Less strict validation, adjust as needed.
      excerpt: Yup.string().max(255, 'Excerpt must be 255 characters or less'), // Example max length
      //  Image validation (optional, but recommended):
      // image: Yup.mixed().required('Image is required')   // Basic required check
      //   .test(
      //     "fileSize",
      //     "File size is too large",
      //     (value) => value && value.size <= 1024 * 1024 * 2 // Example:  <= 2MB
      //   )
      //   .test(
      //      "fileType",
      //     "Unsupported Format",
      //     (value) => value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
      //  )
    }),
    onSubmit: (values) => {
      console.log("values", values);

        const formData = new FormData(); // Use FormData for file uploads!
        formData.append('title', values.title);
        formData.append('content', values.content);
        formData.append('author', values.author);
        formData.append('publication_date', values.publicationDate.toISOString()); // Format date for API
        formData.append('category', values.category);
        formData.append('tags', values.tags);
        formData.append('status', values.status);
        formData.append('excerpt', values.excerpt);
        if (image) {
            formData.append('image', image); // Append the image file
        }
       //   Example payload (adjust to your API requirements):
      // const payload = {
      //   title: values.title,
      //   content: values.content,
      //   author: values.author,
      //   publicationDate: values.publicationDate,
      //   category: values.category,
      //   tags: values.tags.split(',').map(tag => tag.trim()), // Example: Convert comma-separated string to array
      //   image: image, // Assuming you have an 'image' state for the file
      //   status: values.status,
      // };

    //   dispatch(addArticleAction(formData)).then((res) => {  // Use the correct action
    //     if (res?.payload?.status) {
    //         navigate('/articlelist'); // Or wherever you want to redirect
    //     }
    //   });
    },
  });



  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  //  Keep this function the same, as it handles general form navigation
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

  // Keep this the same for F2 submission
  useEffect(() => {
    const handleF2Press = (e) => {
      if (e.key === 'F2') {
        e.preventDefault();
        formik.handleSubmit();
      }
    };

    window.addEventListener('keydown', handleF2Press);

    return () => {
      window.removeEventListener('keydown', handleF2Press);
    };
  }, [formik]);

  return (
    <div>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div>Articles</div> {/*  Changed to Articles */}
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Add Article</li> {/* Changed to Add Article */}
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
                      <h4>Add Article</h4> {/* Changed heading */}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        Title <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                        onKeyPress={(e) => handleKeyPress(e, 'title')}
                      />
                      {formik.touched.title && formik.errors.title ? (
                        <div className="text-danger">{formik.errors.title}</div>
                      ) : null}
                    </div>
                  </div>

                   {/* Author */}
                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        Author <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.author}
                        onKeyPress={(e) => handleKeyPress(e, 'author')}
                      />
                      {formik.touched.author && formik.errors.author ? (
                        <div className="text-danger">{formik.errors.author}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Publication Date */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        Publication Date <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="date"  // Use type="date" for date input
                        name="publicationDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.publicationDate}
                        //  No onKeyPress needed for date input
                      />
                      {formik.touched.publicationDate && formik.errors.publicationDate ? (
                        <div className="text-danger">{formik.errors.publicationDate}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* Category */}
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        Category <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        onKeyPress={(e) => handleKeyPress(e, 'category')}
                      />
                      {formik.touched.category && formik.errors.category ? (
                        <div className="text-danger">{formik.errors.category}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* Tags */}
                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block local-forms">
                      <label>
                        Tags
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="tags"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tags}
                        onKeyPress={(e) => handleKeyPress(e, 'tags')}
                      />
                       {/*  No required error message, as it's not marked required in the schema */}
                    </div>
                  </div>
                  {/* Status (Radio Buttons) */}
                   <div className="col-12 col-md-6 col-xl-4">
                    <div className="input-block select-gender">
                      <label>
                        Status <span className="login-danger">*</span>
                      </label>
                      <div className="form-check-inline" style={{marginLeft:"20px"}}>
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="Draft"
                            className="form-check-input"
                            onChange={formik.handleChange}
                            checked={formik.values.status === 'Draft'}
                          /> Draft
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="status"
                            value="Published"
                            className="form-check-input"
                            onChange={formik.handleChange}
                            checked={formik.values.status === 'Published'}
                          /> Published
                        </label>
                      </div>
                      {/*  Add other status options as needed */}
                    </div>
                  </div>
                  {/* Excerpt */}
                  {/* <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>
                        Excerpt
                      </label>
                      <TextArea
                        className="form-control"
                        name="excerpt"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.excerpt}
                         // No onKeyPress for TextArea
                      />
                      {formik.touched.excerpt && formik.errors.excerpt ? (
                        <div className="text-danger">{formik.errors.excerpt}</div>
                      ) : null}
                    </div>
                  </div> */}
                  {/* Content (TextArea) */}
                  <div className="col-12">
                    <div className="input-block local-forms">
                      <label>
                        Content <span className="login-danger">*</span>
                      </label>
                      <TextArea
                        className="form-control"
                        name="content"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.content}
                        // No onKeyPress for TextArea
                      />
                      {formik.touched.content && formik.errors.content ? (
                        <div className="text-danger">{formik.errors.content}</div>
                      ) : null}
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="col-12 col-md-12 col-xl-6">
                    <div className="input-block local-top-form">
                      <label className="local-top">Image</label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"  //  Changed to "image"
                          id="file"
                          onChange={handleFileChange}
                          className="hide-input"
                        />
                        <label htmlFor="file" className="upload">Choose File</label>
                      </div>
                      {/* {formik.touched.image && formik.errors.image && (  // Add this for image error display
                        <div className="text-danger">{formik.errors.image}</div>
                      )} */}
                    </div>
                  </div>

                </div>
                {/* Submit/Cancel Buttons */}
                <div className="col-12">
                  <div className="doctor-submit text-end">
                  <button
                                   onClick={()=>{
                                    navigate('/articlelist') // Changed navigation
                                   }}
                      type="button"
                      className="btn btn-primary cancel-form me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary submit-form">
                      Save
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

export default AddArticle;