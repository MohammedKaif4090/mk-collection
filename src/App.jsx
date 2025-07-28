import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Womens from './Components/Womens';
import Kids from './Components/Kids';
import Mens from './Components/Mens';
import ProductDetail from './Components/ProductDispaly/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Cart from './Components/Cart/Cart';
import Admin from './Components/admin/Admin';
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/womens" element={<Womens />} />
        <Route path='/mens' element={<Mens />} />
        <Route path="/details/:title/:id" element={<ProductDetail />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Admin' element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
