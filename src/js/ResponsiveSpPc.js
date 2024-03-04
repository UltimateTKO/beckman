import * as RResponsive from "react-responsive";

const Desktop = ({ children }) => {
	const isDesktop = RResponsive.useMediaQuery({ minWidth: 1000 });
	return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
	const isMobile = RResponsive.useMediaQuery({ maxWidth: 999 });
	return isMobile ? children : null;
};

export { Desktop, Mobile };
