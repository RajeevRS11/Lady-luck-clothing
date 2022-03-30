import './cart-item.style.scss';
import React from 'react';

export default function CartItem(props) {
    const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className='cart-item-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='cart-item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price} </span>
        </div>
        <span>{quantity}</span>

    </div>
  )
}
