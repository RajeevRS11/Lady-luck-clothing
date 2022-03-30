import React from 'react';
import { useContext  } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';
import './shop.style.scss';

export default function Shop() {
    const { products } = useContext(ProductsContext);
  return (
    <div className='product-container'>
        {products.map(( product ) => (           
            <ProductCard key={product.id} Product={product} />
        ))}
    </div>
  )
}
