import React, { useEffect, useState } from 'react';
import SingleCategory from '../../../components/SingleCategory';

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      'https://the-dragon-news-server-smy329-gmailcom.vercel.app/categories'
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('hi', error));
  }, []);
  //console.log(categories);

  return (
    <div className="ps-4">
      {categories.map((category) => (
        <SingleCategory key={category.id} category={category} />
      ))}
    </div>
  );
};

export default LeftNav;
