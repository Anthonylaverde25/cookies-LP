"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/schemas/contact-form.schema";

export default function ContactForm() {
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

  
  const onSubmit = async (data: ContactFormData) => {
  setSubmitStatus(null); // limpiamos estado previo

  try {
    // Armamos los datos como formulario
    const formBody = new URLSearchParams();
    formBody.append("name", data.name);
    formBody.append("email", data.email);
    formBody.append("message", data.message);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyYX9mseo0PbbkAG4Vs_g9K3V4s-UTx90FLuiAs_c-4LgbEEZIhdawP6iicaHllHrQs/exec",
      {
        method: "POST",
        body: formBody,
        // 👇 IMPORTANTE: NO pongas Content-Type, el navegador lo setea bien.
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

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
      message:
        "Hubo un error inesperado. Por favor, intenta de nuevo más tarde.",
    });
  }
};


  return (
    // ⛔️ Antes: <Form ...>  ✅ Ahora: <form ...>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      noValidate
    >
      {/* Campo de Nombre */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-text-light dark:text-text-dark"
          htmlFor="name"
        >
          Nombre
        </label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`rounded-lg border bg-transparent px-4 py-2 text-text-light dark:text-text-dark focus:ring-primary/50 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-border-light dark:border-border-dark focus:border-primary"
              }`}
              id="name"
              placeholder="Tu Nombre"
              type="text"
            />
          )}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Campo de Email */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-text-light dark:text-text-dark"
          htmlFor="email"
        >
          Correo Electrónico
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`rounded-lg border bg-transparent px-4 py-2 text-text-light dark:text-text-dark focus:ring-primary/50 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-border-light dark:border-border-dark focus:border-primary"
              }`}
              id="email"
              placeholder="Tu Correo Electrónico"
              type="email"
            />
          )}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Campo de Mensaje */}
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium text-text-light dark:text-text-dark"
          htmlFor="message"
        >
          Mensaje
        </label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className={`rounded-lg border bg-transparent px-4 py-2 text-text-light dark:text-text-dark focus:ring-primary/50 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-border-light dark:border-border-dark focus:border-primary"
              }`}
              id="message"
              placeholder="Tu Mensaje"
              rows={5}
            />
          )}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Mensaje de estado */}
      {submitStatus && (
        <div
          className={`p-4 rounded-lg text-sm ${
            submitStatus.success
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] w-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="truncate">
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </span>
      </button>
    </form>
  );
}
