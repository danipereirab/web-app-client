import React from 'react'
import { Link } from 'react-router-dom';
const Error401 = (props) => {
    
    const { handleSubmit, text, response, account, isFetching, button, didInvalidate, isAuthenticated, username } = props
        return(
          
            <div className="text-centered">
                <h2>Unauthorized</h2>
                <h3>Would you like to log in page <Link to="/login">Log in</Link> instead?</h3>
            </div>
            )
}

export default Error401