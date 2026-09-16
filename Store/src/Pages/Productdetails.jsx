import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Productdetails = () => {
    const { id } = useParams();
    const [product, setproduct] = useState({});
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const fetchData = async () => {
        setloading(true);
        await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            setproduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        setloading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1 className= "text-6xl text-center" >Loading...</h1>;
    }

    return (
  <div className="min-h-screen p-10">

    <div className="flex items-center gap-10">

      {/* Product Image */}
      <div className="w-1/3">
        <img
          src={product.image}
          alt={product.title}
          className="w-96 h-96 object-contain"
        />
      </div>
        
      {/* Product Information */}
      <div className="w-2/3">

        <h1 className="text-5xl font-extrabold mb-6">
          {product.title}
        </h1>

        <p className="text-2xl font-bold mb-3">
          PRICE: ${product.price}
        </p>

        <p className="text-2xl font-bold mb-3">
          CATEGORY: {product.category}
        </p>

        <p className="text-2xl font-bold mb-3">
          RATING: {product.rating?.rate}
        </p>

        <p className="text-2xl font-bold mb-3">
          COUNT: {product.rating?.count}
        </p>

        <p className="text-2xl font-bold mb-2">
          DESCRIPTION:
        </p>

        <p className="text-lg text-gray-600">
          {product.description}
        </p>

      </div>
      

    </div>
    <div className="mt-10 flex justify-center">
        <button
        onClick={() => navigate("/")}
        className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 cursor-pointer mb-8">
        ← Back to Menu
      </button>
    </div>
  </div>
);
};

export default Productdetails;