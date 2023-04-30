import React from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
  const params = useParams();
  const categoryNews = useLoaderData();
  console.log(params);
  return (
    <div>
      {categoryNews.map((cn) => (
        <NewsCard key={cn._id} cn={cn} />
      ))}
    </div>
  );
};

export default Category;
