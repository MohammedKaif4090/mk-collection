import React, { useState, useEffect } from 'react';
import purse1 from '../assets/womens purse/purse-banner.png';
import purse2 from '../assets/womentop/banner.png';
import purse3 from '../assets/womentop/top-banner.png';
import { Link } from 'react-router-dom';

const images = [purse1, purse2, purse3];

const WomenHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-rose-100 to-purple-200 rounded-2xl shadow-lg px-4 py-8 sm:py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
      
      {/* TEXT */}
      <div className="text-center sm:text-left max-w-xl space-y-4 z-10">
        <p className="font-bold text-3xl sm:text-5xl leading-snug text-slate-800 drop-shadow">
          Women's Collection.
          <span className="block text-purple-700">Grace in Every Thread</span>
        </p>
        <Link to="/Womens">
          <button className="mt-2 px-6 py-3 bg-white rounded-full text-purple-700 border border-purple-300 hover:bg-purple-100 transition-all duration-300 shadow-md">
            Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </Link>
      </div>

      {/* IMAGE */}
      <div className="relative flex justify-center items-center w-full sm:w-[400px] h-72 sm:h-96">
        {/* Glow */}
        <div
          className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full"
          style={{
            backgroundColor: 'white',
            filter: 'blur(60px)',
            opacity: 0.6,
          }}
        />
        {/* Image */}
        <img
          src={images[currentIndex]}
          className="h-full object-contain relative z-10 transition-all duration-700 ease-in-out"
          alt={`Product ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default WomenHeader;
