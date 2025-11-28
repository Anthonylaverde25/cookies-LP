"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

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
      <div className="flex items-center gap-4 text-text-light">
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
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-light">
          Artisan Bakes
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link
            className="text-sm font-medium leading-normal text-text-light hover:text-primary transition-colors"
            href="#home"
          >
            Inicio
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-text-light hover:text-primary transition-colors"
            href="#products"
          >
            Productos
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-text-light hover:text-primary transition-colors"
            href="#about"
          >
            Sobre Nosotros
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-text-light hover:text-primary transition-colors"
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
          className="text-text-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-light border-b border-border-light p-4 flex flex-col gap-4 md:hidden shadow-lg animate-in slide-in-from-top-2">
          <Link
            className="text-sm font-medium leading-normal text-text-light"
            href="#home"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-text-light"
            href="#products"
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-text-light"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
          <Link
            className="text-sm font-medium leading-normal text-text-light"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Comprar Ahora</span>
          </button>
        </div>
      )}
    </header>
  );
}
