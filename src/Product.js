import React from "react";
import "./product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ state }, dispatch] = useStateValue();
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
              <StarIcon className="star" />
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
