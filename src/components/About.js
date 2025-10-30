import React from "react";
import { FaUserAstronaut, FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="w-full flex justify-center items-center py-20 bg-[#F9FAFB]"
    >
      <div
        className="relative bg-white rounded-[24px] border border-[#E5E7EB] flex items-center"
        style={{
          width: "1024px",
          height: "384px",
          boxShadow:
            "0px 20px 25px rgba(0,0,0,0.1), 0px 8px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Lingkaran ikon */}
        <div
          className="absolute"
          style={{
            top: "112px",
            left: "24px",
          }}
        >
          <div
            className="w-[160px] h-[160px] rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(90deg, #BFDBFE 0%, #D8B4FE 50%, #FBCFE8 100%)",
            }}
          >
            <FaUserAstronaut className="text-white text-6xl opacity-90" />
          </div>
        </div>

        {/* Konten teks */}
        <div className="ml-[220px] px-6 flex flex-col justify-center h-full">
          <h3 className="text-[24px] font-bold text-gray-800 mb-4">
            Tentang Saya
          </h3>

          <p className="text-gray-600 leading-relaxed max-w-[700px] mb-6">
            Saya adalah mahasiswa Semester 5 di Universitas Negeri Surabaya
            yang memiliki ketertarikan tinggi terhadap dunia desain dan
            teknologi. Saya sedang menekuni bidang <b>UI/UX Design</b> dan
            pengembangan web modern menggunakan framework seperti React dan
            Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Problem Solver
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Fast Learner
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Kreatif & Adaptif
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" /> Kolaboratif
            </div>
          </div>

          {/* Tombol Konsultasi Gratis */}
          <button
            className="text-white font-semibold text-base flex items-center justify-center"
            style={{
              width: "760px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              background:
                "linear-gradient(90deg, #3B82F6 0%, #9333EA 100%)",
              boxShadow:
                "0px 10px 15px 0px #0000001A, 0px 4px 6px 0px #0000001A",
            }}
          >
            💬 Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}
