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
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Jane Doe"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email@email.com"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message here."
          required
        ></textarea>
        <button className="test-button" onClick={handleSendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default ContactMe;
