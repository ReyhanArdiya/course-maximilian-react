// import React from "react";

// const DarkContext = React.createContext({
// 	artist: "grimes",
// 	setArtist() {
// 		this.artist = 1;
// 	}
// });

// export const DarkContextProvider = ({ children }) => {
// 	return (
// 		<DarkContext.Provider
// 			value={{
// 				artist: "grimes",
// 				setArtist() {
// 					this.artist = 1;
// 				}
// 			}}
// 		>
// 			{children}
// 		</DarkContext.Provider>
// 	);
// };

// export default DarkContext;

import React from "react";

const DarkContext = React.createContext({
	artist: "grimes"
});

export const DarkContextProvider = ({ children }) => {
	// Context Value Setup Here

	return <DarkContext.Provider value={0}>{children}</DarkContext.Provider>;
};

export default DarkContext;
