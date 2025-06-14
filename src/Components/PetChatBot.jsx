import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';

const PetChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 🐕 Welcome to our Bhau box! How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage) => {
    const responses = [
      "That's a great question! Let me help you find the perfect products for your furry friend. 🐾",
      "I'd be happy to assist you with that! Our team specializes in pet care and nutrition. 🦴",
      "Wonderful! We have amazing deals on pet supplies right now. Would you like to know more? 🎾",
      "Perfect! Our pet experts are here to help you make the best choice for your pet. 🐕‍🦺",
      "Great choice! We offer free shipping on orders over $50. How else can I assist you today? 📦"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <style jsx>{`
        .chat-widget {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .chat-icons {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FF6B35, #FF8E53);
          border: none;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .chat-icons:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(255, 107, 53, 0.4);
        }

        .chat-icons::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FF6B35, #4ECDC4, #FF6B35);
          border-radius: 50%;
          z-index: -1;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .chat-icons svg {
          color: white;
          font-size: 24px;
        }

        .chat-bot-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 350px;
          height: 500px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transform: ${isOpen ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)'};
          opacity: ${isOpen ? '1' : '0'};
          visibility: ${isOpen ? 'visible' : 'hidden'};
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chat-header {
          background: linear-gradient(135deg, #2E86AB, #4ECDC4);
          color: white;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 20px 20px 0 0;
        }

        .chat-header h5 {
          margin: 0;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: #4ade80;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .chat-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: #f8fafc;
        }

        .chat-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 2px;
        }

        .message {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.4;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          align-self: flex-end;
          background: linear-gradient(135deg, #FF6B35, #FF8E53);
          color: white;
          border-bottom-right-radius: 8px;
        }

        .message.bot {
          align-self: flex-start;
          background: white;
          color: #374151;
          border: 1px solid #e5e7eb;
          border-bottom-left-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .message-time {
          font-size: 11px;
          opacity: 0.6;
          margin-top: 4px;
        }

        .chat-input {
          padding: 20px;
          background: white;
          border-top: 1px solid #e5e7eb;
          border-radius: 0 0 20px 20px;
        }

        .input-group {
          position: relative;
        }

        .form-control {
          border: 2px solid #e5e7eb;
          border-radius: 25px;
          padding: 12px 50px 12px 16px;
          font-size: 14px;
          transition: border-color 0.2s;
        }

        .form-control:focus {
          border-color: #4ECDC4;
          box-shadow: 0 0 0 0.2rem rgba(78, 205, 196, 0.25);
        }

        .send-btn {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #FF6B35, #FF8E53);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }

        .send-btn:hover {
          transform: translateY(-50%) scale(1.1);
        }

        .send-btn svg {
          color: white;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .chat-bot-container {
            width: calc(100vw - 40px);
            right: 20px;
            left: 20px;
            height: 450px;
          }
        }
      `}</style>

      <div className="chat-widget">
        {/* Chat Container */}
        <div className="chat-bot-container">
          {/* Header */}
          <div className="chat-header">
            <h5>
              🐾 Pet Assistant
              <div className="status-indicator"></div>
            </h5>
            <button 
              className="close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div>{message.text}</div>
                <div className="message-time">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button 
                className="send-btn" 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M2 12L22 2L18 12L22 22L2 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Chat Icon */}
        <button
          className="chat-icons"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open chat"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 9H16M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default PetChatBot;