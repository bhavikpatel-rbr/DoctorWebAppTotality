import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import plus from '../../../img/icons/plus.svg';
import refresh from '../../../img/icons/re-fresh.svg';
import { ChevronRight } from 'react-feather';
const ArticleList = () => {
  const rowsPerPage = 10;
  const router = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const articles = [
    { id: 1, title: 'React Hooks Guide', author: 'John Doe', category: 'React', published_at: '2024-01-01' },
    { id: 2, title: 'JavaScript Best Practices', author: 'Jane Smith', category: 'JavaScript', published_at: '2024-02-15' },
    { id: 3, title: 'CSS Grid vs Flexbox', author: 'Michael Lee', category: 'CSS', published_at: '2024-03-10' },
    { id: 4, title: 'Understanding Redux', author: 'Emily Johnson', category: 'Redux', published_at: '2024-04-05' },
    { id: 5, title: 'TypeScript Basics', author: 'Robert Brown', category: 'TypeScript', published_at: '2024-05-20' },
    { id: 6, title: 'Node.js Performance Tips', author: 'Alice Green', category: 'Node.js', published_at: '2024-06-12' },
    { id: 7, title: 'Next.js vs Create React App', author: 'Chris Martin', category: 'Next.js', published_at: '2024-07-08' },
    { id: 8, title: 'GraphQL vs REST API', author: 'Laura Wilson', category: 'GraphQL', published_at: '2024-08-01' },
    { id: 9, title: 'Web Accessibility Basics', author: 'Daniel Carter', category: 'Accessibility', published_at: '2024-09-15' },
    { id: 10, title: 'Performance Optimization in React', author: 'Sophia Miller', category: 'React', published_at: '2024-10-30' },
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredArticles.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredArticles.length / rowsPerPage);

  return (
    <>
    <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <div href="staff-list.html">Article </div>
                  </li>
                  <li className="breadcrumb-item">
                                 <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
                               </li>
                  <li className="breadcrumb-item active">Article List</li>
                </ul>
              </div>
            </div>
          </div>
    <div>
    <div className="row">
        <div className="col-sm-12">
          <div className="card card-table show-entire">
            <div className="card-body">
              <div className="page-table-header mb-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="doctor-table-blk">
                      <h3>Article List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                          <form>
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              // value={searchQuery}
                              // onChange={handleSearchChange}
                            />
                           
                          </form>
                        </div>
                        <div className="add-group">
                        <Link to="/addarticle" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <div
                            // onClick={() => dispatch(allStaffUsersAction())}
                            className="btn btn-primary doctor-refresh ms-2"
                          >
                            <img src={refresh} alt="Refresh" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-auto text-end float-end ms-auto download-grp">
                    <div href="javascript:;" className="me-2">
                      <img
                        src={pdf1}
                        alt="PDF Icon 1"
                      />
                    </div>
                    <div href="javascript:;" className="me-2">
                      <img
                        src={pdf2}
                        alt="PDF Icon 2"
                      />
                    </div>
                    <div href="javascript:;" className="me-2">
                      <img
                         src={pdf3}
                        alt="PDF Icon 3"
                      />
                    </div>
                    <div href="javascript:;">
                    <img
                         src={pdf4}
                        alt="PDF Icon 3"
                      />
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="table-responsive">
                <table className="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                  <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Published Date</th>
              <th>Actions</th>
            </tr>
                  </thead>
                  <tbody>
                    {/* Map through staff data here */}
                    {currentRows?.map((article, index) => (
                      <tr key={article.id}>
                      <td>{article.title}</td>
                      <td>{article.author}</td>
                      <td>{article.category}</td>
                      <td>{article.published_at}</td>
                        <td className="text-end">
                          <button
                            className="btn btn-sm btn-danger me-2"
                            style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' }}
                            onClick={() => {
                               router('/addarticle');
                              // dispatch(staffEditData(staff));
                            }}
                          >
                            <FaPen />
                          </button>
                          {/* <button
                            className="btn btn-sm btn-danger "
                            style={{ backgroundColor: '#dc3545', borderColor: '#dc3545' }}
                          // onClick={() => console.log('Delete', doctor.id)}
                          >
                            <FaTrash />
                          </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav>
                <ul className="pagination justify-content-center" style={{ marginTop: '20px' }}>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} style={{ margin: '0 5px' }}>
                      <div
                        className="page-link"
                        href="#"
                         onClick={() => paginate(index + 1)}
                        style={{
                          border: '1px solid #2e37a4',
                          color: currentPage === index + 1 ? '#fff' : '#2e37a4',
                          backgroundColor: currentPage === index + 1 ? '#2e37a4' : '#fff',
                          borderRadius: '4px',
                          padding: '6px 12px',
                          cursor: 'pointer',
                        }}
                      >
                        {index + 1}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default ArticleList;