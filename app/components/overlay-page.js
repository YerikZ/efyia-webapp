import React, { useState } from 'react';
import { ACCESS_CODES } from '@/config';

const Overlay = ({ onAccessGranted }) => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessCodes = ACCESS_CODES;
    if (accessCodes) {

      const accessCodesList = accessCodes.split(',');
      // console.log('Access Codes:', accessCodes);
      // console.log('Access Code Entered:', accessCode);
      // console.log('Access Codes List:', accessCodesList);
      if (accessCodesList.includes(accessCode)) {

        const response = await fetch('/api/log-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accessCode,
            timestamp: new Date().toISOString()
          }),
        });

        onAccessGranted();
      } else {
        setError('Invalid access code');
      }
    } else {
      setError('Access codes not configured');
    }
  };

  const toggleVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };

  return (    
    <div className="overlay" style={overlayStyle}>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8513645014161900"
        crossorigin="anonymous"></script>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type={isCodeVisible ? "text" : "password"}
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          style={inputStyle}
          placeholder="Enter Access Code"
        />
        <button type="button" onClick={toggleVisibility} style={toggleButtonStyle}>
          {isCodeVisible ? "Hide" : "Show"}
        </button>
        <div>{error && <p style={errorStyle}>{error}</p>}</div>
        <div><button style={buttonStyle} type="submit">Submit</button></div>
      </form>
    </div>
  );
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const formStyle = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
};

const inputStyle = {
  marginBottom: '10px',
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#2596be',
  color: 'white',
  cursor: 'pointer',
};

const toggleButtonStyle = {
  backgroundColor: '#f0f0f0', // light gray background
  border: 'none', // no border
  borderRadius: '4px', // slightly rounded corners
  padding: '5px 10px', // padding for a comfortable click area
  margin: '15px 10px', // margin to separate from other elements
  cursor: 'pointer', // pointer cursor on hover
  fontSize: '14px', // font size
  color: '#333', // dark gray text
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // subtle shadow for depth
  transition: 'background-color 0.3s', // smooth transition for background color
};

const errorStyle = {
  color: 'red',
  // marginTop: '0px'
};


export default Overlay;
