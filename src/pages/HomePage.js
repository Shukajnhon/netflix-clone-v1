import React, {useEffect, useState} from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import useSWR from "swr";
import {fetcher, requests, tmdbAPI} from "../utils/Constants";
import Row from "../components/Row";
import ModalMovies from "../components/ModalMovies";
import Row2 from "../components/Row2";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [originalMovies, setOriginalMovies] = useState();
  const [actionMovies, setActionMovies] = useState();
  const [romanceMovies, setRomanMovies] = useState();
  const [comedyMovies, setComedyMovies] = useState();
  const [horrorMovies, setHorrorMovies] = useState();
  const [documentariesMovies, setDocumentarieMovies] = useState();

  const [showModal, setShowModal] = useState(false);

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
      ]);

      setTrendingMovies(trending);
      setOriginalMovies(original);
      setTopRatedMovies(topRated);
      setActionMovies(action);
      setComedyMovies(comedy);
      setHorrorMovies(horror);
      setRomanMovies(romance);
      setDocumentarieMovies(documentaries);

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
      <Header></Header>
      <div className="relative pb-24 pl-4 lg:space-y-24 lg:pl-16">
        <Banner movies={moviesBanner}></Banner>
      </div>
      <div className="mb-20">
        <div className="pl-2 md:space-y-20 md:pl-4 row">
          <Row title="Trending Now" movies={trendingMovies}></Row>
          <Row title="Top Rated" movies={topRatedMovies}></Row>
          <Row title="Action Thrillers" movies={actionMovies}></Row>
          <Row title="Scary Movies" movies={horrorMovies}></Row>
          <Row title="Comedies" movies={comedyMovies}></Row>
          <Row title="Romance Movies" movies={romanceMovies}></Row>
          <Row title="Documentaries" movies={documentariesMovies}></Row>
        </div>

        <Row2></Row2>
      </div>

      {showModal && (
        <ModalMovies open={showModal} onClose={() => {}}></ModalMovies>
      )}
    </div>
  );
};

export default HomePage;
