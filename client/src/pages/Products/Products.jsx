import React from "react";
import Product from "../../pages/Products/Product/Product";
import "./Products.css";

function Products({ innerPage, headingText }) {
  return (
    <div className="products-container">
      {!innerPage && <div className="products-header">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Products;
