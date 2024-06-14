import React from'react';
import CategoryItem from './CategoryItem';
import './Category.css'

function Category({ categories }) {
  return (
      <div>
        <h1>Выберите категорию</h1>
        <div className="category-item">
            {categories &&
            categories.map(category => (
                <CategoryItem category={category} key={category.id}/>
            ))}
        </div>
        </div>
  );
}

export default Category;