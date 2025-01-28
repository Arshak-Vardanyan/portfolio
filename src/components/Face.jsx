import TypedText from "@/components/TypedText";

export default function Face() {
  return (
    <div className="flex flex-col items-center  bb justify-center mx-auto bg-teal-500">
      {/* Контейнер для контента */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center bb mx-auto  py-7">
        {/* Изображение */}
        <div className="flex-shrink-0 ">
          <img
            src="https://i.wpimg.pl/1280x/filerepo.grupawp.pl/api/v1/display/embed/85ec08c2-56e2-4a80-83ca-def715fbab45"
            className=" w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border-4 border-white shadow-lg"
            alt="Profile"
          />
        </div>

        {/* Текст */}
        <div className="flex flex-col items-center sm:items-start justify-center">
          <p className="text-xs sm:text-lg text-white mb-2">I'm</p>
          <p className="text-2xl sm:text-4xl font-extrabold text-stroke-white text-transparent">
            MEGAN FOX
          </p>
          <p className="text-xl text-white mt-2">
            <TypedText />
          </p>
          <div className="mt-6 flex gap-2 sm:gap-4">
            {/* Кнопка CV */}
            <button className="px-3 py-1 sm:px-6 sm:py-2 bg-white text-teal-500 font-semibold sm:font-semibold rounded-full shadow-md hover:bg-gray-200">
              Download CV
            </button>
            {/* Кнопка видео */}
            <button className="flex items-center px-3 py-1 sm:px-6 sm:py-2 bg-white text-teal-500 font-semibold rounded-full shadow-md hover:bg-gray-200">
              <span>Play</span>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-4.586-2.577a1 1 0 00-1.5.865v5.148a1 1 0 001.5.865l4.586-2.577a1 1 0 000-1.73z"
                />
              </svg> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}