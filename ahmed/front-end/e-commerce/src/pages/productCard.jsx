import React from "react";
import "./productCard.css";
import { useNavigate, useParams } from 'react-router-dom';
import PRODUCTS from '../data';
import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/setAction";
 
 

export const ProductCard = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const singlePro = PRODUCTS.find(product => product.id === parseInt(productId));

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addToCartAction(singlePro));
  };

  if (!singlePro) {
    return <div>Product not found</div>;
  }

  return (
    <main className="product-card-main">
      <div className="container content">
        <div className="row">
          <div className="col-lg-6">
            <img src={singlePro.postImage} alt={singlePro.name} className="img-fluid product-image" />
          </div>
          <div className="col-lg-6">
            <h2>{singlePro.name}</h2>
            <p className="price"><strong>{singlePro.price} EGP</strong></p>
            <p>{singlePro.details}</p>

            <div className="color-options">
              <p>Color :</p>
              <div className="colors">
                <span className="color-swatch" style={{ backgroundColor: '#e0e0e0' }}></span>
                <span className="color-swatch" style={{ backgroundColor: '#000000' }}></span>
              </div>
            </div>

            <div className="quantity-section">
              <label>Quantity</label>
              <input type="number" min="1" defaultValue="1" className="quantity-input" />
            </div>

            <br />
            <button className='btn btn-primary btn-sm' onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};
