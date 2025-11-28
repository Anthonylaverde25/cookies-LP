"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const WHATSAPP_NUMBER = "5491138765700";

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCart();

  const formatPrice = (price: number) => {
    return `$${(price / 100).toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return "";

    let message = "🛒 *Nuevo Pedido - Artisan Bakes*\n\n";
    
    items.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `  Cantidad: ${item.quantity}\n`;
      message += `  Precio: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `*Total: ${formatPrice(total)}*\n\n`;
    message += "¡Gracias por tu pedido! 🥐";

    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-background-light shadow-2xl z-[90] transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light bg-background-light">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <span className="material-symbols-outlined text-primary text-[24px]">shopping_cart</span>
            </div>
            <div>
              <h3 className="text-lg font-bold nav-link">Mi Carrito</h3>
              {itemCount > 0 && (
                <p className="text-sm text-text-muted-light">{itemCount} {itemCount === 1 ? 'producto' : 'productos'}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="nav-link hover:bg-primary/10 p-2 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-4">
              <div className="bg-primary/10 p-6 rounded-full">
                <span className="material-symbols-outlined text-[64px] text-primary">
                  shopping_cart
                </span>
              </div>
              <div>
                <p className="text-lg font-bold nav-link mb-2">Tu carrito está vacío</p>
                <p className="text-sm text-text-muted-light">
                  Agrega productos deliciosos para comenzar tu pedido
                </p>
              </div>
              <Link
                href="/#products"
                onClick={onClose}
                className="mt-4 flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-[20px]">storefront</span>
                Ver productos
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white border border-border-light rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    {/* Image */}
                    <Link
                      href={`/productos/${item.slug}`}
                      onClick={onClose}
                      className="flex-shrink-0"
                    >
                      <div
                        className="w-24 h-24 rounded-xl bg-cover bg-center hover:scale-105 transition-transform"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      />
                    </Link>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/productos/${item.slug}`}
                        onClick={onClose}
                        className="font-bold text-base nav-link hover:text-primary line-clamp-2 mb-1"
                      >
                        {item.name}
                      </Link>
                      
                      {/* Category badge */}
                      <div className="inline-flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                        <span className="material-symbols-outlined text-primary text-[12px]">category</span>
                        <span className="text-xs font-medium text-primary">{item.category}</span>
                      </div>

                      {/* Price info */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-text-muted-light">
                          {formatPrice(item.price)} c/u
                        </span>
                        <span className="text-sm text-text-muted-light">•</span>
                        <span className="text-base font-bold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-border-light hover:border-primary hover:bg-primary/5 transition-all active:scale-95"
                          >
                            <span className="material-symbols-outlined text-[18px]">remove</span>
                          </button>
                          <div className="min-w-[60px] text-center">
                            <span className="text-lg font-bold nav-link">{item.quantity}</span>
                            <p className="text-[10px] text-text-muted-light uppercase">unidades</p>
                          </div>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-9 h-9 flex items-center justify-center rounded-lg border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all active:scale-95"
                          >
                            <span className="material-symbols-outlined text-[18px] text-primary">add</span>
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          title="Eliminar producto"
                        >
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-2 border-border-light bg-background-light p-6 space-y-4">
            {/* Summary */}
            <div className="space-y-2 pb-4 border-b border-border-light">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-muted-light">Subtotal ({itemCount} {itemCount === 1 ? 'producto' : 'productos'})</span>
                <span className="font-medium nav-link">{formatPrice(total)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-muted-light">Envío</span>
                <span className="font-medium text-green-600">
                  {total >= 5000 ? 'Gratis' : formatPrice(500)}
                </span>
              </div>
              {total < 5000 && (
                <p className="text-xs text-text-muted-light italic">
                  💡 Agregá ${formatPrice(5000 - total)} más para envío gratis
                </p>
              )}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-2">
              <span className="text-xl font-bold nav-link">Total:</span>
              <span className="text-3xl font-bold text-primary">
                {formatPrice(total + (total >= 5000 ? 0 : 500))}
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full flex items-center justify-center gap-2 rounded-xl h-14 px-4 bg-[#25D366] text-white text-base font-bold hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl active:scale-98"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir por WhatsApp
              </button>
              <div className="flex gap-2">
                <Link
                  href="/#products"
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl h-11 px-4 border-2 border-border-light nav-link hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  Seguir comprando
                </Link>
                <button
                  onClick={clearCart}
                  className="flex items-center justify-center gap-2 rounded-xl h-11 px-4 border-2 border-red-200 text-red-600 hover:bg-red-50 transition-all text-sm font-medium"
                  title="Vaciar carrito"
                >
                  <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
