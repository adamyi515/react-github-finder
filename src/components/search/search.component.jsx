import React, { useState } from 'react';
import styles from './search.module.css';

const Search = () => {
    const [text, setText] = useState('');

    const handleTextChange = ev => {
        setText(ev.target.value);
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        
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