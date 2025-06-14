import { useState } from 'react';

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

      {/* Right Panel - Chat Interface */}
      {/* <div className="chat-panel animate-right"> */}
        {/* Chat Header */}
        <div className="chat-header">
          <div className="vet-info">
            <div className="vet-avatar"></div>
            <div className="vet-details">
              <h3 className="vet-name">BhauBox Specialist</h3>
            </div>
          </div>

        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          <div className="message vet-message">
            <div className="message-content">
              Hello! I'm Bhaubox specialist doctor. How can I help you and Buddy today?
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
      {/* </div> */}
    </div>
  );
};

export default VetChat;