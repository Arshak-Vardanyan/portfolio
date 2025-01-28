

export default function About () {

    return (
        <section className="max-w-[85%] mx-auto pt-[70px]" id="about">
            <div className="mx-auto">
                <div className="flex items-center justify-center relative text-xl sm:text-5xl mx-auto font-bold">
                    <span className="relative inset-0 text-[50px] sm:text-[150px] text-[#dee2e6] tracking-wide text-stroke-white ">ABOUT</span>
                    <span className="absolute text-teal-500 ">ABOUT ME</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-10 py-10">
                    <img 
                        src="https://scontent.fevn12-1.fna.fbcdn.net/v/t39.30808-6/351102896_222787977275696_850180651668170307_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=Knnuhk4zY8IQ7kNvgEKsA5L&_nc_oc=AdhB3mFPN1b_NxEPXsND3UEaafRXlmjwh2XEqtrsE8ZSSycGFYAcOOegOlE-WiUVeLc&_nc_zt=23&_nc_ht=scontent.fevn12-1.fna&_nc_gid=A2rSjNZd1leB7AX_HVdXUnB&oh=00_AYChRsmXM1ivXiIJiItAkX5kG5DaOD48MlSHmS76-57z9Q&oe=679E7555"
                        className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-lg shadow-lg"
                    />
                    <div className="flex flex-col flex-wrap max-w-[800px]">
                        <h1 className="mb-4 font-inter font-bold text-xl sm:text-4xl">Front End Developer  & Web Developer</h1>
                        <p className="text-gray-400 font-normal pb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum possimus repudiandae, aperiam quam blanditiis corrupti hic, delectus, itaque tenetur nesciunt sed inventore? Sequi ipsum, velit autem possimus harum quod pariatur iusto consequatur, reprehenderit voluptatum laboriosam totam eius fugit aut accusantium officiis? Illum numquam reprehenderit, incidunt et totam dolorum praesentium quidem.</p>
                        <div className="flex gap-10">
                            <div className="flex flex-col text-lg gap-2 sm:gap-6 text-gray-600 font-inter">
                                <p>Name: Arshak Vardanyan</p>
                                <p>Degree: Master</p>
                                <p>Phone: +374 77 87-08-55</p>
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