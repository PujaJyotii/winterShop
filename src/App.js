import React, { useEffect, useState } from "react";
import Heading from "./MainNavigation/Heading";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Pages/WelcomePage";
import Product from "./Pages/Products";
import Cart from "./Cart/Cart";
import Details from "./Pages/Details";
import { useDispatch } from "react-redux";
import { cartAction } from "./Redux/CartSlice";

function App() {
  const [show, setShow] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      let resp = await fetch(
        "https://winter-shop-b31e1-default-rtdb.firebaseio.com/cart.json"
      );
      let data = await resp.json();
      let res = [];
      for (let key in data) {
        res.push({
          ...data[key],
          id: key,
        });
      }
      dispatch(cartAction.get(res));
    }
    getData();
  }, [dispatch]);
  const showHandler = () => {
    setShow(true);
  };

  const hideHandler = () => {
    setShow(false);
  };

  return (
    <div>
      {show && <Cart show={showHandler} onHide={hideHandler} />}
      <Heading show={showHandler} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/shop" element={<Product />} />
        <Route path="/shop/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
