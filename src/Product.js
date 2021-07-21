import React from "react";
import "./product.css";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket>> ", basket);
  const addToBasket = () => {
    // dispatch item

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
              <Star className="star" />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button className="addToBasket" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
