import React, { useState } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';
import { FaTrash } from 'react-icons/fa';
import searchnormal from '../../../img/icons/search-normal.svg';
import plus from '../../../img/icons/plus.svg';

const Holidays = () => {
  const [holidays, setHolidays] = useState([
    { title: 'New Year', date: '01.01.2022', day: 'Sunday', description: 'Common Holiday' },
    { title: 'Pongal', date: '14.01.2022', day: 'Friday', description: 'Common Holiday' },
    { title: 'Pongal Holiday', date: '15.01.2022', day: 'Saturday', description: 'Common Holiday' },
    { title: 'Tamil New Year', date: '14.04.2022', day: 'Thursday', description: 'Common Holiday' },
    { title: 'Good Friday', date: '15.04.2022', day: 'Friday', description: 'Common Holiday' },
    { title: 'May Day', date: '01.05.2022', day: 'Sunday', description: 'Common Holiday' },
    { title: 'Ramzan', date: '02.05.2022', day: 'Monday', description: 'Common Holiday' },
    { title: 'Independence day', date: '15.08.2022', day: 'Monday', description: 'Common Holiday' }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    title: '',
    date: '',
    day: '',
    description: '',
  });

  const handleAddHoliday = (e) => {
    e.preventDefault();
    setHolidays([...holidays, newHoliday]);
    setShowAddModal(false);
    setNewHoliday({ title: '', date: '', day: '', description: '' });
  };

  const handleDeleteHoliday = (index) => {
    const updatedHolidays = holidays.filter((_, i) => i !== index);
    setHolidays(updatedHolidays);
  };

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><div href="staff-list.html">Staffs</div></li>
              <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
              <li className="breadcrumb-item active">Holidays</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              <div className="page-table-header mb-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="doctor-table-blk-holiday">
                      <h3>Holidays</h3>
                      <div className="doctor-search-blk">
                        {/* <div className="top-nav-search table-search-blk">
                          <form> */}
                          {/* <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              value={searchQuery}
                              onChange={handleSearchChange}
                            /> */}
                          {/* </form>
                        </div> */}
                        <div className="add-group">
                          <button 
                            className="btn btn-primary add-pluss ms-2" 
                            onClick={() => setShowAddModal(true)}
                          >
                            <img src={plus} alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <div href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-01.svg" alt="" /></div>
                    <div href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-02.svg" alt="" /></div>
                    <div href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-03.svg" alt="" /></div>
                    <div href="javascript:;"><img src="assets/img/icons/pdf-icon-04.svg" alt="" /></div>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <Table className="border-0 custom-table comman-table datatable mb-0" striped bordered hover>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Holiday Date</th>
                      <th>Day</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holidays.map((holiday, index) => (
                      <tr key={index}>
                        <td>{holiday.title}</td>
                        <td>{holiday.date}</td>
                        <td>{holiday.day}</td>
                        <td>{holiday.description}</td>
                        <td >
                          <button 
                            className="btn btn-sm btn-danger" 
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            onClick={() => handleDeleteHoliday(index)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} dialogClassName="transparent-modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddHoliday}>
            <Form.Group controlId="holidayTitle">
              <Form.Label>Holiday Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter holiday title" 
                value={newHoliday.title} 
                onChange={(e) => setNewHoliday({ ...newHoliday, title: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="holidayDate">
              <Form.Label>Holiday Date</Form.Label>
              <Form.Control 
                type="date" 
                value={newHoliday.date} 
                onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="holidayDay">
              <Form.Label>Day</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter day of the week" 
                value={newHoliday.day} 
                onChange={(e) => setNewHoliday({ ...newHoliday, day: e.target.value })} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="holidayDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                placeholder="Enter holiday description" 
                value={newHoliday.description} 
                onChange={(e) => setNewHoliday({ ...newHoliday, description: e.target.value })} 
                required 
              />
            </Form.Group>
            <div className="col-12 mt-2">
                    <div className="doctor-submit text-end">
                      
                      <button
                      onClick={() => setShowAddModal(false)}
                        type="button"
                        className="btn btn-primary cancel-form me-2"
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
            {/* <div className="col-12 mt-3">
              <div className="doctor-submit text-end">
                
                <button 
                  type="button" 
                  className="btn btn-secondary cancel-form" 
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary submit-form me-2">Add Holiday</button>
              </div>
            </div> */}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Holidays;
