import { Link } from 'react-router-dom'
import classes from './signUp.module.css'
import { database } from '../firebase/FirebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{

    const history = useNavigate()

    const handleSumbit= (e) =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(database,email,password).then((data)=>{
            console.log(data, "authData")
            history('/homepage')
        }
        )
    }

    const click = () =>{
        alert("I am in the sign up page")
    }
    return(
        <div className={classes.initiall}>
            <section className={classes.initiallwrapper}>
                <article className={classes.signupleft}></article>
                <article className={classes.signupright}>
                   {/* first div to hold sign up label  */}
                    <div className={classes.signupheader}>
                        <h1>Sign Up</h1>
                    </div>
                    <div className={classes.signupformdesign}>
                    <form onSubmit={(e) => handleSumbit(e)}>
                        <label>Username</label><br/>
                        <input type="type" placeholder='example@gmail.com'/><br/>
                        <label>Email</label><br/>
                        <input type="email" name='email' placeholder='example@gmail.com'/><br/>
                        <label>Password</label><br/>
                        <input name='password' type="password" placeholder='enter password'/><br/>
                        <label>Phone Number</label><br/>
                        <input type="text" placeholder='e.g +237 677000000'/><br/>
                        <input className={classes.submitbtn} type='submit' value='create account'/>
                    </form>
                    </div>
                    {/* signup right section footer */}
                    <div className={classes.signupfooter}>
                          <p>Already have an account click <Link to={"/signin"}>here</Link> </p>
                    </div>
                </article>
            </section>
        </div>
    )
}


export default SignUp;