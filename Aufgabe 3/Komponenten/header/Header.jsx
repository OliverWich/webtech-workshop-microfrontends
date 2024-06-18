import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // Erstelle ein neues Custom Event und übergebe die Variable message als detail


    // Dispatche das Event

  };

  return (
    <header className="header">
      <h1>Header-Frontend</h1>
      <div className="input-group">
        <input 
          type="text" 
          className="header-input" 
          value={message} 
          onChange={handleChange} 
          placeholder="Type your message here" 
        />
        <button className="header-button" onClick={handleClick}>
          Send Message
        </button>
      </div>
    </header>
  );
}

export default Header;
