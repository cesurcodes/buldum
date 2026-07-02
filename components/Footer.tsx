export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-black text-orange-500">BULDUM</h2>
          <p className="mt-3 text-sm text-gray-600">
            Aradığın ne varsa, Buldum.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Kurumsal</h3>
          <p className="mt-3 text-sm text-gray-600">Hakkımızda</p>
          <p className="mt-2 text-sm text-gray-600">İletişim</p>
          <p className="mt-2 text-sm text-gray-600">Kariyer</p>
        </div>

        <div>
          <h3 className="font-bold">Yardım</h3>
          <p className="mt-3 text-sm text-gray-600">Sipariş Takibi</p>
          <p className="mt-2 text-sm text-gray-600">İade ve Değişim</p>
          <p className="mt-2 text-sm text-gray-600">Sıkça Sorulan Sorular</p>
        </div>

        <div>
          <h3 className="font-bold">Satıcılar İçin</h3>
          <p className="mt-3 text-sm text-gray-600">Buldum’da Satış Yap</p>
          <p className="mt-2 text-sm text-gray-600">Satıcı Paneli</p>
          <p className="mt-2 text-sm text-gray-600">Komisyonlar</p>
        </div>
      </div>

      <div className="border-t py-5 text-center text-sm text-gray-500">
        © 2026 Buldum. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}