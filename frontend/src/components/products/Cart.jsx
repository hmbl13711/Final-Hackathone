import React, { useState } from "react";
import { useCart } from "./CartContext";
import style from "./Cart.css";

function Cart() {
  const { cartItems } = useCart("");
  console.log(cartItems);

  return (
    <div className={style.cart}>
      <h2>Cart</h2>
      {cartItems.map((cartItems) => (
        <div className="card" style={{ width: '25rem' }} key={cartItems.id}>
          <img
            style={{ width: '25rem', height: '15rem' }}
            className="card-img-top"
            src={cartItems.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{cartItems.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
            <p>
              <b>{cartItems.price}</b>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
