import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Li = styled.li`
	color: cyan;
`;

const NewsPage = () => {
	const router = useRouter();

	console.log(router);

	return (
		<>
			<h1>The News Page</h1>
			<ul>
				<Li>
					<Link href={`meow`}>NextJS is so fucking good</Link>
				</Li>
				<Li>
					<Link href={`390`}>Mewomere</Link>
				</Li>
				<Li>
					<a href={`3390`}>Anchor</a>
				</Li>
			</ul>
		</>
	);
};

export default NewsPage;
