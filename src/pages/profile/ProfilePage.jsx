import React from 'react';

import { useHistory } from 'react-router-dom'

const ProfilePage = ( ) => {

    const navigate = useHistory()


    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ () => navigate.push('/tasks')}>
                Tasks 
            </button>

            <button onClick={ () => navigate.goBack() }>
                Go back
            </button>
        </div>
    );
}

export default ProfilePage;
