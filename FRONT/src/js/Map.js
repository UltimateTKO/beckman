import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import MapStyle from "../css/Map.module.css";
import React from "react";
import instagramImage from "../image_etc/instagram_logo_icon.png";
import * as PaperFlame from "./PaperFlame";

const iframeStyle = {
	Desktop: {
		margin: "2px",
		width: "60%",
		height: "550px",
		border: "0",
	},
	Mobile: {
		margin: "2px",
		width: "100%",
		height: "50vh",
		border: "0",
	},
};

const infoStyle = {
	Desktop: {
		width: "33%",
		margin: "auto",
	},
	Mobile: {
		width: "100%",
		margin: "auto",
	},
};

const instagramImgStyle = {
	Desktop: {
		width: "50%",
	},
	Mobile: {
		width: "25%",
	},
};

const Default = (deskMobile, stringColor, PaperFlameArg) => (
	<PaperFlameArg>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.0097158140043!2d127.74949901178593!3d26.261348076945715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56d81b09a4675%3A0x616d82313e446990!2sbarber%20shop%20BECKMAN!5e0!3m2!1sja!2sjp!4v1705926014103!5m2!1sja!2sjp"
			style={iframeStyle[deskMobile]}
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		/>
		<TableContainer style={infoStyle[deskMobile]}>
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
					<img src={instagramImage} style={instagramImgStyle[deskMobile]} />
				</a>
			</div>
		</TableContainer>
	</PaperFlameArg>
);

const DesktopStyle = (stringColor) => {
	return Default("Desktop", stringColor, PaperFlame.Desktop);
};
const MobileStyle = (stringColor) => {
	return Default("Mobile", stringColor, PaperFlame.Mobile);
};

export { DesktopStyle, MobileStyle };
