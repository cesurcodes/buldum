"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";

const products = [
  { name: "Kablosuz Kulaklık", price: "8.999 TL", image: "/products/kulaklik.jpg" },
  { name: "Akıllı Saat", price: "14.999 TL", image: "/products/saat.jpg" },
  { name: "Spor Ayakkabı", price: "5.999 TL", image: "/products/ayakkabi.jpg" },
  { name: "Kadın Parfüm", price: "4.299 TL", image: "/products/parfum.jpg" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black">
          🔍 Arama Sonuçları
        </h1>

        <p className="mt-3 text-gray-500">
          Aranan kelime: <strong>{query}</strong>
        </p>

        {filteredProducts.length === 0 ? (
          <p className="mt-8 text-gray-500">Ürün bulunamadı kanka.</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}