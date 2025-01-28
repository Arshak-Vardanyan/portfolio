'use client'

import React, { useEffect, useState } from "react";

export default function Skills () {

    const [progress, setProgress] = useState(0); // начальное значение

    useEffect(() => {
      // Анимация прогресса
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100; // Останавливаем анимацию, когда прогресс достиг 100%
          }
          return prev + 1; // Увеличиваем прогресс на 1% за шаг
        });
      }, 10); // Интервал в 30 мс
  
      return () => clearInterval(interval); // Чистим интервал при размонтировании компонента
    }, []);
  
    return (
      <section className="max-w-full bb py-6 sm:py-14 " id='skill'>
        <div className="flex flex-col items-center">
            <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
                <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white  ">SKILLS</span>
                <span className="absolute text-teal-500 ">MY SKILLS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 max-w-[1200px] py-4 sm:py-10">
                <div>
                    <div className=" flex  justify-between">
                        <span>JavaScript</span>
                        <span>88%</span>
                    </div>
                    <progress
                        className="max-w-[587px] sm:w-[587px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-red-600"
                        value={progress}
                        max="110"
                    ></progress>
                </div>
                <div>
                    <div className=" flex  justify-between">
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <progress
                        className="max-w-[587px] sm:w-[587px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-teal-700 [&::-moz-progress-bar]:bg-green-400"
                        value={progress}
                        max="108"
                    ></progress>
                </div>
                <div>
                    <div className=" flex  justify-between">
                        <span>React JS</span>
                        <span>80%</span>
                    </div>
                    <progress
                        className="max-w-[587px] sm:w-[587px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-black [&::-moz-progress-bar]:bg-green-400"
                        value={progress}
                        max="120"
                    ></progress>
                </div>
                <div>
                    <div className=" flex  justify-between">
                        <span>CSS</span>
                        <span>90%</span>
                    </div>
                    <progress
                        className="max-w-[587px] sm:w-[587px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-orange-400 [&::-moz-progress-bar]:bg-green-400"
                        value={progress}
                        max="108"
                    ></progress>
                </div>
                <div>
                    <div className=" flex  justify-between">
                        <span>TypeScript</span>
                        <span>70%</span>
                    </div>
                    <progress
                        className="max-w-[587px] sm:w-[587px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-cyan-500 [&::-moz-progress-bar]:bg-green-400"
                        value={progress}
                        max="135"
                    ></progress>
                </div>
                <div>
                    <div className=" flex  justify-between">
                        <span>GIT</span>
                        <span>60%</span>
                    </div>
                    <progress
                        className="max-w-[587px] sm:w-[587px] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400"
                        value={progress}
                        max="150"
                    ></progress>
                </div>
            </div>
        </div>
      </section>
    );
}