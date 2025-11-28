export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  ingredients: string[];
  allergens: string[];
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Galleta de Chispas de Chocolate con Sal Marina",
    slug: "galleta-chispas-chocolate-sal-marina",
    description: "Galletas artesanales con chispas de chocolate belga semi amargo y un toque de sal marina de Maldon. Crujientes por fuera, suaves por dentro.",
    price: 3500,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKUS16oXsWfX6LfaFyWJTYab5fDDE6rVeJYae1Lu-OOej55EiqOPfcOePqwYMZ_y767BLDsfIWsWgwByTQlSRws6t8VJTOSulNKUhv0CU6FwpYpT8tGoLZ6_nAdJqH6NDNTTHhFPd1pPqK4V3gg_a0GeUw8MnERVifg8hn4CNr8UrucNMuCyKerBrSEDEIQ3ogVuXki2BtFvQAu9LZ7fzzQhCSVzsXXwUMvNyjQppWJwRt9CEGy2mTRPHzgJalrVV2Ju714xx8-uc",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKUS16oXsWfX6LfaFyWJTYab5fDDE6rVeJYae1Lu-OOej55EiqOPfcOePqwYMZ_y767BLDsfIWsWgwByTQlSRws6t8VJTOSulNKUhv0CU6FwpYpT8tGoLZ6_nAdJqH6NDNTTHhFPd1pPqK4V3gg_a0GeUw8MnERVifg8hn4CNr8UrucNMuCyKerBrSEDEIQ3ogVuXki2BtFvQAu9LZ7fzzQhCSVzsXXwUMvNyjQppWJwRt9CEGy2mTRPHzgJalrVV2Ju714xx8-uc",
    ],
    category: "Galletas",
    ingredients: ["Harina de trigo", "Mantequilla europea", "Chocolate belga", "Azúcar", "Huevos", "Sal marina de Maldon"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    featured: true,
  },
  {
    id: "2",
    name: "Pastel Clásico de Red Velvet",
    slug: "pastel-red-velvet",
    description: "Capas de bizcocho de terciopelo rojo con frosting de queso crema. Un clásico americano hecho con receta tradicional.",
    price: 8900,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyUqSVnpAuENJ0qcvjBkB1bpuR73oboCwxAc-EvwV_1biwQtPYNwLxrRPWmot82vGMIIlnPUfmSCZahO8rRQ8Oq02GHjWQ3vS6Vgn7MzlcAHy8IpP4ri_XgLp5gu91CVmAj7RZy9xU_GBivbWC2qRdvzYEMtXNMAVHMyqNer-Rp_lxr7XP8c6_5xWzmMOLnWIbijwvFRdOmJ5YSVmSq-4Zd4S8XayITxjv5hdlYhOnzX3WoUT_2IjZueMV2shYIQ_ddtLSCLLLfUM",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyUqSVnpAuENJ0qcvjBkB1bpuR73oboCwxAc-EvwV_1biwQtPYNwLxrRPWmot82vGMIIlnPUfmSCZahO8rRQ8Oq02GHjWQ3vS6Vgn7MzlcAHy8IpP4ri_XgLp5gu91CVmAj7RZy9xU_GBivbWC2qRdvzYEMtXNMAVHMyqNer-Rp_lxr7XP8c6_5xWzmMOLnWIbijwvFRdOmJ5YSVmSq-4Zd4S8XayITxjv5hdlYhOnzX3WoUT_2IjZueMV2shYIQ_ddtLSCLLLfUM",
    ],
    category: "Pasteles",
    ingredients: ["Harina", "Azúcar", "Mantequilla", "Queso crema", "Huevos", "Cocoa", "Colorante natural"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    featured: true,
  },
  {
    id: "3",
    name: "Muffin de Arándanos con Masa Madre",
    slug: "muffin-arandanos-masa-madre",
    description: "Muffins esponjosos hechos con masa madre natural y arándanos frescos. Perfectos para el desayuno o merienda.",
    price: 2800,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClqxxG3gTnGfZYeNZ9F7XKzY589BTTiOW2bkT7vO-Vy4b_7Szu9Y1tr-caU6mWY0wgBUOmwXrFed5KljGrMpNlMKJQKOQ-BXrgrNRxDTVF9mD5KwNh4-CeST1KezO8mM3-i_KJKYzM8Jyr3RpyC43ANzFwqii_iHQlREIsXP_bsPMc-YuCj22j8QXzxdSsYqmvRfvQqLZlOgNkzRw3Om5kAHFIAEsMQ8SBASiSobI96GPDn_5kWf2SAClf4wjmxViPC4YMWhVd1Hc",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClqxxG3gTnGfZYeNZ9F7XKzY589BTTiOW2bkT7vO-Vy4b_7Szu9Y1tr-caU6mWY0wgBUOmwXrFed5KljGrMpNlMKJQKOQ-BXrgrNRxDTVF9mD5KwNh4-CeST1KezO8mM3-i_KJKYzM8Jyr3RpyC43ANzFwqii_iHQlREIsXP_bsPMc-YuCj22j8QXzxdSsYqmvRfvQqLZlOgNkzRw3Om5kAHFIAE sMQ8SBAJiSobI96GPDn_5kWf2SAClf4wjmxViPC4YMWhVd1Hc",
    ],
    category: "Muffins",
    ingredients: ["Masa madre", "Harina integral", "Arándanos frescos", "Miel", "Huevos", "Aceite de oliva"],
    allergens: ["Gluten", "Huevo"],
    featured: true,
  },
  {
    id: "4",
    name: "Brioche con Remolino de Canela",
    slug: "brioche-remolino-canela",
    description: "Brioche francés tradicional con un delicado remolino de canela y azúcar morena. Suave, mantecoso y aromático.",
    price: 4200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPatPahn_srAuqxMeQ5g8CmxohH1u-gqMlPxEkWT4_j5LcA6YBwt46AQiue_gIYEYqwNpE70LodehETCBCn2XrOrUu543ByinPlUb8ZMFli0lRLoUBUkmOIi7HwZw79xd0R7T6XpdSAFZEhGDk4k7AXxWZgZisUAW1buCeSr1F2m7YTzKmXW6le2KvWyv-wh9lqCk3roE0YgNDZw_N7xLaU3unH6T_5htanEZ339MnIPIKHkUtzRcX_JnE3ZPDYMfCrnLxUP8pi74",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPatPahn_srAuqxMeQ5g8CmxohH1u-gqMlPxEkWT4_j5LcA6YBwt46AQiue_gIYEYqwNpE70LodehETCBCn2XrOrUu543ByinPlUb8ZMFli0lRLoUBUkmOIi7HwZw79xd0R7T6XpdSAFZEhGDk4k7AXxWZgZisUAW1buCeSr1F2m7YTzKmXW6le2KvWyv-wh9lqCk3roE0YgNDZw_N7xLaU3unH6T_5htanEZ339MnIPIKHkUtzRcX_JnE3ZPDYMfCrnLxUP8pi74",
    ],
    category: "Panes",
    ingredients: ["Harina francesa", "Mantequilla", "Huevos", "Leche", "Canela de Ceilán", "Azúcar morena"],
    allergens: ["Gluten", "Lácteos", "Huevo"],
    featured: true,
  },
];
