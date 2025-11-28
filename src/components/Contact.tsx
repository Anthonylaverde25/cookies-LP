"use client";

import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <div className="px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-text-light dark:text-text-dark text-[32px] font-bold leading-tight tracking-tighter md:text-4xl">
          Ponte en Contacto
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mt-2 max-w-2xl mx-auto">
          ¡Nos encantaría saber de ti! Ya sea que tengas una pregunta sobre nuestros
          productos, una solicitud especial o simplemente quieras saludar, no dudes en
          contactarnos.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <ContactForm />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-text-light dark:text-text-dark">
                Correo Electrónico
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Envíanos un correo para consultas
              </p>
              <a
                className="text-primary hover:underline"
                href="mailto:hello@artisanbakes.com"
              >
                hello@artisanbakes.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <h3 className="font-bold text-text-light dark:text-text-dark">
                Teléfono
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Llámanos para una respuesta más rápida
              </p>
              <a
                className="text-primary hover:underline"
                href="tel:+1234567890"
              >
                (123) 456-7890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">share</span>
            </div>
            <div>
              <h3 className="font-bold text-text-light dark:text-text-dark">
                Síguenos
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Conéctate con nosotros en redes sociales
              </p>
              <div className="flex space-x-4 mt-2 text-text-light dark:text-text-dark">
                <a className="hover:text-primary" href="#">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a className="hover:text-primary" href="#">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a className="hover:text-primary" href="#">
                  <svg
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-2.7-1.7-5.5-2.5-8.3-3.1-1.4.5-2.3 1.1-3.1 1.9-2.2 2-2.7 4.3-3.1 6.6-.4 2.3-.5 4.7-.5 7.1 0 0 .5-2.3 1.4-4.1 1.4-2.8 3.5-5.2 6.1-7.1 2.3-1.7 4.9-3 7.7-4.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
