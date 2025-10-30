import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';

export default function ContactSection() {
  return (
    <section className="py-20 flex justify-center relative overflow-visible">
      {/* GRID UTAMA KONTAK */}
      <div
        className="w-[896px] h-[564px] rounded-[24px] border border-gray-200 
        shadow-[0_25px_50px_0_rgba(0,0,0,0.25)]
        bg-[linear-gradient(90deg,#DBEAFE_0%,#FFFFFF_50%,#F3E8FF_100%)] 
        relative flex"
      >
        {/* KIRI: TEKS DAN KONTAK */}
        <div className="w-[162px] h-[436px] mt-[64px] ml-[24px] flex flex-col justify-start z-10">
          {/* Judul */}
          <h2
            className="font-poppins font-bold text-[24px] leading-[24px] text-gray-900 mb-20"
          >
            Tertarik Kolaborasi?
          </h2>

          {/* Deskripsi */}
          <p
            className="font-poppins font-normal text-[16px] leading-[16px] text-[#4B5563] mb-20"
          >
            Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan produk digital yang impactful buat bisnismu.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <HiOutlineMail className="w-5 h-5 text-pink-500" />
              <span className="font-poppins text-[14px] text-gray-800">yoga@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlinePhone className="w-5 h-5 text-pink-500" />
              <span className="font-poppins text-[14px] text-gray-800">0813-1413-2050</span>
            </div>
            <div className="flex items-center gap-3">
              <HiOutlineLocationMarker className="w-5 h-5 text-pink-500" />
              <span className="font-poppins text-[14px] text-gray-800">Surabaya, Indonesia</span>
            </div>
          </div>
        </div>

        {/* KANAN: FORM KONTAK */}
        <div
          className="absolute w-[778px] h-[324px] bg-white border border-gray-200 rounded-[16px]
          shadow-[0_10px_15px_0_rgba(0,0,0,0.1),_0_4px_6px_0_rgba(0,0,0,0.1)]
          top-[112px] left-[233.58px] flex items-center justify-center overflow-visible"
          style={{ transform: 'translateX(80px)' }} // efek keluar kanan
        >
          <form className="w-[90%] space-y-4">
            {/* Nama dan Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Pesan */}
            <textarea
              placeholder="Pesan"
              rows="5"
              className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            {/* Tombol Kirim */}
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
            >
              Kirim Pesan
              <FiSend className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
