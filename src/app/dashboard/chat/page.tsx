// src/app/dashboard/chat/page.tsx
'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ChatInterface() {
  const searchParams = useSearchParams();
  const gameId = searchParams.get('game') || 'unknown';
  
  const gameName = (() => {
    switch(gameId) {
      case 'hsr': return 'Honkai: Star Rail';
      case 'genshin': return 'Genshin Impact';
      case 'honkai': return 'Honkai Impact 3rd';
      case 'tot': return 'Tears of Themis';
      case 'zenless': return 'Zenless Zone Zero';
      default: return gameId;
    }
  })();
  
  // Predefined conversation for demo purposes
  const initialMessages = [
    { id: 1, role: 'system', content: `Welcome to the ${gameName} automation interface. How can I assist you today?` },
    { id: 2, role: 'user', content: 'I want to farm xianzhou calyx for the next 7 days' },
    { id: 3, role: 'system', content: 'I can help you farm Xianzhou Calyx. Which team would you like to use?', options: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'] },
    { id: 4, role: 'user', content: 'Team 1' },
    { id: 5, role: 'system', content: 'I\'ll use Team 1 for farming Xianzhou Calyx. How many days would you like to schedule this for?', options: ['Just today', '3 days', '7 days', 'Until further notice'] },
    { id: 6, role: 'user', content: '7 days' },
    { id: 7, role: 'system', content: `Here's your farming plan:
    
- Game: ${gameName}
- Activity: Xianzhou Golden Calyx farming
- Team: Team 1
- Duration: 7 days
- Daily Trailblaze Power: All available (240/day)
- Estimated runs: 6 per day
- Use Condensed Aether: Yes
- Auto Heal: Enabled
- Start time: 9:00 AM daily

Would you like to confirm this plan?`, options: ['Confirm and start automation', 'Adjust parameters'] }
  ];
  
  const [messages, setMessages] = useState(initialMessages);
  const [messageInput, setMessageInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Function to handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!messageInput.trim() || isProcessing) return;
    
    // Add user message
    const userMessage = { id: Date.now(), role: 'user', content: messageInput };
    setMessages(prev => [...prev, userMessage]);
    setMessageInput('');
    
    // Simulate AI processing
    setIsProcessing(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      let response;
      
      if (messageInput.toLowerCase().includes('confirm') || messageInput.toLowerCase().includes('start')) {
        response = { 
          id: Date.now(), 
          role: 'system', 
          content: `Automation started! 
          
I'll begin farming Xianzhou Golden Calyx using Team 1. The first session will start immediately, with subsequent runs daily at 9:00 AM.

You can check progress at any time by asking me for a status update. Would you like to receive daily reports after each farming session?`,
          options: ['Yes, send daily reports', 'No reports needed']
        };
      } else if (messageInput.toLowerCase().includes('status') || messageInput.toLowerCase().includes('progress')) {
        response = { 
          id: Date.now(), 
          role: 'system', 
          content: `Here's your current automation status:

- Xianzhou Calyx Farming: Running
- Progress: 2/7 days completed
- Credits earned so far: 45,800
- Today's runs: 6/6 completed
- Next scheduled run: Tomorrow at 9:00 AM

Everything is running smoothly!`
        };
      } else {
        response = { 
          id: Date.now(), 
          role: 'system', 
          content: `I'll help with that. Could you provide more details about what you'd like to automate?` 
        };
      }
      
      setMessages(prev => [...prev, response]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleOptionClick = (option) => {
    // Add selected option as user message
    const userMessage = { id: Date.now(), role: 'user', content: option };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    setIsProcessing(true);
    setTimeout(() => {
      let response;
      
      if (option === 'Confirm and start automation') {
        response = { 
          id: Date.now(), 
          role: 'system', 
          content: `Automation started! 
          
I'll begin farming Xianzhou Golden Calyx using Team 1. The first session will start immediately, with subsequent runs daily at 9:00 AM.

You can check progress at any time by asking me for a status update. Would you like to receive daily reports after each farming session?`,
          options: ['Yes, send daily reports', 'No reports needed']
        };
      } else if (option === 'Yes, send daily reports') {
        response = { 
          id: Date.now(), 
          role: 'system', 
          content: `Great! I'll send you daily reports after each farming session. Your first session is starting now.

Daily reports will include:
- Credits earned
- Materials collected
- Any issues encountered
- Trailblaze Power usage

Is there anything else you'd like me to help you with today?`
        };
      } else {
        response = { 
          id: Date.now(), 
          role: 'system', 
          content: `Got it! I'll proceed with your selection: "${option}".

Is there anything else you'd like me to help you with?`
        };
      }
      
      setMessages(prev => [...prev, response]);
      setIsProcessing(false);
    }, 1000);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxHeight: '100vh'
    }}>
      <header style={{
        padding: '16px',
        backgroundColor: '#4F46E5',
        color: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{gameName} Automation</div>
        <div style={{ fontSize: '14px', opacity: '0.9' }}>AI Assistant</div>
      </header>
      
      <div style={{
        flex: 1,
        padding: '16px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor: '#f9fafb'
      }}>
        {messages.map((message) => (
          <div key={message.id} style={{
            display: 'flex',
            justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
            padding: '8px 0'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: message.role === 'user' ? '#4F46E5' : 'white',
              color: message.role === 'user' ? 'white' : 'black',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
              border: message.role === 'user' ? 'none' : '1px solid #e5e7eb',
              whiteSpace: 'pre-wrap'
            }}>
              {message.content}
              
              {message.options && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '8px',
                  marginTop: '12px'
                }}>
                  {message.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#f3f4f6',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        fontSize: '14px'
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isProcessing && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '8px 0'
          }}>
            <div style={{
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: 'white',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#6B7280',
                  animation: 'bounce 1.2s infinite ease-in-out',
                  animationDelay: '0s'
                }}></div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#6B7280',
                  animation: 'bounce 1.2s infinite ease-in-out',
                  animationDelay: '0.2s'
                }}></div>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#6B7280',
                  animation: 'bounce 1.2s infinite ease-in-out',
                  animationDelay: '0.4s'
                }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div style={{
        padding: '16px',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: 'white'
      }}>
        <form onSubmit={handleSendMessage} style={{
          display: 'flex',
          gap: '8px'
        }}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message..."
            style={{
              flex: 1,
              padding: '12px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px'
            }}
          />
          <button
            type="submit"
            disabled={!messageInput.trim() || isProcessing}
            style={{
              padding: '0 16px',
              backgroundColor: !messageInput.trim() || isProcessing ? '#9CA3AF' : '#4F46E5',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: !messageInput.trim() || isProcessing ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}