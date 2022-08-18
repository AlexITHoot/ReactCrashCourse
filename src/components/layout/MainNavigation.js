import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.scss';

function MainNavigation(){
    return(
        <div className={classes.header}>
            <Link to="/" className={classes.logo}>React Meetups</Link>
            <nav>
                <Link to="/" className='btn '>All Meetups Page</Link> 
                <Link to="/newmeetups" className='btn'>New Meetups Page</Link>   
                <Link to="/favorites" className='btn'>Favorites Page</Link>                
                <Link to="/todos" className='btn'>Todos</Link>
            </nav>             
        </div>

    )
}

export default MainNavigation;