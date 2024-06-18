import React, { useEffect, useState } from 'react';
import './Content.css';

const Content = () => {
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    const handleCustomEvent = (event) => {
      setMessages(prevMessages => [...prevMessages, ---/*Greife hier auf das event zu um die Nachricht zu übergeben*/ ]); 
    };

    // Erstelle einen EventListener für das Custom Event
    

    return () => {
      // Entferne den EventListener um Memory Leaks zu vermeiden
      
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