"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { useFavorites } from "./FavoritesContext";

export default function Header() {
  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">

        <Link
          href="/"
          className="text-3xl font-black text-orange-500"
        >
          BULDUM
        </Link>

        <input
          type="text"
          placeholder="Bugün ne arıyorsun?"
          className="w-[450px] rounded-full border px-5 py-3 outline-none focus:border-orange-500"
        />

        <div className="flex items-center gap-6 font-semibold">

          <button className="hover:text-orange-500">
            👤 Giriş Yap
          </button>

          <Link
            href="/favorites"
            className="relative hover:text-orange-500"
          >
            ❤️ Favoriler

            {favoritesCount > 0 && (
              <span className="absolute -top-2 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {favoritesCount}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-orange-500"
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