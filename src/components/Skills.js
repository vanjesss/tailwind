import React from 'react';
import { SiJavascript, SiHtml5, SiFigma, SiAdobexd } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { 
      name: 'JavaScript', 
      desc: 'Bahasa pemrograman utama web', 
      icon: <SiJavascript className="text-yellow-400 text-3xl" /> 
    },
    { 
      name: 'HTML & CSS', 
      desc: 'Struktur & gaya halaman web', 
      icon: <SiHtml5 className="text-orange-500 text-3xl" /> 
    },
    { 
      name: 'Figma', 
      desc: 'Desain antarmuka digital', 
      icon: <SiFigma className="text-pink-500 text-3xl" /> 
    },
    { 
      name: 'UI/UX Design', 
      desc: 'Fokus pada pengalaman pengguna', 
      icon: <SiAdobexd className="text-purple-500 text-3xl" /> 
    },
  ];

  return (
    <section 
      id="skills" 
      className="py-20 bg-[#F9FAFB]" 
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul Keahlian */}
        <h3 
          className="text-[32px] font-bold text-gray-800 mb-3 leading-[43px] tracking-wide"
        >
          Keahlian
        </h3>

        {/* Deskripsi */}
        <p className="text-gray-700 mb-12 text-base max-w-2xl mx-auto">
          Saya menguasai berbagai tools dan teknologi untuk membangun produk digital yang modern.
        </p>

        {/* Grid Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {skills.map((s) => (
            <div
              key={s.name}
              className="w-[252px] h-[194px] bg-white border border-gray-200 rounded-2xl 
                         shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] 
                         flex flex-col items-center justify-center 
                         hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-white/90 border border-gray-200 
                              shadow flex items-center justify-center mb-4">
                {s.icon}
              </div>

              {/* Nama Skill */}
              <h4 className="font-semibold text-[18px] mb-1 text-gray-800 leading-[28px]">
                {s.name}
              </h4>

              {/* Deskripsi Skill */}
              <p className="text-gray-500 text-[14px] leading-[20px] w-[154px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
