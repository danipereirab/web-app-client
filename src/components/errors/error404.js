import React from 'react'
import { Link } from 'react-router-dom';
const Error404 = (props) => {
    
    const { handleSubmit, text, response, account, isFetching, button, didInvalidate, isAuthenticated, username } = props
        return(
          
          <div className="text-centered">
            <h2>The page you're looking for doesn't exist!</h2>
            <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
          </div>
            )
}

export default Error404