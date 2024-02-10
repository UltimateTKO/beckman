import { createContext, useState, Page } from "react";

const ThemeContext = createContext("light");

function TTest() {
	const [theme, setTheme] = useState("light");
	// ...
	return (
		<ThemeContext.Provider value={theme}>
			<Page />
		</ThemeContext.Provider>
	);
}

export { TTest };
