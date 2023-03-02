import React from "react";
import {BASE_IMG_URL} from "../utils/Constants";

const Thumbnail = ({movies}) => {
  if (!movies) return null;

  const {backdrop_path} = movies;

  // console.log("backdrop_path", backdrop_path);
  // console.log("movies:", movies);
  return (
    <div className="relative h-28 min-w-[128px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <img
        className="object-cover rounded-sm md:rounded"
        src={`${BASE_IMG_URL}/w500${backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default Thumbnail;
