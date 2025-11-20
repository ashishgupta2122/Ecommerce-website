import React from "react";
import Products from "../../pages/Products/Products";
import "./Category.css";

function Category() {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Products innerPage={true} />
      </div>
    </div>
  );
}

export default Category;
