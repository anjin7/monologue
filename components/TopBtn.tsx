import React, { useEffect, useState } from 'react';

export default function TopBtn() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };
    // console.log(window.scrollY);
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);
  return (
    <div className='fixed bottom-8 right-8'>
      <button onClick={scrollToTop} className='text-[16px] font-bold text-center bg-[#fcfaf2]/70 w-10 h-10 border rounded-full'>
        ↑
      </button>      
    </div>
  )
}