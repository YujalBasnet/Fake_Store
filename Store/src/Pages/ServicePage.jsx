import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: "🛍️",
      title: "Easy Online Shopping",
      description:
        "Browse products, explore categories, and find what you need with a simple and convenient shopping experience.",
    },
    {
      icon: "🚚",
      title: "Reliable Delivery",
      description:
        "Enjoy a smooth delivery experience with your orders handled carefully from checkout to your doorstep.",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      description:
        "Shop with confidence through a secure account and a shopping experience designed with your privacy in mind.",
    },
    {
      icon: "💳",
      title: "Easy Checkout",
      description:
        "A straightforward checkout process makes it easy to review your cart and complete your purchase.",
    },
    {
      icon: "📦",
      title: "Order Management",
      description:
        "Keep your purchases organized and easily access important information about your orders.",
    },
    {
      icon: "💬",
      title: "Customer Support",
      description:
        "Have a question? Our support experience helps you get the information you need when you need it.",
    },
  ];

  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse our products, choose an item you like, add it to your cart, and continue to checkout to complete your purchase.",
    },
    {
      question: "Can I manage my shopping cart?",
      answer:
        "Yes. You can add products to your cart, change quantities, remove items, and review your order before checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once order tracking is available in your account, you can use your order information to check its current status.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team through the contact section of the website for assistance with your questions.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Everything you need for a better shopping experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            From discovering products to completing your order, FakeStore is
            designed to make online shopping simple, convenient, and enjoyable.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Start Shopping
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Services built around you
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              We've focused on the essentials to make your shopping journey
              easier from beginning to end.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-600">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How FakeStore works
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-500">
              Getting what you want is just a few simple steps away.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Browse",
                text: "Explore our products and discover something you like.",
              },
              {
                number: "02",
                title: "Add to Cart",
                text: "Choose your products and add them to your shopping cart.",
              },
              {
                number: "03",
                title: "Checkout",
                text: "Review your order and complete the checkout process.",
              },
              {
                number: "04",
                title: "Enjoy",
                text: "Sit back and enjoy a smooth shopping experience.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
                  {step.number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why FakeStore
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Shopping made simple.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              We believe online shopping shouldn't feel complicated. FakeStore
              brings products, useful features, and a clean experience together
              in one place.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Simple and intuitive navigation",
                "Wide range of products",
                "Responsive experience across devices",
                "Convenient shopping experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-600/20 sm:p-10">
            <div className="text-5xl">🛒</div>

            <h3 className="mt-8 text-2xl font-bold">
              Your shopping journey starts here.
            </h3>

            <p className="mt-4 leading-7 text-blue-100">
              Discover products, build your cart, and enjoy a simple way to
              shop online.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => (
              <div key={index} className="px-6">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="text-xl text-slate-400">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="pb-5 pr-8 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to start shopping?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-300">
            Explore our products and discover something you'll love.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;