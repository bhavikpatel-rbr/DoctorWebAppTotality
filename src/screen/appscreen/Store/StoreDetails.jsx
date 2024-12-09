import React from 'react';
import store1 from '../../../assest/img/store/store2.jfif';
import store2 from '../../../assest/img/store/store2.jfif';
import avatar1 from '../../../assest/img/profiles/avatar-02.jpg';
import avatar2 from '../../../assest/img/profiles/avatar-01.jpg';
import avatar3 from '../../../assest/img/profiles/avatar-03.jpg';
import avatar4 from '../../../assest/img/profiles/avatar-04.jpg';
import avatar5 from '../../../assest/img/profiles/avatar-05.jpg';
import { ChevronRight } from 'react-feather';

// Breadcrumb Component
const Breadcrumb = () => (
  <ul className="breadcrumb">
    <li className="breadcrumb-item"><a href="stores.html">Stores</a></li>
    <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }} /></li>
    <li className="breadcrumb-item active">Store Details</li>
  </ul>
);

// Store Component
const StoreView = () => (
  <div className="blog-view">
    <article className="blog blog-single-post">
      <h3 className="blog-title">HealthMart: Your Go-To Store for Health Products</h3>
      <div className="blog-info clearfix">
        <div className="post-right read-blks"><a href="#.">Open for Visits</a></div>
        <div className="post-left date-blks">
          <ul>
            <li><a href="#."><i className="feather-map-pin"></i> <span>123 Health Street, Wellness City</span></a></li>
            <li><a href="#."><i className="feather-phone"></i> <span>(123) 456-7890</span></a></li>
            <li><a href="#."><i className="feather-clock"></i> <span>9 AM - 9 PM</span></a></li>
          </ul>
        </div>
      </div>
      <div className="blog-image">
        <a href="#."><img src={store1} className="img-fluid" alt="Store" /></a>
      </div>
      <div className="blog-content">
        <p>Welcome to HealthMart, where we offer a wide range of health products to support your well-being...</p>
        <p>Our expert team is here to assist you with personalized advice and top-quality products...</p>
      </div>
      {/* <StoreShare /> */}
      {/* <StoreTags /> */}
    </article>
    {/* <OwnerWidget /> */}
    <Reviews />
  </div>
);

// Store Share Component
const StoreShare = () => (
  <div className="blog-share">
    <div className="share-stores d-flex align-items-center">
      <a href="javascript:;"><img src={store2} alt="" /></a>
      <span className="ms-2">4.5k</span>
    </div>
  </div>
);

// Store Tags Component
const StoreTags = () => (
  <div className="list-add-stores">
    <ul className="nav">
      <li># Health</li>
      <li># Wellness</li>
      <li># Supplements</li>
    </ul>
  </div>
);

// Owner Widget Component
const OwnerWidget = () => (
  <div className="widget owner-widget">
    <div className="owner-blog-group text-center">
      <div className="owner-blog-img mb-2">
        <img className="avatar" src={avatar3} alt="Owner" />
      </div>
      <h2>Jane Doe</h2>
      <span>Owner</span>
      <p>Dedicated to providing you with the best health products and personalized service...</p>
      <ul className="nav social-blk">
        <li><a href="javascript:;"><img src={store2} alt="" /></a></li>
        <li><a href="javascript:;"><img src={store2} alt="" /></a></li>
        <li><a href="javascript:;"><img src={store2} alt="" /></a></li>
        <li><a href="javascript:;"><img src={store2} alt="" /></a></li>
      </ul>
    </div>
  </div>
);

// Reviews Component
const Reviews = () => (
  <div className="widget blog-reviews clearfix">
    <h3>Reviews</h3>
    <ul className="reviews-list">
      <Review 
        author="Alice Johnson"
        avatar={avatar1}
        time="2 Weeks ago"
        content="Great store! Found everything I needed and the staff were very helpful..."
      />
      <Review 
        author="Bob Smith"
        avatar={avatar2}
        time="1 Month ago"
        content="Excellent service and high-quality products. Highly recommend!"
      />
      <Review 
        author="Carla Davis"
        avatar={avatar3}
        time="3 Days ago"
        content="I love this place! The staff are friendly and the store is always well-stocked..."
      />
    </ul>
    <ReviewForm />
  </div>
);

// Single Review Component
const Review = ({ author, avatar, time, content }) => (
  <li>
    <div className="review">
      <div className="review-author">
        <a href="profile.html"><img className="avatar" src={avatar} alt={author} /></a>
      </div>
      <div className="review-block">
        <div className="review-by">
          <div className="week-group">
            <h5 className="blog-author-name">{author}</h5>
            <span className="week-list">{time}</span>
          </div>
          <span className="float-end">
            <span className="blog-reply"><a href="#."><i className="fa fa-reply"></i> Reply</a></span>
          </span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  </li>
);

