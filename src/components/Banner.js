import React, {useEffect, useState} from "react";
import {BASE_IMG_URL} from "../utils/Constants";

const Banner = ({movies}) => {
  const [movie, setMovie] = useState(movies || null);

  //   set Random movie banner
  useEffect(() => {
    const movieLength = movies.length;
    const random = Math.floor(Math.random() * movieLength);
    // console.log(Math.floor(Math.random() * movie.length));
    const ChangeMovieRandom = () => {
      setMovie(movie[random]);
    };
    ChangeMovieRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  const {title, original_title, backdrop_path, poster_path, overview} =
    movie || [];
  // console.log(movie);

  return (
    <div className="flex flex-col py-1 md:py-16 space-y-2 md:space-y-4 lg:h-[64vh] lg:p-12">
      <div className="absolute top-0 left-0 right-0 h-[95vh] w-screen object-cover -z-10">
        <img
          src={`${BASE_IMG_URL}/original${backdrop_path || poster_path}`}
          alt=""
        />
      </div>
      <div className="w-2/4">
        <h1 className="text-2xl font-bold lg:text-7xl md:text-4xl">
          {title || original_title}
        </h1>
        <p className="max-w-sm text-xs text-shadow-md md:text-lg md:max-w-lg lg:max-w-xl">
          {`${overview?.slice(0, 150)}...`}
        </p>
      </div>

      <div className="flex space-x-2">
        <button className="text-black bg-white bannerBtn">
          <span className="md:h-5 md:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="font-semibold">Play</span>
        </button>
        <button className="bg-[gray]/70 bannerBtn">
          More Info
          <span className="w-5 h-5 md:w-8 md:h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              //   className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
