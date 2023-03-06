import React from "react";

import {BASE_IMG_URL} from "../utils/Constants";

const ThumbImg = ({images}) => {
  if (!images) return null;

  // console.log("ThumbImg:", images);
  // const backdrop_path = movies?.backdrop_path;
  // console.log("backdrop_path:", backdrop_path);

  return (
    <div className="h-28 min-w-[128px] cursor-pointer md:min-w-[260px]">
      <img
        className="object-cover rounded-sm md:rounded -z-10"
        src={`${BASE_IMG_URL}/w500${images.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default ThumbImg;
