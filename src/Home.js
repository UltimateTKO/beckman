import * as React from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

var a = 1;

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<Stack my={2} direction="row" justifyContent="end">
				<Button variant="text" size="small">
					text
				</Button>
				<Button
					variant="text"
					size="small"
					onClick={() => navigate("/App")}
				>
					app
				</Button>
				<Button
					variant="text"
					size="small"
					onClick={() => navigate("/Three")}
				>
					app2
				</Button>
			</Stack>
		</>
	);
};

export default Home;
