import React from 'react'
import { Link } from 'react-router-dom';

const _HeaderAnon = (props) => {
    const {onClick} = props 
    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/" onClick={onClick}>Sign Out</Link>
            </li>
        </ul>
       
    )
}

//Prueba

export default _HeaderAnon;