import React, { useState} from "react";
import ReactPlayer from "react-player";
import {useNavigate, useParams} from "react-router-dom";
import {withErrorBoundary} from "react-error-boundary";
import useSWR from "swr";
import {fetcher, tmdbAPI} from "../../utils/Constants";
import IconBack from "../icons/IconBack";

const MoviePlayer = () => {
  const [hovered, setHovered] = useState(true);
  const {movieId} = useParams();
  console.log("movieId", movieId);
  const navigate = useNavigate();

  const {data} = useSWR(tmdbAPI.getVideos(movieId), fetcher);
  console.log("dataMoviePlayer:", data);

  if (!data) return null;

  const movie = data?.results[0];

  console.log("movieMoviePlayer:", movie);

  return (
    <div className={`relative pt-[56.25%] bg-black`}>
      <div
        className="absolute top-4 left-0 w-full h-[80vh]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${movie.key}`}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
        ></ReactPlayer>
        {hovered && (
          <button
            onClick={() => navigate(-1)}
            className="absolute z-40 w-5 h-5 font-semibold transition-all rounded-md cursor-pointer md:w-9 md:h-9 tex-sm top-3 left-2 back"
          >
            <IconBack></IconBack>
          </button>
        )}
      </div>
    </div>
  );
};

const ErrorGetMovies = () => {
  // const navigate = useNavigation();
  return (
    <div className="relative w-full h-full">
      <div className="h-[100vh] w-ful pointer-events-none">
        <img
          className="object-cover w-full h-full opacity-70"
          src="https://i.guim.co.uk/img/media/bb81e754b0ae44b72ba369469949b43768cc6990/0_338_5074_3045/master/5074.jpg?width=1200&quality=85&auto=format&fit=max&s=536c9f43b853fe28fbeb95b3fc4f6e70"
          alt=""
        />
      </div>
      <div className="absolute items-center w-full text-white top-[35%] -translate-y-2/4 left-[50%] -translate-x-2/4 text-md md:text-2x">
        <div className="flex flex-col items-center justify-center w-full gap-y-5">
          <h1 className="font-bold md:text-4xl">Lost your way? </h1>
          <p className="font-bold md:text-3xl">
            Sorry, we can't find that movie
          </p>
          <a
            href="/"
            // onClick={() => navigate("/")}
            className="p-2 text-sm text-black bg-white rounded-md md:px-4 md:py-2 md:font-medium md:text-md"
          >
            Netflix Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(MoviePlayer, {
  FallbackComponent: ErrorGetMovies,
});
