import HeadComponent from "../headComponent/headComponent";
import classes from "../searchComponent/searchComponent.module.css"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import family from './family.jpg'



const SearchComponent = () => {
    return(
        <div>
              <HeadComponent/>

              {/* body section  */}

              <section className={classes.searchbar}>
                <PersonSearchIcon style={{color: 'black'}}/>
                <input type="search" placeholder="search family name"/>
                <button>search</button>
              </section>

              <section className={classes.blogcards}>
                <div className={classes.blogwrapper}>
                    <div className={classes.blogcard}>
                        <div className={classes.styler}>
                        <legend>Ngwa Family</legend>
                        <div className={classes.blogimg}></div>
                        <div className={classes.subtext}>
                            <p>Location: Buea</p>
                            <p>Tribe : Bayangi</p>
                        </div>
                        </div>
                    </div>
                    {/* second blog instance  */}
                    <div className={classes.blogcard}>
                        <div className={classes.styler}>
                        <legend>Lito Family</legend>
                        <div className={classes.blogimg}></div>
                        <div className={classes.subtext}>
                            <p>Location: Adamawa</p>
                            <p>Tribe : finji</p>
                        </div>
                        </div>
                    </div>
                    {/* third instance of blog  */}
                    <div className={classes.blogcard}>
                        <div className={classes.styler}>
                        <legend>Ambe Family</legend>
                        <div className={classes.blogimg}></div>
                        <div className={classes.subtext}>
                            <p>Location: Northwest Bamenda</p>
                            <p>Tribe : Bafut</p>
                        </div>
                        </div>      
                    </div>
                       
                </div>
              </section>
        </div>
)}





export default SearchComponent;