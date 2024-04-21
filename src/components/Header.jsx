import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { UserContext } from '../context/userContext';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );
  const { currentUser } = useContext(UserContext);

  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo' onClick={closeNavHandler}>
          <img src={logo} alt='Navbar Logo' />
        </Link>

        {currentUser?.id && isNavShowing && (
          <ul className='nav_menu'>
            <li>
              <Link to='/profile/user1' onClick={closeNavHandler}>
                Corm Grower
              </Link>
            </li>
            <li>
              <Link to='/create' onClick={closeNavHandler}>
                Create Citation
              </Link>
            </li>
            <li>
              <Link to='/users' onClick={closeNavHandler}>
                Users
              </Link>
            </li>
            <li>
              <Link to='/logout' onClick={closeNavHandler}>
                Logout
              </Link>
            </li>
          </ul>
        )}

        {!currentUser?.id && isNavShowing && (
          <ul className='nav_menu'>
            <li>
              <Link to='/users' onClick={closeNavHandler}>
                Users
              </Link>
            </li>
            <li>
              <Link to='/login' onClick={closeNavHandler}>
                Login
              </Link>
            </li>
          </ul>
        )}

        <button
          className='nav_toggle-btn'
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
