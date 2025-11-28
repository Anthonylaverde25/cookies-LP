import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductoDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light">
      <Header />
      
      <main className="flex-1 pt-20 pb-12">
        {/* Back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6">
          <Link 
            href="/#products"
            className="inline-flex items-center gap-2 nav-link text-sm hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Volver a productos
          </Link>
        </div>

        {/* Product detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url("${product.image}")` }}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {/* Category badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <span className="material-symbols-outlined text-primary text-[18px]">category</span>
                <span className="text-sm font-medium text-primary">{product.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight nav-link">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  ${(product.price / 100).toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-sm text-text-muted-light">/ unidad</span>
              </div>

              {/* Description */}
              <p className="text-base leading-relaxed text-text-light">
                {product.description}
              </p>

              {/* Ingredients */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold nav-link flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">nutrition</span>
                  Ingredientes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background-light border border-border-light rounded-full text-sm text-text-light"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              {product.allergens.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-lg font-bold nav-link flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">warning</span>
                    Alérgenos
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergen, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-full text-sm text-red-700 font-medium"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors shadow-md">
                  <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                  Agregar al carrito
                </button>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 border-2 border-primary text-primary text-base font-bold hover:bg-primary/5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  Consultar
                </Link>
              </div>

              {/* Extra info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-light">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">schedule</span>
                  <div>
                    <p className="text-xs text-text-muted-light">Disponibilidad</p>
                    <p className="text-sm font-medium nav-link">Hoy mismo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
                  <div>
                    <p className="text-xs text-text-muted-light">Envío</p>
                    <p className="text-sm font-medium nav-link">Gratis +$5000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
