import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';

export default function ContactSection() {
  return (
    // SECTION:
    // py-12 px-4 adalah default (mobile padding)
    <section className="py-12 lg:py-20 px-4 relative">
      
      {/* Wrapper untuk Centering dan Scroll Horizontal di Mobile */}
      {/* w-full dan overflow-x-auto memungkinkan fixed-width element di-scroll secara horizontal */}
      <div className="w-full overflow-x-auto"> 
        
        {/* GRID UTAMA KONTAK (Fixed Width sesuai permintaan) */}
        {/*
          - w-[896px] h-[564px] diset sebagai default (sesuai instruksi "jangan ubah width")
          - flex-col (Mobile: tumpuk konten)
          - lg:flex-row (Desktop: susun menyamping)
        */}
        <div
          className="w-[896px] h-auto lg:h-[564px] mx-auto min-w-max 
                     rounded-[24px] border border-gray-200 
                     shadow-2xl
                     bg-[linear-gradient(90deg,#DBEAFE_0%,#FFFFFF_50%,#F3E8FF_100%)] 
                     relative flex flex-col 
                     lg:flex-row lg:overflow-visible" 
        >
          {/* KIRI: TEKS DAN KONTAK */}
          {/* Mobile: w-full, p-8, h-auto. Semua style fixed-pixel diberi prefix lg: */}
          <div className="w-full h-auto p-8 flex flex-col justify-start z-10 
                          lg:w-[162px] lg:h-[436px] lg:mt-[64px] lg:ml-[24px] lg:p-0">
            {/* Judul */}
            <h2
              className="font-poppins font-bold text-[24px] leading-[24px] text-gray-900 mb-8 lg:mb-20"
            >
              Tertarik Kolaborasi?
            </h2>

            {/* Deskripsi */}
            <p
              className="font-poppins font-normal text-[16px] leading-[16px] text-[#4B5563] mb-8 lg:mb-20"
            >
              Yuk, diskusikan project impianmu. Saya siap membantu mewujudkan produk digital yang impactful buat bisnismu.
            </p>

            {/* Info Kontak */}
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
          {/* Mobile: relative, w-full, p-6, tanpa absolute positioning.
              Desktop (lg): Semua style absolute fixed-pixel Anda kembali.
          */}
          <div
            className="relative w-full h-auto bg-white border border-gray-200 rounded-[16px]
                       shadow-xl p-6 mt-4 lg:mt-0 
                       lg:absolute lg:w-[778px] lg:h-[324px] lg:shadow-[0_10px_15px_0_rgba(0,0,0,0.1),_0_4px_6px_0_rgba(0,0,0,0.1)]
                       lg:top-[112px] lg:left-[233.58px] lg:flex lg:items-center lg:justify-center lg:overflow-visible
                       lg:translate-x-[80px] lg:p-0"
          >
            {/* Form */}
            <form className="w-full lg:w-[90%] space-y-4">
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
      </div>
    </section>
  );
}
