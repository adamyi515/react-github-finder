import React from 'react';
import styles from './user-item.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url } }) => {
    return(
        <div className={`${styles['user-item']}`}>
            <img src={avatar_url} width='100px' className='round-img'/>
            <h3>{ login }</h3>
            <Link to={`/user/${login}`} className='btn'>More</Link>
        </div>
    )
}

export default UserItem;