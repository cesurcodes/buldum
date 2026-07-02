"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
        <h1 className="text-3xl font-black text-orange-500 cursor-pointer">
          BULDUM
        </h1>

        <input
          type="text"
          placeholder="Bugün ne arıyorsun?"
          className="w-[450px] rounded-full border px-5 py-3 outline-none focus:border-orange-500"
        />

        <div className="flex items-center gap-5 font-semibold">
          <button className="hover:text-orange-500 transition">
            👤 Giriş Yap
          </button>

          <button className="hover:text-orange-500 transition">
            ❤️ Favoriler
          </button>

          <Link
            href="/cart"
            className="relative hover:text-orange-500 transition"
          >
            🛒 Sepet

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}