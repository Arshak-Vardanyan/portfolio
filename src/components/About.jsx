"use client"
import { X } from "lucide-react"
import { useState } from "react"


export default function About () {

    const [zoomImg,setZoomImg] = useState(false)

    return (
        <section className="max-w-[100%] mx-auto pt-[70px] " id="about">
            <div className="mx-auto">
                <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
                    <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white ">ABOUT</span>
                    <span className="absolute text-teal-500 ">ABOUT ME</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-10 py-10">
                    <div className="flex-shrink-0 group relative rounded-full"
                         onClick={() => setZoomImg(true)}
                    >
                        <img 
                            src="./Arshak-1.jpg"
                            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-lg shadow-lg transition-all duration-700 ease-out opacity-100 group-hover:opacity-70"
                        />
                        <button className="absolute z-10 inset-28 pointer-events-none opacity-0 group-hover:opacity-70 duration-700 text-white text-[50px] font-bold rounded-full">
                            +
                        </button>
                    </div>
                    {zoomImg && (
                        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                            <button className="absolute top-5 right-32 text-white text-3xl" onClick={() => setZoomImg(false)}><X size={32} /></button>
                            <img src='./Arshak-1.jpg' className="max-w-[90%] max-h-[90vh] object-contain" />
                        </div>
                    )}
                    <div className="flex flex-col flex-wrap max-w-[800px] break-words break-all">
                        <h1 className="mb-4 font-inter font-bold text-xl sm:text-4xl">Front End Developer  & Web Developer</h1>
                        <p className="text-gray-400 font-normal pb-10">
                            I’m a Frontend Developer with over 2 years of hands-on experience building responsive, user-friendly web applications. I specialize in modern JavaScript frameworks like React, Next.js, and have strong skills in TypeScript, Tailwind CSS, and Redux.
                            I’m passionate about writing clean, scalable code and creating smooth user experiences. I enjoy solving problems and continuously learning new technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-10">
                            <div className="flex flex-col text-lg gap-2 sm:gap-6 text-gray-600 font-inter">
                                <p>Name: Arshak Vardanyan</p>
                                <p>Degree: Master</p>
                                <p>Phone: +374 44 66-55-58</p>
                                <p>Address: Armenia,Lori Region</p>
                            </div>
                            <div className="flex flex-col text-lg gap-2 sm:gap-6 text-gray-600 font-inter">
                                <p>Birthday: 25 Jun 1995</p>
                                <p>Experience: 3 Years</p>
                                <p>Email: arshakvardanyan995@gmail.com</p>
                                <p>Freelance: Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}