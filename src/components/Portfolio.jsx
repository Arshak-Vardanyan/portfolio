'use client'

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioNavigation = [
  { id: 1, name: "All", href: "#All" },
  { id: 2, name: "Design", href: "#Design" },
  { id: 3, name: "Development", href: "#Development" },
  { id: 4, name: "Marketing", href: "#Marketing" },
];

// Данные для изображений
const images = [
  { id: 1, src: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg", category: "Design" },
  { id: 2, src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?fm=jpg&q=60&w=3000", category: "Design" },
  { id: 3, src: "https://c4.wallpaperflare.com/wallpaper/277/945/270/code-programming-wallpaper-preview.jpg", category: "Marketing" },
  { id: 4, src: "https://i.pinimg.com/550x/40/89/56/408956557bb3f2261f0927cf37097a09.jpg", category: "Marketing" },
  { id: 5, src: "https://c4.wallpaperflare.com/wallpaper/910/119/771/developer-javascript-codes-coding-web-development-wallpaper-preview.jpg", category: "Development" },
  { id: 6, src: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzzj7p84arhqxl2uyp0fc.jpg", category: "Development" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  // Фильтруем изображения в зависимости от активной секции
  const filteredImages =
    activeSection === "All"
      ? images
      : images.filter((image) => image.category === activeSection);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((lightbox - 1 + filteredImages.length) % filteredImages.length);
  const nextImage = () => setLightbox((lightbox + 1) % filteredImages.length);

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
        <div className="flex sm:flex-row flex-wrap justify-center gap-3 py-10 max-w-[250px] sm:max-w-full mx-auto">
          {portfolioNavigation.map((item) => (
            <div
              key={item.id}
              className={`outline outline-1 font-bold text-[12px] sm:text-[14px] px-4 py-2 rounded-3xl cursor-pointer ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto pb-10">
          {filteredImages.map((image, index) => (
            <div key={image.id} className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="max-w-full h-full object-cover cursor-pointer"
                onClick={() => openLightbox(index)}
              />
              <div className="absolute inset-10 flex justify-center items-center bg-teal-500 opacity-0 transform scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out">
                <button
                  className="relative z-10 opacity-0 group-hover:opacity-100 text-white text-[50px] font-bold bg-teal-500 px-3 py-1 rounded-full"
                  onClick={() => openLightbox(index)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox (модальное окно) */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeLightbox}><X size={32} /></button>
          <button className="absolute left-5 text-white text-3xl" onClick={prevImage}><ChevronLeft size={32} /></button>
          <img src={filteredImages[lightbox].src} className="max-w-[90%] max-h-[90vh] object-contain" />
          <button className="absolute right-5 text-white text-3xl" onClick={nextImage}><ChevronRight size={32} /></button>
        </div>
      )}
    </section>
  );
}

