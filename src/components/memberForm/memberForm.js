import classes from '../../components/signUp/signUp.module.css'
import eclasses from '../memberForm/memberForm.module.css'
import { addDoc } from 'firebase/firestore'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';



const MemberForm = () =>{

    const history = useNavigate()


    const db = getFirestore()

// conecting to collection of db 

const colRef = collection(db, 'families')

    const handleSumbit= (e) =>{
        e.preventDefault()
        addDoc(colRef,{
            FamilyName: e.target.familyname.value,
            Country: e.target.country.value,
            Residence: e.target.residence.value,
            Tribe: e.target.tribe.value
        }).then(() => {
            history('/mainpage')
        })

    }


    return(
        <div className={classes.initiall}>
        <section className={classes.initiallwrapper}>
            <article className={classes.signupleft + " " + eclasses.backgroundedit}></article>
            <article className={classes.signupright}>
               {/* first div to hold sign up label  */}
                <div className={classes.signupheader + " " + eclasses.formhead}>
                    <h2>Family Membership form</h2>
                </div>
                <div className={classes.signupformdesign}>
                <form onSubmit={(e) => handleSumbit(e)}>
                    <label>Family Name</label><br/>
                    <input name='familyname'  type="text" placeholder='Ngwa'/><br/>
                    <label>Country</label><br/>
                    <input name='country' type="country" placeholder='country'/><br/>
                    <label>Residence</label><br/>
                    <input name='residence' type="text" placeholder='Town/Region'/><br/>
                    <label>Ethnicity/ Tribe</label><br/>
                    <input  name='tribe' type="text" placeholder='Your community of Origin'/><br/>
                     {/* signup right section footer */}
                <div className={classes.signupfooter}>
                  <input className={classes.submitbtn} type='submit' value='create account'/>
              </div>
                </form>
                </div>
               
            </article>
        </section>
    </div>
    )
}



export default MemberForm;