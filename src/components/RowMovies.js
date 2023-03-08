/* eslint-disable jsx-a11y/iframe-has-title */

import React, {useState} from "react";

// import IconChevronLeft from "./icons/IconChevronLeft";
// import IconChevronRight from "./icons/IconChevronRight";
import RowHeader from "./RowHeader";

import CardPreview from "./CardPreview";

const RowMovies = ({title, movies, genres}) => {
  if (!movies) return null;

  return (
    <section
      id="slider-content"
      className="pl-4 space-y-2 md:mt-4 slider-content"
    >
      <RowHeader title={title}></RowHeader>

      <div className="max-w-[230px] w-full h-full cursor-pointer flex gap-x-3">
        <div className=""></div>
        {movies.map((item) => {
          return (
            <div key={item.id}>
              <div className="w-[180px] md:w-[230px]">
                <CardPreview genres={genres} data={item}></CardPreview>
              </div>
            </div>
          );
        })}
      </div>
      {/* scrollbar-hide  */}
    </section>
  );
};

export default RowMovies;
