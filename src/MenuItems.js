import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Game from "./Three";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/App" element={<App />} />
				<Route path="/Three" element={<Game />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
