"use client";

import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Nút gọi điện */}
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <a
          href="tel:+84835340340"
          className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Gọi điện"
        >
          <FiPhone size={24} className="animate-bounce" />
        </a>
      </div>

      {/* Nút Facebook */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
        <a
          href="https://www.facebook.com/taxidieneasup"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebook size={24} className="animate-bounce" style={{ animationDelay: '0.2s' }} />
        </a>
      </div>

      {/* Nút Zalo */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <a
          href="https://zalo.me/0835340340"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Zalo"
        >
          <img src="/images/Icon_of_Zalo.svg.webp" alt="Zalo" width="24" height="24" className="w-6 h-6 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
