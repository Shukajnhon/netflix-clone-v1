import React from "react";
import {Link} from "react-router-dom";
import {v4} from "uuid";

const links = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "TV Shows",
    link: "/tvShow",
  },
  {
    name: "Movies",
    link: "/movie",
  },
  {
    name: "New & Popular",
    link: "/new",
  },
  {
    name: "My List",
    link: "/mylist",
  },
];
const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="object-contain cursor-pointer"
        />
        <ul className="hidden space-x-4 md:flex">
          {links.map((item) => {
            return (
              <li className="headerLink" key={v4()}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <span className="hidden sm:inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <p className="hidden lg:inline">Kids</p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </span>

        <Link to="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="rounded cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
