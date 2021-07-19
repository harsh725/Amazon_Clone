import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p> {title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // <p>🌟</p>
              <StarIcon className="star" />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
