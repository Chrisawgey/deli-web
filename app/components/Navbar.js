"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative w-full bg-black z-50 py-4">
      <div className="flex justify-between items-center relative">
        {/* Logo Section */}
        <div className={`absolute z-50 flex items-center transform transition-transform duration-300 md:top-[5px] md:left-4 top-[-5px] left-[-15px] ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src="/logo.png"
            alt="Deli Logo"
            width={275} // Size remains increased
            height={275}
            className="transform"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 mr-8 ml-auto mt-6 text-lg font-medium text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/order">Order</Link>
          </li>
          <li>
            <Link href="/locations">Locations</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Burger Icon for Mobile (adjusted for small screens) */}
        <div className="flex md:hidden flex-col justify-between w-8 h-8 cursor-pointer z-50 mr-4 mt-6 ml-auto" onClick={toggleMenu}>
          <div className={`h-1 w-full bg-white transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-1 w-full bg-white transform transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-1 w-full bg-white transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <ul
        className={`absolute top-full left-0 w-full bg-black transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden z-40`}
        style={{ display: isOpen ? 'block' : 'none' }} // Hide menu initially
      >
        <li className="text-white text-lg p-4 text-center border-b border-gray-200">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="text-white text-lg p-4 text-center border-b border-gray-200">
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className="text-white text-lg p-4 text-center border-b border-gray-200">
          <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        </li>
        <li className="text-white text-lg p-4 text-center border-b border-gray-200">
          <Link href="/order" onClick={() => setIsOpen(false)}>Order</Link>
        </li>
        <li className="text-white text-lg p-4 text-center border-b border-gray-200">
          <Link href="/locations" onClick={() => setIsOpen(false)}>Locations</Link>
        </li>
        <li className="text-white text-lg p-4 text-center">
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>

      {/* Bottom Border Accents */}
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ backgroundColor: '#af6e3c' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-white mt-[3px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ backgroundColor: '#af6e3c', marginTop: '9px' }}></div>
    </nav>
  );
}
