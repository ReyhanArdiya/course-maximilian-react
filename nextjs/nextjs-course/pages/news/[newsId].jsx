import Link from "next/link";
import { useRouter } from "next/router";

const DetailPage = () => {
	const router = useRouter();

	const { newsId } = router.query;
	console.log(router.query);

	return (
		<>
			<h1>The {newsId * 100} Page</h1>
			<Link href="123">Go Home</Link>
			<a href="12323">Go Home</a>
		</>
	);
};

export default DetailPage;
