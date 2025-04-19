import React from "react";
import Home from "./pages/Home/Home";
import ProfileUpdate from "./pages/profileUpdate/profileUpdate";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<ProfileUpdate />} />
      </Routes>
    </div>
  );
};

export default App;
