import React from 'react';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useHistory()

    return (
        <div>
            <h1>Register Page </h1>
            <button onClick={ () => navigate.push('/') }>
                Go to Home 
            </button>
        </div>
    );
}

export default RegisterPage;
