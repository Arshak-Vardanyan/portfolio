'use client'

import { useEffect, useState } from "react";
import { Svg2 } from "./Svg";

const social = [
    {
      name: 'Facebook',
      href: '#',
      icon: () => (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-auto my-auto">
          
          <circle cx="16" cy="16" r="16" fill="#3758F9" />
          
          <svg x="8" y="8" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.8502 6.45H10.4502H9.9502V5.95V4.4V3.9H10.4502H11.5002C11.7752 3.9 12.0002 3.7 12.0002 3.4V0.75C12.0002 0.475 11.8002 0.25 11.5002 0.25H9.6752C7.7002 0.25 6.3252 1.65 6.3252 3.725V5.9V6.4H5.8252H4.1252C3.7752 6.4 3.4502 6.675 3.4502 7.075V8.875C3.4502 9.225 3.7252 9.55 4.1252 9.55H5.7752H6.2752V10.05V15.075C6.2752 15.425 6.5502 15.75 6.9502 15.75H9.3002C9.4502 15.75 9.5752 15.675 9.6752 15.575C9.7752 15.475 9.85019 15.3 9.85019 15.15V10.075V9.575H10.3752H11.5002C11.8252 9.575 12.0752 9.375 12.1252 9.075V9.05V9.025L12.4752 7.3C12.5002 7.125 12.4752 6.925 12.3252 6.725C12.2752 6.6 12.0502 6.475 11.8502 6.45Z" fill="white" />
          </svg>
        </svg>
        
      ),
    },
    {
      name: 'twitter',
      href: '#',
      icon: () => (
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M0.5 16C0.5 7.43959 7.43959 0.5 16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16Z" fill="white" stroke="#C7CACC"/>
          <svg xmlns="http://www.w3.org/2000/svg" x='8' y='8' width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14.6352 4.29986C14.7244 4.19597 14.6082 4.06022 14.4763 4.10884C14.182 4.21738 13.9131 4.28898 13.5154 4.33317C14.0046 4.06077 14.2321 3.67143 14.4172 3.19456C14.4618 3.07954 14.3272 2.97517 14.2112 3.03012C13.7404 3.25338 13.2323 3.41902 12.698 3.51688C12.17 2.99353 11.4173 2.6665 10.5846 2.6665C8.98565 2.6665 7.68905 3.87235 7.68905 5.35928C7.68905 5.57038 7.71492 5.776 7.76372 5.97287C5.46528 5.86578 3.41579 4.88256 1.9919 3.37491C1.89431 3.27158 1.71722 3.2853 1.65646 3.41132C1.49435 3.74756 1.40398 4.12056 1.40398 4.51328C1.40398 5.44733 1.91499 6.27146 2.6918 6.75437C2.3435 6.7439 2.01041 6.67604 1.70345 6.56086C1.554 6.5048 1.38268 6.60333 1.40276 6.75404C1.55691 7.9113 2.49386 8.86604 3.70324 9.09164C3.46038 9.15344 3.20458 9.18624 2.93996 9.18624C2.8758 9.18624 2.81219 9.18424 2.74916 9.18037C2.58878 9.17044 2.45844 9.3139 2.5272 9.45117C2.98087 10.3566 3.96048 10.9888 5.10044 11.0084C4.10958 11.7308 2.86116 12.1612 1.50453 12.1612C1.33726 12.1612 1.2655 12.3763 1.4139 12.4492C2.56005 13.0126 3.86529 13.3332 5.25216 13.3332C10.5781 13.3332 13.4901 9.23004 13.4901 5.67154C13.4901 5.55506 13.4872 5.43858 13.4819 5.32319C13.9142 5.03277 14.3028 4.68743 14.6352 4.29986Z" fill="#202326"/>
          </svg>
        </svg>
      ),
    },
    {
      name: 'youTube',
      href: '#',
      icon: () => (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M31.2723 15.8862C31.2723 24.3837 24.3837 31.2723 15.8862 31.2723C7.38862 31.2723 0.5 24.3837 0.5 15.8862C0.5 7.38862 7.38862 0.5 15.8862 0.5C24.3837 0.5 31.2723 7.38862 31.2723 15.8862Z" fill="white" stroke="#C7CACC"/>
              <svg xmlns="http://www.w3.org/2000/svg" x='8' y='8' width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15.425 4.27471C15.25 3.59971 14.725 3.07471 14.05 2.89971C12.85 2.57471 8 2.57471 8 2.57471C8 2.57471 3.15 2.57471 1.95 2.89971C1.275 3.07471 0.75 3.59971 0.575 4.27471C0.25 5.49971 0.25 7.99971 0.25 7.99971C0.25 7.99971 0.25 10.5247 0.575 11.7247C0.75 12.3997 1.275 12.9247 1.95 13.0997C3.15 13.4247 8 13.4247 8 13.4247C8 13.4247 12.85 13.4247 14.05 13.0997C14.725 12.9247 15.25 12.3997 15.425 11.7247C15.75 10.5247 15.75 7.99971 15.75 7.99971C15.75 7.99971 15.75 5.49971 15.425 4.27471ZM6.45 10.3247V5.67471L10.475 7.99971L6.45 10.3247Z" fill="#202326"/>
              </svg>
          </svg>
      ),
    },
    {
      name: 'linkedin',
      href: '#',
      icon: () => (
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M32.0445 15.8862C32.0445 24.3837 25.1559 31.2723 16.6584 31.2723C8.16083 31.2723 1.27222 24.3837 1.27222 15.8862C1.27222 7.38862 8.16083 0.5 16.6584 0.5C25.1559 0.5 32.0445 7.38862 32.0445 15.8862Z" fill="white" stroke="#C7CACC"/>
              <svg xmlns="http://www.w3.org/2000/svg" x='8' y='8' width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.62638 3.33351C4.62621 3.68713 4.48556 4.0262 4.23539 4.27613C3.98521 4.52605 3.64601 4.66636 3.29238 4.66618C2.93876 4.666 2.59969 4.52536 2.34977 4.27518C2.09985 4.02501 1.95954 3.6858 1.95972 3.33218C1.95989 2.97856 2.10054 2.63949 2.35071 2.38956C2.60089 2.13964 2.94009 1.99934 3.29372 1.99951C3.64734 1.99969 3.98641 2.14033 4.23633 2.39051C4.48625 2.64068 4.62656 2.97989 4.62638 3.33351ZM4.66638 5.65351H1.99972V14.0002H4.66638V5.65351ZM8.87972 5.65351H6.22638V14.0002H8.85305V9.62018C8.85305 7.18018 12.033 6.95351 12.033 9.62018V14.0002H14.6664V8.71351C14.6664 4.60018 9.95972 4.75351 8.85305 6.77351L8.87972 5.65351Z" fill="#202326"/>
              </svg>
          </svg>
      ),
    },
    
  ];

