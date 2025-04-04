import React from 'react';
import blog1 from '../../../assest/img/blog/blog-01.jpg'
import blog2 from '../../../assest/img/blog/blog-02.jpg'
import avatar1 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar2 from '../../../assest/img/profiles/avatar-01.jpg'
import avatar3 from '../../../assest/img/profiles/avatar-03.jpg'
import avatar4 from '../../../assest/img/profiles/avatar-04.jpg'
import avatar5 from '../../../assest/img/profiles/avatar-05.jpg'
import blog3 from '../../../assest/img/blog/blog-03.jpg'
import blog4 from '../../../assest/img/blog/blog-04.jpg'
import social1 from '../../../assest/img/icons/social-01.svg'
import social2 from '../../../assest/img/icons/social-02.svg'
import social3 from '../../../assest/img/icons/social-03.svg'
import social4 from '../../../assest/img/icons/social-04.svg'
import blogdetail from '../../../assest/img/blog/blog-detail.jpg'
import { ChevronRight } from 'react-feather';
// Breadcrumb Component
const Breadcrumb = () => (
  <ul className="breadcrumb">
    <li className="breadcrumb-item"><div href="blog.html">Blog </div></li>
    <li className="breadcrumb-item"><ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/></li>
    <li className="breadcrumb-item active">View Blog</li>
  </ul>
);

// Blog Component
const BlogView = () => (
  <div className="blog-view">
    <article className="blog blog-single-post">
      <h3 className="blog-title">Eye Care Routine To Get Rid Of Under Eye Circles And Puffiness</h3>
      <div className="blog-info clearfix">
        <div className="post-right read-blks"><div href="#.">Read more in 8 Minutes</div></div>
        <div className="post-left date-blks">
          <ul>
            <li><div href="#."><i className="feather-calendar"></i> <span>05 Jul 2022</span></div></li>
            <li><div href="#."><i className="feather-message-square"></i> <span>58</span></div></li>
            <li><div href="#."><i className="feather-eye"></i> <span>2.8k</span></div></li>
          </ul>
        </div>
      </div>
      <div className="blog-image">
        <div href="#."><img src={blogdetail} className="img-fluid" alt="Blog Detail" /></div>
      </div>
      <div className="blog-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <p>Sed ut perspiciatis unde omnis iste natus error...</p>
      </div>
      <BlogShare />
      <BlogTags />
    </article>
    {/* <AuthorWidget /> */}
    <Comments />
  </div>
);

// Blog Share Component
const BlogShare = () => (
  <div className="blog-share ">
    <div className="share-blogs d-flex align-items-center">
      <div href="javascript:;"><img src={social1} alt="" /></div>
      <span className="ms-2">2.8k</span>
    </div>
    <ul className="social-share nav">
      <li><div href="javascript:;"><img src={social1} alt="" /></div></li>
      <li><div href="javascript:;"><img src={social2} alt="" /></div></li>
      <li><div href="javascript:;"><img src={social3} alt="" /></div></li>
      <li><div href="javascript:;"><img src={social4} alt="" /></div></li>
    </ul>
  </div>
);

// Blog Tags Component
const BlogTags = () => (
  <div className="list-add-blogs">
    <ul className="nav">
      <li># Ophthalmology</li>
      <li># Beauty</li>
      <li># Prevention</li>
    </ul>
  </div>
);



// Comments Component
const Comments = () => (
  <div className="widget blog-comments clearfix">
    <h3>Comments</h3>
    <ul className="comments-list">
      <Comment 
        author="Diana Bailey"
        avatar={avatar1}
        time="2 Weeks ago"
        content="Integer enim neque volutpat ac tincidunt vitae..."
      />
      <Comment 
        author="Diana Bailey"
        avatar={avatar2}
        time="2 Weeks ago"
        content="Integer enim neque volutpat ac tincidunt vitae..."
      />
      <Comment 
        author="Diana Bailey"
        avatar={avatar3}
        time="2 Weeks ago"
        content="Integer enim neque volutpat ac tincidunt vitae..."
      />
    </ul>
    <CommentForm />
  </div>
);

