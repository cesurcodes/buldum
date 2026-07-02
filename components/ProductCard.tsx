"use client";

import Image from "next/image";
import { useCart } from "./CartContext";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-300 hover:scale-110"
        />
      </div>

      <h3 className="mt-4 font-bold">{name}</h3>

      <p className="mt-2 text-xl font-black text-orange-600">{price}</p>

      <button
        onClick={() => addToCart({ name, price, image })}
        className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-bold text-white hover:bg-orange-600"
      >
        Sepete Ekle
      </button>
    </div>
  );
}