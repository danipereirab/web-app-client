import React from 'react'
import { Link } from 'react-router-dom';

const _HeaderAuth = (props) => {
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/signin">SignIn</Link>
            </li>
       
            <li className="nav-item">
                <Link className="nav-link" to="/signup">SignUp</Link>
            </li> 
        </ul>
       
    )
}


export default _HeaderAuth;