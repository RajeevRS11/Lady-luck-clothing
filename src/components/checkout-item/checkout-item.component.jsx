import './checkout-item.styles.scss';
import { ReactComponent as DeleteLogo } from '../../assets/trash.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import React from 'react'

export default function CheckoutItem(props) {
  const { name, imageUrl, price, quantity } = props.CartItem;

  const { clearItemsFromCart, addItemsToCart, removeItemsToCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemsFromCart(props.CartItem);
  const removeItemHandler = () => removeItemsToCart(props.CartItem);
  const addItemHandler = () => addItemsToCart(props.CartItem);
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={removeItemHandler}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemHandler}>&#10095;</span>
      </span>
      <span className='price'>{price}</span>
      <DeleteLogo className='remove-button' onClick={clearItemHandler} />
      {/* <div className='remove-button'>&#10005;</div> */}

    </div>
  )
}
