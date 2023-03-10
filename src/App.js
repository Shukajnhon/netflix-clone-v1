import React, {Suspense} from "react";
import {Routes, Route} from "react-router-dom";
// import {ModalProvider} from "./components/context/modalContext";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import MoviesPage from "./pages/MoviesPage";

// const LoginPage = lazy(() => import("./pages/LoginPage"));
// const SignUpPage = lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/movie" element={<MoviesPage></MoviesPage>}></Route>
        <Route
          path="/*"
          element={<>404 | this page could be not found</>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
