import InstagramStyle from "../css/Instagram.module.css";
import * as PaperFlame from "./PaperFlame";
import InstagramImage0 from "../image_etc/InstagramImage0.jpg";
import InstagramImage1 from "../image_etc/InstagramImage1.jpg";
import InstagramImage2 from "../image_etc/InstagramImage2.jpg";
import InstagramImage3 from "../image_etc/InstagramImage3.jpg";

const OUTPUT_MAX = 4;

const GetInstagramImageList = () => {
	const flame = document.getElementById("instagramListFlame");
	for (let num = 0; num < OUTPUT_MAX; num++) {
		const childA = document.createElement("a");

		const childChildImg = document.createElement("img");
		switch (num) {
			case 0:
				childChildImg.src = InstagramImage0;
				break;
			case 1:
				childChildImg.src = InstagramImage1;
				break;
			case 2:
				childChildImg.src = InstagramImage2;
				break;
			case 3:
				childChildImg.src = InstagramImage3;
				break;

			default:
				break;
		}
		childChildImg.className = `${InstagramStyle.InstagramGetImage}`;
		childA.appendChild(childChildImg);
		flame.appendChild(childA);
	}
};

const InstagramListOut = () => (
	<PaperFlame.Desktop>
		<h2 style={{ width: "100%" }}>Gallery</h2>
		<br />
		<div id="instagramListFlame"></div>
		<img
			src={InstagramImage0}
			id="instagramImage1"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
		<img
			src={InstagramImage1}
			id="instagramImage2"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
		<img
			src={InstagramImage2}
			id="instagramImage3"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
		<img
			src={InstagramImage3}
			id="instagramImage4"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
	</PaperFlame.Desktop>
);

const InstagramListOuttest = () => (
	<>
		<div id="instagramListFlame"></div>
		<img
			src={InstagramImage0}
			id="instagramImage1"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
		<img
			src={InstagramImage1}
			id="instagramImage2"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
		<img
			src={InstagramImage2}
			id="instagramImage3"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
		<img
			src={InstagramImage3}
			id="instagramImage4"
			className="instagramImage"
			style={{ width: "20%", margin: "auto" }}
		></img>
	</>
);

export { GetInstagramImageList, InstagramListOut, InstagramListOuttest };
