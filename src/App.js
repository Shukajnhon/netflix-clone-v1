import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/*"
          element={<>404 | this page could be not found</>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
