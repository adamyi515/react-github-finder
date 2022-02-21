import React, { useState, useContext } from 'react';
import styles from './search.module.css';

// Context
import githubContext from '../../context/github/github.context';

const Search = () => {
    // State
    const [text, setText] = useState('');

    // Context API
    const { users } = useContext(githubContext);

    // Methods
    const handleTextChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(users);
    }

    return(
        <div className={`${styles['search']}`}>
            <form className={`${styles['search__form-container']}`} onSubmit={handleSubmit} >
                <input type='text' value={text} onChange={handleTextChange} />
                <button className='btn'>Search</button>
            </form>
        </div>
    )
}

export default Search;