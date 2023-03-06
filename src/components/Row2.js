/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useState} from "react";
import {Link} from "react-router-dom";
import IconCheckCircle from "./icons/IconCheckCircle";
import IconChevronDown from "./icons/IconChevronDown";

import IconChevronRight from "./icons/IconChevronRight";
import IconHandThumbUp from "./icons/IconHandThumbUp";
import IconPlayCircle from "./icons/IconPlayCircle";
import IconPlusCircle from "./icons/IconPlusCircle";

const Row2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [addItem, setAddItem] = useState(false);

  // handle AddItem Toggle
  const handleAddItemToggle = () => {
    setAddItem(!addItem);
  };

  return (
    <section className="pl-4">
      <div className="flex items-center h-10 max-w-[300px] group gap-x-2">
        <h2 className="text-sm font-semibold cursor-pointer md:text-lg text-text1">
          movie header
        </h2>
        <div className="flex items-end h-6 pl-6 ">
          <Link
            className="invisible group-hover:animate-translateText group-hover:visible inline-flex max-w-[150px] justify-around text-xs text-[#54b9c5]"
            to="/Movie"
          >
            <span className="">Watching all</span>
            <span className="w-3 h-3 pt-0.5">
              <IconChevronRight></IconChevronRight>
            </span>
          </Link>
        </div>
      </div>

      {/* content */}
      <div className="max-h-[171px] md:max-w-[260px] group relative">
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
        {/* card */}
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
      </div>
    </section>
  );
};

export default Row2;
