"use client";

import React from 'react';

const IntroPage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="flex flex-col bg-[#faf4e1] w-screen h-screen justify-center align-middle">
        <div className='flex mx-6 py-4 h-4/5 justify-center al flex-col  bg-[#F8DD84]'>
      <h1 className="text-4xl font-bold text-[#4C9BB9] mb-4 text-center">Welcome to Emojilogy!</h1>
      <p className="text-lg text-center mb-6">
        What's your emoji today?, click the button below.
      </p>
      <button
        onClick={onStart}
        className="px-6 py-3 bg-[#1C5469] text-white text-lg font-bold rounded shadow-md hover:bg-[#4C9BB9] transition duration-300"
      >
        Start
      </button>
    </div>
    </div>
  );
}

export default IntroPage;
