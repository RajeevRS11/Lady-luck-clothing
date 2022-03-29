import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './nav.style.scss';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

export default function NavBar() {
  return (
      <>
    <div className='navigation'>
        <Link className='logo-container' to='/'>
            <CrownLogo className='logo'/>
        </Link>
        <Link className='nav-links-container' to='/shop'>
            SHOP
        </Link>
        <Link className='nav-link' to='/auth'>
            SIGNIN
        </Link>
    </div>
    <Outlet />
      </>
  )
}
