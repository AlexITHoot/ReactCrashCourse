import MeetupItem from "./MeetupItem";

function MeetupList(props){
    return(
        <div>
            {props.meetups.map((meetup)=>{
                return <MeetupItem meetupItem={meetup} key={meetup.id}/>
            })}
        </div>
    )
}

export default MeetupList;