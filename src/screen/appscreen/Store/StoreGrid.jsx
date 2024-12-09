import React from 'react';
import { ChevronRight } from 'react-feather';
import { FaStore, FaMapMarkerAlt, FaPhoneAlt, FaLongArrowAltRight } from 'react-icons/fa';
import store1 from '../../../assest/img/store/store1.jfif'
import store2 from '../../../assest/img/store/store1.jfif'
import store3 from '../../../assest/img/store/store1.jfif'
import store4 from '../../../assest/img/store/store1.jfif'
import store5 from '../../../assest/img/store/store1.jfif'
import store6 from '../../../assest/img/store/store1.jfif'

const StoreGrid = () => {
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="stores.html">Stores </a>
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
        {/* Store 1 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="store-details.html">
                <img
                  className="img-fluid"
                  src={store1}
                  alt="Store 1"
                />
              </a>
              <div className="blog-views">
                <h5>HealthMart</h5>
              </div>
            </div>
            <div className="store-content">
              <div className="store-grp-blk">
                <span>
                  <FaMapMarkerAlt className="me-1" />123 Health Street, Wellness City
                </span>
                <span>
                  <FaPhoneAlt className="me-1" />(123) 456-7890
                </span>
              </div>
              <p>
                HealthMart provides a wide range of health products and supplements to support your well-being...
              </p>
              <a href="store-details.html" className="read-more d-flex">
                View Store Details
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Store 2 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="store-details.html">
                <img
                  className="img-fluid"
                  src={store2}
                  alt="Store 2"
                />
              </a>
              <div className="blog-views">
                <h5>PharmaPlus</h5>
              </div>
            </div>
            <div className="store-content">
              <div className="store-grp-blk">
                <span>
                  <FaMapMarkerAlt className="me-1" />456 Wellness Avenue, Health City
                </span>
                <span>
                  <FaPhoneAlt className="me-1" />(987) 654-3210
                </span>
              </div>
              <p>
                PharmaPlus offers a comprehensive selection of pharmaceutical products and health services...
              </p>
              <a href="store-details.html" className="read-more d-flex">
                View Store Details
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Store 3 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="store-details.html">
                <img
                  className="img-fluid"
                  src={store3}
                  alt="Store 3"
                />
              </a>
              <div className="blog-views">
                <h5>WellnessStore</h5>
              </div>
            </div>
            <div className="store-content">
              <div className="store-grp-blk">
                <span>
                  <FaMapMarkerAlt className="me-1" />789 Health Road, Medical Town
                </span>
                <span>
                  <FaPhoneAlt className="me-1" />(555) 123-4567
                </span>
              </div>
              <p>
                WellnessStore is dedicated to providing high-quality wellness products and services...
              </p>
              <a href="store-details.html" className="read-more d-flex">
                View Store Details
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Store 4 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="store-details.html">
                <img
                  className="img-fluid"
                  src={store4}
                  alt="Store 4"
                />
              </a>
              <div className="blog-views">
                <h5>PharmaWorld</h5>
              </div>
            </div>
            <div className="store-content">
              <div className="store-grp-blk">
                <span>
                  <FaMapMarkerAlt className="me-1" />101 Pharmacy Lane, Medic City
                </span>
                <span>
                  <FaPhoneAlt className="me-1" />(444) 567-8901
                </span>
              </div>
              <p>
                PharmaWorld provides top-notch pharmaceutical products and personalized health solutions...
              </p>
              <a href="store-details.html" className="read-more d-flex">
                View Store Details
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Store 5 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="store-details.html">
                <img
                  className="img-fluid"
                  src={store5}
                  alt="Store 5"
                />
              </a>
              <div className="blog-views">
                <h5>HealthPlus</h5>
              </div>
            </div>
            <div className="store-content">
              <div className="store-grp-blk">
                <span>
                  <FaMapMarkerAlt className="me-1" />202 Wellness Boulevard, Health District
                </span>
                <span>
                  <FaPhoneAlt className="me-1" />(333) 678-9012
                </span>
              </div>
              <p>
                HealthPlus offers a diverse range of health products and expert advice for your well-being...
              </p>
              <a href="store-details.html" className="read-more d-flex">
                View Store Details
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Store 6 */}
        <div className="col-sm-6 col-md-6 col-xl-4">
          <div className="blog grid-blog">
            <div className="blog-image">
              <a href="store-details.html">
                <img
                  className="img-fluid"
                  src={store6}
                  alt="Store 6"
                />
              </a>
              <div className="blog-views">
                <h5>CareCenter</h5>
              </div>
            </div>
            <div className="store-content">
              <div className="store-grp-blk">
                <span>
                  <FaMapMarkerAlt className="me-1" />303 Care Drive, Health Haven
                </span>
                <span>
                  <FaPhoneAlt className="me-1" />(222) 345-6789
                </span>
              </div>
              <p>
                CareCenter is your go-to place for all health-related products and consultations...
              </p>
              <a href="store-details.html" className="read-more d-flex">
                View Store Details
                <FaLongArrowAltRight className="ms-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreGrid;
