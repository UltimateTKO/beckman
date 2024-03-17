const ACCESS_TOKEN = "-";
const OUTPUT_MAX = 4;
const GET_LIMIT = 30;
const BUSINESS_ACCOUNT = "-";
let outputCount = 0;

exports.Test = () => {
	const express = require("express");
	const app = express();

	app.use((req, res, next) => {
		console.log("LOGGED");
		next();
	});

	app.post("/", (req, res) => {
		res.send("Hello World!\n");
	});

	app.listen(3000);
};

exports.GetInstagramImageList = () => {
	return new Promise((resolve, reject) => {
		const https = require("https");
		const fs = require("fs");

		const url =
			"https://graph.facebook.com/v19.0/" +
			BUSINESS_ACCOUNT +
			"?fields=name%2Cmedia.limit(" +
			GET_LIMIT +
			")%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token=" +
			ACCESS_TOKEN;
		https.get(url, (response) => {
			let instagramData = [];
			response
				.on("data", (chunk) => instagramData.push(chunk))
				.on("end", () => {
					let instagramJsonMap = JSON.parse(Buffer.concat(instagramData));
					console.log(instagramJsonMap.media.data[0]);

					let media_urls = [];
					for (let num = 0, count = 0; num < GET_LIMIT && count < OUTPUT_MAX; num++) {
						let data = instagramJsonMap.media.data[num];
						if (data.caption.split("\n").includes("#バイク") == false) {
							continue;
						}
						media_urls.push(data.media_url);
						count++;
						https.get(data.media_url, (mediaResponse) => {
							console.log(mediaResponse);
							const fileStream = fs.createWriteStream(
								`./FRONT/src/image_etc/InstagramImage${outputCount++}.jpg`
							);
							mediaResponse.pipe(fileStream);

							// 書き込み完了時の処理
							fileStream.on("finish", () => {
								console.log("画像のダウンロードが完了しました。");
							});
						});
					}
				});
		});
	});
};
