import React from "react";
<<<<<<< HEAD

function Payment() {
  return <div className="payment"></div>;
=======
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.lenght} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p> {user?.email}</p>
            <p> 123 React lane</p>
            <p> Los Angeles</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment_item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">{/* {strip method} */}</div>
        </div>
      </div>
    </div>
  );
>>>>>>> parent of 6949f60 (stripe payment gateway)
}

export default Payment;
