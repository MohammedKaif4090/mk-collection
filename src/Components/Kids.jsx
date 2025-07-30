import React from 'react';
import { slugify } from './utils/slugify'
import { data } from '../assets/data'
import Card from './Card'
 import { Link } from 'react-router-dom';
const Kids = () => {
 const filterdata = data.filter((item) => item.Category === 'Kids')
  return (
    <div className=' grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 mx-3'>
      {filterdata.map((item)=>(
         <Link to={`/details/${slugify(item.title)}/${item.id}`} key={item.id}>
        <Card image={item.image[0]} title={item.title} price={item.price}/>
        </Link>
      ))}
    </div>
  )
}

export default Kids
