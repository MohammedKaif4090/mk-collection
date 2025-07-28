import React, { useState, useEffect } from 'react';
import purse1 from '../assets/Kids/banner1.png';
import purse2 from '../assets/Kids/banner2.png';
import purse3 from '../assets/Kids/banner3.png';
import { Link } from 'react-router-dom';

const images = [purse1, purse2, purse3];

const KidsHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 rounded-2xl shadow-lg px-6 sm:px-12 py-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
      
      {/* LEFT TEXT CONTENT */}
      <div
        style={{ fontFamily: "'Ancizar Sans'" }}
        className="text-left space-y-4 z-10 max-w-xl"
      >
        <p className="font-bold text-3xl sm:text-4xl md:text-5xl leading-snug text-slate-800 drop-shadow">
          Kid's Collection.
          <span className="block text-blue-700">Fun Meets Fashion</span>
        </p>
        <Link to="/Kids" className="font-medium text-lg sm:text-xl">
          <button className="px-5 py-2 sm:px-6 sm:py-3 bg-white rounded-full text-blue-700 border border-blue-300 hover:bg-blue-100 transition-all duration-300 shadow-md">
            Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </Link>
      </div>

      {/* RIGHT IMAGE WITH GLOW */}
      <div className="relative flex justify-center items-center h-64 sm:h-80 md:h-96 w-full lg:w-[450px]">
        <div
          className="absolute w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full"
          style={{
            backgroundColor: 'white',
            filter: 'blur(60px)',
            opacity: 0.6,
          }}
        />
        <img
          src={images[currentIndex]}
          className="h-full object-contain z-10 transition-all duration-700 ease-in-out"
          alt={`Product ${currentIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default KidsHeader;
