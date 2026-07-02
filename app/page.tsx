"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const categories = ["Elektronik", "Moda", "Kozmetik", "Ev & Yaşam", "Market", "Oyun"];

const products = [
  { name: "Kablosuz Kulaklık", price: "8.999 TL", image: "/products/kulaklik.jpg" },
  { name: "Akıllı Saat", price: "14.999 TL", image: "/products/saat.jpg" },
  { name: "Spor Ayakkabı", price: "5.999 TL", image: "/products/ayakkabi.jpg" },
  { name: "Kadın Parfüm", price: "4.299 TL", image: "/products/parfum.jpg" },
];

export default function Home() {
  const [searchText, setSearchText] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Ürün ara: kulaklık, saat, ayakkabı..."
            className="w-full rounded-2xl border bg-white px-5 py-4 outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto">
          {categories.map((item) => (
            <button key={item} className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm">
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-orange-500 p-10 text-white">
          <p className="font-bold">GÜNÜN FIRSATI</p>
          <h1 className="mt-3 text-5xl font-black">Aradığın ne varsa, Buldum.</h1>
          <p className="mt-4 text-lg">
            Binlerce ürün, güvenli alışveriş ve hızlı teslimat seni bekliyor.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-black">Günün Fırsatları</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-8 text-gray-500">Aradığın ürün bulunamadı kanka.</p>
        )}
      </section>

      <Footer />
    </main>
  );
}