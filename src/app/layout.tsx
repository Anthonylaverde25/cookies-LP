import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import { Toaster } from "sonner";
import "../styles/globals.scss";

const epilogue = Epilogue({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Panadería Artesanal - Productos Frescos",
  description: "Delicias artesanales, horneadas frescas todos los días.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" style={{ scrollPaddingTop: '64px' }}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${epilogue.variable} font-display antialiased bg-background-light text-text-light`}>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
