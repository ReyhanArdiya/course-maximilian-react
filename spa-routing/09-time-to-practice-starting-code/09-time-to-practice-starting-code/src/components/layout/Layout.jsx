import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const Main = styled.main`
	& {
		margin: 3rem auto;
		width: 90%;
		max-width: 40rem;
	}
`;

const Layout = ({ children }) => {
	return (
		<>
			<MainNavigation />
			<Main>{children}</Main>
		</>
	);
};

export default Layout;
