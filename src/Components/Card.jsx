import React, { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ image, title, price, rating = 4 }) => {
  const [buttonColor, setButtonColor] = useState('#000');
  const imgRef = useRef();

  const textShadow = '1px 1px 2px rgba(0,0,0,0.3)';

  useEffect(() => {
    if (!image) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 1, 1);
      const pixel = ctx.getImageData(0, 0, 1, 1).data;
      const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      setButtonColor(color);
    };
  }, [image]);

  return (
    <div
      className="relative rounded-xl w-44 sm:w-72 flex flex-col justify-between overflow-hidden border"
      style={{
        borderColor: buttonColor,
        borderWidth: '1px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Diagonal Ribbon */}
      <div
        className="absolute top-4 left-[-32px] w-[150px] text-center text-white text-sm font-bold py-1 shadow-lg"
        style={{
          backgroundColor: buttonColor,
          transform: 'rotate(-45deg)',
          zIndex: 20,
          textShadow,
        }}
      >
        ₹{price}
      </div>

      <div className="p-2 pt-2 flex flex-col items-center relative">
        <img
          ref={imgRef}
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-xl mb-4 sm:h-48"
        />

        <h2
          className="text-md sm:text-lg font-bold mb-1 text-center line-clamp-2"
          style={{ textShadow }}
        >
          {title}
        </h2>

        <div className="flex justify-center gap-1 text-orange-400 text-sm mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? 'text-orange-400' : 'text-gray-300'}
              style={{ textShadow }}
            />
          ))}
        </div>
      </div>

      <button
        className="text-white text-sm sm:text-base font-semibold w-full py-3"
        style={{
          backgroundColor: buttonColor,
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          textShadow,
          boxShadow: '0 -3px 6px rgba(0, 0, 0, 0.2)', // Top shadow
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Card;
