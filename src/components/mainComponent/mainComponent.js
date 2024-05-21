import { useState } from 'react';
import HeadComponent from '../headComponent/headComponent';
import classes from '../mainComponent/mainComponent.module.css'
import Model from 'react-modal';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { database } from '../firebase/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore'




const MainComponent = () =>{

    const db = getFirestore()

// conecting to collection of db 

const colRef = collection(db, 'familymembers')

// inserting the data to the db 
const handleSumbit = (e) =>{
    e.preventDefault()
    addDoc(colRef,{
        email: e.target.email.value,
        dob: e.target.dob.value,
        pob: e.target.pob.value,
        number: e.target.pnumber.value,
        familyrole: e.target.familyrole.value
    })

}


// conecting to fetch data from db 
getDocs(colRef)
    .then((snapshot) => {
        let familymembers = []
        snapshot.docs.forEach((doc)=>{
            familymembers.push({...doc.data(), id: doc.id})
        })
        console.log(familymembers)
    }).catch(err => {
        console.log(err.message)
    })



// code for pop sign out button 
    const history = useNavigate()
    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,'val')
            history('/signup')
        })
    }

// function to create pop up form 
    const [visible, setvisible] = useState(false)
    return(
        <div>
            <HeadComponent/>
            <Model isOpen={visible} onRequestClose={() => setvisible(false)} style={{
                overlay:{
                    background:"rgba(0,0,0,0.5)" 
                },
                content: {
                    backgroundColor:"rgba(0,0,0,0.2)",
                    border:'none'
                  }
            }}>
                <section className={classes.form}>
                    <form  onSubmit={(e) => handleSumbit(e)} className={classes.formwrap} > 
                    <div className={classes.formaligner}>
                    <legend>Member Form</legend>
                        <label>Email</label><br/>
                        <input name='email' type='email' placeholder='example@gmail.com'/><br/>
                        <label>Date of Birth</label><br/>
                        <input name='dob' type='date' /><br/>
                        <label>Place of Birth</label><br/>
                        <input name='pob' type='text' placeholder='town of birth'/><br/>
                        <label>Phone Number</label><br/>
                        <input name='pnumber' type='text' placeholder='+237 677000000'/><br/>

                        {/* radio box for family role  */}
                        <label for="familyrole">Choose family role</label>
                        <select name="familyrole" id="frole">
                            <option value="father">Father</option>
                            <option value="mother">Mother</option>
                            <option value="child">Child</option>
                        </select>

                        {/* function for closing pop up on form submission  */}
                        <input onClick={()=>setvisible(false)} className={classes.submitbtn} type='submit' value='completed'/>
                        </div>
                    </form>
                </section>
            </Model>

            <section className={classes.tabletitle}>
                <div className={classes.tabletitlewrapper}>
                    <h1>Family Tree<FamilyRestroomIcon style={{
                        fontSize: 30
                    }}/></h1>
                    <button onClick={()=>setvisible(true)}>Add Member</button>
                </div>
            </section>

            <section className={classes.tablelist}>
                <div className={classes.tablelistwrapper}>
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Place of Birth</th>
                                <th>Date of Birth</th>
                                <th>Phone number</th>
                                <th>Family Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Godlove</td>
                                <td>bla@gmail.com</td>
                                <td>limbe</td>
                                <td>12/03/2000</td>
                                <td>+237 677000000</td>
                                <td>father</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}


export default MainComponent;