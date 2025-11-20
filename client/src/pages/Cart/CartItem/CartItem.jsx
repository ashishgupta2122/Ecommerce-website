import React from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.css";

function CartItem() {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <div className="name">Product name</div>
          <MdClose className="close-btn" />
          <div className="quantity-btn">
            <div className="quantity-buttons">
              <span>-</span>
              <span>5</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>3</span>
              <span>X</span>
              <span>&#8377;4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
