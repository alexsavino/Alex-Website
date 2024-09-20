import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // Reset errors
    setNameError('');
    setMessageError('');
    setEmailError('');

    // Validate inputs
    let hasError = false;

    if (!trimmedName) {
      setNameError('Your name is required!');
      hasError = true;
      setName(''); // Clear the name input to show error placeholder
    }

    if (!trimmedEmail) {
      setEmailError('A valid email is required!');
      hasError = true;
      setEmail(''); // Clear the email input to show error placeholder
    } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setEmailError('A valid email is required!');
      hasError = true;
      setEmail(''); // Clear the email input to show error placeholder
    }

    if (!trimmedMessage) {
      setMessageError('A message is required!');
      hasError = true;
      setMessage(''); // Clear the message input to show error placeholder
    }

    // If any error exists, stop submission
    if (hasError) {
      return;
    }

    const formData = {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    };

    try {
      const response = await fetch('http://localhost:5001/send-message', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        const errorData = await response.json();
        const emailError = errorData.errors.find((err) => err.field === 'email');

        if (emailError) {
          setEmail(''); // Clear the email input
          setEmailError('Invalid Email'); // Set the error message
        }

        throw new Error('Error submitting data');
      }

      console.log('Data submitted successfully!');
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setEmailError(''); // Clear email error on success

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="contactMeSign">
        <p className="title">Contact Me</p>
        <p className="subtitle">I'd love to connect!</p>
      </div>

      <div className="primaryRectangle">
        {isSubmitted ? (
          <div className="thankYouMessage">
            <h2>Thank you for your message!</h2>
            <h3>I'll reach back out to you shortly.</h3>
          </div>
        ) : (
          <div className="inputContainer">
            <div className="inputBoxContainer">
              <label htmlFor="name">Name</label>
              <input
                className={`inputBox ${nameError ? 'error' : ''}`}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setNameError('');
                }}
                placeholder={nameError || 'Jane Doe'}
                autoComplete="off"
                required
              />
            </div>

            <div className="inputBoxContainer">
              <label htmlFor="email">Email</label>
              <input
                className={`inputBox ${emailError ? 'error' : ''}`}
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError('');
                }}
                placeholder={emailError || 'email@gmail.com'}
                autoComplete="off"
                required
              />
            </div>


            <div className="inputBoxContainer">
              <label htmlFor="message">Message</label>
              <textarea
                className={`inputBox messageBox ${messageError ? 'error' : ''}`}
                id="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  event.target.style.height = 'auto';
                  event.target.style.height = `${Math.max(event.target.scrollHeight, 175)}px`;
                  setMessageError('');
                }}
                placeholder={messageError || 'Type your message here.'}
                autoComplete="off"
                required
              ></textarea>
            </div>

            <button className="submitButton" onClick={handleSendMessage}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
