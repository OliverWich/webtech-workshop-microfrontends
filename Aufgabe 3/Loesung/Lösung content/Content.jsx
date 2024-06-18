import React, { useEffect, useState } from 'react';
import './Content.css';

const Content = () => {
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const handleCustomEvent = (event) => {
      setMessages(prevMessages => [...prevMessages, event.detail /*Greife hier auf das event zu um die Nachricht zu setzen*/ ]); 
    };

    // Erstelle einen EventListener für das Custom Event
    window.addEventListener('customMessage', handleCustomEvent);

    return () => {
      // Entferne den EventListener um Memory Leaks zu vermeiden
      window.removeEventListener('customMessage', handleCustomEvent);
    };
  }, []);

  return (
    <main className="content">
      <p>Content-Frontend</p>
      {messages.length > 0 && messages.map((msg, index) => (
        <p key={index}>Message from Header-Frontend: {msg}</p>
      ))}
    </main>
  );
};

export default Content;