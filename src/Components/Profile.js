import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from './firebase'
import Nav from './Nav'
import './Profile.css'

function Profile() {
    const user = useSelector(selectUser);


    return (
        <div>
            <Nav />
            <div className="container">
                <h1>Edit Profile</h1>
            <div className="content-1">
                
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='img-smiley' />

            <div className="email">
                <h3>{ user.email }</h3>
                <button className="signout" onClick={()=> {auth.signOut();
                window.location.reload()}
                }>Sign Out </button>
            </div>

            
            </div>
            </div>
            
        </div>
    )
}

export default Profile
