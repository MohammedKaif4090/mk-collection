import React, { useState, useEffect } from 'react';
import purse1 from '../assets/Kids/banner1.png';
import purse2 from '../assets/Kids/banner2.png';
import purse3 from '../assets/Kids/banner3.png';
import { Link } from 'react-router-dom';

// Example colors for each image (replace with real average colors if you want)
const imageColors = [
  'rgb(255, 200, 150)', // warm orange
  'rgb(150, 200, 255)', // light blue
  'rgb(200, 150, 255)', // lavender
];

const KidsHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgColor, setBgColor] = useState(imageColors[0]);
  const [shadowColor, setShadowColor] = useState(darkenColor(imageColors[0]));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newBg = imageColors[currentIndex];
    setBgColor(newBg);
    setShadowColor(darkenColor(newBg));
  }, [currentIndex]);

  return (
    <div
      className="w-full rounded-2xl shadow-lg px-6 sm:px-12 py-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
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

      {/* RIGHT IMAGE WITH COLOR-MATCHING SHADOW */}
      <div className="flex justify-center items-center h-64 sm:h-80 md:h-96 w-full lg:w-[450px]">
        <img
          src={images[currentIndex]}
          className="h-full object-contain z-10 transition-all duration-700 ease-in-out"
          alt={`Product ${currentIndex + 1}`}
          style={{
            filter: `drop-shadow(0px 0px 50px ${shadowColor})`
          }}
        />
      </div>
    </div>
  );
};

// Image list
const images = [purse1, purse2, purse3];

// Helper to convert RGB to HSL
const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
};

// Helper to convert HSL to RGB string
const hslToRgbString = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return `rgb(${Math.round(f(0) * 255)}, ${Math.round(f(8) * 255)}, ${Math.round(f(4) * 255)})`;
};

// Darken color but keep it colored (never full black)
const darkenColor = (rgbString, amount = 60) => {
  const [r, g, b] = rgbString.match(/\d+/g).map(Number);
  let [h, s, l] = rgbToHsl(r, g, b);
  const dynamicAmount = l > 60 ? amount : amount / 2;
  l = Math.max(15, l - dynamicAmount);
  return hslToRgbString(h, s, l);
};

export default KidsHeader;
