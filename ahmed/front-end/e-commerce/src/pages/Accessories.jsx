import React from "react";
import './accessories.css'
import { Link } from "react-router-dom";
import PRODUCTS from '../data'; // Assuming your product array is in a file named 'products.js'

 
 
 export function Accessories() {
  // Define the keywords that typically identify accessories
  const accessoryKeywords = ['headphones', 'watch', 'shoe', 'bag', 'glasses'];

  // Filter products based on the keywords
  const accessoryProducts = PRODUCTS.filter((product) =>
    accessoryKeywords.some((keyword) =>
      product.name.toLowerCase().includes(keyword)
    )
  );

  return (

    <div className="accessories">
    <h1>Accessories</h1>
    <div className="product-grid">
      {accessoryProducts.map((product, index) => (
        <div className="product-card" key={index}>
              <Link to={`/details/${product.id}`}>
              <div className="image-container">
            {product.discount && <span className="discount-badge">{product.discount}</span>}
            {product.bestSale && <span className="best-sale-badge">Best Sale</span>}
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

