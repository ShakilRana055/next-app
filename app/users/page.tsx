import React from 'react'

interface UserInfo {
    id: number;
    firstName: string;
    lastName: string;
    profession: string;
}

const UsersPage = async () => {

    const response = await fetch('https://poggy-ecommerce.onrender.com/UserInfo', { cache: 'no-store' });
    const users: UserInfo[] = await response.json();

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.firstName + ' ' + user.lastName}</li>)}
            </ul>
        </>
    )
}

export default UsersPage