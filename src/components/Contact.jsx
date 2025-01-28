

export default function Contact () {

    return (
        <section className="py-10" id="contact">
            <div className="" >
                <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
                    <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white  ">CONTACT</span>
                    <span className="absolute text-teal-500 ">CONTACT ME</span>
                </div>
                <div className="flex justify-center flex-col max-w-[50%] mx-auto py-7 gap-4">
                    <div className="grid gap-4 w-full grid-cols-1 sm:grid-cols-2">
                        <input 
                            className="sm:px-4 py-2 border border-gray-600 rounded-3xl"
                            placeholder="Your Name"
                        />
                        <input 
                            className="px-4 py-2 border border-gray-600 rounded-3xl"
                            type="Email"
                            placeholder="Your Email"
                        />
                    </div>
                    <input 
                        className="px-4 py-2 border border-gray-600 rounded-3xl"
                         placeholder="Subject"
                    />
                    <textarea 
                        className="px-4 py-2 border border-gray-600 rounded-3xl"
                        placeholder="Message"
                    />
                </div>
                <div className="flex justify-center mt-5">
                    <button className="text-teal-500 border border-teal-500 px-6 py-3 rounded-3xl font-bold"> Send Message</button>
                </div>
            </div>
        </section>
    )
}