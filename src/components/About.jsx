

export default function About () {

    return (
        <div className="max-w-[85%] mx-auto pt-[70px]">
            <div className="mx-auto">
                <div className="flex items-center justify-center relative text-5xl mx-auto font-bold">
                    <span className="relative inset-0 text-[150px] text-[#dee2e6] tracking-wide text-stroke-white ">ABOUT</span>
                    <span className="absolute text-teal-500 ">ABOUT ME</span>
                </div>
                <div className="flex justify-center gap-10 py-10">
                    <img 
                        src="https://www.realself.com/news/wp-content/uploads/2024/03/RS_MeganFox.jpg"
                        className="w-[400px] h-[400px] rounded-lg shadow-lg"
                    />
                    <div className="flex flex-col flex-wrap max-w-[800px]">
                        <h1 className="mb-4 font-inter font-bold text-4xl">UI/UX Designer & Web Developer</h1>
                        <p className="text-gray-400 font-normal pb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum possimus repudiandae, aperiam quam blanditiis corrupti hic, delectus, itaque tenetur nesciunt sed inventore? Sequi ipsum, velit autem possimus harum quod pariatur iusto consequatur, reprehenderit voluptatum laboriosam totam eius fugit aut accusantium officiis? Illum numquam reprehenderit, incidunt et totam dolorum praesentium quidem.</p>
                        <div className="flex gap-10">
                            <div className="flex flex-col text-lg gap-6 text-gray-600 font-inter">
                                <p>Name: Megan Fox</p>
                                <p>Degree: Master</p>
                                <p>Phone: +012 345 6789</p>
                                <p>Address: 123 Street, New York, USA</p>
                            </div>
                            <div className="flex flex-col text-lg gap-6 text-gray-600 font-inter">
                                <p>Birthday: 1 April 1990</p>
                                <p>Experience: 10 Years</p>
                                <p>Email: mail@domain.com</p>
                                <p>Freelance: Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}