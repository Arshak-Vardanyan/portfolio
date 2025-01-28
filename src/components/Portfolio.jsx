'use client'

import { useState } from "react";

const portfolioNavigation = [
  { id: 1, name: "All", href: "#All" },
  { id: 2, name: "Design", href: "#Design" },
  { id: 3, name: "Development", href: "#Development" },
  { id: 4, name: "Marketing", href: "#Marketing" },
];

// Данные для изображений
const images = [
  { id: 1, src: "https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg", category: "Design" },
  { id: 2, src: "https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg", category: "Design" },
  { id: 3, src: "https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg", category: "Marketing" },
  { id: 4, src: "https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg", category: "Marketing" },
  { id: 5, src: "https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg", category: "Development" },
  { id: 6, src: "https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg", category: "Development" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("All");

  // Фильтруем изображения в зависимости от активной секции
  const filteredImages =
    activeSection === "All"
      ? images
      : images.filter((image) => image.category === activeSection);

  return (
    <section id="portfolio">
      <div className="">
        {/* Заголовок */}
        <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
          <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white">
            GALLERY
          </span>
          <span className="absolute text-teal-500">MY PORTFOLIO</span>
        </div>

        {/* Кнопки навигации */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 py-10">
          {portfolioNavigation.map((item) => (
            <div
              key={item.id}
              className={`outline outline-1 font-bold text-[12px] sm:text-[14px] px-2 py-1 sm:px-6 sm:py-3 rounded-3xl cursor-pointer ${
                activeSection === item.name
                  ? "bg-teal-500 text-white"
                  : "text-teal-500 outline-teal-500"
              }`}
              onClick={() => setActiveSection(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Галерея изображений */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bb md:grid-cols-3 gap-6 max-w-[1200px] mx-auto pb-10">
          {filteredImages.map((image) => (
            <div
                key={image.id}
                className="relative group rounded-lg bb overflow-hidden shadow-lg"
             >
                {/* Изображение */}
                <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="max-w-full h-auto object-cover"
                />
                
                {/* Зелёная кнопка */}
                      {/* <div className="absolute inset-0 flex justify-center items-center"> */}
                {/* Фон кнопки с анимацией scale */}
                {/* <div className="absolute inset-10 bg-teal-500 opacity-0 transform scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out"></div> */}
                
                {/* Плюс */}
                {/* <button className="relative z-10 opacity-0 group-hover:opacity-100 text-white text-[100px] font-bold">+</button> */}
              {/* </div> */}
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}
