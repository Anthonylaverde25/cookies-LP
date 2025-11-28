import { ContactFormData, contactFormSchema } from "@/lib/schemas/contact-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useFormContact() {
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

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
    setSubmitStatus(null); // Limpiamos estado previo

    try {
      // Armamos los datos como formulario
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);

      const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;

      if (!contactFormUrl) {
        throw new Error("La URL del formulario de contacto no está configurada");
      }

      const response = await fetch(contactFormUrl, {
        method: "POST",
        body: formBody,
      });

      if (!response.ok) {
        setSubmitStatus({
          success: false,
          message: "No se pudo enviar el formulario. Intenta nuevamente.",
        });
        return;
      }

      const result = await response.json().catch(() => null);

      setSubmitStatus({
        success: result?.ok ?? true,
        message: result?.message || "Mensaje enviado correctamente.",
      });

      if (result?.ok ?? true) {
        reset();
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({
        success: false,
        message: "Hubo un error inesperado. Por favor, intenta de nuevo más tarde.",
      });
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    submitStatus,
  };
}
