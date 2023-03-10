import React from "react";
import Header from "../components/Header";
import RowMovies from "../components/RowMovies";

const MoviesPage = () => {
  return (
    <div className="movies-page">
      <div className="header">
        <Header></Header>
      </div>

      <div className="movies-banner"></div>

      <div className="movies">
        {/* <RowMovies
            title="Action Thrillers"
            movies={actionMovies}
            genres={genres}
          ></RowMovies>

          <RowMovies
            title="Scary Movies"
            movies={horrorMovies}
            genres={genres}
          ></RowMovies> */}
      </div>
    </div>
  );
};

export default MoviesPage;
