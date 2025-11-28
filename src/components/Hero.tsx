export default function Hero() {
  return (
    <div className="p-4">
      <div
        className="flex min-h-[600px] flex-col gap-6 items-center justify-center p-4 rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW7wg_JrIjaLfxFLMTQbv_ofH1IXb0ex6HR61A5Y9f8F9-qp7qE0B3Z9AgO4QJHcefBP2ZkA1T5Zjhf0ojkdXDuxyg_fuB5B0O9k_ybMNUeQIztmUUZ-G4g8S7cMgueRJf06yQz8qPkxWStEKXBfGTnV3rol4i2TXJICmfM_99nY6aw8oLt0h9a9iNwxjyiNaZX2_KoROqN308Olcyd681zaNhXH7JexyLYykdP7vyZNC_3leWqvJREYWMrRNkCOTxMaEsPZ0_rS0")',
        }}
      >
        <div className="flex flex-col gap-2 text-center max-w-xl">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
            Delicias Artesanales, Horneadas Frescas a Diario
          </h1>
          <h2 className="text-white/90 text-sm font-normal leading-normal md:text-base">
            Hecho con amor y los mejores ingredientes, entregado directo a tu puerta.
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Explora Nuestras Delicias</span>
        </button>
      </div>
    </div>
  );
}
