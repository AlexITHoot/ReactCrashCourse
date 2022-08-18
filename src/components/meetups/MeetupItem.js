import Card from '../ui/Card';
import classes from './MeetupItem.module.scss';

function MeetupItem(props){
    return(
        <div className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.meetupItem.image} alt="" />                
                </div>
                <div className={classes.content}>
                    <h3>{props.meetupItem.title}</h3>
                    <address>{props.meetupItem.address}</address>
                    <p>{props.meetupItem.description}</p>
                </div>
                <div className={classes.actions}>
                    <button className="btn">To favorites</button>
                </div>                
            </Card>
        </div>
    )
}

export default MeetupItem;