import React, {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import {ModalProvider} from "./components/context/modalContext";
import {AuthProvider} from "./hooks/useAuth";
import HomePage from "./pages/HomePage";
// import SignUp from "./pages/SignUp";
// import LoginPage from "./pages/LoginPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUp"));
function App() {
  return (
    <AuthProvider>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
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
