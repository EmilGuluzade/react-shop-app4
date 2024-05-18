import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainContext from "../../../context/context";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../../../config/config";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null); // Changed to null to reflect that it's an object
  const { addToBasket } = useContext(MainContext);

  useEffect(() => {
    axios.get(`${BASE_URL}${id}`)
      .then((res) => {
        setData(res.data); // Set data directly
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Basic error handling
      });
  }, [id]); // Added id to dependency array

  if (!data) return <div>Loading...</div>; // Show loading state until data is fetched

  return (
    <div className="container d-flex mt-5 py-5">
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="col-6 d-flex justify-content-center">
        <img width="400px" height="400px" src={data.image} alt={data.title} /> {/* Added alt text */}
      </div>
      <div className="col-6 d-flex flex-column justify-content-center">
        <h3>{data.title}</h3>
        <h4>{data.price}$</h4>
        <p>{data.description}</p>
        <div>
          <button
            className="btn btn-success"
            onClick={() => addToBasket(id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;