import * as Footer from "./Footer";
import HomeStyle from "../css/Home.module.css";
import homeImage from "../image_etc/homeimage.jpg";
import logo from "../image_etc/logo.png";
import conceptImage from "../image_etc/concept.jpg";
import React, { useRef } from "react";
import * as Map from "./Map";
import * as Instagram from "./Instagram";
import * as PaperFlame from "./PaperFlame";
import { Desktop, Mobile } from "./ResponsiveSpPc";

let stringColor = { color: "#444" };

const Home = () => {
	Instagram.GetInstagramImageList();
	return (
		<>
			<Desktop>
				<HomeFlame />
				{/* <p>{test.name}</p> */}
				{Concept(PaperFlame.Desktop)}
				<Instagram.InstagramListOut />
				<Map.DesktopStyle stringColor={stringColor} />
				<Footer.footer />
			</Desktop>
			<Mobile>
				<HomeFlame />
				{/* <p>{test.name}</p> */}
				{Concept(PaperFlame.Mobile)}
				<Map.MobileStyle stringColor={stringColor} />
				<Footer.footer />
			</Mobile>
		</>
	);
};

const HomeFlame = () => (
	<div className={HomeStyle.MainFlame}>
		<img src={logo} className={`${HomeStyle.FlameP} ${HomeStyle.FlameLogo}`} />
		<img src={homeImage} className={`${HomeStyle.FlameP} ${HomeStyle.FlameImage}`} />
	</div>
);

const Concept = (PaperFlameArg) =>
	PaperFlameArg == PaperFlame.Desktop ? (
		<PaperFlameArg>
			<p style={{ width: "55%", margin: "auto", color: { stringColor } }}>
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
			<img src={conceptImage} style={{ width: "35%", margin: "2px" }}></img>
		</PaperFlameArg>
	) : (
		<PaperFlameArg>
			<div style={{ textAlign: "center" }}>
				<img src={conceptImage} style={{ width: "60%", marginBottom: "5%", alignSelf: "center" }}></img>
			</div>
			<p style={{ width: "70%", margin: "auto", color: { stringColor } }}>
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
				<br />
				<br />
			</p>
			<Instagram.InstagramListOuttest />
		</PaperFlameArg>
	);

export { Home };
