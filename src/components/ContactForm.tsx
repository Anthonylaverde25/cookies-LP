"use client";

import { Controller } from "react-hook-form";
import useFormContact from "@/hooks/useFormContact";
import Button from "@mui/material/Button";

export default function ContactForm() {
  const { control, handleSubmit, errors, isSubmitting, onSubmit } = useFormContact();

  return (
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


      {/* Botón de envío */}
      {/* Botón de envío */}
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="contained"
        fullWidth
        size="large"
        sx={{
          height: 48,
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 700,
          letterSpacing: '0.015em',
          maxWidth: '480px',
          alignSelf: 'center', // To center it if it's not full width in larger screens, matching previous max-w-[480px] logic if needed, but flex col gap 6 makes it stretch. Previous had w-full.
          '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: 'rgba(236, 109, 19, 0.5)', // Keep it orange-ish but faded
            color: '#fff'
          }
        }}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  );
}
