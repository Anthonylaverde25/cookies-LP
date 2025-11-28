import Link from "next/link";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <>
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
        Nuestros Horneados Más Amados
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/productos/${product.slug}`}
            className="flex flex-col gap-3 pb-3 group cursor-pointer"
          >
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url("${product.image}")` }}
              ></div>
            </div>
            <div>
              <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                {product.name}
              </p>
              <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver Detalles
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
