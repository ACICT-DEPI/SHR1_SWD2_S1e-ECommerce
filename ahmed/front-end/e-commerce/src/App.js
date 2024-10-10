import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home} from './pages/Home'; // Example component for Home page
import {Accessories} from './pages/Accessories'; // Example component for Accessories
import {Laptop} from './pages/Laptop'; // Example component for Stationery
import {Sale} from './pages/Sale'; // Example component for Sale
import {Login} from './pages/Login'; // Example component for Login
import {Header} from '../src/Header/Header';    // Import the Header component
import {Footer} from '../src/Footer/footer';
import {ProductCard} from "../src/pages/productCard";
import Cart from './pages/cart';
import Register from './pages/Register';


function App() {
  return (
    <div>
    
    
      <Header /> {/* Place your Header here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/Laptop" element={<Laptop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:productId" element={<ProductCard/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='register' element={<Register/>}/>
      </Routes>
      <Footer/>
    
    

    </div>
  );
}

export default App;
