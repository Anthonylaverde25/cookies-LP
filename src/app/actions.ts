"use server";

import { ContactFormData } from "@/lib/schemas/contact-form.schema";

export async function submitContactForm(data: ContactFormData) {
  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;

  if (!contactFormUrl) {
    return {
      ok: false,
      message: "La URL del formulario no está configurada",
    };
  }

  try {
    // Armamos los datos como formulario
    const formBody = new URLSearchParams();
    formBody.append("name", data.name);
    formBody.append("email", data.email);
    formBody.append("message", data.message);

    const response = await fetch(contactFormUrl, {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      return {
        ok: false,
        message: "No se pudo enviar el formulario. Intenta nuevamente.",
      };
    }

    const result = await response.json().catch(() => null);

    if (result?.result === "success" || result?.ok === true) {
      return {
        ok: true,
        message: "¡Mensaje enviado correctamente!",
      };
    } else {
      return {
        ok: false,
        message: result?.message || "Hubo un problema al enviar tu mensaje.",
      };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      ok: false,
      message: "Error inesperado. Por favor, intenta de nuevo más tarde.",
    };
  }
}
