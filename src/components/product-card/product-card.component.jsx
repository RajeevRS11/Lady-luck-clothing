import React from 'react';
import Button from '../button/button.component';
import './product-card.style.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

export default function ProductCard(props) {
    const { name, price, imageUrl } = props.product;
    const { addItemsToCart } = useContext(CartContext);

    const addProductToCart =() => addItemsToCart(props.product)
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart} >Add to card</Button>
    </div>
  )
}


