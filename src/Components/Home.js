import React, { useState, useEffect, useRef } from 'react';
import { auth } from './firebase';
import './Home.css'

function Home() {

    
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        ).then((users)=>{
            
        }).catch((error)=>{
            window.alert(error.message)
        })
    }

    const signIn = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        ).then((users)=>{

        }).catch((error)=>{
            window.alert(error.message)
        })
    }

    const [ authPage, setAuthPage ] = useState(false)

    const toggleAuthPage = ()=>{
        setAuthPage(true)
    }

    let page;
    if(authPage){
        page = <div className="authpage">
            <h1>Sign In</h1>
            <form action="">
                <input type="email" name="email" ref={emailRef} placeholder='Email address'/>
                <input type="password" name="password" ref={passwordRef} placeholder='Password'/>
                <button type="submit" onClick={signIn}>Sign In</button>
            </form>
            <h4><span className="highlight">New to Netflix?</span> <span className="u" onClick={register}>Sign up now.</span> </h4>
        </div>
    }

    let content =  <div className="text">
    <h1>
    Unlimited movies, TV shows, and more.
    </h1>
    <h3>
    Watch anywhere. Cancel anytime.
    </h3>
    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>

         <form action="">
    <input type="email" name="email" placeholder='Email address'/>
    <button onClick={ toggleAuthPage}> Get Started <i class="fa fa-angle-right"></i></button>
</form>
</div>

    return (
        <div className='home'>
            <header>
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="icon"/>
            </header>

            <button className='btn-1' onClick={ toggleAuthPage}> Sign In</button>

                { page || content }
            <div className="login_screen--fade" />
        </div>
    )
}

export default Home
