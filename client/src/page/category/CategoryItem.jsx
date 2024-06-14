import React from'react';
import { Link } from 'react-router-dom';
function CategoryItem({ categor }) {
    console.log(categor);
  return (
        <div key={categor.id}>
                 <h1>{categor.name}</h1>
        <Link to={'/'}>
        <img src={categor.img} alt=''/>
        </Link>
        </div>
  );
}

export default CategoryItem;