import React from 'react';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';


const Productpage = () => {
    const [dataharu, setdataharu] = useState([]);
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);


    const fetchData = async () => {
        const dataharu = await axios.get("https://fakestoreapi.com/products");
        console.log(dataharu.data);
        setdataharu(dataharu.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
  <div className="min-h-screen bg-gray-100 p-8">

    <h1 className="text-4xl font-bold text-center mb-10">
      Fake Store Products
    </h1>
  
  

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {dataharu.map((product, index) => {
        return (
          
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
        >
            <Link to={`/productsdetails/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain"
          />

          <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
            Product #{product.id}
          </span>

          <h2 className="text-lg font-bold mt-4 line-clamp-2">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 mt-2 line-clamp-3">
            {product.description}
          </p>
            </Link>
          <div className="flex justify-between items-center mt-4">

            <p className="text-xl font-bold text-green-600">
              Rs. {product.price}
            </p>
          
            
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 cursor-pointer " 
             onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
            
        </div>
        
        );
      })}
      

    </div>
  </div>
);
};

export default Productpage;