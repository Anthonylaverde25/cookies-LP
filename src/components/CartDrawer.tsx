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
    return `$${(price / 100).toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return "";

    let message = "🛒 *Nuevo Pedido - Artisan Bakes*\n\n";
    
    items.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `  Cantidad: ${item.quantity}\n`;
      message += `  Precio: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `*Total: ${formatPrice(total + (total >= 5000 ? 0 : 500))}*\n\n`;
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
        className={`fixed top-0 right-0 h-full w-full md:w-[420px] bg-white shadow-2xl z-[90] transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold uppercase tracking-wide">MI COMPRA</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
              <div className="bg-gray-100 p-8 rounded-full">
                <span className="material-symbols-outlined text-[64px] text-gray-400">
                  shopping_cart
                </span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-2">Tu carrito está vacío</p>
                <p className="text-sm text-gray-500">
                  Agregá productos deliciosos para comenzar
                </p>
              </div>
              <Link
                href="/#products"
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Ver productos
              </Link>
            </div>
          ) : (
            <>
              {/* Banner promocional */}
              {total >= 3000 && (
                <div className="bg-primary/10 px-5 py-3 text-center">
                  <p className="text-sm font-semibold text-primary">
                    ¡Envío gratis en compras mayores a ${formatPrice(5000)}!
                  </p>
                </div>
              )}

              {/* Items */}
              <div className="px-5 py-4 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="relative bg-gray-50 rounded-lg p-4">
                    {/* Delete button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>

                    <div className="flex gap-4">
                      {/* Image */}
                      <Link
                        href={`/productos/${item.slug}`}
                        onClick={onClose}
                        className="flex-shrink-0"
                      >
                        <div
                          className="w-20 h-20 rounded-md bg-cover bg-center"
                          style={{ backgroundImage: `url("${item.image}")` }}
                        />
                      </Link>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/productos/${item.slug}`}
                          onClick={onClose}
                          className="font-semibold text-sm text-gray-900 hover:text-primary line-clamp-2 mb-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-gray-500 mb-3">
                          {item.category}
                        </p>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between">
                          {/* Quantity controls */}
                          <div className="flex items-center gap-3 bg-white rounded-full border border-gray-300 px-1 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">remove</span>
                            </button>
                            <span className="text-sm font-semibold min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                            >
                              <span className="material-symbols-outlined text-[18px]">add</span>
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-base font-bold text-gray-900">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                            <p className="text-xs text-gray-400 line-through">
                              {formatPrice(item.price * item.quantity * 1.2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 bg-white">
            {/* Shipping calculator */}
            <div className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-gray-600">
                    local_shipping
                  </span>
                  <span className="text-gray-700">Envío</span>
                </div>
                <button className="text-gray-900 font-semibold flex items-center gap-1 hover:text-primary transition-colors">
                  CALCULAR ENVÍO
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Ver detalle */}
            <details className="px-5 py-3 border-b border-gray-100">
              <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                Ver detalle
              </summary>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-semibold text-green-600">
                    {total >= 5000 ? 'Gratis' : formatPrice(500)}
                  </span>
                </div>
              </div>
            </details>

            {/* Total */}
            <div className="px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-bold uppercase">TOTAL</span>
                <span className="text-2xl font-bold">
                  {formatPrice(total + (total >= 5000 ? 0 : 500))}
                </span>
              </div>

              {/* Finalizar compra button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-black text-white rounded-full h-14 font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Finalizar Compra
              </button>

              {/* Secondary actions */}
              <div className="flex items-center justify-between text-sm">
                <Link
                  href="/#products"
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                  Seguir comprando
                </Link>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
