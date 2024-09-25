import React, { useState, useRef } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[a-zA-Z' -]+$/;

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    setNameError('');
    setMessageError('');
    setEmailError('');

    let hasError = false;

    if (!trimmedName) {
      setNameError('Your name is required!');
      hasError = true;
      setName('');
    } else if (!namePattern.test(trimmedName)) {
      setNameError("Name can only contain letters, apostrophes, spaces, and hyphens.");
      hasError = true;
      setName('');
    } else {
      setNameError('');
    }

    if (!trimmedEmail) {
      setEmailError('A valid email is required!');
      hasError = true;
      setEmail('');
    } else if (!emailRegex.test(trimmedEmail)) {
      setEmailError('Please enter a valid email!');
      hasError = true;
      setEmail('');
    }

    if (!trimmedMessage) {
      setMessageError('A message is required!');
      hasError = true;
      setMessage('');
    }

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
          setEmail(''); 
          setEmailError('Invalid Email');
        }

        throw new Error('Error submitting data');
      }

      console.log('Data submitted successfully!');
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setEmailError('');

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSwipe = (event, inputRef) => {
    if (event.touches.length === 2) {
      const deltaX = event.touches[0].clientX - event.touches[1].clientX;
      if (deltaX > 0) {
        inputRef.current.scrollLeft += 20; // Adjust scroll value as needed
      } else if (deltaX < 0) {
        inputRef.current.scrollLeft -= 20; // Adjust scroll value as needed
      }
    }
  };

  return (
    <div id="contactMe" className="pageContainer">
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
                ref={nameInputRef}
                onTouchStart={(event) => handleSwipe(event, nameInputRef)}
                onTouchMove={(event) => handleSwipe(event, nameInputRef)}
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
                ref={emailInputRef}
                onTouchStart={(event) => handleSwipe(event, emailInputRef)}
                onTouchMove={(event) => handleSwipe(event, emailInputRef)}
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