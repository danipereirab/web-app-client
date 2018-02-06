import React from 'react'
import { Link } from 'react-router-dom';

const _HeaderAuth = (props) => {
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
                <p className="nav-link">|</p>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
            </li> 
        </ul>
       
    )
}


export default _HeaderAuth;