import React from'react';
import CategoryItem from './CategoryItem';
function Category({ categories }) {
  return (
      <div>
        <h1>Category</h1>
        <div>
            {categories &&
            categories.map(category => (
                <CategoryItem category={category} key={category.id}/>
            ))}
        </div>
        </div>
  );
}

export default Category;