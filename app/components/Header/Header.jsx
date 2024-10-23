'use client';

import React, { useState } from 'react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
    <header className="flex items-center justify-between px-8 py-2 text-white h-[100px] space-x-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/icon-with-title.svg" alt="Logo" className="h-8 mr-3" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex space-x-[80px]">
        {['스튜디오', '워크센터', '손비서', '메타휴먼', '영상제작소', '공지사항'].map((item, index) => (
          <a 
            key={index}
            href={`#${item}`}
            className="relative group text-gray-400 hover:text-white transition duration-300 whitespace-nowrap"
          >
            {item}
            {/* Hover Circle */}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-2 h-2 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        ))}
      </nav>

      {/* Desktop Dropdown */}
      <div className="relative hidden lg:flex space-x-[55px]">
        <a 
          className="relative group text-white transition duration-300 whitespace-nowrap"
        >
          로그인
        </a>
        <button 
          onClick={toggleDropdown} 
          className="flex items-center"
        >
          <img src="/globe-icon.svg" alt="Globe" className="h-6 mr-3" />
          <img src="/vector-icon.svg" alt="Arrow" className="h-2 mr-3" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
            <a href="#option1" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Option 1</a>
            <a href="#option2" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Option 2</a>
            <a href="#option3" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">Option 3</a>
          </div>
        )}
      </div>

      {/* Burger Menu (Visible on large screens) */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          <img src="/burger-menu.svg" alt="Burger Menu" className="h-6" />
        </button>
      </div>

    </header>
    
    {/* Mobile Dropdown Menu (Visible on small and medium screens) */}
    {mobileMenuOpen && (
      <div className="absolute top-[100px] left-0 w-full bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 z-50 m-0">
        {['스튜디오', '워크센터', '손비서', '메타휴먼', '영상제작소', '공지사항'].map((item, index) => (
          <a 
            key={index}
            href={`#${item}`}
            className="text-white hover:text-gray-400 transition duration-300 whitespace-nowrap"
            onClick={() => setMobileMenuOpen(false)} // Close menu on selection
          >
            {item}
          </a>
        ))}
        <a href="#login" className="text-white hover:text-gray-400 transition duration-300 whitespace-nowrap">로그인</a>
      </div>
    )}
    </>
  );
};

export default Header;
