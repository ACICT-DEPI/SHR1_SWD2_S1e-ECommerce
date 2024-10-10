import React from "react";
import "./laptop.css"
import { Link } from 'react-router-dom';
import PRODUCTS from "../data";



 
export const Laptop =() => {


 
    


    return (
        <div className="laptop">
        <h1>Laptop</h1>
        <div className="product-grid">
          {PRODUCTS.map((product, index) => (
            <div className="product-card" key={index}>
              <Link to={`/details/${product.id}`}>
              <div className="image-container">
                {product.new && <span className="new-badge">New</span>}
                {product.discount && <span className="discount-badge">{product.discount}</span>}
                <img src={product.postImage} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              {product.oldPrice && <span className="original-price">{product.oldPrice} EGP</span>}
              <p>{product.price} EGP</p>
              </Link>
            </div>
          ))}
        </div>
        
      </div>
      
    );
}
export default Laptop();
