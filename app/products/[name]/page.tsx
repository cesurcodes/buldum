"use client";
type ProductPageProps = {
  params: {
    name: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const productName = decodeURIComponent(params.name || "")
    .replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-10 shadow">
        <h1 className="text-4xl font-black">
          {productName}
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Bu ürün Buldum güvencesiyle satıştadır.
        </p>

        <p className="mt-8 text-3xl font-black text-orange-600">
          8.999 TL
        </p>

        <button className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600">
          Sepete Ekle
        </button>
      </div>
    </main>
  );
}