export default function FAQ() {
  return (
    <div className="px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-text-light dark:text-text-dark text-[32px] font-bold leading-tight tracking-tighter md:text-4xl">
          Preguntas Frecuentes
        </h2>
        <p className="text-text-muted-light dark:text-text-muted-dark mt-2 max-w-2xl mx-auto">
          ¿Tienes una pregunta? Tenemos respuestas. Si no puedes encontrar lo que estás
          buscando, no dudes en contactarnos.
        </p>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        <details
          className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Ofrecen opciones sin gluten?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            ¡Sí, lo hacemos! Tenemos una selección dedicada de delicias sin gluten,
            incluyendo galletas, pasteles y muffins. Por favor revisa nuestra página de productos
            para la lista completa y busca el símbolo 'GF'. Tomamos precauciones
            para evitar la contaminación cruzada, pero ten en cuenta que nuestra cocina
            maneja gluten.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Cuáles son sus áreas de entrega y tarifas?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Entregamos dentro de un radio de 15 millas de Foodieville. Las tarifas de entrega
            varían según la distancia, comenzando desde $5. Puedes verificar la tarifa exacta
            para tu dirección durante el pago. También ofrecemos recogida gratuita en
            nuestra panadería.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Cómo hago un pedido personalizado para un evento especial?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Para pedidos personalizados, contáctanos con al menos dos semanas de anticipación.
            Puedes completar nuestro formulario de contacto con detalles sobre tu evento, el
            número de invitados y tus delicias deseadas, y nos pondremos en contacto contigo
            con una cotización y más detalles.
          </p>
        </details>
        <details className="group rounded-lg bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-light dark:text-text-dark">
            <h2 className="text-lg font-medium">
              ¿Cuál es la vida útil de sus productos horneados?
            </h2>
            <span className="relative size-5 shrink-0">
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="mt-4 leading-relaxed text-text-muted-light dark:text-text-muted-dark">
            Nuestros productos se hornean frescos diariamente sin conservantes.
            Recomendamos disfrutar nuestras galletas y pasteles dentro de los 3 días, y nuestros
            pasteles dentro de los 4-5 días. Para mejores resultados, guárdalos en un recipiente
            hermético a temperatura ambiente.
          </p>
        </details>
      </div>
    </div>
  );
}
