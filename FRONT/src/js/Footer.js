import * as React from "react";
import FooterStyle from "../css/Footer.module.css";
import logo from "../image_etc/logo.png";

const footer = () => {
	return (
		<div className={FooterStyle.footer}>
			<br />
			<p>
				<a href="#">
					<img style={{ width: "15%" }} src={logo} />
				</a>
			</p>
			<div className="FooterStyle.copyLight">© Cut Shop BECKMAN</div>
			<br />
		</div>
	);
};

export { footer };
