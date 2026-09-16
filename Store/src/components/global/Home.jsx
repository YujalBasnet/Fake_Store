import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gray-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-sm uppercase tracking-widest font-semibold mb-4">
              Welcome to our store
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Everything you need, all in one place.
            </h1>

            <p className="mt-6 text-lg text-amber-100 max-w-xl">
              Discover quality products at great prices. Shop our latest
              collection and find something you'll love.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/products"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 rounded-3xl p-10 backdrop-blur-sm">
              <div className="text-9xl">
                🛍️
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-4">
              🚚
            </div>

            <h2 className="text-xl font-bold">
              Fast Delivery
            </h2>

            <p className="text-gray-500 mt-2">
              Get your orders delivered quickly and safely.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-4">
              🔒
            </div>

            <h2 className="text-xl font-bold">
              Secure Payment
            </h2>

            <p className="text-gray-500 mt-2">
              Your payment information is protected and secure.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-4">
              ⭐
            </div>

            <h2 className="text-xl font-bold">
              Quality Products
            </h2>

            <p className="text-gray-500 mt-2">
              We offer products selected with quality in mind.
            </p>
          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Shop by Category
            </h2>

            <p className="text-gray-500 mt-2">
              Explore our product categories.
            </p>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <Link
            to="/products"
            className="bg-blue-100 p-8 rounded-2xl hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              👕
            </div>

            <h3 className="text-xl font-bold">
              Men's Clothing
            </h3>

            <p className="text-gray-500 mt-2">
              Explore men's fashion.
            </p>
          </Link>


          <Link
            to="/products"
            className="bg-pink-100 p-8 rounded-2xl hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              👗
            </div>

            <h3 className="text-xl font-bold">
              Women's Clothing
            </h3>

            <p className="text-gray-500 mt-2">
              Find the latest styles.
            </p>
          </Link>


          <Link
            to="/products"
            className="bg-purple-100 p-8 rounded-2xl hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              💍
            </div>

            <h3 className="text-xl font-bold">
              Jewelry
            </h3>

            <p className="text-gray-500 mt-2">
              Discover beautiful accessories.
            </p>
          </Link>


          <Link
            to="/products"
            className="bg-green-100 p-8 rounded-2xl hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">
              💻
            </div>

            <h3 className="text-xl font-bold">
              Electronics
            </h3>

            <p className="text-gray-500 mt-2">
              Browse our electronics collection.
            </p>
          </Link>

        </div>

      </section>


      {/* CTA */}
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

    </div>
    
  );
}

export default Home