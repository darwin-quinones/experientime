import React from "react";
import { useNavigate } from 'react-router-dom'

const NotFounPage = () => {
    const navigate = useNavigate()

    return (
        <div className="container">
            <h1>404 - Page not found :( </h1>
            <div className="alert alert-danger" role="alert">
            <span>Ups it seems to be this isn't the page you're looking for </span>
            </div>
           
            <p className="lead"></p>
            <button className="btn btn-primary"onClick={() => navigate('/')}>
                Go back to Home
            </button>
        </div>
    )
}

export default NotFounPage