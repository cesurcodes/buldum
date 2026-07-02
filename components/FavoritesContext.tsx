"use client";

import { createContext, useContext, useState } from "react";

type FavoriteItem = {
  name: string;
  price: string;
  image: string;
};

type FavoritesContextType = {
  favoriteItems: FavoriteItem[];
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (name: string) => boolean;
  favoritesCount: number;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  function toggleFavorite(item: FavoriteItem) {
    setFavoriteItems((currentItems) => {
      const exists = currentItems.some(
        (favoriteItem) => favoriteItem.name === item.name
      );

      if (exists) {
        return currentItems.filter(
          (favoriteItem) => favoriteItem.name !== item.name
        );
      }

      return [...currentItems, item];
    });
  }

  function isFavorite(name: string) {
    return favoriteItems.some((item) => item.name === name);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        toggleFavorite,
        isFavorite,
        favoritesCount: favoriteItems.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites, FavoritesProvider içinde kullanılmalı");
  }

  return context;
}