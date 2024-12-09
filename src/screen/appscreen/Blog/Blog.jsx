import React from 'react';
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
const BlogGrid = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="blog.html">Blog </a>
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
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img
                  className="img-fluid"
                  src={blog1}
                  alt="Blog 1"
                />
              </a>
              <div className="blog-views">
                <h5>Diabetes</h5>
              </div>
              <ul className="nav view-blog-list blog-views">
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
                  <a href="profile.html">
                    <img
                      className="img-fluid"
                      src={avatar1}
                      alt="Avatar 1"
                    />
                  </a>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <a href="profile.html">Bhavik Rupapara</a>
                    </h4>
                    <h5>M.B.B.S, Diabetologist</h5>
                  </div>
                </div>
                <span>
                  <FaCalendar className="me-1" />05 Sep 2022
                </span>
              </div>
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Simple Changes That Lowered My Mom's Blood Pressure
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="blog-details.html" className="read-more d-flex">
                Read more in 8 Minutes
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Repeat the above block for each blog post, adjusting the content accordingly */}
        
        {/* Blog 2 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img
                  className="img-fluid"
                  src={blog2}
                  alt="Blog 2"
                />
              </a>
              <div className="blog-views">
                <h5>Safety</h5>
              </div>
              <ul className="nav view-blog-list blog-views">
                <li>
                  <FaComments className="me-1" />18
                </li>
                <li>
                  <FaEye className="me-1" />5k
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <div className="blog-grp-blk">
                <div className="blog-img-blk">
                  <a href="profile.html">
                    <img
                      className="img-fluid"
                      src={avatar2}
                      alt="Avatar 2"
                    />
                  </a>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <a href="profile.html">Mark hay smith</a>
                    </h4>
                    <h5>M.B.B.S, Neurologist</h5>
                  </div>
                </div>
                <span>
                  <FaCalendar className="me-1" />05 Sep 2022
                </span>
              </div>
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Vaccines Are Close - But Right Now We Need to Hunker Down
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="blog-details.html" className="read-more d-flex">
                Read more in 2 Minutes
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img
                  className="img-fluid"
                  src={blog3}
                  alt="Blog 2"
                />
              </a>
              <div className="blog-views">
                <h5>Safety</h5>
              </div>
              <ul className="nav view-blog-list blog-views">
                <li>
                  <FaComments className="me-1" />18
                </li>
                <li>
                  <FaEye className="me-1" />5k
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <div className="blog-grp-blk">
                <div className="blog-img-blk">
                  <a href="profile.html">
                    <img
                      className="img-fluid"
                      src={avatar3}
                      alt="Avatar 2"
                    />
                  </a>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <a href="profile.html">Mark hay smith</a>
                    </h4>
                    <h5>M.B.B.S, Neurologist</h5>
                  </div>
                </div>
                <span>
                  <FaCalendar className="me-1" />05 Sep 2022
                </span>
              </div>
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Vaccines Are Close - But Right Now We Need to Hunker Down
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="blog-details.html" className="read-more d-flex">
                Read more in 2 Minutes
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img
                  className="img-fluid"
                  src={blog4}
                  alt="Blog 2"
                />
              </a>
              <div className="blog-views">
                <h5>Safety</h5>
              </div>
              <ul className="nav view-blog-list blog-views">
                <li>
                  <FaComments className="me-1" />18
                </li>
                <li>
                  <FaEye className="me-1" />5k
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <div className="blog-grp-blk">
                <div className="blog-img-blk">
                  <a href="profile.html">
                    <img
                      className="img-fluid"
                      src={avatar4}
                      alt="Avatar 2"
                    />
                  </a>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <a href="profile.html">Mark hay smith</a>
                    </h4>
                    <h5>M.B.B.S, Neurologist</h5>
                  </div>
                </div>
                <span>
                  <FaCalendar className="me-1" />05 Sep 2022
                </span>
              </div>
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Vaccines Are Close - But Right Now We Need to Hunker Down
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="blog-details.html" className="read-more d-flex">
                Read more in 2 Minutes
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="blog-details.html">
                <img
                  className="img-fluid"
                  src={blog1}
                  alt="Blog 2"
                />
              </a>
              <div className="blog-views">
                <h5>Safety</h5>
              </div>
              <ul className="nav view-blog-list blog-views">
                <li>
                  <FaComments className="me-1" />18
                </li>
                <li>
                  <FaEye className="me-1" />5k
                </li>
              </ul>
            </div>
            <div className="blog-content">
              <div className="blog-grp-blk">
                <div className="blog-img-blk">
                  <a href="profile.html">
                    <img
                      className="img-fluid"
                      src={avatar5}
                      alt="Avatar 2"
                    />
                  </a>
                  <div className="content-blk-blog ms-2">
                    <h4>
                      <a href="profile.html">Mark hay smith</a>
                    </h4>
                    <h5>M.B.B.S, Neurologist</h5>
                  </div>
                </div>
                <span>
                  <FaCalendar className="me-1" />05 Sep 2022
                </span>
              </div>
              <h3 className="blog-title">
                <a href="blog-details.html">
                  Vaccines Are Close - But Right Now We Need to Hunker Down
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <a href="blog-details.html" className="read-more d-flex">
                Read more in 2 Minutes
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
        {/* Repeat similarly for other blog posts */}
        
      </div>
    </div>
  );
};

export default BlogGrid;
