import React from 'react';
import './Chat.css';
import { assets } from '../../assets/assets';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat_user">
        <div style={{ position: 'relative' }}>
          <img src={assets.profile} alt="User Profile" />
          <div className="status"></div>
        </div>
        <div>
          <p>Amin Bouallegui</p>
          <span>En ligne</span>
        </div>
        <div className="chatuserh">
          <img src={assets.help} alt="Help Icon" />
        </div>
      </div>
      <div className="chat_message">
        <input type="text " placeholder='send a message' />
      </div>
    </div>
  );
};

export default Chat;