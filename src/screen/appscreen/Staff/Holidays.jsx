import React, { useState } from 'react';
import { Table, Dropdown, Modal, Button, Form } from 'react-bootstrap';
import { ChevronRight } from 'react-feather';
import searchnormal from '../../../img/icons/search-normal.svg';
import plus from '../../../img/icons/plus.svg'
import { FaPen, FaTrash } from 'react-icons/fa';
import refresh from '../../../img/icons/re-fresh.svg'
const Holidays = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newHoliday, setNewHoliday] = useState({
    title: '',
    date: '',
    day: '',
    description: '',
  });

  const handleAddHoliday = (e) => {
    e.preventDefault();
    // Implement holiday addition logic
    console.log('Adding Holiday:', newHoliday);
    setShowAddModal(false);
    setNewHoliday({ title: '', date: '', day: '', description: '' }); // Reset form
  };

  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="staff-list.html">Staffs</a></li>
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
                    <div className="doctor-table-blk">
                      <h3>Holidays</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                            <input type="text" className="form-control" placeholder="Search here" />
                            <a className="btn"><img src={searchnormal} alt="" /></a>
                          </form>
                        </div>
                        <div className="add-group">
                        <button 
                            className="btn btn-primary add-pluss ms-2" 
                            onClick={() => setShowAddModal(true)}
                          >
                          <img 
                          
                          src={plus} alt="" />
                         </button>
                          <a href="javascript:;" className="btn btn-primary doctor-refresh ms-2">
                          <img src={refresh} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-01.svg" alt="" /></a>
                    <a href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-02.svg" alt="" /></a>
                    <a href="javascript:;" className="me-2"><img src="assets/img/icons/pdf-icon-03.svg" alt="" /></a>
                    <a href="javascript:;"><img src="assets/img/icons/pdf-icon-04.svg" alt="" /></a>
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
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Repeat rows for each holiday */}
                    {['New Year', 'Pongal', 'Pongal Holiday', 'Tamil New Year', 'Good Friday', 'May Day', 'Ramzan', 'Independence day'].map((holiday, index) => (
                      <tr key={index}>
                        
                        <td>{holiday}</td>
                        <td>{`01.01.2022`}</td>
                        <td>Sunday</td>
                        <td>Common Holiday</td>
                        
                        <td className="text-end">
                         
                          <button 
                            className="btn btn-sm btn-danger " 
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                            onClick={() => console.log('Delete', )}
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

      {/* Add Holiday Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}  dialogClassName="transparent-modal">
        <Modal.Header>
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
            <div className="col-12 mt-3">
                                            <div className="doctor-submit text-end">
                                                <button type="submit" className="btn btn-primary submit-form me-2">Add Holiday</button>
                                                <button type="button" className="btn btn-primary cancel-form">Cancel</button>
                                            </div>
                                        </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Holidays;
