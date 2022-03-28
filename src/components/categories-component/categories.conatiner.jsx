import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './categories.style.scss';

export default function CategoriesContainer(props) {
    const  categories  = props.Categories;
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem Category={category}  key={category.id} />
            ))}
        </div>
    )
}
