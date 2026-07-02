export default function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-5">

        <h1 className="text-3xl font-black text-orange-500">
          BULDUM
        </h1>

        <input
          type="text"
          placeholder="Bugün ne arıyorsun?"
          className="w-[450px] rounded-full border px-5 py-3"
        />

        <div className="flex gap-5 font-semibold">
          <button>👤 Giriş Yap</button>
          <button>❤️ Favoriler</button>
          <button>🛒 Sepet</button>
        </div>

      </div>
    </header>
  );
}