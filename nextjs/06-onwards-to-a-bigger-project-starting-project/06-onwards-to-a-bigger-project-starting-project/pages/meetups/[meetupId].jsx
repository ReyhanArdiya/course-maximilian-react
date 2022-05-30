import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

export const getStaticPaths = async () => {
	console.log("in static paths");
	return {
		paths: [
			{
				params: {
					meetupId: "m1"
				}
			},
			{
				params: {
					meetupId: "m2"
				}
			},
			{
				params: {
					meetupId: "m3"
				}
			}
		],
		fallback: true
	};
};

export const getStaticProps = async context => {
	const { meetupId } = context.params;
	console.log(meetupId);
	return {
		props: {
			image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg",
			title: "A first meetup",
			address: "Blah 1 street",
			description: "The description"
		}
	};
};

// export const getServerSideProps = async context => {
// 	const { meetupId } = context.params;
// 	console.log(meetupId);
// 	return {
// 		props: {
// 			image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg",
// 			title: "A first meetup",
// 			address: "Blah 1 street",
// 			description: "The description"
// 		}
// 	};
// };

const MeetupDetailPage = ({ image, title, address, description }) => {
	return (
		<>
			<Head>
				<title>Meetup Detail</title>
			</Head>

			<MeetupDetail
				img={image}
				title={title}
				address={address}
				description={description}
			/>
		</>
	);
};

export default MeetupDetailPage;
