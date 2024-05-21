import eclasses from './headComponent.module.css'
import {Link} from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import classes from '../../components/landingComponent/landingPage.module.css'

const HeadComponent = () =>{
    return (
        <div className={classes.test}>
            <header className={classes.navbar}>
                {/* hamburger btn */}
                <div className={classes.hamburgerbtn}>
                    <MenuIcon sx={{fontSize:50 , color:'white'}} />
                </div>
                {/* app title */}
                <div className={classes.apptitle}>
                    <h1>The Family App</h1>
                </div>
                {/* username */}
                <div className={classes.username}>
                    <AccountCircleIcon sx={{fontSize: 30}}/>
                    <h2>username</h2>
                </div>
                </header>
        </div>
    )
}

export default HeadComponent;