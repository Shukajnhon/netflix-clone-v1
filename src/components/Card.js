import React, {useState} from "react";

import IconCheckCircle from "./icons/IconCheckCircle";
import IconChevronDown from "./icons/IconChevronDown";
import IconHandThumbUp from "./icons/IconHandThumbUp";
import IconPlayCircle from "./icons/IconPlayCircle";
import IconPlusCircle from "./icons/IconPlusCircle";

const Card = ({movies, genres}) => {
  const [addItem, setAddItem] = useState(false);
  //   const [isHovered, setIsHovered] = useState(false);

  if (!movies) return null;

  const {genre_ids} = movies;

  const handleAddItemToggle = () => {
    setAddItem(!addItem);
  };
  return (
    // 'md:group-hover:visible md:group-hover:animate-zoom-out group-hover:scale-125 invisible z-10 top-0 left-0'

    // min-w-[128px] md:max-w-[260px] md:h-[171]

    <div className={`w-full shadow-lg bg-[#222] rounded-md`}>
      <div className="rounded-t-md">
        {/* <iframe
          width="260"
          height="171"
          src={`https://www.youtube-nocookie.com/embed/V4kXFYRhwL0?autoplay=${
            isHovered ? "1" : "0"
          }&mute=1`}
          allowFullScreen
        ></iframe> */}
        <iframe
          width="260"
          height="171"
          src={`https://www.youtube-nocookie.com/embed/V4kXFYRhwL0?autoplay=1&mute=1`}
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

        <div className="flex justify-between px-4 mt-3 text-sm font-normal text-[#46d369]">
          <span>Vote:</span>
          <span>{`${Math.round(movies?.vote_average)}`}</span>
        </div>
        <div className="px-4 max-w-[260px] pb-4 my-3">
          <ul className="flex flex-wrap items-center justify-between text-sm gap-x-4">
            {genres &&
              genres.map((item, index) => {
                if (item.id === genre_ids[0]) {
                  return <li key={index}>{item.name}</li>;
                }
                if (item.id === genre_ids[1]) {
                  return <li key={index}>{item.name}</li>;
                }
                if (item.id === genre_ids[2]) {
                  return <li key={index}>{item.name}</li>;
                }
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
