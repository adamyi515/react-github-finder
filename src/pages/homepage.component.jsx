import React from 'react';

// Components
import UserList from '../components/user-list/user-list.component';
import Search from '../components/search/search.component';

const HomePage = () => {
    return(
        <>
            <Search />
            <UserList />
        </>
    )
}

export default HomePage;