import React from "react";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.css";
import Cart from "../Cart/Cart";
import { useState } from "react";

function Header() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <div className="left">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Categories</li>
            </ul>
            <div className="center">Flipkart</div>
            <div className="right">
              <TbSearch />
              <AiOutlineHeart />
              <span className="cart-icon" onClick={() => setShowCart(true)}>
                <CgShoppingCart />
              </span>
            </div>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
}

export default Header;
