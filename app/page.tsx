import Footer from "../components/Footer";
import Header from "../components/Header";

const categories = ["Elektronik", "Moda", "Kozmetik", "Ev & Yaşam", "Market", "Oyun"];

const products = [
  { name: "Kablosuz Kulaklık", price: "599 TL", emoji: "🎧" },
  { name: "Akıllı Saat", price: "1.299 TL", emoji: "⌚" },
  { name: "Spor Ayakkabı", price: "899 TL", emoji: "👟" },
  { name: "Kadın Parfüm", price: "449 TL", emoji: "🧴" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex gap-3 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-orange-500 p-10 text-white">
          <p className="font-bold">GÜNÜN FIRSATI</p>
          <h1 className="mt-3 text-5xl font-black">
            Aradığın ne varsa, Buldum.
          </h1>
          <p className="mt-4 text-lg">
            Binlerce ürün, güvenli alışveriş ve hızlı teslimat seni bekliyor.
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-orange-600">
            Alışverişe Başla
          </button>
        </div>

        <h2 className="mt-10 text-2xl font-black">Günün Fırsatları</h2>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex h-40 items-center justify-center rounded-xl bg-gray-100 text-6xl">
                {product.emoji}
              </div>
              <h3 className="mt-4 font-bold">{product.name}</h3>
              <p className="mt-2 text-xl font-black text-orange-600">
                {product.price}
              </p>
              <button className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-bold text-white">
                Sepete Ekle
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}