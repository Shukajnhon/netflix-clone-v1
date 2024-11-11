import React, {useEffect, useState} from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import useSWR from 'swr';
import {fetcher, requests, tmdbAPI} from '../utils/Constants';

import ModalMovies from '../components/ModalMovies';
import RowMovies from '../components/RowMovies';
import Footer from '../components/Footer';
import MoviesPage from './MoviesPage';
import {useSelector} from 'react-redux';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [originalMovies, setOriginalMovies] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [romanceMovies, setRomanMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [documentariesMovies, setDocumentarieMovies] = useState();
  const [genres, setGenres] = useState();
  const {inputSearch} = useSelector((state) => state.search);
  const {isSearch} = useSelector((state) => state.search);
  // const dispatch = useDispatch();

  const [showModal] = useState(false);

  // fetch data using swr to get banner movies
  const {data} = useSWR(requests.fetchNetflixOriginals, fetcher);

  // get multiple data from server
  useEffect(() => {
    const getData = async () => {
      const [
        trending,
        original,
        topRated,
        action,
        comedy,
        horror,
        romance,
        documentaries,
        genre,
      ] = await Promise.all([
        fetch(tmdbAPI.getTrending())
          .then((res) => {
            return res.json();
          })
          .then((data) => data.results),

        fetch(tmdbAPI.getOriginal())
          .then((res) => res.json())
          .then((data) => data.results),

        fetch(tmdbAPI.getTopRated())
          .then((res) => res.json())
          .then((data) => data.results),
        fetch(tmdbAPI.getMovies(28))
          .then((res) => res.json())
          .then((data) => data.results),
        fetch(tmdbAPI.getMovies(35))
          .then((res) => res.json())
          .then((data) => data.results),
        fetch(tmdbAPI.getMovies(27))
          .then((res) => res.json())
          .then((data) => data.results),
        fetch(tmdbAPI.getMovies(10749))
          .then((res) => res.json())
          .then((data) => data.results),
        fetch(tmdbAPI.getMovies(99))
          .then((res) => res.json())
          .then((data) => data.results),
        fetch(tmdbAPI.getGenres())
          .then((res) => res.json())
          .then((data) => data.genres),
      ]);

      setTrendingMovies(trending);
      setOriginalMovies(original);
      setTopRatedMovies(topRated);
      setActionMovies(action);
      setComedyMovies(comedy);
      setHorrorMovies(horror);
      setRomanMovies(romance);
      setDocumentarieMovies(documentaries);
      setGenres(genre);

      // console.log("trending", trending);
      // console.log("original", original);
      return {
        trending: trending,
        original: original,
        topRated: topRated,
        action: action,
        comedy: comedy,
        horror: horror,
        romance: romance,
        documentaries: documentaries,
        genre: genre,
      };
    };
    getData();
  }, []);

  if (!data || !trendingMovies || !originalMovies || !topRatedMovies)
    return null;
  const moviesBanner = data?.results;

  // console.log("trending:", trendingMovies);
  // console.log("original:", originalMovies);

  return (
    <div className="relative h-screen bg-gradient-to-b md:h-[140vh]">
      <Header isSearch={isSearch}></Header>
      <div className="relative pt-12 pl-4 mb:pb-24 lg:space-y-24 lg:pl-16">
        <Banner movies={moviesBanner}></Banner>
      </div>

      {!isSearch && inputSearch === '' ? (
        <div className="mb-20 mt-[2rem] md:mt-3">
          <div className="row">
            {/* <RowMovies title="Action Thrillers" movies={actionMovies}></RowMovies>
          <RowMovies title="Scary Movies" movies={horrorMovies}></RowMovies>
          <RowMovies title="Comedies" movies={comedyMovies}></RowMovies>
          <RowMovies title="Romance Movies" movies={romanceMovies}></RowMovies>
          <RowMovies
            title="Documentaries"
            movies={documentariesMovies}
          ></RowMovies> */}

            <div className="relative">
              <RowMovies
                title="Trending Now"
                movies={trendingMovies}
                genres={genres}
              ></RowMovies>
            </div>

            <RowMovies
              title="Top Rated"
              movies={topRatedMovies}
              genres={genres}
            ></RowMovies>

            <RowMovies
              title="Action Thrillers"
              movies={actionMovies}
              genres={genres}
            ></RowMovies>

            <RowMovies
              title="Scary Movies"
              movies={horrorMovies}
              genres={genres}
            ></RowMovies>

            <RowMovies
              title="Comedies"
              movies={comedyMovies}
              genres={genres}
            ></RowMovies>
            <RowMovies
              title="Romance Movies"
              movies={romanceMovies}
              genres={genres}
            ></RowMovies>
            <RowMovies
              title="Documentaries"
              movies={documentariesMovies}
              genres={genres}
            ></RowMovies>
          </div>
        </div>
      ) : (
        <MoviesPage genres={genres}></MoviesPage>
      )}

      <Footer></Footer>

      {showModal && (
        <ModalMovies open={showModal} onClose={() => {}}></ModalMovies>
      )}
    </div>
  );
};

export default HomePage;
