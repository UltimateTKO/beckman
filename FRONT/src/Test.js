import { createContext, useState } from "react";

const ThemeContext = createContext("light");

function TTest() {
	const [theme, setTheme] = useState("light");
	// ...
	return <ThemeContext.Provider value={theme}></ThemeContext.Provider>;
}

export { TTest };
