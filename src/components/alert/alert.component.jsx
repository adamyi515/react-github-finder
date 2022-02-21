import React from 'react';
import styles from './alert.module.css';

const Alert = ({ alert: {type, msg}}) => {
    return(
        <div className={`${styles['alert']} ${styles[`${type}`]}`}>
            <h2 className={`${styles['alert--padding']}`}>{ msg }</h2>
        </div>
    )
}

export default Alert;