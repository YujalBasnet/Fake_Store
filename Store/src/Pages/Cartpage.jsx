import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

const Cartpage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] bg-slate-100 px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-10 text-center shadow">

          <div className="mb-4 text-6xl">
            🛒
          </div>

          <h1 className="mb-3 text-3xl font-bold">
            Your Cart is Empty
          </h1>

          <p className="mb-6 text-slate-500">
            You haven't added any products to your cart yet.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-md bg-amber-600 px-6 py-3 font-bold text-white transition hover:bg-amber-700"
          >
            Continue Shopping
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] bg-slate-100 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Shopping Cart
            </h1>

            <p className="text-slate-500">
              Review your selected products
            </p>
          </div>

          <button
            onClick={clearCart}
            className="rounded-md bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Products */}
          <div className="space-y-4 lg:col-span-2">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-32 object-contain"
                />

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">

                  <div>
                    <h2 className="font-bold">
                      {item.title}
                    </h2>

                    <p className="mt-2 font-bold text-green-600">
                      Rs. {item.price}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">

                    {/* Quantity */}
                    <div className="flex items-center gap-3">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="h-8 w-8 rounded bg-slate-200 font-bold"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="h-8 w-8 rounded bg-slate-200 font-bold"
                      >
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="font-medium text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="mb-6 text-2xl font-bold">
              Order Summary
            </h2>

            <div className="mb-3 flex justify-between">
              <span className="text-slate-500">
                Subtotal
              </span>

              <span className="font-bold">
                Rs. {cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="mb-5 flex justify-between">
              <span className="text-slate-500">
                Shipping
              </span>

              <span className="font-bold text-green-600">
                Free
              </span>
            </div>

            <hr className="mb-5" />

            <div className="mb-6 flex justify-between text-xl">
              <span className="font-bold">
                Total
              </span>

              <span className="font-bold text-green-600">
                Rs. {cartTotal.toFixed(2)}
              </span>
            </div>

            <button
              className="w-full rounded-md bg-amber-600 px-5 py-3 font-bold text-white hover:bg-amber-700"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cartpage;