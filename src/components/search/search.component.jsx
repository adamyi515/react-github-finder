import React, { useState, useContext } from 'react';
import styles from './search.module.css';

// Components
import Alert from '../alert/alert.component';

// Context
import githubContext from '../../context/github/github.context';

const Search = () => {
    // State
    const [text, setText] = useState('');

    // Context API
    const { searchUsers, setAlert, alert } = useContext(githubContext);

    // Methods
    const handleTextChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        if(text === ''){
            setAlert({ type: 'bg-standard', msg: 'Please enter something'})
        } else {
            searchUsers(text);
            setText('');
        }
    }

    return(
        <div className={`${styles['search']}`}>
            {alert && <Alert alert={alert} />}

            <form className={`${styles['search__form-container']}`} onSubmit={handleSubmit} >
                <input type='text' value={text} onChange={handleTextChange} />
                <button className='btn'>Search</button>
            </form>
        </div>
    )
}

export default Search;