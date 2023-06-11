import { useState, useContext } from "react";
import { Routes, Route, redirect, Navigate } from "react-router-dom";

import Screens from "./pages/Screens";
import Home from "./pages/Home";

import UserContext from "./context/UserContext";

function App() {

	const { showScreen, setShowScreen } = useContext(UserContext);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/screen/:socketId" element={ (showScreen) ? <Screens/> : <Navigate to="/"/> } />
			</Routes>
		</div>
	);
}

export default App;
