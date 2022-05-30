import MeetupList from "../../components/meetups/MeetupList";
import Head from "next/head";

const DUMMY_MEETUP = [
	{
		id: "m1",
		title: "A first meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg",
		address: "123 Main St",
		description: "This is a meetup about React"
	},
	{
		id: "m2",
		title: "A second meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg",
		address: "123 Main St",
		description: "This is a meetup about Node"
	},
	{
		id: "m3",
		title: "A third meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg",
		address: "123 Main St",
		description: "This is a meetup about MongoDB"
	}
];

export const getStaticProps = async () => {
	// console.log(process);
	// Nodejs javascript
	return {
		props: {
			meetups: DUMMY_MEETUP
		},
		revalidate: 10
	};
};

// export const getServerSideProps = async context => {
// 	console.log(context.req.header);
// 	console.log(context.req.body);
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUP
// 		}
// 	};
// };

const Meetup = ({ meetups }) => {
	return (
		<>
			<Head>
				<title>Meetups</title>
			</Head>
			<MeetupList meetups={meetups} />
		</>
	);
};

export default Meetup;
