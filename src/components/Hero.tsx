export default function Hero() {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
      <div
        className="relative flex min-h-[520px] flex-col rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden shadow-lg"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.75) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW7wg_JrIjaLfxFLMTQbv_ofH1IXb0ex6HR61A5Y9f8F9-qp7qE0B3Z9AgO4QJHcefBP2ZkA1T5Zjhf0ojkdXDuxyg_fuB5B0O9k_ybMNUeQIztmUUZ-G4g8S7cMgueRJf06yQz8qPkxWStEKXBfGTnV3rol4i2TXJICmfM_99nY6aw8oLt0h9a9iNwxjyiNaZX2_KoROqN308Olcyd681zaNhXH7JexyLYykdP7vyZNC_3leWqvJREYWMrRNkCOTxMaEsPZ0_rS0")',
        }}
      >
        {/* Capa sutil de blur / glass en contenido */}
        <div className="relative z-10 flex flex-1 flex-col md:flex-row items-center justify-between gap-10 px-6 py-10 md:px-10 lg:px-16 backdrop-blur-sm">
          {/* Columna texto */}
          <div className="max-w-xl text-center md:text-left flex flex-col gap-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 self-center md:self-start">
              Recién horneado · Envíos en el día
            </p>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Delicias artesanales,
              <span className="block text-primary-200">
                horneadas frescas a diario
              </span>
            </h1>

            <p className="text-white/85 text-sm md:text-base leading-relaxed">
              Panes, facturas y postres hechos a mano con ingredientes seleccionados.
              Pedí online y recibí en tu casa con la misma calidez que una panadería de barrio.
            </p>

            {/* Bullets de valor */}
            <div className="mt-2 flex flex-col gap-2 text-xs md:text-sm text-white/85">
              <div className="inline-flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Pedidos antes de las 11:00 hs: ¡envío en el día!</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-5 w-5 rounded-full border border-white/40 flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span>Recetas artesanales sin conservantes ni mezclas raras.</span>
              </div>
            </div>

            {/* Botones */}
            <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-sm md:text-base font-semibold tracking-[0.02em] shadow-md hover:brightness-110 hover:-translate-y-[1px] transition-all">
                Explorar catálogo
              </button>
              <button className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl h-12 px-6 border border-white/40 bg-black/25 text-white text-sm md:text-base font-medium hover:bg-white/10 transition-all">
                Ver menú del día
              </button>
            </div>

            {/* Métrica social / confianza */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start text-xs md:text-sm text-white/80">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-white/80 border border-white/40" />
                <div className="h-8 w-8 rounded-full bg-white/60 border border-white/40" />
                <div className="h-8 w-8 rounded-full bg-white/40 border border-white/40 flex items-center justify-center text-[10px] font-semibold">
                  +99
                </div>
              </div>
              <span>+500 pedidos felices este mes · 4.9/5 en reseñas</span>
            </div>
          </div>

         
        </div>

        {/* Degradado inferior para efecto visual */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      </div>
    </section>
  );
}
