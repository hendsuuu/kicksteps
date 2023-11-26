import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function NavRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavRoutes;
