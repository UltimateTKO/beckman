import { Paper } from "@mui/material";
import PaperStyle from "../css/PapereFlame.module.css";

const Default = ({ children }, className) => (
	<Paper elevation={2} className={className} style={{ backgroundColor: "#EFEFEF" }}>
		{children}
	</Paper>
);

const Desktop = ({ children }) => Default({ children }, PaperStyle.PaperFlameD);
const Mobile = ({ children }) => Default({ children }, PaperStyle.PaperFlameM);

export { Desktop, Mobile };
