import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import VideoModal from '@/app/components/additions/demo-video-popup';

const VideoModalHandler = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const instructionElementStyles = {
        cursor: 'pointer',
        display: 'inline-block'
    };

    return (
        <>
            <div onClick={openModal} style={instructionElementStyles}>
                <FontAwesomeIcon icon={faInfoCircle} size='xs' />
                <span style={{ fontSize: "13px", padding: '2px 2px 2px 5px' }}>Click to watch the demo video</span>
            </div>
            <VideoModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default VideoModalHandler;

