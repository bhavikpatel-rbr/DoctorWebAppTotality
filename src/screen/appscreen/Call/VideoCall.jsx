import React from 'react';
import avatar1 from '../../../assest/img/profiles/avatar-02.jpg' // Correct path and spelling for 'assets'
import avatar2 from '../../../assest/img/profiles/avatar-02.jpg' // Example additional imports
import avatar3 from '../../../assest/img/profiles/avatar-02.jpg'// Example additional imports
import videoicon01 from '../../../assest/img/calls/video-icon-01.svg'// Example additional imports
import videoicon02 from '../../../assest/img/calls/video-icon-02.svg'// Example additional imports
import videoicon03 from '../../../assest/img/calls/video-icon-03.svg'// Example additional imports
import profile from '../../../assest/img/calls/profile-user.svg'// Example additional imports
import plus from '../../../assest/img/calls/plus.svg'// Example additional imports
import chatIcon1 from '../../../assest/img/calls/chat-icon-01.svg'
import chatIcon2 from '../../../assest/img/calls/chat-icon-02.svg'
import chatIcon3 from '../../../assest/img/calls/chat-icon-03.svg'
import call from '../../../assest/img/calls/call.jpg'
import call1 from '../../../assest/img/calls/call-01.jpg'
import call2 from '../../../assest/img/calls/call-02.jpg'
import call3 from '../../../assest/img/calls/call-03.jpg'

const VideoCall = () => {
  return (
    <div >
      <PageHeader />
      <div className="row">
        <ParticipantsSection />
        <ChatSection />
      </div>
    </div>
  );
};

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <div href="voice-call.html">App </div>
            </li>
            <li className="breadcrumb-item">
              <i className="feather-chevron-right"></i>
            </li>
            <li className="breadcrumb-item active">Video Call</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ParticipantsSection = () => {
  return (
    <div className="col-xl-4 d-flex">
      <div className="card chat-box">
        <div className="chat-widgets">
          <div className="call-all comman-space-flex">
            <h4>Participants<span>32</span></h4>
            <h5><div href="javascript:void(0);">Show All</div></h5>
          </div>
          <Participant name="Me" image={avatar1} />
          <Participant name="Laura Williams" image={avatar1} />
          <Participant name="Smith Bruklin" image={avatar1} />
          
          <div className="call-all comman-space-flex">
            <h4>Chats<span>32</span></h4>
            <h5><div href="javascript:void(0);">Show All</div></h5>
          </div>
          <ChatMessages />
        </div>
      </div>
    </div>
  );
};

const Participant = ({ name, image }) => {
  return (
    <div className="chat-user-group video-call-blk d-flex align-items-center">
      <div className="img-users call-user">
        <div href="profile.html">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="chat-users chat-user-blk">
        <div className="user-titles">
          <h5>{name}</h5>
        </div>
        <div className="chat-user-icon">
          <div href="javascript:void(0);"><img src={videoicon01} className="me-2" alt="Video Icon" /></div>
          <div href="javascript:void(0);"><img src={videoicon02} alt="Video Icon" /></div>
        </div>
      </div>
    </div>
  );
};

const ChatMessages = () => {
  const messages = [
    { user: 'Galaviz Lalema', text: 'Hi Guys, How are you?', image: avatar2 },
    { user: 'Williams Bruk', text: 'non tellus dignissim', image: avatar1 },
    { user: 'Laura Williams', text: 'Vivamus sed dictum dictum ligula, cursus blandit risus', image: avatar3 },
    { user: 'Galaviz Lalema', text: 'Lorem ipsum dolor sit amet aliquam ut a ex aliquam ut a ex', image: avatar2 },
    { user: 'Smith Bruklin', text: 'Vivamus sed dictum dictum ligula, cursus blandit risus', image: avatar1 }
  ];

  return (
    <div className="video-chat-show">
      <ul>
        {messages.map((msg, index) => (
          <li key={index} className="media d-flex received">
            <div className="avatar flex-shrink-0">
              <img src={msg.image} alt={msg.user} className="avatar-img rounded-circle" />
            </div>
            <div className="media-body flex-grow-1">
              <div className="msg-box">
                <div className="message-sub-box">
                  <h5>{msg.user}</h5>
                  <p>{msg.text}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChatSection = () => {
  return (
    <div className="col-xl-8">
      <div className="card chat-box">
        <ChatUser />
        <MeetingSection />
      </div>
    </div>
  );
};

const ChatUser = () => {
  return (
    <div className="chat-search-group">
      <div className="chat-user-group clinic-user mb-0 d-flex align-items-center">
        <div className="img-users call-user">
          <div href="profile.html"><img src={avatar2} alt="img" /></div>
          <span className="active-users bg-info"></span>
        </div>
        <div className="chat-users">
          <div className="user-titles">
            <h5>Forest Kroch</h5>
          </div>
          <div className="user-text">
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        </div>
        <ul className="call-list-add">
          <li><div href="javascript:void(0);"><img src={profile} alt="img" />32</div></li>
          <li><div href="javascript:void(0);"><img src={plus} alt="img" /></div></li>
        </ul>
      </div>
      <div className="chat-search-list">
        <ul>
          <li><div href="video-call.html"><img src={chatIcon1} alt="img" /></div></li>
          <li><div href="voice-call.html"><img src={chatIcon2} alt="img" /></div></li>
          <li><div href="javascript:void(0);"><img src={chatIcon3} alt="img" /></div></li>
        </ul>
      </div>
    </div>
  );
};

const MeetingSection = () => {
  return (
    <div className="page-content">
      <div className="meeting">
        <div className="meeting-wrapper">
          <div className="meeting-list">
            <div className="join-contents horizontal-view fade-whiteboard">
              <VideoParticipant name="Laura Strattenberg" image={call} />
              <div className='d-flex col-md-12'>
 <VideoParticipant name="Stephen Williams" image={call1} />
              <VideoParticipant name="Galaviz Lalema"image={call2} />
              <VideoParticipant name="Smith Bruklin" image={call3} />
              </div>
             
            </div>
          </div>
          <MeetingFooter />
        </div>
      </div>
    </div>
  );
};

const VideoParticipant = ({ name, image }) => {
  return (
    <div className="join-video user-active">
      <img src={image} className="img-fluid call-imgs" alt={name} />
      <div className="video-avatar">
        <div className="text-avatar">
          <div className="text-box">S</div>
        </div>
      </div>
      <div className="part-name">
        <h4><img src={videoicon03} className="me-2" alt="img" />{name}</h4>
      </div>
      <div className="more-icon">
        <div href="#" className="handraise-on me-2">
          <i className="fas fa-thumbtack"></i>
        </div>
        <div href="#" className="mic-off">
          <i className="fe fe-mic-off"></i>
        </div>
      </div>
    </div>
  );
};

const MeetingFooter = () => {
  return (
    <div className="meet-footer">
      <div className="meet-icons">
       
        <div className="end-call-chat">
          <div href="javascript:void(0);" className="btn btn-primary">End Call</div>
        </div>
       
      </div>
    </div>
  );
};

export default VideoCall;
