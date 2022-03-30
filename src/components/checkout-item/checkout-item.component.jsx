import './checkout-item.styles.scss';

import React from 'react'

export default function CheckoutItem(props) {
    const { name, imageUrl, price, quantity } = props.CartItem;
  return (
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src = {imageUrl} alt={`${name}`} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>

    </div>
  )
}
