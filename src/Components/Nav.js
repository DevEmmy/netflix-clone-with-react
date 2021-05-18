import React from 'react';
import { useHistory } from 'react-router';
import './Nav.css';

function Nav() {
    const history = useHistory()
    return (
        <div className='nav'>
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix-logo" className='icon'  onClick={()=>history.push('/')}/>

            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className='img-smiley' onClick={()=>history.push('/profile')}/>
        </div>
    )
}

export default Nav
