import React from 'react';
import Header from './Header';
import { slugify } from './utils/slugify'
import { data } from '../assets/data';
import Card from './Card';
import MenHeader from './MenHeader';
import KidsHeader from './kidsHeader';
import { Link } from 'react-router-dom'; 
import img from '../assets/4042e044-05c5-45a5-9c80-ec621cac5add.png'
import img1 from '../assets/M.K Tour and Travel Promo Design.png'
const getRandomProducts = (productArray, count = 6) => {
  const shuffled = [...productArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const Home = () => {
  const mens = data.filter((item)=> item.gender === 'mens')
  const womens = data.filter((item)=> item.gender === 'womens')
  const Kids = data.filter((item)=> item.Category === 'Kids')
  const randomProducts = getRandomProducts(womens, 6);
  const randomProduct = getRandomProducts(mens, 6);
  const randomProductKids = getRandomProducts(Kids, 6);

  return (
    <div>
      <div className='flex my-2 mx-2 gap-2'>
        <Link to='http://localhost:5173/'>
        <img src={img} className="h-80 w-[780px] object-cover rounded-xl shadow-md "/>
        </Link>
        <img src={img1} alt="Product image" className="h-80 w-[780px] object-cover rounded-xl shadow-md " />
      </div>
      <Header />
      <div className="overflow-y-auto flex flex-row gap-4 p-4">
        {randomProducts.map((item) => (
          <Link to={`/details/${slugify(item.title)}/${item.id}`} key={item.id}>
          <Card image={item.image[0]} title={item.title} price={item.price} />
        </Link>
        ))}
      </div>

      <MenHeader />
      <div className="overflow-y-auto flex flex-row gap-4 p-4">
        {randomProduct.map((item) => (
          <Link to={`/details/${slugify(item.title)}/${item.id}`} key={item.id}>
            <Card image={item.image[0]} title={item.title} price={item.price} />
          </Link>
        ))}
      </div>

      <KidsHeader />
        <div className="overflow-y-auto flex flex-row gap-4 p-4">
        {randomProductKids.map((item) => (
          <Link to={`/details/${slugify(item.title)}/${item.id}`} key={item.id}>
            <Card image={item.image[0]} title={item.title} price={item.price} />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Home;
