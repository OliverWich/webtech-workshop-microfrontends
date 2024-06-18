import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!message) {
      alert("Message empty...")
    }

    // Erstelle ein neues Custom Event und übergebe die Variable message als detail
    const event = new CustomEvent("headerInput", {
      detail: message
    })

    setMessage("")

    window.dispatchEvent(event)
  };

  return (
    <header className="header">
      <h1>Header-Frontend</h1>
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          type="text"
          className="header-input"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here"
        />
        <button type="submit" className="header-button" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </header>
  );
}

export default Header;
