import React from "react";
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Elena K.",
      role: "CEO",
      text: "Pieter delivered a superb design and improved our conversion rate.",
      img: t1,
      borderColor: "#60A5FA",
    },
    {
      name: "James R.",
      role: "Product Lead",
      text: "Fast, communicative, and very detail oriented.",
      img: t2,
      borderColor: "#F472B6",
    },
  ];

  return (
    <section id="testimonials" className="py-12 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Judul */}
        <h3 className="text-[32px] font-bold text-gray-800 mb-10 leading-[43px]">
          Testimoni Klien
        </h3>

        <p className="text-gray-700 mb-12 text-base max-w-2xl mx-auto">
        Apa kata mereka yang pernah bekerja sama dengan saya.
        </p>


        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 justify-items-center w-[1024px] mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="w-[472px] h-[244px] bg-white rounded-[16px]
                         border border-[#E5E7EB]
                         shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]
                         flex flex-col justify-start p-8 text-left"
            >
              {/* Header: foto + nama */}
              <div className="flex items-center gap-4 w-[408px] h-[56px] mb-6">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2"
                  style={{ borderColor: t.borderColor }}
                />
                <div>
                  <div className="text-gray-900 font-semibold text-[18px] leading-[20px]">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-sm leading-[16px]">{t.role}</div>
                </div>
              </div>

              {/* Isi testimoni */}
              <p
                className="text-[#4B5563] font-[400] text-[16px] leading-[100%]
                           w-[369px] h-[23px]"
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
