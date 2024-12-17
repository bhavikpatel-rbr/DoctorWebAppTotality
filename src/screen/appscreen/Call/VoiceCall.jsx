
import React from 'react';
import avatar1 from '../../../assest/img/profiles/avatar-02.jpg'
import voiceIcon1 from '../../../assest/img/calls/voice-icon-01.svg'
import voiceIcon2 from '../../../assest/img/calls/voice-icon-02.svg'
import voiceIcon3 from '../../../assest/img/calls/voice-icon-03.svg'
import callIncomingIcon from '../../../assest/img/calls/call-incoming.svg'
import callOutgoingIcon from '../../../assest/img/calls/call-outgoing.svg'
import chatIcon1 from '../../../assest/img/calls/chat-icon-01.svg'
import chatIcon2 from '../../../assest/img/calls/chat-icon-02.svg'
import chatIcon3 from '../../../assest/img/calls/chat-icon-03.svg'
import avatar03 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar04 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar06 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar07 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar08 from '../../../assest/img/profiles/avatar-02.jpg'
import avatar09 from '../../../assest/img/profiles/avatar-02.jpg'
import { ChevronRight } from 'react-feather';

// Breadcrumb Component
const Breadcrumb = () => (
  <ul className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="voice-call.html">App</a>
    </li>
    <li className="breadcrumb-item">
      <ChevronRight size={16} />
    </li>
    <li className="breadcrumb-item active">Voice Call</li>
  </ul>
);

// User Call Entry Component
const UserCallEntry = ({ user }) => (
  <div className="chat-user-group d-flex align-items-center">
    <div className="img-users call-user">
      <a href="profile.html">
        <img src={avatar1} alt="img" />
      </a>
    </div>
    <div className="chat-users chat-user-blk">
      <div className="user-titles">
        <h5>{user.name}</h5>
        <p>{user.time}</p>
      </div>
      <div className="user-text">
        <p>{user.duration}</p>
        <div className="chat-user-icon">
          <img src={user.type === 'incoming' ? callIncomingIcon : callOutgoingIcon} alt="img" />
        </div>
      </div>
    </div>
  </div>
);

// Call List Component
const CallList = ({ calls }) => (
  <div className="chat-widgets">
    <div className="call-all comman-space-flex">
      <h4>Calls<span>{calls.length}</span></h4>
      <h5><a href="javascript:;">Show All</a></h5>
    </div>
    {calls.map((call, index) => (
      <UserCallEntry key={index} user={call} />
    ))}
  </div>
);

// Current Call Component
const CurrentCall = ({ user, callDuration }) => (
  <div className="card chat-box mb-0">
    <div className="voice-call-blk text-center">
      <div className="voice-call-user">
        <img src={avatar1} alt="img" />
        <h3>{user.name}</h3>
        <p>{user.role}</p>
      </div>
      <div className="voice-time">
        <h3> {callDuration}</h3>
      </div>
      <div className="voice-menu">
        <ul>
          <li><a href="javascript:;">
            <img src={voiceIcon1} alt="img" />
            </a></li>
          <li className="active"><a href="javascript:;">
            <img src={voiceIcon2} alt="img" />
            </a></li>
          <li><a href="javascript:;">
            <img src={voiceIcon3} alt="img" />
            </a></li>
        </ul>
      </div>
      <div className="end-call-voice">
        <a href="javascript:;" className="btn btn-primary">End Call</a>
      </div>
    </div>
  </div>
);

// Main Voice Call Component
const VoiceCall = () => {
  const calls = [
    { avatar: "", name: 'William Stephin', time: '5 min Ago', duration: '10:35', type: 'incoming' },
    {avatar: "", name: 'William Stephin', time: '5 min Ago', duration: '11:35', type: 'outgoing' },
    { avatar: "", name: 'William Stephin', time: '5 min Ago', duration: '10:35', type: 'incoming' },
    { avatar: "", name: 'Bernardo James', time: '06:32 PM', duration: '11:35', type: 'incoming' },
    { avatar: "", name: 'Harald Kowalski', time: '06:32 PM Yesterday', duration: '10:15', type: 'incoming' },
    {avatar: "", name: 'Regina Dickerson', time: '06:00 PM, 30 Sep 2022', duration: '11:35', type: 'outgoing' },
    { avatar: "", name: 'Forest Kroch', time: '05:32 PM Yesterday', duration: '10:35', type: 'incoming' },
  ];

  const currentCallUser = {
    avatar: "",
    name: 'Bernardo James',
    role: 'Doctor',
  };

  return (
    <div >
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <Breadcrumb />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 d-flex">
          <div className="card chat-box">
            <CallList calls={calls} />
          </div>
        </div>
        
        <div className="col-xl-8">
          <div className="card chat-box">
            <div className="chat-search-group">
              <div className="chat-user-group mb-0 d-flex align-items-center">
                <div className="img-users call-user">
                  <a href="profile.html"><img src={avatar1} alt="img" /></a>
                </div>
                <div className="chat-users">
                  <div className="user-titles">
                    <h5>Forest Kroch</h5>
                  </div>
                  <div className="user-text">
                    <p>Doctor</p>
                  </div>
                </div>
              </div>
              <div className="chat-search-list">
                <ul>
                <ul>
                  <li><a href="video-call.html"><img src={chatIcon1} alt="img" /></a></li>
                  <li><a href="voice-call.html"><img src={chatIcon2} alt="img" /></a></li>
                  <li><a href="javascript:;"><img src={chatIcon3} alt="img" /></a></li>
                </ul>
                </ul>
              </div>
            </div>
          </div>

          <CurrentCall user={currentCallUser} callDuration="00:10:10" />
        </div>
      </div>
    </div>
  );
};

export default VoiceCall;
