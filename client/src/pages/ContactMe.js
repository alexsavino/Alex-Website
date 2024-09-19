import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      message
    };

    try {
      const response = await fetch('http://localhost:5001/send-message', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Error submitting data');
      }

      console.log('Data submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="primaryRectangle">

      <div className="inputContainer">
        <div className="inputBoxContainer">
          <label htmlFor="name">Name</label>
          <input className="inputBox"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Jane Doe"
            required
          />
        </div>

        <div className="inputBoxContainer">
          <label htmlFor="email">Email</label>
          <input className="inputBox"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@gmail.com"
            required
          />
        </div>

        <div className="inputBoxContainer">
          <label htmlFor="message">Message</label>
          <textarea className="inputBox"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type your message here."
            required
          ></textarea>
        </div>

        <button className="test-button" onClick={handleSendMessage}>SUBMIT</button>
      </div>
    </div>
  );
};

export default ContactMe;
