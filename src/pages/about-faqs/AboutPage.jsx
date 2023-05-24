import React from 'react';
import { useLocation, useHistory } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()

    const navigate = useHistory()
    console.log('We are in Route: ' + location.pathname)



    return (
        <div>
            <h1> About | FAQs Page</h1>
            <div>

            <button onClick={ () => navigate.push('/')}>
                Go to Homepage
            </button>
            <button onClick={ () => navigate.go(-2)}>
                Go 2 pages back 
            </button>
            <button onClick={ () => navigate.goBack()}>
                Go black
            </button>
            <button onClick={ () => navigate.goForward()}>
                Go forward
            </button>
            <button onClick={ () => navigate.go(2)}>
                Go 2 pages forward
            </button>
            
            </div>
        </div>
    );
}

export default AboutPage;
