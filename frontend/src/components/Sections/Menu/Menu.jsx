import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import axios from "axios";
import { BASE_URL } from "./../../../config/config";
import { Link } from "react-router-dom";

const Menu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setData(res.data);
    });
  }, []);
  function filterData(category) {
    if (category == "menu") {
      axios.get(BASE_URL).then((res) => {
        setData([...res.data]);
      });
    } else {
      axios.get(BASE_URL).then((res) => {
        setData([...res.data.filter((x) => x.category.includes(category))]);
      });
    }
  }
  return (
    <section class=" menu ftco-section bg-light">
      <div class="   row justify-content-center mb-5 pb-5">
        <div class="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
          <span class="subheading">Our Menu</span>
          <h2>Discover Our Exclusive Menu</h2>
        </div>
      </div>
      <div className="dish-menu">
        <div className="row justify-content-center gap-5">
          <div
            class="nav nav-pills justify-content-center ftco-animate fadeInUp ftco-animated"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <Link
              onClick={() => {
                filterData("menu");
              }}
              class="nav-link py-3 px-4 "
            >
              <i class="fa-solid fa-drumstick-bite"></i> Main
            </Link>
            <Link
              onClick={() => {
                filterData("desert");
              }}
              class="nav-link py-3 px-4"
            >
              <i class="fa-solid fa-cookie"></i> Dessert
            </Link>
            <Link
              onClick={() => {
                filterData("drink");
              }}
              class="nav-link py-3 px-4"
            >
              <i class="fa-solid fa-champagne-glasses"></i> Drinks
            </Link>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row  flex-wrap ">
            {data.map((item) => (
              <div  className="manu-card col-lg-6 p-3  ">
                <div class="menus d-flex ftco-animate fadeInUp ftco-animated">
                  <img src={item.image} alt="" />
                  <div class="text justify-content-between  d-flex">
                    <div class="one-half">
                      <Link to={`/detail/${item._id}`}>
                        <h3>{item.title} </h3>
                      </Link>
                    
                      <p>{item.description}</p>
                    </div>
                    <div class="one-forth">
                      <span class="price">$29</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
