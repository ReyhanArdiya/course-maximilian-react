import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = ({ propsDestruct }) => {
	const addMeetupHandler = ({ address, description, image, title }) => {};

	return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
