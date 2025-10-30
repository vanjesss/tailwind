import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/images/profile.jpg';

export default function Navbar() {
  return (

    <nav className="w-full h-20 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      
      {/* Grid Utama - Diperbarui: h-full agar mengisi tinggi nav */}
      <div className="max-w-[1152px] h-full mx-auto grid grid-cols-3 items-center px-4">
        
        {/* Kiri: Foto Profil + Nama */}
        <div className="flex items-center space-x-3">
          
          {/* Diperbarui: PFP dengan border gradient seperti di gambar */}
          <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
            <img
              src={profilePic}
              alt="Pieter Yoga"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <p className="text-[#374151] font-montserrat font-semibold text-lg">
            Pieter Yoga
          </p>
        </div>

        <nav className="flex justify-center items-center space-x-8 text-[16px] font-poppins text-gray-700">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#skills" className="hover:text-gray-900 transition-colors">Skills</a>
          <a href="#portfolio" className="hover:text-gray-900 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>

        {/* Kanan: Logo Sosial Media - Diperbarui ikon dan warnanya */}
        <div className="flex justify-end items-center space-x-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            {/* Diperbarui: Ukuran dan warna ikon */}
            <FaInstagram className="w-5 h-5 text-pink-600 hover:text-pink-700 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            {/* Ditambahkan: LinkedIn */}
            <FaLinkedin className="w-5 h-5 text-blue-600 hover:text-blue-700 transition-colors" />
          </a>
          <a href="mailto:emailanda@gmail.com" aria-label="Email">
            {/* Ditambahkan: Email (Ganti link mailto nya) */}
            <FaEnvelope className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors" />
          </a>
        </div>

      </div>

      {/* Dihapus: Bagian Copyright dihilangkan dari navbar */}
      
    </nav>
  );
}