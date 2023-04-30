import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
  return (
    <div>
      <p>
        <Link
          className="text-decoration-none text-black"
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      </p>
    </div>
  );
};

export default SingleCategory;
