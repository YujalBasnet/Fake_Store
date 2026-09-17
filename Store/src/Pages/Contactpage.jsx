import React, { useState } from "react";
import LocationMap from "../components/Map/LocationMap";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:py-24 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Contact Us
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            We'd love to hear from you.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Have a question about a product, your order, or our services?
            Send us a message and we'll be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-3 lg:px-8">

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl shadow-blue-600/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                Get in touch
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                We're here to help.
              </h2>

              <p className="mt-4 text-sm leading-6 text-blue-100">
                Whether you have a question about your order or need help
                navigating FakeStore, feel free to reach out.
              </p>

              <div className="mt-10 space-y-7">

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    ✉
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      support@fakestore.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    ☎
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      +977 9800000000
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    📍
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      Nepal
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-lg">
                    🕐
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Support Hours
                    </p>

                    <p className="mt-1 text-sm text-blue-100">
                      Sun – Fri, 9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <div className="mb-8">
                <p className="text-sm font-semibold text-blue-600">
                  Send a message
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  How can we help?
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Fill out the form below and we'll get back to you.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
                  Your message has been sent successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/20 sm:w-auto"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
      <LocationMap />

      {/* Help Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Need Help?
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Check these first
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-3xl">📦</div>

              <h3 className="mt-4 font-bold text-slate-900">
                Order Questions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Need help with an order or delivery?
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-3xl">🛍️</div>

              <h3 className="mt-4 font-bold text-slate-900">
                Product Questions
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Looking for information about a product?
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-3xl">💬</div>

              <h3 className="mt-4 font-bold text-slate-900">
                General Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Have another question? We're happy to help.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold text-white">
            Prefer to keep shopping?
          </h2>

          <p className="mt-4 text-slate-300">
            Explore our collection and discover your next favorite product.
          </p>

          <a
            href="/products"
            className="mt-7 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Browse Products
          </a>

        </div>
      </section>

    </div>
  );
};

export default Contactpage;