/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Card from "./Card";

import RowHeader from "./RowHeader";

import ThumbImg from "./ThumbImg";

const Row2 = ({title, movies, genres}) => {
  //   const [isHovered, setIsHovered] = useState(false);

  //   console.log("row2:", movies);

  return (
    <section className="pl-4 mt-4 pb-[10rem]">
      <RowHeader title={title}></RowHeader>
      <div className="gap-x-1 items-center md:gap-x-2.5 scrollbar-hide flex">
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
                  {/* group-hover:scale-[1.4] md:group-hover:visible */}
                  <div className="top-0 z-50 absolute translate-x-[30px] translate-y-[-24px] invisible scale-[1.4] left-0  md:group-hover:animate-zoom-out  group-hover:scale-[1.4] md:group-hover:visible">
                    <Card movies={item} genres={genres}></Card>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* .. */}
      {/* <div className="max-h-[171px] md:max-w-[260px] group relative">
        <div className="rounded cursor-pointer">
          <img
            onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            className={`w-[260px] h-[171px] object-cover ${
              isHovered ? "rounded-md" : "rounded-t-md"
            }`}
            src="https://images.unsplash.com/photo-1677741447562-5fa162a03c49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
            alt=""
          />
        </div>
        
        <div
          className={`w-full shadow-lg bg-[#222] absolute invisible top-0 left-0 translate-x-[32px] translate-y-[-32px] rounded-b-md group-hover:visible group-hover:animate-zoom-out group-hover:scale-125  `}
        >
          <div className="min-w-[128px] md:max-w-[260px] md:h-[171]">
            <iframe
              width="260"
              height="171"
              src={`https://www.youtube-nocookie.com/embed/V4kXFYRhwL0?autoplay=${
                isHovered ? "1" : "0"
              }&mute=1`}
              allowFullScreen
            ></iframe>
          </div>

          <div className="md:max-h-[10rem] mb-3">
            <div className="flex items-center justify-between mt-2">
              <div className="flex py-2 pl-2 gap-x-5">
                <span>
                  <IconPlayCircle></IconPlayCircle>
                </span>
                <span className="cursor-pointer" onClick={handleAddItemToggle}>
                  {addItem ? (
                    <IconCheckCircle></IconCheckCircle>
                  ) : (
                    <IconPlusCircle></IconPlusCircle>
                  )}
                </span>
                <span>
                  <IconHandThumbUp></IconHandThumbUp>
                </span>
              </div>
              <div className="py-2 pr-2">
                <IconChevronDown></IconChevronDown>
              </div>
            </div>

            <div className="px-4 mt-3">
              <span>vote:</span>
            </div>
            <div className="px-4 max-w-[260px] pb-4 my-3">
              <ul className="flex gap-x-2">
                <li>action</li>
                <li>action</li>
                <li>action</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Row2;
