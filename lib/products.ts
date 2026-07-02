export type Product = {
  name: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  rating: number;
  category: string;
};

export const products: Product[] = [
  {
    name: "Kablosuz Kulaklık",
    slug: "kablosuz-kulaklik",
    price: "8.999 TL",
    image: "/products/kulaklik.jpg",
    description:
      "Yüksek ses kalitesi, aktif gürültü engelleme ve uzun pil ömrü sunan kablosuz kulaklık.",
    rating: 4.8,
    category: "Elektronik",
  },
  {
    name: "Akıllı Saat",
    slug: "akilli-saat",
    price: "14.999 TL",
    image: "/products/saat.jpg",
    description:
      "Nabız ölçümü, GPS, uyku takibi ve suya dayanıklı akıllı saat.",
    rating: 4.9,
    category: "Elektronik",
  },
  {
    name: "Spor Ayakkabı",
    slug: "spor-ayakkabi",
    price: "5.999 TL",
    image: "/products/ayakkabi.jpg",
    description:
      "Günlük kullanım ve spor için hafif ve rahat ayakkabı.",
    rating: 4.7,
    category: "Moda",
  },
  {
    name: "Kadın Parfüm",
    slug: "kadin-parfum",
    price: "4.299 TL",
    image: "/products/parfum.jpg",
    description:
      "Kalıcı ve ferah kokusuyla gün boyu etkileyici bir parfüm.",
    rating: 4.8,
    category: "Kozmetik",
  },
];