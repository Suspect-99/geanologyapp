import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import classes from './landingPage.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import HeadComponent from '../headComponent/headComponent';

const Landingpage = () =>{
    return(
        <div className={classes.main}>
          <HeadComponent/>
                {/* body of the site  */}
           
            <section className={classes.bodystyle}>
                <article className={classes.bodystyleleft}> 
                <div className={classes.leftwrapper}>
                    <h1>Welcome to Family App</h1>
                    <p>Welcome to our genealogy app, where you can embark on an exciting journey to explore your family's history and heritage. Our app provides a user-friendly platform for discovering, documenting, and sharing your family's story. Whether you're a seasoned genealogist or just beginning to delve into your ancestry, our app offers a range of features to support your exploration.</p>
                </div>
                </article>
                <article className={classes.bodystyleright}></article>
            </section>

            {/* Next slide containing create family option and search family */}

            <section className={classes.familyslide}> 
                <div className={classes.familywrapper}>
                    <article className={classes.leftfamilywrapper}>
                        <div className={classes.logoimg}>
                        <Diversity1Icon style={{color:"white",fontSize: 100, backgroundColor:"rgb(0, 149, 255)"}}/>
                        </div> 
                        <div className={classes.lefttab}>
                            <h2>Create Family</h2>
                            <p>Creating a family tree with a genealogy app preserves family legacy, deepens understanding of familial roots, and connects individuals with relatives. The process facilitates the preservation of cherished memories and offers an educational exploration of historical contexts. Genealogy apps also embrace technology,</p>
                            <button><AccountCircleIcon/><Link className={classes.linkedit} to={"/memberform"}>Create family</Link></button>
                        </div>
                    </article>
                    <article className={classes.rightfamilywrapper}>
                    <div className={classes.logoimg}>
                        <Diversity1Icon style={{color:"white",fontSize: 100, backgroundColor:"rgb(0, 149, 255)"}}/>
                        </div> 
                        <div className={classes.righttab}>
                            <h2>Search Family</h2>
                            <p>Searching for your family on a genealogy app can unveil valuable insights into your heritage, providing a deeper understanding of familial roots and traditions.It also fosters connections with relatives and preserves cherished family memories</p> 
                            <button><PersonSearchIcon/><Link className={classes.linkedit} to={"/searchpage"}>Search family</Link></button>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}



export default Landingpage;