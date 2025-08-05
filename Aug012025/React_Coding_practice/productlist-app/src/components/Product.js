import React ,{useState}from "react";
import '../App.css';

const Product = ({product})=>{
  

    return(
        <div className="product-card">
          <h2>{product.name}</h2>
            <p>Details:{product.description}</p>
            <h4>Price:{product.price}</h4>
        </div>
    )
}
export default Product;