// Single Comment Component
const Comment = ({ author, avatar, time, content }) => (
  <li>
    <div className="comment">
      <div className="comment-author">
        <div href="profile.html"><img className="avatar" src={avatar} alt={author} /></div>
      </div>
      <div className="comment-block">
        <div className="comment-by">
          <div className="week-group">
            <h5 className="blog-author-name">{author}</h5>
            <span className="week-list">{time}</span>
          </div>
          <span className="float-end">
            <span className="blog-reply"><div href="#."><i className="fa fa-reply"></i> Reply</div></span>
          </span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  </li>
);

// Comment Form Component
const CommentForm = () => (
  <div className="widget new-comment clearfix">
    <h3>Leave a Comment</h3>
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
            <label>Comments <span className="login-danger">*</span></label>
            <textarea className="form-control" rows="3" cols="30"></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="remember-me">
            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Save my name, email, and website in this browser for the next time I comment.
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
    <RelatedPosts />
    <TagsWidget />
    <MostReads />
    <Categories />
  </aside>
);

// Related Posts Component
const RelatedPosts = () => (
  <div className="widget post-widget mt-5">
    <div className="relat-head">
      <h5>Related Posts</h5>
      <div href="javascript:;">Show All</div>
    </div>
    <ul className="latest-posts">
      <RelatedPost 
        category="Health" 
        date="05 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog1}
      />
      <RelatedPost 
        category="Health" 
        date="02 Aug 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog2}
      />
      <RelatedPost 
        category="Health" 
        date="15 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog3}
      />
    </ul>
  </div>
);

// Single Related Post Component
const RelatedPost = ({ category, date, title, imgSrc }) => (
  <li>
    <div className="post-thumb">
      <div href="blog-details.html">
        <img className="img-fluid" src={imgSrc} alt="Related Post" />
      </div>
    </div>
    <div className="post-info">
      <h4><div href="blog-details.html">{title}</div></h4>
      <p><span>{category}</span> | <span>{date}</span></p>
    </div>
  </li>
);

// Tags Widget Component
const TagsWidget = () => (
  <div className="widget tags-widget">
    <h5>Tags</h5>
    <ul className="tags">
      <li><div href="#.">#Health</div></li>
      <li><div href="#.">#Hospital</div></li>
      <li><div href="#.">#Doctors</div></li>
      <li><div href="#.">#Nurse</div></li>
      <li><div href="#.">#Wardboy</div></li>
      <li><div href="#.">#Care</div></li>
      <li><div href="#.">#OT</div></li>
      <li><div href="#.">#ICU</div></li>
    </ul>
  </div>
);

// Most Reads Component
const MostReads = () => (
  <div className="widget post-widget">
    <h5>Most Read</h5>
    <ul className="latest-posts">
      <RelatedPost 
        category="Health" 
        date="05 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog1}
      />
      <RelatedPost 
        category="Health" 
        date="02 Aug 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog2}
      />
      <RelatedPost 
        category="Health" 
        date="15 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog3}
      />
      <RelatedPost 
        category="Health" 
        date="15 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog3}
      />
      <RelatedPost 
        category="Health" 
        date="15 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog3}
      />
      <RelatedPost 
        category="Health" 
        date="15 Sep 2022" 
        title="Hydration or Moisturization – What to do this Winter?"
        imgSrc={blog3}
      />
      
    </ul>
  </div>
);

// Categories Component
const Categories = () => (
  <div className="widget categories-widget">
    <h5>Categories</h5>
    <ul className="categories">
      <li><div href="#.">Health<span>(30)</span></div></li>
      <li><div href="#.">Business<span>(28)</span></div></li>
      <li><div href="#.">Technology<span>(25)</span></div></li>
      <li><div href="#.">Hospital<span>(20)</span></div></li>
      <li><div href="#.">Medical<span>(16)</span></div></li>
    </ul>
  </div>
);

// Main Blog Page Component
const BlogDetails = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <Breadcrumb />
        <BlogView />
      </div>
      <Sidebar />
    </div>
  </div>
);

export default BlogDetails;
