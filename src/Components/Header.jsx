import React, { useState, useEffect } from 'react';
import purse1 from '../assets/womens purse/purse-banner.png';
import purse2 from '../assets/womentop/banner.png';
import purse3 from '../assets/womentop/top-banner.png';
import { Link } from 'react-router-dom';

const images = [purse1, purse2, purse3];

const WomenHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState('#ffffff');

  // Extract average color ignoring transparency
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

  // Update background color when image changes
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = images[currentIndex];
    img.onload = () => {
      const avgColor = getAverageColor(img);
      setBgColor(avgColor);
    };
  }, [currentIndex]);

  // Change image every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full rounded-2xl shadow-lg px-4 py-8 sm:py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-8 transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
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
        {/* White Glow */}
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
