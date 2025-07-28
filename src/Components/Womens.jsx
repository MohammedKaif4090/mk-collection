import React from 'react'
import { data } from '../assets/data'
import { slugify } from './utils/slugify'
import Card from './Card'
import Header from './Header'
import { Link } from 'react-router-dom';

const Womens = () => {
  const filteredProducts = data.filter((item) => item.gender === 'womens');

  return (
    <>
      <Header />
     <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-1'>
        {filteredProducts.map((item) => (
           <Link to={`/details/${slugify(item.title)}/${item.id}`} key={item.id}>
          <Card
            image={item.image[0]}
            title={item.title}
            price={item.price}
          />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Womens
