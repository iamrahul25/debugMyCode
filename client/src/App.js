import { Routes, Route } from "react-router-dom";
import { tagsData } from './data/data'
import "./App.css";
import Screens from "./pages/Screens";
import Home from "./pages/Home";
import StateContext from "./context/StateContextProvider";
import { useState } from "react";

function App() {
  const [tags, setTags] = useState(tagsData);
  return (
    <StateContext.Provider value={{ tags, setTags }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen" element={<Screens />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
