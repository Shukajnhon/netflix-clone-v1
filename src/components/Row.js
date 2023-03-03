import React, {useRef, useState} from "react";
import Thumbnail from "./Thumbnail";

const Row = ({title, type, value, movies}) => {
  const rowRef = useRef();

  const [, setIsMoved] = useState(false);
  // console.log(isMoved);

  const handleClick = (value) => {
    setIsMoved(true);
    const el = rowRef.current;
    // const elWidth = el.getBoundingClientRect().width;

    // console.log(el.getBoundingClientRect());
    if (value === "left") {
      el.scrollLeft = el.scrollLeft - 500;
    }
    if (value === "right") {
      el.scrollLeft = el.scrollLeft + 500;
    }
  };

  if (!movies) return null;
  // console.log("movies:", movies);

  return (
    <section>
      <div className="h-28 md:h-40 pl-4 space-y-0.5 md:space-y-2">
        <h2 className="w-56 text-sm font-semibold cursor-pointer text-[#e5e5e5] transition duration-200 hover:text-white md:text-lg">
          {title}
        </h2>
        <div className="relative group md:-ml-2">
          {/* Chevron left */}
          <span
            className={`absolute top-0 bottom-0 z-40  m-auto -translate-y-4 h-16  md:translate-y-0 md:h-full flex items-center bg-bgColor bg-opacity-0 transition opacity-100 cursor-pointer hover:bg-opacity-40 left-0 group-hover:opacity-100`}
            onClick={() => handleClick("left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <div
            ref={rowRef}
            className="flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 mb:p-2 scroll-smooth"
          >
            {/* thumbnail */}
            {movies &&
              movies.map((movie) => {
                return <Thumbnail key={movie.id} movies={movie}></Thumbnail>;
              })}
          </div>

          {/* Chevron Right */}
          <span
            className="absolute top-0 bottom-0 right-0 z-40 flex items-center h-16 m-auto transition -translate-y-4 bg-opacity-0 opacity-100 cursor-pointer md:translate-y-0 md:h-full bg-bgColor hover:bg-opacity-40 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Row;
