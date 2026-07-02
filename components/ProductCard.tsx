"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { useFavorites } from "./FavoritesContext";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

function createSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, "-");
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const slug = createSlug(name);
  const favorite = isFavorite(name);

  return (
    <div className="group relative rounded-3xl bg-white p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <button
        onClick={() => toggleFavorite({ name, price, image })}
        className="absolute right-6 top-6 z-10 rounded-full bg-white p-2 shadow"
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <span className="absolute left-6 top-6 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
        %20 İndirim
      </span>

      <Link href={`/products/${slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-4 line-clamp-1 font-bold">{name}</h3>

        <div className="mt-2 flex items-center gap-2 text-sm">
          <span>⭐ 4.8</span>
          <span className="text-gray-400">(238 değerlendirme)</span>
        </div>

        <p className="mt-2 text-sm font-semibold text-green-600">
          🚚 Yarın Kapında
        </p>

        <p className="mt-3 text-2xl font-black text-orange-600">{price}</p>
      </Link>

      <button
        onClick={() => addToCart({ name, price, image })}
        className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-bold text-white hover:bg-orange-600"
      >
        Sepete Ekle
      </button>
    </div>
  );
}