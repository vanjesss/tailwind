import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import pff from '../assets/images/profile.jpg';

export default function Footer() {
  return (
    <footer className="w-full h-[129px] bg-white border-t border-gray-200 shadow-sm flex flex-col justify-center">
      {/* Grid Utama */}
      <div className="max-w-[1152px] mx-auto grid grid-cols-3 items-center px-4 h-[32px]">
        
        {/* Kiri: Foto Profil + Nama */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border-2 border-gray-400 shadow-sm overflow-hidden">
            <img
              src={pff}
              alt="Pieter Yoga"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#374151] font-montserrat font-semibold text-[16px] leading-[16px]">
            Pieter Yoga
          </p>
        </div>

        {/* Tengah: Menu Navigasi */}
        <nav className="flex justify-center items-center space-x-8 text-[16px] font-poppins text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          <a href="#portfolio" className="hover:text-gray-900 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Kanan: Logo Sosial Media */}
        <div className="flex justify-end items-center space-x-4 text-gray-700">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-[16px] h-[16px] hover:text-gray-900 transition-colors" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-[16px] h-[16px] hover:text-gray-900 transition-colors" />
          </a>
        </div>
      </div>

      {/* Bawah: Copyright */}
      <div className="text-center text-[12px] font-poppins text-gray-500 mt-4">
        © {new Date().getFullYear()} Pieter Yoga — All rights reserved.
      </div>
    </footer>
  );
}
