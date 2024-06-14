import React from'react';
import { Link } from 'react-router-dom';
function CategoryItem({ category }) {
    // console.log(category);
  return (
        <div key={category.id}>
                 <h1>{category.name}</h1>
        <Link to={`/categories/${category.id}/question/${category.Questions[0].id}`}>
        <img src={category.img} alt=''/>
        </Link>
        </div>
  );
}

export default CategoryItem;