"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aplicar estilo scrolled cuando está en top absoluto O cuando ha scrolleado
      setIsScrolled(window.scrollY === 0 || window.scrollY > 10);
    };

    // Establecer estado inicial
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid px-4 py-3 transition-all duration-300 sm:px-6 md:px-10 ${
        isScrolled
          ? "border-border-light/50 bg-background-light/80 backdrop-blur-md shadow-sm"
          : "border-transparent bg-transparent"
      } ${isMenuOpen ? "border-transparent" : ""}`}
    >
      <div className="flex items-center gap-4">
        <div className="size-6 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] nav-link">
          Artisan Bakes
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="#home"
          >
            Inicio
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="#products"
          >
            Productos
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="#about"
          >
            Sobre Nosotros
          </Link>
          <Link
            className="text-sm font-medium leading-normal nav-link transition-colors"
            href="#contact"
          >
            Contacto
          </Link>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Comprar Ahora</span>
        </button>
      </div>
      <div className="md:hidden">
        <button
          className="nav-link"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      
      {/* Menú móvil con animación suave */}
      <div 
        className={`absolute top-full left-0 w-full bg-background-light/95 backdrop-blur-md border-b border-border-light shadow-xl md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">home</span>
            Inicio
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="#products"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">shopping_bag</span>
            Productos
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">info</span>
            Sobre Nosotros
          </Link>
          <Link
            className="text-base font-medium leading-relaxed nav-link transition-all py-3 px-4 rounded-lg hover:bg-primary/10 flex items-center gap-3"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
            Contacto
          </Link>
          
          {/* Separador */}
          <div className="h-px bg-border-light my-2"></div>
          
          {/* Botón CTA destacado */}
          <button className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-md">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            <span className="truncate">Comprar Ahora</span>
          </button>
        </div>
      </div>
    </header>
  );
}
