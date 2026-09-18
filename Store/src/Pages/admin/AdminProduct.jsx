import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminProduct = () => {
  const [value, setValue] = useState([]);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);

        // Remove deleted product from the table
        setValue(value.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Products
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your products
            </p>
          </div>

          <Link to="/form">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-3 rounded-lg transition">
              + Add Product
            </button>
          </Link>

        </div>


        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-6">

          <input
            placeholder="Search for products..."
            type="search"
            className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />

        </div>


        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full text-sm text-left">

              {/* Table Header */}
              <thead className="bg-gray-800 text-white">

                <tr>

                  <th className="px-6 py-4 font-semibold">
                    Image
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Product Name
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Description
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Category
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Price
                  </th>

                  <th className="px-6 py-4 font-semibold text-center">
                    Action
                  </th>

                </tr>

              </thead>


              {/* Table Body */}
              <tbody>

                {value?.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >

                    {/* Image */}
                    <td className="px-6 py-4">

                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 object-contain"
                        />

                      </div>

                    </td>


                    {/* Product Name */}
                    <td className="px-6 py-4">

                      <p className="font-semibold text-gray-800 w-52">
                        {item.title}
                      </p>

                    </td>


                    {/* Description */}
                    <td className="px-6 py-4">

                      <p className="text-gray-500 w-80 line-clamp-2">
                        {item.description}
                      </p>

                    </td>


                    {/* Category */}
                    <td className="px-6 py-4">

                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>

                    </td>


                    {/* Price */}
                    <td className="px-6 py-4">

                      <span className="font-bold text-green-600">
                        Rs. {item.price}
                      </span>

                    </td>


                    {/* Actions */}
                    <td className="px-6 py-4">

                      <div className="flex justify-center gap-2">

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
                        >
                          Delete
                        </button>
                        <Link to={`/Editproduct/${item.id}`}>
                        <button
                        
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
                        >
                          Edit
                        </button>
                        </Link>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminProduct;