import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-row justify-end my-4 gap-10 list-none text-xl font-bold text-blue-700'>
            <li><Link to='/'>Rick Morty</Link></li>
            <li><Link to='/episode'>Episode</Link></li>
            <li><Link to='episode'>Character</Link></li>
        </div>
    );
};

export default Header;