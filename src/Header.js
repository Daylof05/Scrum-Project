import React, {useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

// const userName = localStorage.getItem("userName");

const Header = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'));

    useEffect(() => {
        setUserName(localStorage.getItem('userName'));
    }, []);

    return (
        <center>
            <TextField
            id="userName"
            margin="normal"
            label="Utilisateur"
            defaultValue={userName}
            InputProps={{
                readOnly: true,
            }}
            />
            <br></br>
        </center>
    )
};

export default Header;