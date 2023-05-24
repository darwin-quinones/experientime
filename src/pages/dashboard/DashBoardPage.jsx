import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/CopyRight.jsx';

const DashBoardPage = () => {

    const history = useHistory()

    const logOut = () =>{
        history.push('/login')
    }

    return (
        <div>
             <Button variant="contained" onClick={ logOut }>Logout</Button>
             <CopyRight/>
        </div>
    );
}

export default DashBoardPage;
