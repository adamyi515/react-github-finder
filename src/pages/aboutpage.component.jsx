import React from 'react';
import styles from './aboutpage.module.css';


const AboutPage = () => {
    return(
        <div className={`${styles['about-page']}`}>
            <h1>About Github Finder</h1>
            <p>
                Github finder is a React Application that uses Context API and the Github APIs to search for Users within the Github website. 
                It uses 2 endpoints to grab the users. One for grabbing a LIST of users based on the user's input and the other grabs back
                one specific user information (object).
            </p>
            <h4>Version: 1.0.0</h4>
        </div>
    )
}


export default AboutPage;