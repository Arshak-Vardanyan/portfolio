
'use client'

import { useState,useEffect,useRef } from 'react'
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export default function Contact () {

    const [agreed, setAgreed] = useState(false)
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState('');
    const [message,setMessage] = useState('')
    const maxLengths = 250
    const timeoutRef = useRef(null);
  
    useEffect(() => {
      if (emailSubmitted) {
        timeoutRef.current = setTimeout(() => {
          setEmailSubmitted(false);
          setSending(false)
        }, 3000);
      }
  
      return () => clearTimeout(timeoutRef.current);
    }, [emailSubmitted]);
  
    const handleSubmit = async (e) => {
      setSending(true)
      e.preventDefault();
      const form = e.target;
      const data = {
        firstName: (form.elements.namedItem('first-name')).value,
        lastName: (form.elements.namedItem('last-name')).value,
        company: (form.elements.namedItem('company')).value,
        email: (form.elements.namedItem('email')).value,
        phoneNumber: phoneNumber,
        message: (form.elements.namedItem('message')).value,
    };
  
  
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
  
      if (response.status === 200) {
        setEmailSubmitted(true);
      }
      if (response.status !== 200) {
        console.log("Message not sent.");
        setSending(false)
      }
  
    };

    return (
        <section className=" bg-white pb-12 pt-20 sm:py-24 lg:py-20 lg:px-8" id='contact'>
          <div className="mx-auto max-w-2xl text-center text-wrap">
            <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
              <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white  ">CONTACT</span>
              <span className="absolute text-teal-500 ">CONTACT ME</span>
            </div>
            <p className="mt-2 text-[14px] sm:text-[18px] lg:text-[16px] text-gray-600">I'm here to help you. Feel free to reach out to me if you have any questions, suggestions, or need assistance.</p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block font-inter  text-[14px] not-italic font-medium leading-[17px] text-gray-600">
                  First Name*
                </label>
                <div className="mt-2.5">
                  <input
                      required
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-[95%] px-4 py-2 border border-gray-400 rounded-3xl focus:outline-gray-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block font-inter  text-[14px] not-italic font-medium leading-[17px] text-gray-600">
                  Last name*
                </label>
                <div className="mt-2.5">
                  <input
                      required
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-[95%] px-4 py-2 border border-gray-400 rounded-3xl focus:outline-gray-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block font-inter  text-[14px] not-italic font-medium leading-[17px] text-gray-600">
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-[95%] px-4 py-2 border border-gray-400 rounded-3xl focus:outline-gray-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block font-inter  text-[14px] not-italic font-medium leading-[17px] text-gray-600">
                  Email*
                </label>
                <div className="mt-2.5">
                  <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-[95%] px-4 py-2 border border-gray-400 rounded-3xl focus:outline-gray-500"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block font-inter  text-[14px] not-italic font-medium leading-[17px] text-gray-600">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div >
                    <PhoneInput
                        className="flex rounded-md bg-white  "
                        country={'us'}
                        placeholder="123-456-7890"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block font-inter  text-[14px] not-italic font-medium leading-[17px] text-gray-600">
                  Message*
                </label>
                <div className="mt-2.5 relative ">
                  <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-[95%] px-4 py-2 border border-gray-400 rounded-3xl focus:outline-gray-500"
                      value={message}
                      onChange={(e) => {setMessage(e.target.value)}}
                  />
                  <div className='absolute bottom-2 right-2 text-[#6F767C] text-[12px] font-inter not-italic leading-[14px] font-normal'>
                    {message.length}/{maxLengths}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              {emailSubmitted ? (
                <div className=' flex flex-col justify-center gap-2'>
                  <div className='flex justify-center items-center gap-2 bg-[#60BE6F] rounded-[10px] w-full py-[10px] px-5'>
                    {/* <EmailSubmittedIcon/> */}
                    <p className='text-white text-center font-inter text-16px not-italic font-medium leading-[19px]'>Successfully submitted </p>
                  </div>
                  <p className='self-stretch text-[#4B545B] text-center font-inter text-[14px] not-italic font-normal leading-[17px]'>You can Submit another one</p>
                </div>
                ) : (
                <button
                  type="submit"
                  className="block w-[95%] text-teal-500 border border-teal-500 px-6 py-3 rounded-3xl font-bold"
                >
                  {!sending ? 'Send Message' : 'Loading...'}
                </button>
                )}
              
            </div>
          </form>
    </section>
        // <section className="py-10" id="contact">
        //     <div className="" >
        //         <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
        //             <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white  ">CONTACT</span>
        //             <span className="absolute text-teal-500 ">CONTACT ME</span>
        //         </div>
        //         <div className="flex justify-center flex-col max-w-[50%] mx-auto py-7 gap-4">
        //             <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2">
        //                 <input 
        //                     className="px-4 py-2 border border-gray-600 rounded-3xl"
        //                     placeholder="Your Name"
        //                 />
        //                 <input 
        //                     className="px-4 py-2 border border-gray-600 rounded-3xl"
        //                     type="email"
        //                     placeholder="Your Email"
        //                 />
        //             </div>
        //             <input 
        //                 className="px-4 py-2 border border-gray-600 rounded-3xl"
        //                  placeholder="Subject"
        //             />
        //             <textarea 
        //                 className="px-4 py-2 border border-gray-600 rounded-3xl"
        //                 placeholder="Message"
        //             />
        //         </div>
        //         <div className="flex justify-center mt-5">
        //             <button 
        //                 className="text-teal-500 border border-teal-500 px-6 py-3 rounded-3xl font-bold"
        //                 onClick={() => alert(`Sorry,but in this moment i can't help you`)}
        //             > Send Message</button>
        //         </div>
        //     </div>
        // </section>
    )
}