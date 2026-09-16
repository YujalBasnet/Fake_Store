import React from 'react'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
const Footer = () => {
  return (
    <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl font-bold">
            Ready to start shopping?
          </h2>

          <p className="text-gray-400 mt-4">
            Browse our products and find your next favorite item.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 bg-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition"
          >
            Explore Products
          </Link>

        </div>
      </section>

  )
}

export default Footer