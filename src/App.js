import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
// import {ModalProvider} from "./components/context/modalContext";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";
import MoviePlayer from "./components/moviePlayer/MoviePlayer";

// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const SignUpPage = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        {/* <Route path="/movie" element={<MoviesPage></MoviesPage>}></Route> */}
        <Route
          path="/moviePlayer/:movieId"
          element={<MoviePlayer></MoviePlayer>}
        ></Route>
        <Route
          path="/*"
          element={
            <>
              404 | this page could be not found, We are trying developing
              everyday
            </>
          }
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
