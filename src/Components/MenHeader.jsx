import React, { useState, useEffect } from 'react';
import purse1 from '../assets/shirt/f3-removebg-preview.png';
import purse2 from '../assets/shirt/d2-removebg-preview.png';
import purse3 from '../assets/t-shirt/a1-removebg-preview.png';
import { Link } from 'react-router-dom';

const images = [purse1, purse2, purse3];

const MenHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-96 w-full bg-gradient-to-r from-blue-100 to-slate-200 flex items-center justify-between px-8 rounded-xl shadow-md overflow-hidden relative">
      {/* LEFT TEXT CONTENT */}
      <div
        style={{ fontFamily: "'Ancizar Sans'" }}
        className="text-left max-w-xl space-y-4 z-10"
      >
        <p className="font-bold text-5xl leading-snug text-slate-800 drop-shadow">
          Men's Collection.
          <span className="block text-blue-700">Style Meets Power</span>
        </p>
        <Link to="/Mens" className="font-medium text-xl">
          <button className="px-6 py-3 bg-white rounded-full text-blue-700 border border-blue-300 hover:bg-blue-100 transition-all duration-300 shadow-md">
            Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </Link>
      </div>

      {/* RIGHT IMAGE WITH SOFT WHITE GLOW */}
      <div className="relative flex justify-end items-center h-96 w-[350px] sm:w-[450px] overflow-visible">
        {/* Soft white blurred glow */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full z-0"
          style={{
            backgroundColor: 'white',
            filter: 'blur(60px)',
            opacity: 0.6,
          }}
        />

        {/* Rotating image */}
        <img
          src={images[currentIndex]}
          className="h-full object-contain relative z-10 transition-all duration-700 ease-in-out"
          alt={`Product ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default MenHeader;
