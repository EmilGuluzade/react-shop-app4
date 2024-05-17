import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainContext from "./context/context";
import ROUTES from "./routes/routes";
import axios from "axios";
import { BASE_URL } from "./config/config";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const router = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);

  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData([...res.data]);
    });
  }, []);
console.log(data)
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(id) {
    let basketItem = basket.find((x) => x._id == id);
    if (!basketItem) {
      let target = data.find((x) => x._id == id);
      let newItem = {
        ...target,
        count: 1,
        totalPrice: target.price,
      };
      setBasket([...basket, newItem]);
    } else {
      basketItem.count++;
      basketItem.totalPrice++;
      setBasket([...basket]);
    }
  }
  function deleteFromBasket(id) {
    let target = basket.find((x) => x._id == id);
    if (target.count > 1) {
      target.count++, (target.totalPrice = target.price * target.count);
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((x) => x._id != id)]);
    }
  }
  const contextData = {
    data,
    setData,
    basket,
    setBasket,
    addToBasket,
    deleteFromBasket,
  };
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router} />
      </MainContext.Provider>
    </>
  );
}

export default App;
