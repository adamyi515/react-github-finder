import React, { useEffect, useState } from 'react';

import styles from './user-list.module.css';

// Components
import UserItem from '../user-item/user-item.component';

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
            &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        .then(response => response.json())
        .then(data => setUsers(data));
    }, [])

    return(
        <div className={`${styles['user-list']}`}>
            {
                users.map(user => <UserItem key={user.id} user={user} />)
            }
        </div>
    )
}
export default UserList;