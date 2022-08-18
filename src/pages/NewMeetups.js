import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        const url = 'https://react-getting-started-d4e15-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }

    return (
        <div className="container">
            <h1>Add new Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetupsPage;