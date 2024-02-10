import { AppBar, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import * as Menu from "../Menu";
import * as Footer from "../Footer";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../css/Home.css";
import homeImage from "../image_etc/homeimage.jpg";
import logo from "../image_etc/logo.png";
import conceptImage from "../image_etc/concept.jpg";
import React from "react";
import instagram from "../image_etc/instagram_logo_icon.png";

let stringColor = { color: "#444" };

const Home = () => {
	let a = (
		<>
			{/* <div className="Main">
				<Menu.MenuBer></Menu.MenuBer>
			</div> */}
			<div className="MainFlame">
				<img id="FirstImage" src={logo} className="FlameLogo" />
			</div>
			<Concept />
			<GoogleMap />
			<Footer.footer />
		</>
	);

	return a;
};

const PaperFlame = ({ children }) => (
	<Paper elevation={2} className="PaperFlame" style={{ backgroundColor: "#EFEFEF" }}>
		{children}
	</Paper>
);

const GoogleMap = () => (
	<PaperFlame>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0097158140043!2d127.74949901178593!3d26.261348076945715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56d81b09a4675%3A0x616d82313e446990!2sbarber%20shop%20BECKMAN!5e0!3m2!1sja!2sjp!4v1705926014103!5m2!1sja!2sjp"
			style={{ margin: "2px", width: "60%", height: "550px", border: "0" }}
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
		<TableContainer
			style={{
				width: "33%",
				margin: "auto",
			}}
		>
			<Table>
				<TableRow>
					<TableHead
						sx={{
							color: stringColor.color,
							fontWeight: "bold",
						}}
					>
						CutShop BECKMAN
					</TableHead>
				</TableRow>
				<TableRow sx={stringColor}>
					<TableCell>住所</TableCell>
					<TableCell>沖縄県宜野湾市佐真下６２－４　１Ｆ</TableCell>
				</TableRow>
				<TableRow sx={stringColor}>
					<TableCell>営業時間</TableCell>
					<TableCell>10:00 ～ 19:00</TableCell>
				</TableRow>
				<TableRow sx={stringColor}>
					<TableCell>定休日</TableCell>
					<TableCell>毎週月曜日</TableCell>
				</TableRow>
			</Table>
			<Table style={{ marginTop: "10%" }}>
				<TableRow>
					<TableHead
						sx={{
							color: stringColor.color,
						}}
					>
						ご予約はこちらから
					</TableHead>
				</TableRow>
				<TableRow sx={stringColor}>
					<TableCell>電話番号</TableCell>
					<TableCell style={{ width: "50%" }}>080-1111-1111</TableCell>
				</TableRow>
			</Table>
			<div style={{ textAlign: "center" }}>
				<a href="https://www.instagram.com/errer368/">
					<img src={instagram} className="Instagram" />
				</a>
			</div>
		</TableContainer>
	</PaperFlame>
);

const Concept = () => (
	<PaperFlame>
		<p style={{ width: "55%", margin: "auto", color: "#444" }}>
			居心地の良いお洒落な空間で、男性のお客様が求める様々なスタイルを再現。
			<br />
			ひとりひとりにあわせた+αのこだわりスタイルへ親身に向き合って叶えるメンズサロンです！
			<br />
			<br />
			メンズ同士ならではの施術で緊張せずに気軽にお話しながら、
			<br />
			希望や悩みの相談ができるので通いやすさも◎！
			<br />
			好みや理想、是非お聞かせください！
		</p>
		<img src={conceptImage} style={{ width: "35%", height: "400px", margin: "10px" }}></img>
	</PaperFlame>
);

let i = 0;
const firstImageList = [
	{ src: logo, className: "FlameLogo" },
	{ src: homeImage, className: "FlameImage" },
];

function setIntervalFistImage() {
	const firstImage = document.getElementById("FirstImage");

	i = (i + 1) % firstImageList.length;
	firstImage.src = firstImageList[i].src;
	firstImage.className = firstImageList[i].className;
}

setInterval(setIntervalFistImage, 5000);

export { Home };
