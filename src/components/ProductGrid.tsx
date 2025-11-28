export default function ProductGrid() {
  const products = [
    {
      name: "Galleta de Chispas de Chocolate con Sal Marina",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKUS16oXsWfX6LfaFyWJTYab5fDDE6rVeJYae1Lu-OOej55EiqOPfcOePqwYMZ_y767BLDsfIWsWgwByTQlSRws6t8VJTOSulNKUhv0CU6FwpYpT8tGoLZ6_nAdJqH6NDNTTHhFPd1pPqK4V3gg_a0GeUw8MnERVifg8hn4CNr8UrucNMuCyKerBrSEDEIQ3ogVuXki2BtFvQAu9LZ7fzzQhCSVzsXXwUMvNyjQppWJwRt9CEGy2mTRPHzgJalrVV2Ju714xx8-uc",
    },
    {
      name: "Pastel Clásico de Red Velvet",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyUqSVnpAuENJ0qcvjBkB1bpuR73oboCwxAc-EvwV_1biwQtPYNwLxrRPWmot82vGMIIlnPUfmSCZahO8rRQ8Oq02GHjWQ3vS6Vgn7MzlcAHy8IpP4ri_XgLp5gu91CVmAj7RZy9xU_GBivbWC2qRdvzYEMtXNMAVHMyqNer-Rp_lxr7XP8c6_5xWzmMOLnWIbijwvFRdOmJ5YSVmSq-4Zd4S8XayITxjv5hdlYhOnzX3WoUT_2IjZueMV2shYIQ_ddtLSCLLLfUM",
    },
    {
      name: "Muffin de Arándanos con Masa Madre",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuClqxxG3gTnGfZYeNZ9F7XKzY589BTTiOW2bkT7vO-Vy4b_7Szu9Y1tr-caU6mWY0wgBUOmwXrFed5KljGrMpNlMKJQKOQ-BXrgrNRxDTVF9mD5KwNh4-CeST1KezO8mM3-i_KJKYzM8Jyr3RpyC43ANzFwqii_iHQlREIsXP_bsPMc-YuCj22j8QXzxdSsYqmvRfvQqLZlOgNkzRw3Om5kAHFIAEsMQ8SBAJiSobI96GPDn_5kWf2SAClf4wjmxViPC4YMWhVd1Hc",
    },
    {
      name: "Brioche con Remolino de Canela",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBPatPahn_srAuqxMeQ5g8CmxohH1u-gqMlPxEkWT4_j5LcA6YBwt46AQiue_gIYEYqwNpE70LodehETCBCn2XrOrUu543ByinPlUb8ZMFli0lRLoUBUkmOIi7HwZw79xd0R7T6XpdSAFZEhGDk4k7AXxWZgZisUAW1buCeSr1F2m7YTzKmXW6le2KvWyv-wh9lqCk3roE0YgNDZw_N7xLaU3unH6T_5htanEZ339MnIPIKHkUtzRcX_JnE3ZPDYMfCrnLxUP8pi74",
    },
  ];

  return (
    <>
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-8">
        Nuestros Horneados Más Amados
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3 group">
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url("${product.image}")` }}
              ></div>
            </div>
            <div>
              <p className="text-base font-medium leading-normal text-text-light dark:text-text-dark">
                {product.name}
              </p>
              <p className="text-sm font-normal leading-normal text-text-muted-light dark:text-text-muted-dark">
                Ver Detalles
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
