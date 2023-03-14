import axios from "axios";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import CardPreview from "../components/CardPreview";
import {tmdbAPI} from "../utils/Constants";

const MoviesPage = ({genres}) => {
  const [moviesSearch, setMoviesSearch] = useState(null);

  const {inputSearch} = useSelector((state) => state.search);
  console.log("inputSearch:", inputSearch);

  // console.log("moviesSearch:", moviesSearch);

  console.log("genres:", genres);

  useEffect(() => {
    // getDataBySearch
    const getDataBySearch = async () => {
      try {
        const data = await axios
          .get(tmdbAPI.getSearchMovies(inputSearch))
          .then((res) => res.data?.results);
        // .then((data) => console.log(data));
        // console.log(moviesSearch);
        setMoviesSearch(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getDataBySearch();
  }, [inputSearch]);
  return (
    <div className="w-full movies-page">
      <div className="mt-9 md:mt-16 movies">
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-2 movies-wrap">
          {moviesSearch &&
            moviesSearch.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[180px] md:w-[230px] cursor-pointer"
                >
                  <CardPreview data={item} genres={genres}></CardPreview>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
