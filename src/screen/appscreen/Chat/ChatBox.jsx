import React, {  } from 'react';
import avatar1 from '../../../assest/img/profiles/avatar-02.jpg'
import chatfootericon1 from '../../../assest/img/icons/chat-foot-icon-01.svg'
import chatfootericon2 from '../../../assest/img/icons/chat-foot-icon-02.svg'
import chatfootericon3 from '../../../assest/img/icons/chat-foot-icon-03.svg'
import { ChevronRight,  } from 'react-feather';
const Breadcrumb = () => (
  <ul className="breadcrumb">
    <li className="breadcrumb-item">
      <a href="chat.html">App</a>
    </li>
    <li className="breadcrumb-item">
    <ChevronRight size={16} style={{ color: 'blue', fontSize: '20px', margin: '0 8px' }}/>
    </li>
    <li className="breadcrumb-item active">Chat</li>
  </ul>
);

const ChatUserGroup = ({ user }) => (
  <div className="chat-user-group d-flex align-items-center">
    <div className="img-users call-user">
      <a href="profile.html">
        <img src={avatar1} alt="img" />
      </a>
      <span className={`active-users ${user.isActive ? 'bg-info' : ''}`}></span>
    </div>
    <div className="chat-users">
      <div className="user-titles d-flex">
        <h5>{user.name}</h5>
        <div className="chat-user-time">
          <p>{user.time}</p>
        </div>
      </div>
      <div className="user-text d-flex">
        <p>{user.message}</p>
        {user.count && (
          <div className="chat-user-count">
            <span>{user.count}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

const ChatMessage = ({ message }) => (
  <li className={`media d-flex ${message.type}`}>
    {message.type === 'received' && (
      <div className="avatar flex-shrink-0">
        <img src={avatar1} alt="User Image" className="avatar-img rounded-circle" />
      </div>
    )}
    <div className="media-body flex-grow-1">
      <div className="msg-box">
        <div className="message-sub-box">
          {message.name && <h4>{message.name}</h4>}
          <p>{message.text}</p>
          {message.attachments && (
            <ul className="msg-sub-list">
              {message.attachments.map((attachment, index) => (
                <li key={index}>
                  <img src={attachment.icon} alt="" className="me-1" />
                  {attachment.name}
                  <span className="ms-1">{attachment.size}</span>
                  {attachment.download && (
                    <img src={attachment.downloadIcon} alt="" className="ms-1 ms-auto" />
                  )}
                </li>
              ))}
            </ul>
          )}
          <span>{message.time}</span>
        </div>
      </div>
    </div>
  </li>
);

const ChatFooter = () => (
  <div className="chat-footer-box">
    <div className="discussion-sent">
      <div className="row gx-2">
        <div className="col-lg-12">
          <div className="footer-discussion">
            <div className="inputgroups">
              <input type="text" placeholder="Type your Message here..." />
              <div className="micro-text position-icon">
                <img src="assets/img/icons/chat-foot-icon-04.svg" alt="" />
              </div>
              <div className="send-chat position-icon comman-flex">
                <a href="javascript:;">
                  <img src={chatfootericon3} alt="" />
                </a>
              </div>
              <div className="symple-text position-icon">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <img src={chatfootericon1}
                        className="me-2" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src={chatfootericon2} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ChatBox = () => {
  const users = [
    // Add your users' data here
    {
      avatar: 'assets/img/profiles/avatar-01.jpg',
      name: 'Bhavik Rupapara',
      time: '10:22 AM',
      message: 'Lorem ipsum dolor sit amet...',
      count: 3,
      isActive: true,
    },
    {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },
      {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },
      {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },
      {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },
      {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },
      {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },

      {
        avatar: 'assets/img/profiles/avatar-01.jpg',
        name: 'Bhavik Rupapara',
        time: '10:22 AM',
        message: 'Lorem ipsum dolor sit amet...',
        count: 3,
        isActive: true,
      },
    // Add more users as needed
  ];

  const messages = [
    // Add your chat messages' data here
    {
      type: 'received',
      avatar: {avatar1},
      name: 'Williams Bruk',
      text: 'How likely are you to recommend our company to your friends and family?',
      time: '06:00 PM, 30 Sep 2022',
    },
    {
      type: 'sent',
      text: 'How likely are you to recommend our company to your friends and family?',
      time: '06:00 PM, 30 Sep 2022',
    },
    {
      type: 'received',
      text: 'How likely are you to recommend our company to your friends and family?',
      time: '06:00 PM, 30 Sep 2022',
    },
    {
      type: 'sent',
      text: 'How likely are you to recommend our company to your friends and family?',
      time: '06:00 PM, 30 Sep 2022',
    },
    {
      type: 'received',
      avatar: {avatar1},
      name: 'Williams Bruk',
      text: 'How likely are you to recommend our company to your friends and family?',
      time: '06:00 PM, 30 Sep 2022',
    },
    {
      type: 'sent',
      text: 'How likely are you to recommend our company to your friends and family?',
      time: '06:00 PM, 30 Sep 2022',
    },

    // Add more messages as needed
  ];
  // const ChatSearchBar = () => {
  //   const [searchTerm, setSearchTerm] = useState('');
  
  //   const handleSearchChange = (e) => {
  //     setSearchTerm(e.target.value);
  //   };
  
  //   const handleSearchSubmit = (e) => {
  //     e.preventDefault();
  //     // Implement search functionality here
  //     console.log('Search term:', searchTerm);
  //   };
  
  //   return (
  //     <div className="top-liv-search top-chat-search">
  //       <form onSubmit={handleSearchSubmit}>
  //         <div className="chat-search">
  //           <div className="input-block me-2 mb-0">
  //             <input
  //               type="text"
  //               className="form-control"
  //               placeholder="Search here"
  //               value={searchTerm}
  //               onChange={handleSearchChange}
  //             />
  //             <button type="submit" className="btn">
  //               <img src={searchnormal} alt="Search" />
  //             </button>
  //           </div>
  //           <div className="add-search">
  //             <a href="javascript:;">
  //               <i className="feather-plus"></i>
  //             </a>
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // };
  return (
    <div className="content">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <Breadcrumb />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-4 d-flex">
          <div className="card chat-box-clinic">
            <div className="chat-widgets">
              {users.map((user, index) => (
                <ChatUserGroup key={index} user={user} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-xl-8">
          {/* <div className="card chat-box">
            <div className="chat-search-group">
            <ChatSearchBar />
            </div>
          </div> */}

          <div className="card chat-message-box">
            <div className="card-body p-0">
              <div className="chat-body">
                <ul className="list-unstyled chat-message">
                  {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} />
                  ))}
                </ul>
              </div>
              <ChatFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
