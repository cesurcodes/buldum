import Image from "next/image";

type ProductPageProps = {
  params: Promise<{
    name: string;
  }>;
};

const products = {
  "kablosuz-kulaklik": {
    name: "Kablosuz Kulaklık",
    price: "8.999 TL",
    image: "/products/kulaklik.jpg",
    description: "Yüksek ses kalitesi ve uzun pil ömrü sunan kablosuz kulaklık.",
    rating: "4.8",
  },
  "akilli-saat": {
    name: "Akıllı Saat",
    price: "14.999 TL",
    image: "/products/saat.jpg",
    description: "Nabız ölçümü, uyku takibi ve spor modları olan akıllı saat.",
    rating: "4.9",
  },
  "spor-ayakkabi": {
    name: "Spor Ayakkabı",
    price: "5.999 TL",
    image: "/products/ayakkabi.jpg",
    description: "Günlük kullanım ve spor için rahat, hafif ayakkabı.",
    rating: "4.7",
  },
  "kadin-parfum": {
    name: "Kadın Parfüm",
    price: "4.299 TL",
    image: "/products/parfum.jpg",
    description: "Kalıcı ve ferah kokusuyla etkileyici bir parfüm.",
    rating: "4.8",
  },
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { name } = await params;
  const product = products[name as keyof typeof products];

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">Ürün bulunamadı.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white p-10 shadow lg:grid-cols-2">
        <div className="relative h-[450px] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-black">{product.name}</h1>
          <p className="mt-3 text-lg">⭐ {product.rating} / 5</p>
          <p className="mt-6 text-gray-600">{product.description}</p>
          <p className="mt-8 text-4xl font-black text-orange-600">{product.price}</p>
          <p className="mt-3 font-semibold text-green-600">🚚 Yarın Kapında</p>

          <button className="mt-8 rounded-2xl bg-orange-500 px-10 py-4 font-bold text-white hover:bg-orange-600">
            🛒 Sepete Ekle
          </button>
        </div>
      </div>
    </main>
  );
}