// Review Form Component
const ReviewForm = () => (
  <div className="widget new-review clearfix">
    <h3>Leave a Review</h3>
    <form>
      <div className="row">
        <div className="col-12 col-md-6 col-xl-6">
          <div className="input-block local-forms">
            <label>Name <span className="login-danger">*</span></label>
            <input className="form-control" type="text" placeholder="Enter Name" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-6">
          <div className="input-block local-forms">
            <label>Email<span className="login-danger">*</span></label>
            <input className="form-control" type="text" placeholder="Enter Email" />
          </div>
        </div>
        <div className="col-12 col-sm-12">
          <div className="input-block local-forms">
            <label>Review <span className="login-danger">*</span></label>
            <textarea className="form-control" rows="3" cols="30"></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="remember-me">
            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
              Save my name, email, and website in this browser for the next time I comment.
              <input type="checkbox" name="radio" checked />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <div className="col-12">
                  
                  <div className="doctor-submit text-end">
                    <button type="submit" className="btn btn-primary submit-form me-2">Submit</button>
                    
                  </div>
                </div>
      </div>
    </form>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <aside className="col-md-4">
    <RelatedStores />
    <TagsWidget />
    {/* <MostPopularStores /> */}
    <Categories />
  </aside>
);

// Related Stores Component
const RelatedStores = () => (
  <div className="widget blog-widget">
    <div className="relat-head">
      <h5>Related Stores</h5>
      <a href="javascript:;">Show All</a>
    </div>
    <ul className="latest-stores">
      <RelatedStore 
        category="Health" 
        date="05 Sep 2022" 
        title="PharmaPlus: Top Pharmacy Services"
        imgSrc={store1}
      />
      <RelatedStore 
        category="Wellness" 
        date="02 Aug 2022" 
        title="Wellness Hub: Your Wellness Partner"
        imgSrc={store2}
      />
      <RelatedStore 
        category="Fitness" 
        date="15 Sep 2022" 
        title="Fitness Store: Gear for Everyone"
        imgSrc={store1}
      />
       <RelatedStore 
        category="Health" 
        date="05 Sep 2022" 
        title="PharmaPlus: Top Pharmacy Services"
        imgSrc={store1}
      />
      <RelatedStore 
        category="Wellness" 
        date="02 Aug 2022" 
        title="Wellness Hub: Your Wellness Partner"
        imgSrc={store2}
      />
      <RelatedStore 
        category="Fitness" 
        date="15 Sep 2022" 
        title="Fitness Store: Gear for Everyone"
        imgSrc={store1}
      />
    </ul>
  </div>
);

// Related Store Component
const RelatedStore = ({ category, date, title, imgSrc }) => (
  <li className='mt-3'>
    <div className="post-thumb">
      <a href="blog-details.html">
        <img className="img-fluid" src={imgSrc} alt="Related Post" />
      </a>
    </div>
    <div className="post-info">
      <h4><a href="blog-details.html">{title}</a></h4>
      <p><span>{category}</span> | <span>{date}</span></p>
    </div>
  </li>
);

// Most Popular Stores Component
const MostPopularStores = () => (
  <div className="widget blog-widget">
    <h5>Most Popular Stores</h5>
    <ul className="latest-stores">
      <PopularStore 
        title="Organic Shop" 
        category="Organic" 
        imgSrc={store2}
      />
      <PopularStore 
        title="Health Zone" 
        category="Health" 
        imgSrc={store1}
      />
    </ul>
  </div>
);

// Popular Store Component
const PopularStore = ({ title, category, imgSrc }) => (
  <li>
  <div className="post-thumb">
    <a href="blog-details.html">
      <img className="img-fluid" src={imgSrc} alt="Related Post" />
    </a>
  </div>
  <div className="post-info">
    <h4><a href="blog-details.html">{title}</a></h4>
    <p><span>{category}</span></p>
  </div>
</li>
);

// Tags Widget Component
const TagsWidget = () => (
  <div className="widget tags-widget">
    <h5>Tags</h5>
    <ul className="tags-list">
      <li><a href="#.">Health</a></li>
      <li><a href="#.">Wellness</a></li>
      <li><a href="#.">Organic</a></li>
    </ul>
  </div>
);

// Categories Component
const Categories = () => (
  <div className="widget categories-widget">
    <h5>Categories</h5>
    <ul className="categories-list">
      <li><a href="#.">Supplements</a></li>
      <li><a href="#.">Fitness Gear</a></li>
      <li><a href="#.">Supplements</a></li>
      <li><a href="#.">Supplements</a></li>
    </ul>
  </div>
);

// Main StoreDetails Component
const StoreDetails = () => {
  return (
    <div className="store-details">
      <Breadcrumb />
      <div className="row">
        <div className="col-md-8">
          <StoreView />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default StoreDetails;
