import React from'react';
import CategoryItem from './CategoryItem';
function Category({ category }) {
    console.log(2);
  return (
      <div>
        <h1>Category</h1>
        <div>
            {category &&
            category.map(categor => (
                <CategoryItem categor={categor} key={categor.id}/>
            ))}
        </div>
        </div>
  );
}

export default Category;