import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'react-feather';
import { FaEye, FaComments, FaLongArrowAltRight, FaCalendar } from 'react-icons/fa';
import blog1 from '../../../assest/img/blog/blog-01.jpg'
import blog2 from '../../../assest/img/blog/blog-02.jpg'
import avatar1 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar2 from '../../../assest/img/profiles/avatar-01.jpg'
import avatar3 from '../../../assest/img/profiles/avatar-03.jpg'
import avatar4 from '../../../assest/img/profiles/avatar-04.jpg'
import avatar5 from '../../../assest/img/profiles/avatar-05.jpg'
import blog3 from '../../../assest/img/blog/blog-03.jpg'
import blog4 from '../../../assest/img/blog/blog-04.jpg'
import { Link, useNavigate } from 'react-router-dom';
import plus from '../../../img/icons/plus.svg'
import { FaPen, FaTrash } from 'react-icons/fa';
import refresh from '../../../img/icons/re-fresh.svg'
import store1 from '../../../assest/img/store/store1.jfif'
import store2 from '../../../assest/img/store/store1.jfif'
import store3 from '../../../assest/img/store/store1.jfif'
import store4 from '../../../assest/img/store/store1.jfif'
import store5 from '../../../assest/img/store/store1.jfif'
import store6 from '../../../assest/img/store/store1.jfif'
import { getMedicallistAction } from '../../../reduxtool/app/middleware';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { appSelector } from '../../../reduxtool/app/appslice';
import { blogEditData, medicalStoreEditData } from '../../../reduxtool/editstate/editSlice';

const StoreGrid = () => {
  const rowsPerPage = 25;
    const dispatch = useDispatch()
    const store  = useSelector(appSelector)
    console.log("store",store);
    
     const [searchQuery, setSearchQuery] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const filteredBlogs = store?.Medicallist?.filter((blog) =>
        blog.store_name.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
  
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredBlogs?.slice(indexOfFirstRow, indexOfLastRow);
  
    const totalPages = Math.ceil(filteredBlogs?.length / rowsPerPage);
    const router = useNavigate()
   
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1); // Reset to first page on search
    };
  console.log('===================blog=================');
  console.log(store?.Medicallist);
  console.log('===================blog=================');
    useEffect(() => {
      dispatch(getMedicallistAction())
    }, [dispatch])
  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="stores.html">Stores </div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} />
              </li>
              <li className="breadcrumb-item active">Store List</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row" >
        <div className="col-sm-12" >
          <div className="card card-table show-entire">
            <div className="card-body">
              <div className="page-table-header mb-2">
                <div className="row align-items-center">
                  <div className="col">
                    <div className="doctor-table-blk">
                      <h3>Store List</h3>
                      <div className="doctor-search-blk">
                        <div className="top-nav-search table-search-blk">
                        <form>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              value={searchQuery}
                              onChange={handleSearchChange}
                            />
                            {/* <div className="btn">
                              <img src={searchnormal} alt="Search" />
                            </div> */}
                          </form>
                        </div>
                        <div className="add-group">
                          <Link to="/addmedicalstorepage" className="btn btn-primary add-pluss ms-2">
                            <img src={plus} alt="" />
                          </Link>
                          <div
                            onClick={() => dispatch(getMedicallistAction())}
                            className="btn btn-primary doctor-refresh ms-2"
                          >
                            <img src={refresh} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
<div className='row' style={{backgroundColor:"#f5f5f6" , paddingTop:"10px"}}>
              {currentRows?.map((department) => (
      <div key={department.id} className="col-sm-6 col-md-6 col-xl-4">
      <div className="blog grid-blog">
        <div className="blog-image">
          <div href={department.readMoreLink}>
            <img className="img-fluid"  src={store6} alt={department.title} />
          </div>
         
          <ul className="nav view-blog-list blog-views">
            {/* <li>
              <FaComments className="me-1" />
              {blog.comments}
            </li>
            <li>
              <FaEye className="me-1" />
              {blog.views}
            </li> */}
            {/* <li>
              <FaComments className="me-1" />58
            </li>
            <li>
              <FaEye className="me-1" />500
            </li> */}
          </ul>
        </div>
        <div className="blog-content">
          <div className="blog-grp-blk">
            <div className="blog-img-blk">
              <div href={department.profileLink}>
                <img className="img-fluid" src={store6} alt={department.title} />
              </div>
              <div className="content-blk-blog ms-2">
                <h4>
                  <div href="profile.html">{department.store_name}</div>
                </h4>
                <h5>{department.contact_number}</h5>
              </div>
              
            </div>
           
          </div>
          <h3 className="blog-title">
            <div href={department.readMoreLink}>{department.email}</div>
          </h3>
          <h3 className="blog-title">
            <div href={department.readMoreLink}>{department.website}</div>
          </h3>
          <div className="d-flex align-items-center" style={{justifyContent:"space-between"}}>
          <p>{department.location
          }</p>
            <button
              className="btn btn-sm btn-danger"
              style={{ backgroundColor: '#2e37a4', borderColor: '#2e37a4' ,  }}
              onClick={() => {
                router('/editstoredetails')
                dispatch(medicalStoreEditData(department))
              }}
            >
              <FaPen />
            </button>
          </div>
          
          
        </div>
      </div>
    </div>
      ))}
</div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StoreGrid;
