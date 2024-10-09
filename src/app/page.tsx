"use client";

import React, { useEffect, useState } from 'react';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  const [start, setStart] = useState<boolean>(false);

  const handleStart = () => {
    setStart(true);
  };

  return (
    <>
      {!start ? <IntroPage onStart={handleStart} /> : <HomePage />}
    </>
  );
}

export default App;
