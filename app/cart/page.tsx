"use client";

import Image from "next/image";
import { useCart } from "../../components/CartContext";

function priceToNumber(price: string) {
  return Number(price.replace(".", "").replace(" TL", ""));
}

export default function CartPage() {
  const { cartItems, cartCount } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + priceToNumber(item.price) * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-black">🛒 Sepetim</h1>

        <div className="rounded-2xl bg-white p-8 shadow">
          {cartCount === 0 ? (
            <p className="text-gray-500">Henüz ürün eklenmedi.</p>
          ) : (
            <>
              <div className="space-y-5">
                {cartItems.map((item) => (
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
                      <p className="text-sm text-gray-500">
                        Adet: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-gray-50 p-6">
                <div>
                  <p className="text-sm text-gray-500">Toplam Tutar</p>
                  <p className="text-3xl font-black text-orange-600">
                    {totalPrice.toLocaleString("tr-TR")} TL
                  </p>
                </div>

                <button className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white hover:bg-orange-600">
                  Ödemeye Geç
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}