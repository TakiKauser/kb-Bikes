import { Alert, Button, TextField } from '@mui/material';
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
        fetch(`http://localhost:5000/users/admin`, {
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
            <h2>Make Admin</h2>
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