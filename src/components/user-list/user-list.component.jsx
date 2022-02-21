import React, { useEffect, useState, useContext } from 'react';

import styles from './user-list.module.css';

// Components
import UserItem from '../user-item/user-item.component';

// Context
import githubContext from '../../context/github/github.context';

const UserList = () => {

    const { users, isLoading } = useContext(githubContext);

    return(
        <div className={`${styles['user-list']}`}>
            {isLoading ? <h1 className='text-align'>Loading....</h1> : (
                    users.map(user => <UserItem key={user.id} user={user} />)
            )}
            
        </div>
    )
}
export default UserList;