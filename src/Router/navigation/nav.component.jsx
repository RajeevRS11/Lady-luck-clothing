import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './nav.style.scss';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { signOutUser } from '../../utils/firebase.utils';
import CardDropdown from '../../components/cart-dropdown/cart-dropdown.component';

export default function NavBar() {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    // console.log(currentUser);
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo' />
                </Link>
                <div className='nav-links-container'>

                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                    ) : (<Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    )}

                    <CartIcon />
                </div>
                { isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}
