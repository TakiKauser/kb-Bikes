import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successAdmin, setSuccessAdmin] = useState(false);
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch(`https://guarded-ocean-83766.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(jsonData => {
                if (jsonData.modifiedCount) {
                    setSuccessAdmin(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Typography sx={{ fontWeight: 600, m: 3, color: '#1B4F72', mb: 5 }} variant="h4" component="div">Make Admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', mx: 'auto' }}
                    name="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    size="small"
                    type="email"
                />
                <Button type='submit' variant='contained' sx={{ ml: 3 }} style={{ backgroundColor: '#1B4F72' }}>Make Admin</Button>
            </form>
            {
                successAdmin &&
                <Alert variant="filled" severity="success">
                    Admin Role Assigned.
                </Alert>
            }
        </div>
    );
};

export default MakeAdmin;