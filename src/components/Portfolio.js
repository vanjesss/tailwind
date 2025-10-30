import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';

export default function Portfolio() {
  const projects = [
    { 
      title: 'Mini Project Database Sekolah', 
      desc: 'Aplikasi sederhana untuk mengelola data sekolah, mencakup data siswa, guru, dan kelas.', 
      link: 'https://github.com/vanjesss/sekolah-database',
      img: p1
    },
    { 
      title: 'Tugas Backend', 
      desc: 'RESTful API yang dikembangkan sebagai tugas kuliah untuk mempelajari dasar CRUD dengan Express.js.', 
      link: 'https://github.com/vanjesss/backend',
      img: p2
    },
    { 
      title: 'User Management API', 
      desc: 'Sistem manajemen pengguna berbasis API dengan autentikasi dan upload avatar ke Cloudinary.', 
      link: 'https://github.com/vanjesss/user_management_api',
      img: p3
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul */}
        <h3 className="text-[32px] font-bold text-gray-800 mb-3 leading-[43px]">
          Portofolio Pilihan
        </h3>

        {/* Deskripsi */}
        <p className="text-gray-700 mb-12 text-base max-w-2xl mx-auto">
          Beberapa proyek yang telah saya kerjakan dalam pengembangan aplikasi dan API.
        </p>

        {/* Grid Portofolio */}
        <div className="grid md:grid-cols-3 gap-6 justify-items-center">
          {projects.map((p) => (
            <div
              key={p.title}
              className="w-[346.66px] h-[420px] bg-white rounded-2xl border border-gray-200 
                         shadow-[0_20px_25px_rgba(0,0,0,0.1),0_8px_10px_rgba(0,0,0,0.1)]
                         flex flex-col justify-between overflow-hidden"
            >
              {/* Gambar Project */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[224px] object-cover"
              />

              {/* Konten */}
              <div className="p-6 text-left flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-semibold text-[18px] text-gray-900 mb-4 leading-[28px]">
                    {p.title}
                  </h4>
                  
                  {/* Deskripsi Project */}
                  <p
                    className="text-gray-600 font-[400] text-[16px] leading-[16px] mb-4"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      width: '294px',
                      height: '23px',
                      opacity: 0.9,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>

                {/* Link Lihat Detail */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 mt-4 text-[#2563EB] text-[16px] font-semibold font-[Poppins] leading-[16px] whitespace-nowrap hover:underline"
                >
                  <span>Lihat Detail</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#2563EB"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
