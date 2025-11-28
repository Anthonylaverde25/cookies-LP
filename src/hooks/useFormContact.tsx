import { ContactFormData, contactFormSchema } from "@/lib/schemas/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function useFormContact() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (formData: ContactFormData) => {
    const loadingToast = toast.loading("Enviando mensaje...");

    try {
      // Armamos los datos como formulario
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);

      const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;

      if (!contactFormUrl) {
        toast.error("Error de configuración", {
          description: "La URL del formulario no está configurada",
          id: loadingToast,
        });
        return;
      }

      const response = await fetch(contactFormUrl, {
        method: "POST",
        body: formBody,
      });

      if (!response.ok) {
        toast.error("Error al enviar", {
          description: "No se pudo enviar el formulario. Intenta nuevamente.",
          id: loadingToast,
        });
        return;
      }

      const result = await response.json().catch(() => null);

      if (result?.ok ?? true) {
        toast.success("¡Mensaje enviado!", {
          description: result?.message || "Gracias por contactarnos. Te responderemos pronto.",
          id: loadingToast,
        });
        reset();
      } else {
        toast.error("Error", {
          description: result?.message || "Hubo un problema al enviar tu mensaje.",
          id: loadingToast,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error inesperado", {
        description: "Por favor, intenta de nuevo más tarde.",
        id: loadingToast,
      });
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
