"use client";

import React, { useEffect, useState } from 'react';

interface Emoji {
  name: string;
  category: string;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

const HomePage: React.FC = () => {
  const [emojiData, setEmojiData] = useState<Emoji | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLoadingEmoji, setCurrentLoadingEmoji] = useState<string>('');

  const fetchEmoji = async () => {
    const res = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/random');
    const data: Emoji = await res.json();
    setEmojiData(data);
    setLoading(false);
  };

  const handleEmojiClick = async () => {
    setLoading(true);
    for (let i = 0; i < 5; i++) {
      const randomEmoji = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/random');
      const randomEmojiData: Emoji = await randomEmoji.json();
      setCurrentLoadingEmoji(randomEmojiData.htmlCode[0]);
      await new Promise(resolve => setTimeout(resolve, 200)); 
    }
    fetchEmoji(); 
  };

  useEffect(() => {
    fetchEmoji();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-[#faf4e1] w-screen h-screen">
        <div className="mx-6 py-4"><h1 className='text-[#F8DD84] font-bold '>Emojilogy</h1></div>
        <div className="mx-6 p-5 h-4/5 bg-[#F8DD84] ">
          <div className="flex text-center h-1/3 py-9"><h2 className=" text-5xl font-bold text-[#4C9BB9]">What’s your <span className="text-[#1C5469]">emoji</span> today </h2></div>
          <div className="flex justify-center items-center h-2/3 flex-col gap-9">
            {loading ? (
              <p 
                dangerouslySetInnerHTML={{ __html: currentLoadingEmoji }} 
                className='text-9xl'
              />
            ) : (
              <p 
                dangerouslySetInnerHTML={{ __html: emojiData?.htmlCode[0] || '' }} 
                className='text-9xl cursor-pointer' 
                onClick={handleEmojiClick} 
              />
            )}
            {emojiData && <span> - {emojiData.name}</span>}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
