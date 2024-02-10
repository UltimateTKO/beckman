import * as React from "react";
import "./Footer.css";
import instagram from "./image_etc/instagram_logo_icon.png";
import logo from "./image_etc/logo.png";
import { Table, TableHead, TableBody, TableCell, TableContainer, TableFooter, Paper, TableRow } from "@mui/material";

const footer = () => {
	return (
		<div className="footer">
			{/* <p>
				<div>ご予約はこちらから</div>
				<div>080-1111-1111</div>
				<a href="https://www.instagram.com/errer368/">
					<img src={instagram} className="instagram_logo" />
				</a>
			</p> */}
			<br />
			<p>
				<a href="http://localhost:3000/">
					<img src={logo} />
				</a>
			</p>
			<div className="copylight">© Cut Shop BECKMAN</div>
			<br />
		</div>
	);
};

const testFooter = () => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650, backgroundColor: "#888;" }}>
				<TableBody>
					<TableRow>
						<TableCell sx={{ border: "none" }} align="center">
							ご予約はこちらから
						</TableCell>
					</TableRow>
				</TableBody>
				<TableBody>
					<TableRow>
						<TableCell sx={{ border: "none" }} align="center">
							<a href="https://www.instagram.com/errer368/">
								<img src={instagram} className="instagram_logo" />
							</a>
						</TableCell>
					</TableRow>
				</TableBody>
				<TableBody>
					<TableRow style={{ margin: "auto" }}>
						<TableCell sx={{ border: "none" }} align="center">
							<img src={logo} />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export { footer, testFooter };
