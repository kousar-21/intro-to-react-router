import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users2Data = use(usersPromise);
    console.log('this is users 2 data', users2Data)
    return (
        <div>
            <h2>Users 2 Data is now Available</h2>
        </div>
    );
};

export default Users2;