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
      }`}
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
      
      {/* Overlay - Fondo oscuro */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer lateral */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-background-light shadow-2xl z-[70] md:hidden transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header del drawer */}
        <div className="flex items-center justify-between p-6 border-b border-border-light">
          <h3 className="text-lg font-bold nav-link">Menú</h3>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="nav-link hover:bg-primary/10 p-2 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Contenido del drawer */}
        <div className="px-4 py-6 flex flex-col gap-1 overflow-y-auto h-[calc(100%-80px)]">
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
          <div className="h-px bg-border-light my-4"></div>
          
          {/* Botón CTA */}
          <button className="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-md">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            <span className="truncate">Comprar Ahora</span>
          </button>
        </div>
      </div>
    </header>
  );
}
