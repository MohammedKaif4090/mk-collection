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
    <div className="w-full bg-gradient-to-r from-blue-100 to-slate-200 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-6 sm:py-0 rounded-xl shadow-md overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="relative flex justify-center items-center w-full sm:w-[450px] h-72 sm:h-96 mt-6 sm:mt-0">
        {/* Soft blurred glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-60 h-60 sm:w-96 sm:h-96 rounded-full z-0"
          style={{
            backgroundColor: 'white',
            filter: 'blur(60px)',
            opacity: 0.6,
          }}
        />
        {/* Rotating Image */}
        <img
          src={images[currentIndex]}
          className="max-h-full object-contain relative z-10 transition-all duration-700 ease-in-out"
          alt={`Product ${currentIndex + 1}`}
        />
      </div>
      
      {/* TEXT SECTION */}
      <div
        style={{ fontFamily: "'Ancizar Sans'" }}
        className="text-center sm:text-left sm:max-w-xl space-y-3 sm:space-y-4 z-10 mt-4 sm:mt-0"
      >
        <p className="font-bold text-3xl sm:text-5xl leading-snug text-slate-800 drop-shadow">
          Men's Collection.
          <span className="block text-blue-700 text-2xl sm:text-5xl">
            Style Meets Power
          </span>
        </p>
        <Link to="/Mens">
          <button className="mt-3 px-5 py-2 sm:px-6 sm:py-3 bg-white rounded-full text-blue-700 border border-blue-300 hover:bg-blue-100 transition-all duration-300 shadow-md text-base sm:text-xl">
            Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default MenHeader;
