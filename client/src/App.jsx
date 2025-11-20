import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Signup from "./pages/signup/Signup";
import Category from "./pages/Category/Category";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Header from "./pages/header/Header";
import Newsletter from "./pages/Footer/Newsletter/Newsletter";
import Footer from "./pages/Footer/Footer";
import AppContext from "./utils/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
