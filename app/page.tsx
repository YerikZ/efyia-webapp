"use client";
import React from 'react'

import Main from '@/app/components'
import { useState } from 'react';
import Overlay from '@/app/components/overlay-page'

const App = () => {

  const [isAccessGranted, setIsAccessGranted] = useState(false);

  if (!isAccessGranted) {
    return <Overlay onAccessGranted={() => setIsAccessGranted(true)} />;
  }

  return (
    <Main />
  )
}

export default React.memo(App)
