import React from "react";
import { MdClose } from "react-icons/md";
import "./Cart.css";

function Cart({ setShowCart }) {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="close-text">Close</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
