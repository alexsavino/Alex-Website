import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="pageContainer">
      <div className="textContainer">
        <p className="subtitle">
          404 Error:
        </p><p className="title">
          Thank you for trying to visit my site!
        </p><p className="subtitle">
          Unfortunately, the page you're looking for doesn't seem to exist.
        </p>
      </div>
    </div>
  )
}

export default NotFound;