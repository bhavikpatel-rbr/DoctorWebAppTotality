import React, { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { getbloglistAction } from '../../../reduxtool/app/middleware';
import { appSelector } from '../../../reduxtool/app/appslice';
import { useSelector } from 'react-redux';
const BlogGrid = () => {
  const dispatch = useDispatch()
  const blogs  = useSelector(appSelector)
  console.log('===================blog=================');
  console.log(blogs);
  console.log('===================blog=================');
    useEffect(() => {
      dispatch(getbloglistAction())
    }, [dispatch])
  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <div href="blog.html">Blog </div>
              </li>
              <li className="breadcrumb-item">
                <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
              </li>
              <li className="breadcrumb-item active">Blogs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        
        {blogs?.bloglist?.map((blog) => (
        <div key={blog.id} className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <div href={blog.readMoreLink}>
                <img className="img-fluid"  src={blog1} alt={blog.title} />
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
                <li>
                  <FaComments className="me-1" />58
                </li>
                <li>
                  <FaEye className="me-1" />500
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <div className="blog-grp-blk">
                <div className="blog-img-blk">
                  <div href={blog.profileLink}>
                    <img className="img-fluid" src={avatar1} alt={blog.authorName} />
                  </div>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <div href="profile.html">{blog.author}</div>
                    </h4>
                    <h5>M.B.B.S, Diabetologist</h5>
                  </div>
                 
                </div>
                <span>
                  <FaCalendar className="me-1" />
                  {blog.created_at
                  }
                  {/* 05 Sep 2022 */}
                </span>
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

export default BlogGrid;
