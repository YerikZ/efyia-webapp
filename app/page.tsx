"use client";

import Main from '@/app/components'
import React, { useState, useEffect } from 'react';
import Overlay from '@/app/components/overlay-page';
import InstructionsPopup from '@/app/components/instructions-popup';
import { Analytics } from '@vercel/analytics/react';

const App = () => {

  const [isAccessGranted, setIsAccessGranted] = useState(false);

  const [countdown, setCountdown] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    if (isAccessGranted) {
      // Set a timer to refresh the page after 15 minutes
      timer = setTimeout(() => {
        window.location.reload();
      }, 15 * 60 * 1000); // 15 minutes in milliseconds

      // Set an interval to update the countdown every second
      interval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => {
      // Clear the timer and interval if the component unmounts or if the access is no longer granted
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [isAccessGranted]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!isAccessGranted) {
    return <Overlay onAccessGranted={() => setIsAccessGranted(true)} />;
  }

  // if (!isAccessGranted) {
  //   return <Overlay onAccessGranted={() => setIsAccessGranted(true)} />;
  // }

  return (
    <div>            
      <div className="countdown-timer" style={{ textAlign: 'center' }}>
        Session expires in: {formatTime(countdown)}
      </div>
      <div className="instructions" style={{ textAlign: 'center' }}>
        <InstructionsPopup />
      </div>
      <Main />
      <Analytics />
    </div>
  );
}

export default React.memo(App)
