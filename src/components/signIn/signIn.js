import { Link } from 'react-router-dom'
import classes from '../signUp/signUp.module.css'
import { database } from '../firebase/FirebaseConfig'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const SignIn = () =>{

const history = useNavigate()    

const handleSumbit= (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(database,email,password).then((data)=>{
        console.log(data, "authData")
        history('/homepage')
    }
    ).catch(err=>{
        alert(err.code)
    })
}

    return(
        <div className={classes.initiall}>
            <section className={classes.initiallwrapper}>
                <article className={classes.signupleft}></article>
                <article className={classes.signupright}>
                   {/* first div to hold sign up label  */}
                    <div className={classes.signupheader}>
                        <h1>Sign In</h1>
                    </div>
                    <div className={classes.signupformdesign}>
                    <form onSubmit={(e) => handleSumbit(e)}>
                        <label>Email</label><br/>
                        <input name='email' type="email" placeholder='example@gmail.com'/><br/>
                        <label>Password</label><br/>
                        <input name='password' type="password" placeholder='password'/><br/> 
                        <div className={classes.signupfooter}>             
                        <input className={classes.submitbtn} type='submit' value='submit'/>
                        <p>Don't have an account click <Link to={"/signup"}>here</Link> </p>
                    </div>
                    </form>
                    </div>
                    {/* signup right section footer */}
                    
                </article>
            </section>
        </div>
    )
}



export default SignIn;