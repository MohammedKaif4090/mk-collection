import React, { useState, useEffect } from 'react';
import purse1 from '../assets/shirt/f3-removebg-preview.png';
import purse2 from '../assets/shirt/d2-removebg-preview.png';
import purse3 from '../assets/t-shirt/a1-removebg-preview.png';
import { Link } from 'react-router-dom';

const images = [purse1, purse2, purse3];

const MenHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState('#ffffff');

  // Function to extract average color ignoring transparent pixels
  const getAverageColor = (imgElement) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < imageData.data.length; i += 4) {
      const alpha = imageData.data[i + 3];
      if (alpha > 200) { // Ignore transparent pixels
        r += imageData.data[i];
        g += imageData.data[i + 1];
        b += imageData.data[i + 2];
        count++;
      }
    }

    if (count > 0) {
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);
    }

    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = images[currentIndex];
    img.onload = () => {
      const avgColor = getAverageColor(img);
      setBgColor(avgColor);
    };
  }, [currentIndex]);

  // Change image every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full flex flex-col sm:flex-row items-center justify-between px-6 sm:px-8 py-6 sm:py-0 rounded-xl shadow-md overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* IMAGE SECTION */}
      <div className="relative flex justify-center items-center w-full sm:w-[450px] h-72 sm:h-96 mt-6 sm:mt-0">
        {/* White glow around image */}
        <div
          className="absolute rounded-full"
          style={{
            width: 'calc(100% - 100px)',
            height: 'calc(100% - 100px)',
            backgroundColor: 'white',
            filter: 'blur(50px)',
            opacity: 0.8,
            zIndex: 0,
          }}
        />
        {/* Product image */}
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
