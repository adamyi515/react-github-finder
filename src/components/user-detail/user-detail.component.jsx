import React, { useEffect, useContext } from 'react';
import styles from './user-detail.module.css';

// Context
import githubContext from '../../context/github/github.context';

// react-router-dom
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
    const { username } = useParams();
    const { getUser, user, isLoading } = useContext(githubContext);

    useEffect(() => {
        getUser(username);
    }, [])

    const {
        avatar_url, bio, blog, company, location, public_gists, followers,
        public_repos, following, hierable, login, html_url
    } = user;

    if(isLoading) {
        return(
            <h1>Loading....</h1>
        )
    }

    return(
        <div className={`${styles['user-detail']}`}>
            
            <Link to='/' className={`${styles['user-detail--btn']}`} >Back to search</Link>

            <div className={`${styles['user-detail__user-container']}`}>
                
                <div className={`${styles['user-detail__image-container']}`}>
                    <img src={avatar_url} width='150px' className='round-img'/>
                    <h2>{ login }</h2>
                    <p>Location: {location ? location : 'Not provided'}</p>
                    <p>Hireable: {hierable ? hierable : 'No'} </p>
                </div>

                <div className={`${styles['user-detail__user-info']}`}>
                    <h3>Bio</h3>
                    {bio ? bio : 'No bio provided'}
                    <div className={`${styles['user-detail__line-break']}`}></div>
                    <button href={html_url} className={`${styles['user-detail--btn-link']}`} >Visit Github Profile</button>
                    <p>Username: {login ? login : 'Not provided'}</p>
                    <p>Company: {company ? company : 'Not provided'}</p>
                    <p>Website: {blog ? blog : 'Not provided'}</p>
                </div>

            </div> {/* ./user-detail__user-container  */}

            <ul className={`${styles['user-detail__follow-repo-container']}`}>
                <li className={`${styles['badge']} ${styles['badge-primary']}`}>
                    Followers: {followers}
                </li>
                <li className={`${styles['badge']} ${styles['badge-success']}`}>
                    Following: {following}
                </li>
                <li className={`${styles['badge']} ${styles['badge-light']}`}>
                    Public repos: {public_repos}
                </li>
                <li className={`${styles['badge']} ${styles['badge-dark']}`}>
                    Followers: {followers}
                </li>
            </ul>

        </div>
    )
}

export default UserDetail;