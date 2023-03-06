import React from "react";
import {Link} from "react-router-dom";
import IconChevronRight from "./icons/IconChevronRight";

const RowHeader = ({title}) => {
  return (
    <div className="flex items-center h-10 max-w-[300px] group gap-x-2">
      <h2 className="text-sm font-semibold cursor-pointer md:text-lg text-text1">
        {title}
      </h2>
      <div className="flex items-end h-6 pl-6 ">
        <Link
          className="invisible md:group-hover:animate-translateText md:group-hover:visible inline-flex max-w-[150px] justify-around text-xs text-[#54b9c5]"
          to="/Movie"
        >
          <span className="">Watching all</span>
          <span className="w-3 h-3 pt-0.5">
            <IconChevronRight></IconChevronRight>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RowHeader;
