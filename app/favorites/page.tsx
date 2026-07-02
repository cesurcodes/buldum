"use client";

import Image from "next/image";
import { useFavorites } from "../../components/FavoritesContext";

export default function FavoritesPage() {
  const { favoriteItems, favoritesCount, toggleFavorite } = useFavorites();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-black">❤️ Favorilerim</h1>

        <div className="rounded-2xl bg-white p-8 shadow">
          {favoritesCount === 0 ? (
            <p className="text-gray-500">Henüz favori ürün eklenmedi.</p>
          ) : (
            <div className="space-y-5">
              {favoriteItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-5 border-b pb-5"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="font-black text-orange-600">{item.price}</p>
                  </div>

                  <button
                    onClick={() => toggleFavorite(item)}
                    className="rounded-xl bg-red-500 px-5 py-3 font-bold text-white hover:bg-red-600"
                  >
                    Kaldır
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}