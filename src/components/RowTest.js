/* eslint-disable jsx-a11y/iframe-has-title */

import React, {useState} from "react";
import IconChevronDown from "./icons/IconChevronDown";
import IconHandThumbUp from "./icons/IconHandThumbUp";
import IconPlayCircle from "./icons/IconPlayCircle";
import IconPlusCircle from "./icons/IconPlusCircle";
import {BASE_IMG_URL} from "../utils/Constants.js";
// import IconChevronLeft from "./icons/IconChevronLeft";
// import IconChevronRight from "./icons/IconChevronRight";

import RowHeader from "./RowHeader";

const RowTest = ({title, movies, genres}) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!movies) return null;

  console.log("row2:", movies);

  return (
    <section
      id="slider-content"
      className="pl-4 mt-4 pb-[10rem] slider-content"
    >
      <RowHeader title={title}></RowHeader>

      <div
        className="max-w-[230px] w-full h-full cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="z-10 w-full h-full rounded-md"
          src={`${BASE_IMG_URL}/w500${movies[0].backdrop_path}`}
          alt=""
        />

        {isHovered && (
          <div className="z-40 hover h-max w-[20rem] absolute top-[-10vh] left-0 rounded-md shadow-md bg-[#181818] transition-all">
            <div className="card-container relative h-[140px]">
              <img
                className="absolute top-0 z-10 visible object-cover h-[130px] w-full rounded-md"
                src={`${BASE_IMG_URL}/w500${movies[0].backdrop_path}`}
                alt=""
              />

              <iframe
                className="absolute top-0 z-20 object-cover w-full rounded-t-md"
                width="260"
                height="171"
                src={`https://www.youtube-nocookie.com/embed/V4kXFYRhwL0?autoplay=1&mute=1`}
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col gap-2 p-4 info-container justify-center h-[171px] z-30">
              <h3>name</h3>
              <div className="flex justify-between icon">
                <div className="flex gap-4 controls">
                  <span className="controls-icon">
                    <IconPlayCircle></IconPlayCircle>
                  </span>
                  <span className="controls-icon">
                    <IconPlusCircle></IconPlusCircle>
                  </span>
                  <span className="controls-icon">
                    <IconHandThumbUp></IconHandThumbUp>
                  </span>
                </div>
                <div className="info">
                  <IconChevronDown></IconChevronDown>
                </div>
              </div>

              <div className="flex genres">
                <ul className="flex gap-4">
                  <li className="pr-3">action</li>
                  <li>action</li>
                  <li>action</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* scrollbar-hide  */}
    </section>
  );
};

export default RowTest;
