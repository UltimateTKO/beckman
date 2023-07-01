import * as React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<ButtonGroup>
				<Button>text</Button>
				<Button size="small" onClick={() => navigate("/App")}>
					app
				</Button>
				<Button size="large" onClick={() => navigate("/App")}>
					app2
				</Button>
			</ButtonGroup>
		</>
	);
};

export default Home;
