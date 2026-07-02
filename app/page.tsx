"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { products } from "../lib/products";

const categories = [
  "Tümü",
  "Elektronik",
  "Moda",
  "Kozmetik",
];

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const categoryMatch =
      selectedCategory === "Tümü" ||
      product.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Ürün ara..."
            className="w-full rounded-2xl border bg-white px-5 py-4 outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`rounded-full px-5 py-3 font-semibold transition ${
                selectedCategory === item
                  ? "bg-orange-500 text-white"
                  : "bg-white shadow-sm"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-orange-500 p-10 text-white">
          <p className="font-bold">GÜNÜN FIRSATI</p>

          <h1 className="mt-3 text-5xl font-black">
            Aradığın ne varsa, Buldum.
          </h1>

          <p className="mt-4 text-lg">
            Binlerce ürün, güvenli alışveriş ve hızlı teslimat seni bekliyor.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-black">
          Günün Fırsatları
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-8 text-center text-gray-500">
            Aradığın ürün bulunamadı.
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}