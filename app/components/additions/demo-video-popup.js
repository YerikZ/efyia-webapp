import React from 'react';

const VideoModal = ({ isOpen, onClose }) => {    

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        },
        content: {
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
            position: 'relative',
        },
        closeButton: {
            position: 'absolute',
            top: '-10px',
            right: '0px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
        },
        videoContainer: {
            maxWidth: '100%',
            height: 'auto',
        },
    };

    return (
        <>
            {isOpen && (
                <div style={modalStyles.overlay} onClick={onClose}>
                    <div
                        style={modalStyles.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button style={modalStyles.closeButton} onClick={onClose}>
                            &times;
                        </button>
                        <div style={modalStyles.videoContainer}>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/your-video-id"
                                title="Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoModal;
