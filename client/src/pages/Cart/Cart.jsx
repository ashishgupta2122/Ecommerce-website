import React from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.css";

import CartItem from "./CartItem/CartItem";

function Cart({ setShowCart }) {
  return (
    <div className="cart-panel">
      {/* Dark background overlay */}
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>

      {/* Right side cart content */}
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="close-text">Close</span>
          </span>
        </div>

        {/* Empty cart state */}
        {/* <div className="empty-cart">
          <BsCartX className="empty-icon" />
          <span className="empty-text">No Products in the Cart</span>
          <button className="return-cta" onClick={() => setShowCart(false)}>
            RETURN TO SHOP
          </button>
        </div> */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377; 1234</span>
            </div>
            <div className="button">
              <div className="checkout-cta">Checkout</div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Cart;
