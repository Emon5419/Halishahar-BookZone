import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   return (
      <div className='nav-container'>
         <nav className='font-bold' >
            <Link to='/home'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/books'>Books</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/about'>About</Link>
         </nav>
      </div>
   );
};

export default Header;