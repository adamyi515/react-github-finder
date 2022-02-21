import React from 'react';
import styles from './navbar.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className={`${styles['navbar']}`}>

            <div className={`${styles['navbar__brand']}`}>
                <i className="fa-brands fa-github fa-2xl"></i> <span>Github Finder</span>
            </div>

            <ul className={`${styles['navbar__menu']}`}>
                <li>
                    <Link className={`${styles['navbar__menu-item']}`} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={`${styles['navbar__menu-item']}`} to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;