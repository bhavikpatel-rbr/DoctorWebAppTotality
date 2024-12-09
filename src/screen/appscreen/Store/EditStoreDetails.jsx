import React, { useState } from 'react';
import { ChevronRight } from 'react-feather';

const EditStoreDetails = () => {
  // State to handle form inputs
  const [storeName, setStoreName] = useState('HealthMart');
  const [ownerName, setOwnerName] = useState('Jane Doe');
  const [storeCategory, setStoreCategory] = useState('');
  const [storeSubCategory, setStoreSubCategory] = useState('');
  const [tags, setTags] = useState('');
  const [storeStatus, setStoreStatus] = useState('Open');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(null);

  // Handle file upload
  const handleFileChange = (event) => {
    setAvatar(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      storeName,
      ownerName,
      storeCategory,
      storeSubCategory,
      tags,
      storeStatus,
      description,
      avatar,
    });
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="stores.html">Stores</a></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
              <li className="breadcrumb-item active">Edit Store Details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Store Details</h4>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Store Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Owner Name <span className="login-danger">*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Store Category <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        value={storeCategory}
                        onChange={(e) => setStoreCategory(e.target.value)}
                      >
                        <option>Choose Store Category</option>
                        <option>Health Care</option>
                        <option>Fitness</option>
                        <option>Nutrition</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Store Sub Category <span className="login-danger">*</span></label>
                      <select
                        className="form-control select"
                        value={storeSubCategory}
                        onChange={(e) => setStoreSubCategory(e.target.value)}
                      >
                        <option>Choose Sub Store Category</option>
                        <option>Pharmacy</option>
                        <option>Supplements</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block local-forms">
                      <label>Tags <small>(separated with a comma)</small> <span className="login-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-6">
                    <div className="input-block select-gender">
                      <label className="gen-label">Store Status <span className="login-danger">*</span></label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="storeStatus"
                            className="form-check-input"
                            value="Open"
                            checked={storeStatus === 'Open'}
                            onChange={() => setStoreStatus('Open')}
                          />
                          Open
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="storeStatus"
                            className="form-check-input"
                            value="Closed"
                            checked={storeStatus === 'Closed'}
                            onChange={() => setStoreStatus('Closed')}
                          />
                          Closed
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-12">
                    <div className="input-block summer-mail">
                      <textarea
                        rows="4"
                        cols="5"
                        className="form-control summernote"
                        placeholder="Enter store description here"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-xl-12">
                    <div className="input-block local-top-form">
                      <label className="local-top">Store Logo <span className="login-danger">*</span></label>
                      <div className="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="logo"
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
                      <button type="submit" className="btn btn-primary submit-form me-2">Update Store</button>
                      <button type="button" className="btn btn-primary cancel-form" onClick={() => console.log('Cancel')}>Cancel</button>
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

export default EditStoreDetails;