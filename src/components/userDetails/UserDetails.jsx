import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user)

    // useParams
    // const params = useParams();
    // console.log(params)
    // console.log(params.userID)

    // another way
    const {userID} = useParams();
    console.log(userID)

    const {name, website}= user;
    return (
        <div>
            <h2>this is user id</h2>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;