const navigations = [
    {name:"Privacy", href: "#"},
    {name:"Terms", href: "#"},
    {name:"FAQs", href: "#"},
    {name:"Help", href: "#"},
]

export default function Footer() {

    const [top, setTop] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            setTop(window.scrollY,)
        })
    }, []);
    const scrollTop = ()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return(
        <div className="py-10 ">
            <div className="w-full h-[300px] bg-teal-500 flex flex-col justify-center items-center gap-4 flex-wrap">
                <div className="flex gap-4">
                    {social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="size-6"/>
                        </a>
                    ))}
                </div>
                <div className="flex justify-center gap-4">
                    {navigations.map(item => (
                        <a href={item.href} key={item.name}>
                            <span className="hover:underline text-white font-bold">{item.name }</span>
                        </a>
                    ))}
                </div>
                <div>
                    <a href="#" className="text-white font-bold">© Domain Name.{' '}</a>
                    <span className="text-white">All Rights Reserved. Designed by <a href="#" className="text-white font-bold"> HTML Codex</a></span>
                </div>
            <div
                className={
                    top < 300
                        ? 'hidden'
                        : 'fixed bottom-4 right-4 w-12 h-12 lg:w-14 lg:h-14 flex justify-center items-center cursor-pointer'
                }
                onClick={scrollTop}
            >
                {/* <IoIosArrowUp className="text-white text-[28px]"/> */}
                <Svg2 />
            </div>
            </div>
        </div>
    )
} 