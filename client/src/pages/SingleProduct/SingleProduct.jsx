import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.css";
import prod from "../../assets/products/earbuds-prod-1.webp";
import RelatedProduct from "./RelatedProduct/RelatedProduct";

function SingleProduct() {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="Product" />
          </div>

          <div className="right">
            <span className="name">Product Name</span>
            <span className="price">₹499</span>
            <span className="desc">
              Product Description – Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Duis at velit maximus, molestie est a, tempor
              magna.
            </span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus />
                Add to Cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <div className="info-row">
                <span className="title-bold">Category:</span>
                <span className="text">Headphones</span>
              </div>
              <div className="info-row">
                <span className="title-bold">Share:</span>
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <RelatedProduct />
      </div>
    </div>
  );
}

export default SingleProduct;
