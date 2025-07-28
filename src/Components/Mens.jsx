import React from 'react';
import Card from './Card';
import { slugify } from './utils/slugify'
import { data } from '../assets/data';
 import { Link } from 'react-router-dom';

const Mens = () => {
 const filterProduct = data.filter((item) => item.gender === 'mens' )
  return (
     <div className='p-5 sm:p-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2'>
     {filterProduct.map((item) => (

  <Link to={`/details/${slugify(item.title)}/${item.id}`} key={item.id}>
      <Card
        
        image={item.image[0]}
        title={item.title}
        price={item.price}
      />
    </Link>
      ))}
    </div>
  );
};

export default Mens;
