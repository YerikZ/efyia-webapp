import React, { useState } from 'react';
import { ACCESS_CODES } from '@/config';

const Overlay = ({ onAccessGranted }) => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const accessCodes = ACCESS_CODES;
    if (accessCodes) {

      const accessCodesList = accessCodes.split(',');
      // console.log('Access Codes:', accessCodes);
      // console.log('Access Code Entered:', accessCode);
      // console.log('Access Codes List:', accessCodesList);
      if (accessCodesList.includes(accessCode)) {
        onAccessGranted();
      } else {
        setError('Invalid access code');
      }
    } else {
      setError('Access codes not configured');
    }
  };

  return (
    <div className="overlay" style={overlayStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          style={inputStyle}
          placeholder="Enter Access Code"
        />
        <div>{error && <p style={errorStyle}>{error}</p>}</div>
        <div style={buttonStyle}><button type="submit">Submit</button></div>
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
  backgroundColor: '#007BFF',
  color: 'white',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  // marginTop: '0px'
};


export default Overlay;
