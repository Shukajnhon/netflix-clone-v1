import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";
import {v4} from "uuid";
import {useAuth} from "../hooks/useAuth";
import {getValueInputSearch, handleClickSearch} from "./redux/searchSlice";

const links = [
  {
    name: "Home",
    link: "/",
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const {inputSearch} = useSelector((state) => state.search);

  const {isSearch} = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const {logout} = useAuth();

  // console.log("window.scrollY:", window.scrollY);

  // console.log("isSearch:", isSearch);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const {value} = e.target;
    dispatch(getValueInputSearch(value));
  };

  const handleClickSearchBtn = () => {
    dispatch(handleClickSearch(!isSearch));
  };

  return (
    <header className={`${isScrolled && "bg-bgColor"}`}>
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
              <Link to={item.link} className="headerLink" key={v4()}>
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <div
          className={`flex items-center h-6 search gap-[0.4rem] justify-center p-[0.2rem] pl-[0.5rem] rounded-[0.1rem] bg-transparent ${
            showSearch ? "border border-white bg-[rgba(0,0,0,5)]" : ""
          }`}
        >
          <button
            className="btn-search"
            onClick={() => {
              handleClickSearchBtn();
              setShowSearch(true);
            }}
            onBlur={() => {
              if (!inputHover) {
                setShowSearch(false);
              }
            }}
          >
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 "
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
          </button>
          <input
            className={`text-white transition-all bg-transparent border-none focus:outline-none ${
              showSearch
                ? "w-full opacity-100 visible p-[0.3rem]"
                : "invisible w-0 opacity-0 "
            } `}
            onMouseEnter={() => setInputHover(true)}
            onMouseLeave={() => setInputHover(false)}
            onBlur={() => {
              setShowSearch(false);
              setInputHover(false);
            }}
            onChange={handleInputChange}
            type="text"
            name="inputSearch"
            id="inputSearch"
            autoFocus={true}
            placeholder="search movie"
          />
        </div>

        <p className="hidden cursor-default lg:inline">User</p>
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

        {/* <Link to="/account"> */}
        <img
          onClick={logout}
          src="https://rb.gy/g1pwyx"
          alt=""
          className="rounded cursor-pointer"
        />
        {/* </Link> */}
      </div>
    </header>
  );
};

export default Header;
