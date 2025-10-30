import React from 'react';
import profile from '../assets/images/profile.jpg';

export default function HeroSection() {
  return (
    <header className="bg-hero-gradient min-h-[480px] flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-[72px] items-center">
        {/* Kiri */}
        <div className="text-left">
          <p className="text-sm text-gray-600 mb-[10px]">Hi, I'm</p>

          <h1
            className="font-bold text-[#1F2937] text-[48px] leading-[48px] mb-[18px]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Pieter Yoga
          </h1>

          {/* Badge UI/UX Designer */}
          <div
            className="inline-block w-[295.45px] h-[32px] rounded-[9999px] border border-[#E5E7EB]
                       bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white 
                       text-[14px] font-medium text-center leading-[32px]
                       shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] mb-[28px]"
          >
            UI/UX Designer
          </div>

          <p className="text-gray-700 max-w-lg mb-[36px] leading-relaxed">
            Saya suka belajar tentang design dan coding. Saya sekarang sedang
            mendalami ilmu UI/UX di Bootcamp Celerates.
          </p>

          {/* Tombol */}
          <div className="flex gap-[20px]">
            {/* Tombol Lihat Karya */}
            <a
              href="https://github.com/vanjesss"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-[139.69px] h-[42px] rounded-[12px] 
                         bg-[#2563EB] border border-[#E5E7EB] text-white 
                         text-center leading-[42px] font-medium
                         shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]
                         hover:bg-[#1d4ed8] transition-all duration-200"
            >
              Lihat Karya
            </a>

            {/* Tombol Hubungi Saya */}
            <a
              href="#contact"
              className="inline-block w-[164.28px] h-[42px] rounded-[12px] 
                         border border-[#2563EB] text-[#2563EB] 
                         text-center leading-[42px] font-medium
                         shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)]
                         hover:bg-[#2563EB] hover:text-white transition-all duration-200"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Foto Profil */}
        <div className="flex justify-center">
          <div className="w-[288px] h-[288px] rounded-[16px] overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)] border border-[#E5E7EB]">
            <img
              src={profile}
              alt="Pieter Yoga"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
