import React from "react";
import { useHistory } from 'react-router-dom'

const NotFounPage = () =>{

    const navigate = useHistory()

    return(
        <div>
            <h1>404 - Page not found :( </h1>
            <button onClick={ () => navigate.push('/') }>
                Go back to Home 
            </button>
        </div>
    )
}

export default NotFounPage