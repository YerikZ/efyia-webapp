import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const InstructionsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div onClick={handleIconClick} style={instructionElementStyles}>
        <FontAwesomeIcon icon={faInfoCircle} size='xs' />
        <span style={{ fontSize: "13px", padding: '2px 2px 2px 5px' }}>Click to read tips</span>
      </div>

      {showPopup && (
        <div style={popupStyles}>
          <div style={popupContentStyles}>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Instructions
            </h1>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={popupContentBulletStyles}>1. Getting Started: Begin by uploading your current CV or starting from scratch. The AI will analyze your content, identify key sections, and suggest improvements.</li>
              <li style={popupContentBulletStyles}>2. Personalization: Input details about your job target, industry, and experience level. The AI will tailor the language, keywords, and format to match the expectations of recruiters in your field.</li>
              <li style={popupContentBulletStyles}>3. Review Suggestions: The tool will provide you with recommendations on phrasing, formatting, and content organization. You can accept, reject, or modify these suggestions to fit your style.</li>
              <li style={popupContentBulletStyles}>4. Final Touches: Once you're satisfied with the AI-enhanced CV, use the tool to optimize it for Applicant Tracking Systems (ATS), ensuring your CV passes initial screenings.</li>
              <li style={popupContentBulletStyles}>5. Pro Tips: Focus on quantifiable achievements, keep your CV concise, and regularly update it with new skills or experiences. The AI tool is most effective when used as a guide rather than a replacement for your personal insights.</li>
            </ul>
          </div>
          <div> <button onClick={handleClosePopup} style={popupCloseButtonStyles}>Close</button> </div>
        </div>
      )}
    </div>
  );
};

//
const instructionElementStyles = {
  cursor: 'pointer',
  display: 'inline-block'
};

// Basic styles for the popup
const popupStyles = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: '15px 15px 5px 15px',
  borderRadius: '10px',
};

const popupContentStyles = {
  backgroundColor: '#fff',
  padding: '20px 20px 20px 20px',
  borderRadius: '5px',
  bottom: '10%',
  textAlign: 'left',
};

const popupContentBulletStyles = {
  paddingLeft: '20px',
  paddingRight: '20px',
  textIndent: '-20px',
  textAlign: 'justify'
};

const popupCloseButtonStyles = {
  padding: '5px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#2596be',
  color: 'white',
  cursor: 'pointer',
  position: 'relative',
  left: '50%',           // Position at 50% from the left
  transform: 'translateX(-50%)', // Shift back by half its own width
  margin: '10px 0',      // Vertical margin only
};
export default InstructionsPopup;
