import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { MenuBer } from "./Home";
import { Play, Board } from "./Three";
import Game from "./Test";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MenuBer />} />
				<Route path="/App" element={<App />} />
				<Route path="/Test" element={<Game />} />
				<Route path="/Three" element={<Play />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
