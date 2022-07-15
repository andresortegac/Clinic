import React from 'react'

const Header = ({brand}) => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <a href='#!' className='navbar-brand'>
                    {brand}
                </a>
            </div>
        </nav>
    );
}

export default Header;