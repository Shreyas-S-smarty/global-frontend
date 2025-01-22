/*import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Home from "./Home";

export default function App() {
  const [isAuth, setAuth] = useState(false); 

  return (
    <>
      <button onClick={() => setAuth(!isAuth)}>Toggle Authentication</button>
      <BrowserRouter>
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Signin />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          
          <Route path="*" element={<Navigate to={isAuth ? "/home" : "/signin"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
*/