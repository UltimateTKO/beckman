const Instagram = require("./Instagram");

async function main() {
	const res = await Instagram.GetInstagramImageList();
	console.log(res.constructor.name); // =Buffer
	console.log(res.toString());
}
main();
