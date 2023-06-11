import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Screens from "./pages/Screens";
import Home from "./pages/Home";

import "./App.css";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen" element={<Screens />} />
        </Routes>
      </div>
  );
}

export default App;
