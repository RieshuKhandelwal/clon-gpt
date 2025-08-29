import React from 'react';
import './ChatMobileBar.css';
import './ChatLayout.css';


const ChatMobileBar = ({ onToggleSidebar, onNewChat, authButtons }) => (
  <header className="chat-mobile-bar">
    <button className="chat-icon-btn" onClick={onToggleSidebar} aria-label="Toggle chat history">☰</button>
    <h1 className="chat-app-title">Chat</h1>
    <div className="mobile-bar-actions">
      {authButtons}
      <button className="chat-icon-btn" onClick={onNewChat} aria-label="New chat">＋</button>
    </div>
  </header>
);

export default ChatMobileBar;
