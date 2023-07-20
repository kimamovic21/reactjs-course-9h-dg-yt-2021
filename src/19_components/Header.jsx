import React from 'react';

const Header = ({ title }) => {
    // console.log(title);

    return (
        <header className='Header'>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;