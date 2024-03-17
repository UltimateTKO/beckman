import * as React from "react";
import Divider from "@mui/material/Divider";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "./image_etc/logo.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const MenuBer = () => {
	const navigate = useNavigate();

	return (
		<Stack my={2} direction="row" divider={<Divider orientation="horizontal" flexItem />} justifyContent="end">
			<img src={logo} style={{ marginRight: "auto" }} />
			<Button
				variant="text"
				size="small"
				onClick={() => navigate("/")}
				sx={{ color: "black", ":hover": { color: "#777777", background: "rgba(255,255,0,0.2)" } }}
			>
				TOP PAGE
			</Button>
			<Button
				variant="text"
				size="small"
				onClick={() => navigate("/Three")}
				sx={{ color: "black", ":hover": { color: "#777777" } }}
			>
				access
			</Button>
		</Stack>
	);
};

export { MenuBer };
