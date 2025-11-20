import React from "react";
import Banner from "./Banner/Banner.jsx";
import Category from "./Category/Category.jsx";
import Products from "../Products/Products.jsx";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Category />
      <Products headingText="Popular Products" />
    </div>
  );
}

export default Home;
