'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {useEffect, useState} from "react";
import Link from "next/link";
// import {AvatarIcon, Logo, LogoName} from "@/app/components/svgFiles";

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Skill', href: '#skill', current: true },
  // { name: 'Service', href: '#service', current: false },
  { name: 'Portfolio', href: '#portfolio', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [isOver, setIsOver] = useState(false);


  const sections = ['home', 'about', 'skill','service','portfolio', 'contact'];

  useEffect(() => {

    if(isOpen){
      document.body.style.overflowY = 'hidden';
      setVisible(true)
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll2 = () => {

      const sectionElements = sections.map((id) =>
        document.getElementById(id)
      );

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll2);
    return () => window.removeEventListener('scroll', handleScroll2);
    },[]);

  useEffect(() => {
    const handleScroll = () => {

      const moving = window.scrollY;
      if(!isOver && position > 50){
        setVisible(position > moving);
      }
      setPosition(moving);
    };

    // Set initial position when component mounts
    setPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position,isOver]);

  // console.log('isOpen',isOpen)
  return (
    <div className='lg:h-[90px] relative' onMouseEnter={()=>setIsOver(true)} onMouseLeave={()=>setIsOver(false)}>
      <div
          className={`fixed transition-all  ease-out duration-500 ${visible ? "top-0" : "-top-[100px]"} left-0 w-full border-b-[1px] border-b-[hsla(0, 0%, 100%, .75)] bg-white shadow-md z-50`}
      >
        <div className="relative mx-auto max-w-[1360px] py-4 px-10 lg:px-20 flex items-center gap-2 lg:gap-3 justify-center w-full">
          <a href='#' className="flex gap-2 lg:gap-3 items-center">
            {/* <Logo/>
            <LogoName/> */}
          </a>

          <div
              className="absolute  inset-y-0 right-0 flex items-center lg:hidden"
              onClick={()=>setIsOpen((prev)=>!prev)}
          >
            {/* Mobile menu button*/}
            <div
                className="group relative mr-6 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5"/>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className={`${!isOpen ? 'block size-6' :'hidden'}`}/>
              <XMarkIcon className={`${isOpen ? 'block size-6' :'hidden'}`}/>
            </div>
          </div>
          <div className="sm:items-stretch sm:justify-start">
            <div className="hidden lg:block">
              <div className="flex gap-2">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href === '#home'?'#':item.href}
                        // href={item.href}
                        className={classNames(
                            'rounded-md px-2 lg:px-3 py-2 font-medium text-[#4B545B] font-inter  not-italic leading-6',
                            `#${activeSection}` === item.href ? '  text-primaryColorActive' : 'text-black hover:text-primaryColorHover'
                        )}
                    >
                      {item.name}
                    </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className={`${isOpen? 'absolute': 'hidden'}  -top-4 h-[calc(100vh-65px)] w-full left-0 z-50 space-y-1 bg-white mt-20 px-2 pb-3 pt-2`}>
              {navigation.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className={classNames(
                          `#${activeSection}` === item.href ? '  text-primaryColorActive' : 'text-black hover:text-primaryColorHover',
                          'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                  >
                    {item.name}
                  </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}