import React from 'react';
import { Link } from 'react-router-dom';
import './sale.css';  
import PRODUCTS from "../data";

 


export const Sale =()=> {

  const saleProducts = PRODUCTS.filter(product => product.discount);

  return (
    <div className="product-list">
      <h1>Sale</h1>
       <div className="products">
        {saleProducts.map((product, index) => (
          <div className="product-card" key={index}>
              <Link to={`/details/${product.id}`}>
              <img src={product.postImage} alt={product.name} />
              <h2>{product.name}</h2>
               <p className="old-price">{product.oldPrice} EGP</p>
              <p className="price">{product.price} EGP</p>
              <span className="discount">{product.discount}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

 