import InstagramStyle from "../css/Instagram.module.css";
import * as PaperFlame from "./PaperFlame";

const ACCESS_TOKEN =
	"EAAFWW8mlpqIBOx48ZCTXezBbXvZC3azw2BSxp2aN2udvCH7SMN8ZAzZAqapRBZA4Imm3iD8mv86nGNsIi0FOz1vfjXO9KJ0DDdccZBZBhE7Uf20exmh1LoTwT6EqAsU4UTz2DPJRa3eKZBKvVRSJfKI4QqvA3ciVOSOsJZCmQvHLkF8eYYxCGZBDDOSW73";
const OUTPUT_MAX = 4;
const GET_LIMIT = 30;
const BUSINESS_ACCOUNT = "17841445443234737";

const GetInstagramImageList = () => {
	const XML_H_R = new XMLHttpRequest();
	const url =
		"https://graph.facebook.com/v19.0/" +
		BUSINESS_ACCOUNT +
		"?fields=name%2Cmedia.limit(" +
		GET_LIMIT +
		")%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token=" +
		ACCESS_TOKEN;
	XML_H_R.open("GET", url);
	XML_H_R.send();
	XML_H_R.responseType = "json";

	let data = null;
	XML_H_R.onload = () => {
		data = XML_H_R.response;
		const flame = document.getElementById("instagramListFlame");
		for (let num = 0; num < GET_LIMIT && flame.childElementCount < OUTPUT_MAX; num++) {
			// let instagramImage = document.getElementById("instagramImage" + (num + 1));
			// let a = data.media.data[num].media_url;
			// instagramImage.src = data.media.data[num].media_url;
			// console.log(a);

			let jsonData = data.media.data[num];
			if (jsonData.caption.split("\n").includes("#バイク") == false) {
				continue;
			}

			const childA = document.createElement("a");
			childA.href = jsonData.permalink;

			const childChildImg = document.createElement("img");
			childChildImg.src = jsonData.media_url;
			childChildImg.className = `${InstagramStyle.InstagramGetImage}`;
			childA.appendChild(childChildImg);
			flame.appendChild(childA);
		}
	};
};

const InstagramListOut = () => (
	<PaperFlame.Desktop>
		<h2 style={{ width: "100%" }}>Gallery</h2>
		<br />
		<div id="instagramListFlame"></div>
		<img src="" id="instagramImage1" className="instagramImage" style={{ width: "20%", margin: "auto" }}></img>
		<img src="" id="instagramImage2" className="instagramImage" style={{ width: "20%", margin: "auto" }}></img>
		<img src="" id="instagramImage3" className="instagramImage" style={{ width: "20%", margin: "auto" }}></img>
		<img src="" id="instagramImage4" className="instagramImage" style={{ width: "20%", margin: "auto" }}></img>
	</PaperFlame.Desktop>
);

const InstagramListOuttest = () => (
	<>
		<div id="instagramListFlame"></div>
		<img src="" id="instagramImage1" className="instagramImage" style={{ width: "40%", margin: "auto" }}></img>
		<img src="" id="instagramImage2" className="instagramImage" style={{ width: "40%", margin: "auto" }}></img>
		<img src="" id="instagramImage3" className="instagramImage" style={{ width: "40%", margin: "auto" }}></img>
		<img src="" id="instagramImage4" className="instagramImage" style={{ width: "40%", margin: "auto" }}></img>
	</>
);

export { GetInstagramImageList, InstagramListOut, InstagramListOuttest };
