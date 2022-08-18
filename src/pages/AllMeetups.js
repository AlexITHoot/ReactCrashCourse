import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";



// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/4/4b/PK_Thatta_asv2020-02_img14_Makli_Necropolis.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    const url = 'https://react-getting-started-d4e15-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

    fetch(url).then(responce => {
      return responce.json();
    }).then(data => {

      const meetsups = [];

      for(const key in data){
        const meetup ={
          id:key,
          ...data[key]
        };
        meetsups.push(meetup);
      }

      setIsLoading(false);
      setLoadedData(meetsups);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  } 
  return (
    <div className="container">
      <h1>All Meetups Page!</h1>
      <MeetupList meetups={loadedData} />
    </div>
  )
}

export default AllMeetupsPage;