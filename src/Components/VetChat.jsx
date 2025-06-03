import React, { useState } from 'react';

const VetChat = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="vet-chat-container">
      {/* Left Panel - Available Services */}
      <div className="services-panel animate-bottom">
        <h2 className="services-title">Available Services</h2>
        
        <div className="services-list">
          <div className="service-item animate-bottom">
            <div className="service-icon video-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="service-details">
              <h3 className="service-name">Video Call</h3>
              <p className="service-description">Face-to-face consultation</p>
            </div>
            <span className="service-badge">Free</span>
          </div>

          <div className="service-item">
            <div className="service-icon chat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="service-details">
              <h3 className="service-name">Chat Support</h3>
              <p className="service-description">Instant messaging</p>
            </div>
            <span className="service-badge">Free</span>
          </div>

          <div className="service-item">
            <div className="service-icon phone-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="service-details">
              <h3 className="service-name">Phone Call</h3>
              <p className="service-description">Voice consultation</p>
            </div>
            <span className="service-badge">Free</span>
          </div>
        </div>

        <button className="start-consultation-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Start Consultation
        </button>
      </div>

      {/* Right Panel - Chat Interface */}
      <div className="chat-panel animate-right">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="vet-info">
            <div className="vet-avatar"></div>
            <div className="vet-details">
              <h3 className="vet-name">Dr. Sarah Wilson</h3>
              <div className="vet-status">
                <span className="status-indicator online"></span>
                <span className="status-text">Online</span>
              </div>
            </div>
          </div>
          <div className="chat-actions">
            <button className="action-btn video-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="action-btn phone-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          <div className="message vet-message">
            <div className="message-content">
              Hello! I'm Dr. Sarah. How can I help you and Buddy today?
            </div>
            <div className="message-time">2:30 PM</div>
          </div>
        </div>

        {/* Message Input */}
        <div className="message-input-container">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message about Buddy..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="send-btn" onClick={handleSendMessage}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VetChat;