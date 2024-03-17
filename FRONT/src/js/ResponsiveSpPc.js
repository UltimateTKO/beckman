import * as RResponsive from "react-responsive";

const Desktop = ({ children }) => {
	const isDesktop = RResponsive.useMediaQuery({ minWidth: 1000 });
	if (isDesktop) {
		return children;
	}
	return null;
};

const Mobile = ({ children }) => {
	const isMobile = RResponsive.useMediaQuery({ maxWidth: 999 });
	if (isMobile) {
		return children;
	}
	return null;
};

export { Desktop, Mobile };
