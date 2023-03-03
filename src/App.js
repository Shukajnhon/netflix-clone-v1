import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import {AuthProvider} from "./hooks/useAuth";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
