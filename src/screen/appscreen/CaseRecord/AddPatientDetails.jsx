import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'react-feather';

const AddPatientDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    education: '',
    occupation: '',
    status: '',
    religion: '',
    caste: '',
    diet: '',
    spouseName: '',
    spouseAge: '',
    spouseOccupation: '',
    father: '',
    mother: '',
    unclesAunts: '',
    brother: '',
    sister: '',
    children: '',
    sons: '',
    daughters: '',
    address: '',
    telNo: '',
    fee: '',
    diagnosis: '',
    refBy: '',
    date: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add API call logic here
    // axios.post('/api/patient-details', formData).then(response => {
    //   console.log(response.data);
    //   navigate('/some-route');
    // }).catch(error => {
    //   console.error(error);
    // });
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/appointments">Appointment</Link>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Add Patient Details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
  <div className="col-sm-12">
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12">
              <div className="form-heading">
                <h4>Patient Details</h4>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Name:</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Age:</label>
                <input type="text" className="form-control" name="age" value={formData.age} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Sex:</label>
                <input type="text" className="form-control" name="sex" value={formData.sex} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Education:</label>
                <input type="text" className="form-control" name="education" value={formData.education} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Occupation:</label>
                <input type="text" className="form-control" name="occupation" value={formData.occupation} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Status:</label>
                <input type="text" className="form-control" name="status" value={formData.status} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Religion:</label>
                <input type="text" className="form-control" name="religion" value={formData.religion} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Caste:</label>
                <input type="text" className="form-control" name="caste" value={formData.caste} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Diet (Veg/Non-Veg/Eggs):</label>
                <input type="text" className="form-control" name="diet" value={formData.diet} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Spouse Name:</label>
                <input type="text" className="form-control" name="spouseName" value={formData.spouseName} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Spouse Age:</label>
                <input type="text" className="form-control" name="spouseAge" value={formData.spouseAge} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Spouse Occupation:</label>
                <input type="text" className="form-control" name="spouseOccupation" value={formData.spouseOccupation} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Father:</label>
                <input type="text" className="form-control" name="father" value={formData.father} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Mother:</label>
                <input type="text" className="form-control" name="mother" value={formData.mother} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Uncles/Aunts:</label>
                <input type="text" className="form-control" name="unclesAunts" value={formData.unclesAunts} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Brother:</label>
                <input type="text" className="form-control" name="brother" value={formData.brother} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Sister:</label>
                <input type="text" className="form-control" name="sister" value={formData.sister} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Children:</label>
                <input type="text" className="form-control" name="children" value={formData.children} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Sons:</label>
                <input type="text" className="form-control" name="sons" value={formData.sons} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Daughters:</label>
                <input type="text" className="form-control" name="daughters" value={formData.daughters} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Address:</label>
                <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Telephone No:</label>
                <input type="text" className="form-control" name="telNo" value={formData.telNo} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Fee:</label>
                <input type="text" className="form-control" name="fee" value={formData.fee} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Diagnosis:</label>
                <input type="text" className="form-control" name="diagnosis" value={formData.diagnosis} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Degree of Disability:</label>
                <input type="text" className="form-control" name="degreeDisability" value={formData.degreeDisability} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <div className="input-block local-forms">
                <label>Photograph:</label>
                <input type="text" className="form-control" name="photograph" value={formData.photograph} onChange={handleChange} />
              </div>
            </div>

            <div className="col-12">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">
                        Submit
                      </button>
                      <button type="button" className="btn btn-primary cancel-form">
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

export default AddPatientDetails;
