import { createGlobalStyle } from "styled-components";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";



function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Meetup App</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
