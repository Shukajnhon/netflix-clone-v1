/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import React, {useState} from "react";
import {BASE_IMG_URL, tmdbAPI} from "../utils/Constants";
import IconCheckCircle from "./icons/IconCheckCircle";
import IconChevronDown from "./icons/IconChevronDown";
import IconHandThumbUp from "./icons/IconHandThumbUp";
import IconPlayCircle from "./icons/IconPlayCircle";
import IconPlusCircle from "./icons/IconPlusCircle";

const CardPreview = ({data, genres}) => {
  const [addMovie, setAddMovies] = useState(false);

  const fetchDataMovie = async (id) => {
    try {
      await axios
        .get(tmdbAPI.getMovies(id))
        .then((res) => res.json())
        .then((result) => console.log(result));
    } catch (error) {
      console.log(error);
    }
  };
  fetchDataMovie(906221);

  // ToggleAddMovie func
  const handleToggleAddMovie = () => {
    setAddMovies(!addMovie);
  };
  // const [isHovered, setIsHovered] = useState(false);
  // console.log("data:", data);
  const {genre_ids, id} = data;
  console.log("id:", id);

  // console.log("genre_ids:", genre_ids);

  return (
    <div
      className="relative group"
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="z-10 rounded-md md:h-full md:w-full "
        src={`${BASE_IMG_URL}/w500${data.backdrop_path}`}
        alt=""
      />

      <div
        className={`hover z-30 bg-[#181818] h-max w-[20rem] absolute top-[-10vh] left-0 rounded-md shadow-lg invisible md:group-hover:visible md:group-hover:animate-zoomOut`}
      >
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/IJsiX3z9WvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <div>
          <div className="card-container relative h-[140px]">
            <div>
              {/* <iframe
                className="absolute top-0 z-20 object-cover w-full rounded-t-md"
                width="260"
                height="171"
                src={`https://www.youtube-nocookie.com/embed/IJsiX3z9WvM?autoplay=1&mute=1`}
                allowFullScreen
              ></iframe> */}
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4 info-container justify-center h-[171px] z-30">
            <h3 className="pt-3">{data.name || data.title}</h3>
            <div className="flex justify-between icon">
              <div className="flex w-6 h-4 gap-4 controls">
                <span className="controls-icon">
                  <IconPlayCircle></IconPlayCircle>
                </span>
                <span onClick={handleToggleAddMovie} className="controls-icon">
                  {!addMovie ? (
                    <IconPlusCircle></IconPlusCircle>
                  ) : (
                    <IconCheckCircle></IconCheckCircle>
                  )}
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
              <ul className="flex flex-wrap gap-4">
                {genres.map((genre, index) => {
                  if (genre.id === genre_ids[0]) {
                    return (
                      <li key={index} className="pr-3">
                        {genre.name}
                      </li>
                    );
                  }
                  if (genre.id === genre_ids[1]) {
                    return (
                      <li key={index} className="pr-3">
                        {genre.name}
                      </li>
                    );
                  }
                  if (genre.id === genre_ids[2]) {
                    return (
                      <li key={index} className="pr-3">
                        {genre.name}
                      </li>
                    );
                  }
                })}
                {/* <li className="pr-3">action</li>
                  <li>action</li>
                  <li>action</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
