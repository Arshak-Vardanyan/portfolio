"use client"

import TypedText from "@/components/TypedText";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Face() {
  const [zoomImg,setZoomImg] = useState(false)

  return (
    <div className="flex flex-col items-center  justify-center mx-auto bg-teal-500">
      {/* Контейнер для контента */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center mx-auto  py-7">
        {/* Изображение */}
        <div 
          className="flex-shrink-0 group relative rounded-full"
          onClick={() => setZoomImg(true)}
        >
          <img
            onClick={() => setZoomImg(false)}
            src="./Arshak-3.jpg"
            alt="Profile"
            className={`w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] rounded-full border-4 border-white shadow-lg transition-all duration-700 ease-out opacity-100 group-hover:opacity-50`}
          />
          <button className="absolute z-10 inset-28 pointer-events-none opacity-0 group-hover:opacity-50 duration-700 text-white text-[50px] font-bold rounded-full">
            +
          </button>
        </div>
        {zoomImg && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button className="absolute top-5 right-32 text-white text-3xl" onClick={() => setZoomImg(false)}><X size={32} /></button>
            <img src='./Arshak-3.jpg' className="max-w-[90%] max-h-[90vh] object-contain" />
          </div>
        )}
        {/* Текст */}
        <div className="flex flex-col items-center sm:items-start justify-center">
          <p className="text-xs sm:text-2xl text-white mb-2">I'm</p>
          <p className="text-2xl sm:text-8xl font-extrabold text-stroke-white text-transparent">
            Arshak Vardanyan
          </p>
          <p className="text-xl text-white mt-2">
            <TypedText />
          </p>
          <div className="mt-6 flex gap-2 sm:gap-4">
            <Link 
              href='https://drive.google.com/file/d/1th0zxCAeektvCiiog6dLlPDt3fsR71Zz/view?pli=1'
              className="px-3 py-1 sm:px-6 sm:py-2 bg-white text-teal-500 font-semibold sm:font-semibold rounded-full shadow-md hover:bg-gray-200">
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}