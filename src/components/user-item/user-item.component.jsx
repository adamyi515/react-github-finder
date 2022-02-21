import React from 'react';
import styles from './user-item.module.css';

const UserItem = ({ user: { login, avatar_url } }) => {
    
    return(
        <div className={`${styles['user-item']}`}>
            <img src={avatar_url} width='100px' className='round-img'/>
            <h3>{ login }</h3>
            <button className='btn'>More</button>
        </div>
    )
}

export default UserItem;