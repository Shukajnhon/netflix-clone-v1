/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Card from "./Card";
// import IconChevronLeft from "./icons/IconChevronLeft";
// import IconChevronRight from "./icons/IconChevronRight";

import RowHeader from "./RowHeader";

import ThumbImg from "./ThumbImg";

const Row2 = ({title, movies, genres}) => {
  //   const [isHovered, setIsHovered] = useState(false);

  //   console.log("row2:", movies);

  return (
    <section
      id="slider-content"
      className="pl-4 mt-4 pb-[10rem] slider-content"
    >
      <RowHeader title={title}></RowHeader>

      {/* scrollbar-hide  */}
      <div className="gap-x-1 items-center md:gap-x-2.5 flex scrollbar-hide overflow-x-scroll">
        {/* content */}
        {movies &&
          movies.map((item) => {
            return (
              <div key={item.id} className="relative w-full group">
                <div className="rounded cursor-pointer min-w-[128px] md:w-[260px] md:h-[171px]">
                  {/* <img
                    onMouseEnter={() => setIsHovered(true)}
                    // onMouseLeave={() => setIsHovered(false)}
                    className={`w-[260px] h-[171px] object-cover ${
                        isHovered ? "rounded-md" : "rounded-t-md"
                    }`}
                    src={`${BASE_IMG_URL}/w500${item.backdrop_path}`}
                    alt=""
                    /> */}
                  <ThumbImg images={item}></ThumbImg>
                  {/* card */}
                  {/* top-0 z-50 absolute translate-x-[30px] translate-y-[-24px] invisible scale-[1.4] left-0  md:group-hover:animate-zoom-out  group-hover:scale-[1.4] md:group-hover:visible */}
                  <div className="top-0 z-50 absolute translate-x-[30px] translate-y-[-24px] invisible scale-[1.4] left-0  md:group-hover:animate-zoom-out  group-hover:scale-[1.4] md:group-hover:visible">
                    <Card movies={item} genres={genres}></Card>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Row2;
