import React, { useEffect } from 'react';
import { ChevronRight } from 'react-feather';
import { FaStore, FaMapMarkerAlt, FaPhoneAlt, FaLongArrowAltRight } from 'react-icons/fa';
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

const StoreGrid = () => {
  const dispatch = useDispatch()
  const blogs  = useSelector(appSelector)
  console.log('===================blog=================');
  console.log(blogs?.Medicallist);
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
              <li className="breadcrumb-item active">Store Directory</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
      {blogs?.Medicallist?.map((blog) => (
        <div key={blog.id} className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <div href={blog.readMoreLink}>
                <img className="img-fluid"  src={store6} alt={blog.title} />
              </div>
              <div className="blog-views">
                {/* <h5>{blog.category}</h5> */}
                <h5>Diabetes</h5>
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
                  <div href={blog.profileLink}>
                    <img className="img-fluid" src={store6} alt={blog.authorName} />
                  </div>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <div href="profile.html">{blog.author}</div>
                    </h4>
                    <h5>M.B.B.S, Diabetologist</h5>
                  </div>
                  
                </div>
               
              </div>
              <h3 className="blog-title">
                <div href={blog.readMoreLink}>{blog.title}</div>
              </h3>
              <p>{blog.content
              }</p>
              <div href={blog.readMoreLink} className="read-more d-flex">
                Read more in 2 Minutes
                <FaLongArrowAltRight className="ms-2" />
              </div>
            </div>
          </div>
        </div>
      ))}

       
      </div>
    </div>
  );
};

export default StoreGrid;
