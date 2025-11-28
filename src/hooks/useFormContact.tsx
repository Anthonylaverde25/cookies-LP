import { ContactFormData, contactFormSchema } from "@/lib/schemas/contact-form.schema";
import { submitContactForm } from "@/app/actions";
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
      // Importamos la server action dinámicamente o la usamos directamente si ya está importada arriba
      // Pero para mantenerlo limpio, asumimos que se importará arriba.
      // Aquí llamamos a la server action
      const result = await submitContactForm(formData);

      if (result.ok) {
        toast.success("¡Mensaje enviado!", {
          description: result.message,
          id: loadingToast,
        });
        reset();
      } else {
        toast.error("Error", {
          description: result.message,
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
