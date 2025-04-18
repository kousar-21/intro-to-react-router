import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name, email, phone} = user;
    const userStyle ={
        border: '2px solid lime',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Details</Link>
        </div>
    );
};

export default User;