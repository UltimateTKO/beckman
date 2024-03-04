import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Home } from "./js/Home";
import { Play, Board } from "./Three";
import { TTest } from "./Test";
import * as Menu from "./Menu";

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/App" element={<App />} />
				<Route path="/Test" element={<TTest />} />
				<Route path="/Three" element={<Play />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
