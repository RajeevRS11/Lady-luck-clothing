import React from 'react';
import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

export default function CardDropdown() {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'/>
        <Button>CheckOut</Button>

    </div>
  )
}
