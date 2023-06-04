import {Routes , Route} from 'react-router-dom';
import "./App.css";
import Screens from "./pages/Screens";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/screens" element={<Screens/>} />
      </Routes>
    </div>
  );
}

export default App;
